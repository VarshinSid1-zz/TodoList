import React, { Component } from 'react'
import TodoListTask from './todoListTask'
import './../main.css'
import { List } from 'material-ui/List'; 
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

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
        <Table fixedHeader={true}>
          <TableHeader displaySelectAll={false}
                      adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Task</TableHeaderColumn>
              <TableHeaderColumn>Tags</TableHeaderColumn>
              <TableHeaderColumn>Select Tags</TableHeaderColumn>
              <TableHeaderColumn>Add Tags</TableHeaderColumn>
            </TableRow>
          </TableHeader>
        </Table>
        <List> {items} </List>
      </div>
    );
  }
}

export default TodoList