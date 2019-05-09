import React from 'react';

class Map extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(`Maps location: ${this.props.location}`)
    return (
      <p>{this.props.location}</p>
    )
  }
}

export default Map;
