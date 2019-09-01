import React from 'react';
import ApolloClient from 'apollo-boost';
import './App.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
});

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
