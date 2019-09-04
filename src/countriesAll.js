import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import './Style.css'

const SpanCountries = styled.span`
	background: rgba(134, 226, 213, .5);
	padding: 10px;
	border-radius: 5px;
	position: fixed;
	top: 40%;
	left: 7%;
`







class CountriesAll extends Component {
	//data


	//functions



	//render
	render() {

		return (
      <div>

				<SpanCountries >
					<Link className="countries" to ={{
							pathname: `/countries`,
							}} >See All Countries and The Languages spoken in Each Country</Link>
				</SpanCountries >

      </div>
    )
	}
}




export default CountriesAll;
