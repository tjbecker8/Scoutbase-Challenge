import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CountriesCode from  './countriesCode';
import './App.css';


//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

class Code extends Component {


render() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        
        <CountriesCode code={this.props.match.params.code} />
        </div>
    </ApolloProvider>
  )
}
}

export default Code;
