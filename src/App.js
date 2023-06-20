
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

    let otherPersons = 'Hidden Persons';
    if(this.state.showPersons) {
      otherPersons = (
        <div>
          {/*Map persons data into Array of Persons components */
          this.state.personsData.map(onePerson => {
            return <Person 
              name={onePerson.name}
              age={onePerson.age}/>

          })}
        </div>
      );
    }

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
        
        <h1>Person</h1>
        {
          this.state.showPersons ?
          
            <Person 
              name={this.state.personsData[0].name}
              age={this.state.personsData[0].age}/>
           :
            <div>
              Hidden Person
            </div>
        }

      <h1>Other Persons</h1>
      {otherPersons}
      </div>
    );
  }
}

export default App;
