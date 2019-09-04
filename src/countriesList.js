import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import styled from 'styled-components';


const DivCountries = styled.div`
  float: left;
  width: 15px;
  margin: 60px;
  text-align: center;
  border: 3px solid black;

`

const PContinent =styled.p`
  font-size: 25px;
  font-weight: bold;
  list-style-type: none;
`

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
          <DivCountries >

              <PContinent >{c.name}</PContinent >
                <ul>
              {c.countries.map(co => {
                return (
                  <div>
                  <li className="country">{co.name}</li>
                    {co.languages.map(l => {
                      return (
                        <div>
                        <li>{l.name}</li>
                        <li>{l.native}</li>
                        </div>
                      )
                    })
                  }
                  </div>
                )
              })
            }
            </ul>
          </DivCountries >
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
