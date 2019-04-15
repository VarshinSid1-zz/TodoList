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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const selectTags = [
    {value: 0, name: 'Work'},
    {value: 1, name: 'Personal'},
    {value: 2, name: 'Family'},
  ];

const style = {
    marginRight: 20,
  };

class TodoListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addTag: false,
            inputValue: '',
            values: [],
        };
    }

    handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return '1 tag selected';
      default:
        return `${values.length} tags selected`;
    }
  }

  menuItems(selectTags) {
    return selectTags.map((person) => (
      <MenuItem
        key={person.name}
        insetChildren={true}
        checked={this.state.values.indexOf(person.name) > -1}
        value={person.name}
        primaryText={person.name}
      />
    ));
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
        const { inputValue, values } = this.state
        var index = parseInt(this.props.index);
        this.props.addTags(index,values);
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
                    <TableRowColumn>{item && item.tags && item.tags.join()}</TableRowColumn>
                    <TableRowColumn>
                        <SelectField
                            multiple={true}
                            hintText="Select a name"
                            value={this.state.values}
                            onChange={this.handleChange}
                            selectionRenderer={this.selectionRenderer}>
                            {this.menuItems(selectTags)}
                        </SelectField>
                    </TableRowColumn>
                    <TableRowColumn>
                        <FloatingActionButton onClick={this.onSubmit} mini={true} style={style}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        );
    }
}

export default TodoListItem