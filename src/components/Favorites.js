import React, { Component } from 'react';
import store from "../store/index.js";

class Favorites extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		favorites:[]
	// 	}
	// }
	componentWillReceiveProps(nextProps) {
		const location=nextProps.location;
  		this.findInfo(location);
  	}

	render(){
		var favorites=this.props.favorites;
		var listFav=favorites.map(function())
		return(
			<div>
				
			</div>
		)
	}
}