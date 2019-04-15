import React, { Component } from 'react'
import TodoListTask from './todoListTask'
import './../main.css'

class TodoList extends Component {

  render () {
    var items = this.props.todoList.map((d, index) => {
      return (
          <TodoListTask key={d.taskId}
                        item={d}
                        status={d.status} 
                        index={index} 
                        changeStatus={this.props.changeStatus} 
                        addTags={this.props.addTags}/>
      );
    });
    return (
      <div className="list">
        <ul> {items} </ul>
      </div>
    );
  }
}

export default TodoList