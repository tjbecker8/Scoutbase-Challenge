import React, {Component} from 'react';
import {Link} from 'react-router-dom'








class CountriesAll extends Component {
	//data
state ={
	code: '',
}

	//functions


	changeCode = (e) => {
		this.setState({code: e.target.value})
		console.log('state', this.state);
	}









	//render
	render() {

		return (
      <div>

				<span >
							<Link to ={{
									pathname: `/countries`,
								}} >See All Countries and The Languages spoken in Each Country</Link>
								</span>

      </div>
    )
	}
}




export default CountriesAll;
