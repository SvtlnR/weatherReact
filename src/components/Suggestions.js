import React, { Component } from 'react';

class Suggestions extends Component{
	constructor(props){
		super(props);
		this.state={
			value:""
		}
	}
	render() {
		var values=this.props.values;
		var listValues = values.map(function(item) {
	      return (
	      	<div  key={item.id}>{item.name}</div>
	      );
	    });
		return(
			<div>
				{listValues}
			</div>
		)
	}
}


export default Suggestions;