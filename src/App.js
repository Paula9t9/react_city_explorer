import React from 'react';
import Header from './Header.js';
import Map from './Map.js';
import SearchForm from './SearchForm';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      location: { 
        searchQuery: '',
        formattedQuery: '',
        latitude: '',
        longitude: ''
      }
    };

  }

  stateSetter = (locationData) => {


    console.log(Object.keys(locationData.body));
    this.setState({location: {
      searchQuery: locationData.body.search_query,
      formattedQuery: locationData.body.formatted_query,
      latitude: locationData.body.latitude,
      longitude: locationData.body.longitude
    }
  });
    console.log(`New State: ${Object.values(this.state.location)}`);

  }

  render() {
    console.log(`App location: ${this.state.location}`);
    return (
      <React.Fragment>
        <Header/>
        <SearchForm locationFunction={this.stateSetter}/>
        <Map location={this.state.location}/>
        {/* <SearchResults>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
        </SearchResults> */}
      </React.Fragment>
    );
  }

  
}

export default App;
