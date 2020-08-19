import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Cards'
import Charts from './Components/Charts/Charts'
import Country from './Components/Country/Country'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>App starts here </h1>
          <Card />
          <Charts />
          <Country />
        </header>
        
      </div>
    );
  }
}

export default App;
