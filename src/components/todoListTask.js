import React, { Component } from 'react'
import './../main.css'

class TodoListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addTag: false,
            inputValue: ''
        };
    }

    onClickDone = () => {
        var index = parseInt(this.props.index);
        this.props.changeStatus(index);
    }

    addTag = () => {
        this.setState({addTag: !this.state.addTag})
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    }

    onSubmit = () => {
        const { inputValue } = this.state
        var index = parseInt(this.props.index);
        this.props.addTags(index,inputValue);
        this.setState({addTag: !this.state.addTag})
    }

    render () {
        const { addTag } = this.state
        const { item } = this.props
        var todoClass = item.status ? 
            "done" : "undone";
        return(
            <div className="task">
                <div className={todoClass}>
                    <input className="done-btn" aria-hidden="true" type="checkbox" onChange={this.onClickDone} defaultChecked={this.props.item.status}/>
                    <span>{item.task}</span>
                    {addTag ? 
                        <div>
                            <input value={this.state.inputValue} onChange={this.updateInputValue}/>
                            <button type="button" onClick={this.onSubmit}>add tag</button>
                        </div> :
                        <button type="button" onClick={this.addTag}>+</button>}
                    <span>{item.tags}</span>
                </div>
            </div>
        );
    }
}

export default TodoListItem