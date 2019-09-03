import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CountriesCode from  './countriesCode';
import './App.css';


//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

function Code() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Code</h1>
        <CountriesCode  />
        </div>
    </ApolloProvider>
  )
}

export default Code;
