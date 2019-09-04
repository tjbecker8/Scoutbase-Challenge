import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CountriesList from  './countriesList';
import './App.css';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 1em;
  background: #f5f5f5;
  border-radius; 3px;
  text-align: center;
  margin-top: 40px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`


//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

function Countries() {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <div>
          <CountriesList />
          </div>
      </Wrapper>
    </ApolloProvider>
  )
}

export default Countries;
