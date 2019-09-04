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
  continents {
    name
    countries{
      name
      languages{
        name
        native
      }
      code
      currency
    }
  }
}
  `

class CountriesList extends Component {
	//data


	//functions




  // displayCountries () {
  //   var data = this.props.data
  //   if (data.loading) {
  //     return (<div>loading</div>)
  //   } else {
  //     return data.countries.map(country => {
  //       return (
  //         <li key={country.code}>{country.name}</li>
  //       )
  //     })
  //   }
  // }

  displayCountinents () {
    var data = this.props.data
    if (data.loading) {
      return (<div>loading</div>)
    } else {
      return data.continents.map(c => {
        return (
          <div style={{float: 'left', width: 15, margin: 60 }}>
            <ul>
              <li className="continent">{c.name}</li>
              {c.countries.map(co => {
                return (
                  <li className="country">{co.name}</li>
                )
              })}
            </ul>
          </div>

        )
      })
    }
  }

  // displayCountries () {
  //   var data = this.props.data
  //   if (data.loading) {
  //     return (<div>loading</div>)
  //   } else {
  //     return data.continents[0].countries.map(c => {
  //       return (
  //         <li>{c.name}</li>
  //       )
  //     })
  //   }
  // }



	//render
	render() {
    console.log('props', this.props.data);
    //two objects showing, query is still going on in the background,
		return (
      <div>
        <h1>Countries of the world</h1>

      {this.displayCountinents()}


      </div>
    )
	}
}




export default graphql(getContinentQuery)(CountriesList);
