import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';



const getCountriesQuery = gql`
  {
    countries {
      code
      name
      languages{
        name
        native
      }
    }
  }
  `
class CountriesList extends Component {
	//data

	//functions
  displayCountries () {
    var data = this.props.data
    if (data.loading) {
      return (<div>loading</div>)
    } else {
      return data.countries.map(country => {
        return (
          <li key={country.code}>{country.name}</li>
        )
      })
    }
  }


	//render
	render() {
    console.log(this.props);
    //two objects showing, query is still going on in the background,
		return (
      <ul>
      {this.displayCountries()}
      </ul>
    )
	}
}




export default graphql(getCountriesQuery)(CountriesList);
