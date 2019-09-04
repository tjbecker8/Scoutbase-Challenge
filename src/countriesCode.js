import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';



// const getCountriesQuery = gql`
//   {
//     countries {
//       code
//       name
//       languages{
//         name
//         native
//       }
//     }
//   }
//   `

  const getCountryQuery = gql`
  query($code: String){
   country(code: $code){
    name
    currency
    phone
  }
  }
  `

class CountriesCode extends Component {
	//data
state = {
  code: null,
}

	//functions




  displayCountry () {
    var data = this.props.data
    if (data.loading) {
      return (<div>loading</div>)
    } else {
      return (
        <div>
        <h2>{data.country.name}</h2>
        <h3>Currency: {data.country.currency}</h3>
        <h3>Area Code (Phone): {data.country.phone}</h3>
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
