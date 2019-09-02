import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';



const getCountriesQuery = gql`
  {
    countries {
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


	//render
	render() {
    console.log(this.props);
    //two objects showing, query is still going on in the background, 
		return (
      <h1>Countries List</h1>
    )
	}
}




export default graphql(getCountriesQuery)(CountriesList);
