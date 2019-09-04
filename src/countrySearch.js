import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Style.css'
import styled from 'styled-components';


const SpanSubmit = styled.span`
	background: grey;
	padding: 5px;
	border-radius: 5px;
	margin: 3px;
`

const DivSearch = styled.div`
	background: rgba(134, 226, 213, .5);
	width: 500px;
	border-radius: 5px;
	text-align: center;
	position: fixed;
	top: 40%;
	right: 7%;
`




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
      <DivSearch>
				<p>See Currency and Area Code (phone) by Searching Country 2 Digit Code</p>
				<form >
        	Country Code <input type="text" name="code" value={this.state.code} onChange={(e) => this.changeCode(e)} /><br/>
					<SpanSubmit >
						<Link to ={{
								pathname: `/countries/${this.state.code}`,
								}} >Submit</Link>
					</SpanSubmit >
				</form>
      </DivSearch>
    )
	}
}




export default CountrySearch;
