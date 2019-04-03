import React, { Component } from 'react';
import './App.css';
import ToDoMapping from "./ToDoMapping";

class App extends Component {
    render() {
        const rawDataArray = require('./rawData');
        // const rawDataArray = ["Kenn", "Kevin", "Erin"];

        return (
          <div className="App">
              <h1>To Do Collection</h1>
              <ToDoMapping array={rawDataArray}/>
          </div>
        );
  }
}

export default App;
