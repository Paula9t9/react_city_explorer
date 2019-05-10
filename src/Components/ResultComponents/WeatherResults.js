import React from 'react';
import SearchResults from '../SearchResults'
import superagent from 'superagent';


class WeatherResults extends React.Component {

  constructor(props){
    super(props);
  }



  render() {

    return (
      <SearchResults api='Dark Sky'>
        <li>
          The forecast for {this.props.time} is {this.props.forecast}.
        </li>
      </SearchResults>
    )
  }

}

export default WeatherResults;