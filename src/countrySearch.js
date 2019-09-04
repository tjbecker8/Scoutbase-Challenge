import React, {Component} from 'react';
import {Link} from 'react-router-dom'








class CountrySearch extends Component {
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
				<form >
        Country Code <input type="text" name="code" value={this.state.code} onChange={(e) => this.changeCode(e)} /><br/>
				<span id="see-analysis" >
							<Link to ={{
									pathname: `/countries/${this.state.code}`,
								}} >Submit</Link>
								</span>
				</form>
      </div>
    )
	}
}




export default CountrySearch;
