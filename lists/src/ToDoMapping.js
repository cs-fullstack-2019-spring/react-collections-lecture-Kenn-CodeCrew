import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

class ToDoMapping extends Component{
    render(){

        const toDoMapping = this.props.array.map(
            (eachElement)=>{
                return(<ToDoItem eachElement={eachElement}/>)
            }
        );

        return(
            <div>
                {toDoMapping}
            </div>
        );
    }
}

export default ToDoMapping;