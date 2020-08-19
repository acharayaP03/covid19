import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Cards, Charts, CountryPicker } from './Components';
import { fetchData } from './API/api';

class App extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        data: {}
      }
    }

  async componentDidMount (){
    const fetchedData = await fetchData();
    this.setState({ data : fetchedData });
  }
  render(){
    const { data } = this.state;
    return (
      <div className="container p-1 py-1">
        <div className="row">
          <header className="custom-element">
            <h1 className="display-1">App starts here </h1>
          </header>
        </div>
        
          <Cards data={ data } />
          <Charts />
          <CountryPicker />
      </div>
    );
  }
}

export default App;
