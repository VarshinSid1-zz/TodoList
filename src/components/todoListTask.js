import React, { Component } from 'react'
import './../main.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  
const style = {
    marginRight: 20,
  };

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
        <Table fixedHeader={true}>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn><input className="done-btn" aria-hidden="true" type="checkbox" onChange={this.onClickDone} defaultChecked={this.props.item.status}/></TableRowColumn>
                    <TableRowColumn><span className={todoClass}>{item.task}</span></TableRowColumn>
                    <TableRowColumn>{item.tags}</TableRowColumn>
                    <TableRowColumn>{addTag ? 
                        <div>
                            <input value={this.state.inputValue} onChange={this.updateInputValue}/>
                            <button type="button" onClick={this.onSubmit}>add tag</button>
                        </div> :
                        <FloatingActionButton onClick={this.addTag} mini={true} style={style}>
                            <ContentAdd />
                        </FloatingActionButton>
                    }</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        );
    }
}

export default TodoListItem