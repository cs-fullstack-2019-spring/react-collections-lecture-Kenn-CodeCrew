import React, { Component } from 'react';

class ToDoItem extends Component{
    render(){
        return(
            <div>
                <p>ID: {this.props.eachElement.id}</p>
                <p>Title: {this.props.eachElement.title}</p>
            </div>
        );
    }
}

export default ToDoItem;