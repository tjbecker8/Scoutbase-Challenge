import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import styled from 'styled-components';

//styling
const DivCountries = styled.div`
  float: left;
  width: 13%;
  margin: 5px;
  text-align: center;
  border: 1px solid black;
  background: #f5f5f5;

`

const PContinent =styled.p`
  font-size: 25px;
  font-weight: bold;

`

const PCountry = styled.p`

  list-style-type: none;
  font-size: 15px;
  font-weight: bold;
`

const LiLanguages = styled.li`
list-style-type: none;
font-size: 10px;

`

//query
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


  displayCountinents () {
    var data = this.props.data
    if (data.loading) {
      return (<div>loading</div>)
    } else {
      return data.continents.map(c => {
        return (
          <DivCountries >

              <PContinent >{c.name}</PContinent >

              {c.countries.map(co => {
                return (
                  <div>
                  <PCountry >{co.name}</PCountry >
                    {co.languages.map(l => {
                      return (
                        <div>
                        <LiLanguages >Name: {l.name}</LiLanguages >

                        <LiLanguages >Native: {l.native}</LiLanguages >
                        </div>
                      )
                    })
                  }
                  </div>
                )
              })
            }

          </DivCountries >
        )
      })
    }
  }





	//render
	render() {
    console.log('props', this.props.data);
    //two objects showing, query is still going on in the background,
		return (
      <div>
        <h1>Languages Spoken by The Countries of The world</h1>

      {this.displayCountinents()}


      </div>
    )
	}
}




export default graphql(getContinentQuery)(CountriesList);
