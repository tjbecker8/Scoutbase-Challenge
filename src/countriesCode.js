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

  const getContinentQuery = gql`
  {
  countries {
    code
    name
    phone
    currency
  }
}
  `

class CountriesList extends Component {
	//data


	//functions




  displayCountrie () {
    var data = this.props.data
    if (data.loading) {
      return (<div>loading</div>)
    } else {
      return data.countries.map(c => {
        if (c.code = this.props.code) {
          return (<div>hello</div>)
        }
      })
    }
  }



	//render
	render() {
    console.log('props', this.props.data);
    //two objects showing, query is still going on in the background,
		return (
      <div>

      </div>
    )
	}
}




export default graphql(getContinentQuery)(CountriesList);
