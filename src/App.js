import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './App.css';
import CountrySearch from './countrySearch'


//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      
        <CountrySearch />
        </div>
    </ApolloProvider>
  )
}

export default App;
