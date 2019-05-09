import React from 'react';
require('dotenv').config();
let googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mapUrl: 'https://recoverynetworktoronto.files.wordpress.com/2016/04/the-map.png'
    }
  }

  updateMap(locationData) {
    this.setState({mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=${locationData.latitude}%2c%20${locationData.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${googleKey}`})
  }

  render(){
    return (
      <img src={this.state.mapUrl} alt='A map displaying your results'/>
    )
  }
}

export default Map;
