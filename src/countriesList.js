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
          <div>
        <li> {c.name} </li>
            <ul>
              {c.countries.map(co => {
                return (
                  <div>
                  <li>{co.name}</li>
                    <ul>
                      {co.languages.map(l => {
                        return (
                          <li>{l}</li>
                        )
                      })}
                    </ul>
                    </div>


                )
              })}

            </ul>
            </div>
        )
      })
    }
  }


	//render
	render() {
    console.log(this.props.data.continents);
    //two objects showing, query is still going on in the background,
		return (
      <ul>
      {this.displayCountinents()}
        <ul>
        <li>country</li>
        </ul>
      </ul>
    )
	}
}




export default graphql(getContinentQuery)(CountriesList);
