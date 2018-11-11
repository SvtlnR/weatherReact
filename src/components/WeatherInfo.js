import React, { Component } from 'react';
import axios from 'axios';
import store from "../store/index.js";

class WeatherInfo extends Component{
	constructor(props){
		super(props);
		this.state={
			weatherData:null
		}
		this.findInfo=this.findInfo.bind(this);
		//this.addFavorite=this.addFavorite.bind(this);
	}
	findInfo(location){
		const url="http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=e557240a06adb7e05ff6493c0c2438e0&units=metric";
		axios.get(url)
      	.then(res => {
        	this.setState({weatherData: res.data});
      })
      	.catch(error=>{
      		if(error.response){
      		this.setState({weatherData: "error"});	
      	}
      	})
	}
	componentDidMount(){
		const location=this.props.location;
		this.findInfo(location);
		
	}
	componentWillReceiveProps(nextProps) {
		const location=nextProps.location;
  		this.findInfo(location);
  }
	render() {
		const weatherData=this.state.weatherData;
		if(!weatherData){
			return (<div>Loading</div>);
		}
		else if(weatherData==='error'){
		return(
				<div>
					<h1>{this.props.location} doesn't exist</h1>
				</div>
			);	
		}
		else{
			return(
			<div>
				<h1>{this.props.location}</h1>
				<div>
					<h3>Temperature: {weatherData.main.temp} C&deg;</h3>			
				</div>
				
			</div>
		);
		}
	}
}



export default WeatherInfo;