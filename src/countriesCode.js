import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import styled from 'styled-components';


const SubmitButton = styled.button`
	width: 90px;
	height: 30px;
	border-radius: 10px;
	font-size: 15px;
	font-weight: bolder;
 `

  const getCountryQuery = gql`
  query($code: String){
   country(code: $code){
    name
    currency
    phone
  }
  }
  `

  const InputCode = styled.input`
  	height: 18px;
  	width: 115px;
  	font-size: 16px;
  `

class CountriesCode extends Component {
	//data
state = {
  code: '',
}

	//functions

  changeCode = (e) => {
		this.setState({code: e.target.value})
		console.log('state', this.state);
	}





  displayCountry () {
    var data = this.props.data
    if (data.loading) {
      return (<div>loading</div>)
    } else {
      return (
      <div>
        <div>
          <h2>{data.country.name}</h2>
          <h3>Currency: {data.country.currency}</h3>
          <h3>Area Code (Phone): {data.country.phone}</h3>
          <span>Search Another Country?</span>
        </div>
        <div>
          <form action={`/countries/${this.state.code}`} >
          	<InputCode type="text" name="code" placeholder="Country Code" maxLength="2" value={this.state.code} onChange={(e) => this.changeCode(e)} /><br/>
  					<SubmitButton type="submit" value="Submit">Submit</SubmitButton>
  				</form>
        </div>
      </div>
    )
    }
  }




	//render
	render() {
    console.log('props',this.props.data);
    //two objects showing, query is still going on in the background,
		return (
      <div>


        <img src={`https://www.countryflags.io/${this.props.code}/flat/64.png`} alt="Country Flag" />


        {this.displayCountry()}
      </div>
    )
	}
}




export default graphql(getCountryQuery, {
  options: (props) => {
    return {
      variables: {
        code: props.code.toUpperCase()
      }
    }
  }
})(CountriesCode);
