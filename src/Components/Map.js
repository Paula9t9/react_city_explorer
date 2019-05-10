import React from 'react';
let googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class Map extends React.Component {

  render(){
    return (
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
      &key=${googleKey}`} alt='A map displaying your results'/>
    )
  }
}

export default Map;
