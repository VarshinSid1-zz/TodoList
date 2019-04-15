import React, { Component } from 'react'
import './main.css'
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
                <button type="submit" className="add-btn">Add</button> 
            </form>
        );   
    }
}

export default TodoForm