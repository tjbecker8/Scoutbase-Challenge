import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CountriesCode from  './countriesCode';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: #f6f6f6;
  border: 2px solid black;
  border-radius; 3px;
  text-align: center;
  margin-top: 40px;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
`



//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

class Code extends Component {


render() {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
      <div>
        <CountriesCode code={this.props.match.params.code} />
      </div>
      </Wrapper>
    </ApolloProvider>
  )
}
}

export default Code;
