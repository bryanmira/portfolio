import React, {Component} from 'react';

export default class Footer extends Component{
	render(){
		return(
			<div className="footer">

				Copyright &copy; {new Date().getFullYear()} Bryan Mira

			</div>
		);
	}

}