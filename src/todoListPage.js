import React, { Component } from 'react'
import TodoList from './components/todoList'
import TodoForm from './TodoForm'
import './main.css'
class TodoListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [{taskId: 1, task: "Meeting", status: false, tags:[] },
                        {taskId: 2, task: "Dinner", status: false, tags:[] },
                        {taskId: 2, task: "Client Meeting", status: false, tags:[] }]
        };
    }

    addTask = (addTask) => {
        const { todoList } = this.state
        const listLength = todoList.length
        const newTask = {
            taskId: listLength + 1,
            task: addTask.newItemValue,
            status: false,
            tags: ""
        }
        this.setState({ todoList: [...this.state.todoList, newTask] })
    }

    changeStatus = (taskId) => {
        const { todoList } = this.state
        const task = todoList[taskId]
        todoList.splice(taskId, 1);
        task.status = !task.status;
        task.status ? todoList.push(task) : todoList.unshift(task);
        this.setState({todoList: todoList});  
    }

    addTags = (taskId,tag) => {
        const { todoList } = this.state
        const task = todoList[taskId]
        todoList.splice(taskId, 1);
        task.tags = tag
        task.status ? todoList.push(task) : todoList.unshift(task);
        this.setState({todoList: todoList});  
    }

    render() {
        return (
            <div className="todo-body">
                <TodoForm addItem={this.addTask}/>
                <TodoList todoList={this.state.todoList} changeStatus={this.changeStatus} addTags={this.addTags}/>
            </div>
        );
    }
}

export default TodoListPage