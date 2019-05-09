import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchQuery: ''
    }
  }

  storeSearchValue = (event) => {
    let words = event.target.value;
    this.setState({searchQuery: words});
  }

  handleSubmit = async event => {
    event.preventDefault();
    let currentSearch = this.state.searchQuery;
    let locationObject = await superagent
      .get('https://quiet-island-48990.herokuapp.com/location')
      .query(
        {
          data: currentSearch
        }   
      );



    this.props.locationFunction(locationObject);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.storeSearchValue}/>
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;