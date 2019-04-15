import React, { Component } from 'react';
import './App.css';
import TodoListPage from './todoListPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <MuiThemeProvider>
          <TodoListPage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
