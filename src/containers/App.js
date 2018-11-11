import React, { Component } from 'react';
import '../App.css';
import WeatherInfo from '../components/WeatherInfo.js';
import Search from '../components/Search.js';
import { combineReducers, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import store from "../store/index.js";

// import * as reducers from '../reducers/reducer.js';

// const reducer = combineReducers(reducers);
//const store = createStore(reducer);

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     currentLocation:'Kiev'
  //   }
  // }
  // componentDidMount(){
    
  // }
  render() {
    return (
      <div>
  
      <Search/>
      <WeatherInfo location={this.props.currentLocation}/>      
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentLocation: state.default.location
  }
}


export default connect(mapStateToProps)(App)

//export default App;
