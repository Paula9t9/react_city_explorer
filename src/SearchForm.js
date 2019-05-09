import React from 'react';

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.locationFunction(this.state.searchQuery);
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