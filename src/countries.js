import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CountriesList from  'countriesList';
import './App.css';


//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

function Countries() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello World</h1>
        <CountriesList />
        </div>
    </ApolloProvider>
  )
}

export default Countries;
