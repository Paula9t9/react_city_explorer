import React from 'react'
import Header from './Header.js';
import Map from './Map.js';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import WeatherResults from './ResultComponents/WeatherResults';
import superagent from 'superagent';
import { async } from '../../node_modules/q';
import '../scss/core.scss'



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      location: { 
        locationId: '',
        searchQuery: '',
        formattedQuery: '',
        latitude: '47.6587802',
        longitude: '-117.4260465'
      },
      weather: []
    };
  }

  stateSetter = async (locationData) => {

    this.setState({
      location: {
        locationId: locationData.body.id,
        searchQuery: locationData.body.search_query,
        formattedQuery: locationData.body.formatted_query,
        latitude: locationData.body.latitude,
        longitude: locationData.body.longitude
      }

    });

    let weatherResult = await this.getResults('weather', this.state.location);

    this.setState({
      weather: weatherResult.body
    })

    console.log(`Current State: 
      \n Location: ${Object.values(this.state.location)}
      \n Weather:`, this.state.weather);

  }


  getResults = async (resource, location) => {
    let resultsObject = await superagent
      .get(`https://quiet-island-48990.herokuapp.com/${resource}`)
      .query(
        {
          data: location
        }   
      );
      return resultsObject;
  }


  render() {
    console.log(`Current State: 
      \n Location: ${Object.values(this.state.location)}
      \n Weather:`, this.state.weather);
    return (
      <React.Fragment>
        <Header/>
        <SearchForm locationFunction={this.stateSetter}/>
        <Map location={this.state.location}/>
        
          {this.state.location.searchQuery ? 
          <SearchResults api='Dark Sky'>
            <WeatherResults weather={this.state.weather}/> 
          </SearchResults>: null}
          
        
      </React.Fragment>
    );
  }
  
}

export default App;
