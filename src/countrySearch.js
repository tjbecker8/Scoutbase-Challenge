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


submit =(e) => {
	e.preventDefault()
	console.log('<><><>', this.state);

}






	//render
	render() {

		return (
      <div>
				<form onSubmit={(e)=> this.submit(e)} >
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
