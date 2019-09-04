import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './App.css';


//apollo client setup
const client = new ApolloClient({
  //api endpoint
  uri: 'https://countries.trevorblades.com'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello World</h1>
        <div>
          Country Code <input type="text" name="code"/><br/>
        <button id="code-button" type="submit" >Send</button>
        </div>
        </div>
    </ApolloProvider>
  )
}

export default App;
