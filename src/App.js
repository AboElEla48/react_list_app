
import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    personsData: [
      {name: 'Ahmed', age: 39},
      {name: 'Mido', age: 26},
      {name: 'Hossam', age: 37}
    ],
    showPersons: false
  };

  toggleVisibilityHandler = () => {
    console.log('toggleVisibilityHandler Clicked!');
    
    this.setState({showPersons: !this.state.showPersons});
  }

  render = () => {
    return (
      <div className="App">
        <p>
          <button className='button'
            onClick={this.toggleVisibilityHandler}>
              Toggle View Visibility!
          </button>
        </p>

        {/*Add ternary condition statement 
        to show/hide items */} 
        
        {
          this.state.showPersons ?
          <div>
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
          </div> :
          <div>
            Hidden contents
          </div>
        }

      </div>
    );
  }
}

export default App;
