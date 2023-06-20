
import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    personsData: [
      {name: 'Ahmed', age: 39},
      {name: 'Mido', age: 26},
      {name: 'Hossam', age: 37}
    ]
  };

  render = () => {
    return (
      <div className="App">
        <p>
          <button>Toggle View!</button>
        </p>
        <Person 
          name={this.state.personsData[0].name}
          age={this.state.personsData[0].age}/>
        
        <Person  
          name={this.state.personsData[1].name}
          age={this.state.personsData[1].age}/>
        
        <Person  
          name={this.state.personsData[2].name}
          age={this.state.personsData[2].age}>
          I invest in my Happiness!
        </Person>
      </div>
    );
  }
}

export default App;
