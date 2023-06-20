
import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person.js'

class App extends Component {

  /*State to hold Persons Data in Object/Array */
  state = {
    personsData: [
      {id: 'wewf', name: 'Ahmed', age: 39},
      {id: 'vcbgfg', name: 'Mido', age: 26},
      {id: 'ijgyb', name: 'Hossam', age: 37}
    ],
    showPersons: false
  };

  /*Toggle Visibility Handler */
  toggleVisibilityHandler = () => {
    console.log('toggleVisibilityHandler Clicked!');
    
    {/**Change persons visibility state */}
    this.setState({showPersons: !this.state.showPersons});
  }

  /*Delete Person from List Handler */
  deletePersonHandler = (personIndex) => {
    console.log('deletePersonHandler Clicked!, Index:' + personIndex);

    /**retrieve items array as a copy instead of reference*/
    const personsDataArr = [...this.state.personsData];
    
    /**Delete item */
    personsDataArr.splice(personIndex, 1);

    /**Change state */
    this.setState({personsData: personsDataArr});
  }

  /*Render method from Component */
  render = () => {

    let personsList = 'Hidden Persons';
    if(this.state.showPersons) {
      personsList = (
        <div>
          {/*Map persons data into Array of Persons components */
          this.state.personsData.map((onePerson, index) => {
            return <Person 
              name={onePerson.name}
              age={onePerson.age}
              deleteHandler={() => this.deletePersonHandler(index)}
              key={onePerson.id}/>

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

      {personsList}
      </div>
    );
  }
}

export default App;
