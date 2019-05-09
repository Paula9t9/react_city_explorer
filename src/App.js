import React from 'react';
import Header from './Header.js';
import Map from './Map.js';
import SearchForm from './SearchForm';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      location: ''
    };

  }

  stateSetter = (locationData) => {
    this.setState({location: locationData});
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
