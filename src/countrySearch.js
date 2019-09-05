import React, {Component} from 'react';

import './Style.css'
import styled from 'styled-components';




const DivSearch = styled.div`
	background: rgba(134, 226, 213, .5);
	width: 500px;
	border-radius: 5px;
	text-align: center;
	position: fixed;
	top: 40%;
	right: 7%;
`

const SubmitButton = styled.button`
	width: 100px;
	height: 40px;
	border-radius: 10px;
	font-size: 15px;
	font-weight: bolder;
`

const Paragraph = styled.p`
	font-size: 15px;
	font-weight: bolder;
`

const InputCode = styled.input`
	height: 20px;
	width: 115px;
	font-size: 18px;
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
				<Paragraph>See Currency and Area Code (phone) by Searching Country Alpha-2 Code</Paragraph>
				<form action={`/countries/${this.state.code}`} >
        	<InputCode type="text" name="code" maxlength="2" placeholder="country code" value={this.state.code} onChange={(e) => this.changeCode(e)} /><br/>
					<SubmitButton type="submit" value="Submit">Submit</SubmitButton>
				</form>
      </DivSearch>
    )
	}
}




export default CountrySearch;
