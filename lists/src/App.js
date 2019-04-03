import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        // const rawDataArray = require('./rawData');
        const rawDataArray = ["Kenn", "Kevin", "Erin"];

        const rawDataMap = rawDataArray.map((element) =>
        {
            return(<div className="NoTough">
                        <h3>{element}</h3>
                    </div>);
        });

        return (
          <div className="App">
              {rawDataMap}
          </div>
        );
  }
}

export default App;
