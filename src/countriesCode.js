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
      return data.countries.map(c => {
        if (c.code === this.props.code) {
          return (<div>Country found</div>)
        } else {
          return (<div>country not found</div>)
        }
      })
    }
  }



	//render
	render() {
    console.log('props',this.props);
    //two objects showing, query is still going on in the background,
		return (
      <div>

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
