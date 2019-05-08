import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </React.Fragment>
    );
  }
}

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
      <Search/>
        <Map/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </React.Fragment>
    )
  }
}

class Search extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit = async event => {
    event.preventDefault();

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input/>
        <button>Search</button>
      </form>
    )
  }
}

class Map extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <img src='https://recoverynetworktoronto.files.wordpress.com/2016/04/the-map.png'/>
    )
  }
}

class Result extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section>
        <h3>Lorem Ipsum</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </li>
          <li>Elementum sagittis vitae et leo duis ut. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. 
          </li>
          <li>Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. </li>
        </ul>
      </section>
    )
  }
}


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
