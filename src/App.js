import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Cards, Charts, CountryPicker } from './Components';
import { fetchData } from './API/api';

class App extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        data: {},
        country: ''
      }
     
    }

  async componentDidMount (){
    const fetchedData = await fetchData();
    this.setState({ data : fetchedData });
  }
  
  handleCountryChange = async (country) => {

    //fetch data
    const fetchedCountryData = await fetchData(country);
    console.log(fetchedCountryData)

    //set the state..
    this.setState({ data: fetchedCountryData, country: country })

  }
  render(){
    const { data, country } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <header className="custom-element">
            <h1 className="display-1 text-center">Covid Tracker </h1>
          </header>
        </div>
        <div className="container">
          <Cards data={ data } />
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Charts data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
