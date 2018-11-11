import React, { Component } from 'react';
import store from "../store/index.js";
import { updateLocation } from '../actions/actions.js';
import Suggestions from './Suggestions.js';
import jsonData from '../store/city.list.json';

const allCities=JSON.parse(JSON.stringify(jsonData));

class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			value:"",
			suggestions:[]
		}
		this.handleChangeInput=this.handleChangeInput.bind(this);
		this.handleKeyPress=this.handleKeyPress.bind(this);
		this.searchValue=this.searchValue.bind(this);
	}
	handleChangeInput(event){
		this.setState({value:event.target.value});
		if(this.state.value.length>1){
			var reg=new RegExp('^'+this.state.value+'*','i');
			var suggestions=[];
			for(var i=0;i<allCities.length;i++){
				if(allCities[i].name.match(reg)){
					suggestions.push(allCities[i]);
					if(suggestions.length>5){
						break;
					}
				}
			}
			this.setState({suggestions:suggestions});
		}
		else{
			this.setState({suggestions:[]});
		}
		
	}
	handleKeyPress(event){
		if(event.key==='Enter'){
			this.searchValue();
		}
	}
	searchValue(){
		store.dispatch(updateLocation(this.state.value));
	}
	render() {
		return(
		<div>
			<input type="text" placeholder="Input city..." value={this.state.value} onChange={this.handleChangeInput} onKeyPress={this.handleKeyPress}/>
			<button onClick={this.searchValue}>Search</button>
			<Suggestions values={this.state.suggestions}/>
		</div>
		);
	}
}

export default Search;