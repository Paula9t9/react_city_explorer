import React from 'react';

class SearchResults extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Results from {this.props.api}</h1>
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }

}

export default SearchResults;