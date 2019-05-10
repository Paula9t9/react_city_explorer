import React from 'react';
import SearchResults from '../SearchResults'
import superagent from 'superagent';


class WeatherResults extends React.Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      this.props.weather.map( day => {
        return (<li>
          The forecast for {day.time} is {day.forecast}
        </li>)
      }
    )  
    )
  }

}

export default WeatherResults;