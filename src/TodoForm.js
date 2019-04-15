import React, { Component } from 'react'
import './main.css'
import RaisedButton from 'material-ui/RaisedButton';

class TodoForm extends Component {
    
    componentDidMount() {
        this.refs.itemName.focus();
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    }

    render () {
        return (
            <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" className="input-fields" ref="itemName" placeholder="add a new task..."/>
                <RaisedButton type="submit" label="Add Task" primary={true}  />
            </form>
        );   
    }
}

export default TodoForm