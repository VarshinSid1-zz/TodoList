import React, { Component } from 'react';
import './App.css';
import TodoListPage from './todoListPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodoListPage />
      </div>
    );
  }
}

export default App;
