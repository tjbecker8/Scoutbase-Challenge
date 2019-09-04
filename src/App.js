import React from 'react';
import styled from 'styled-components';
import './App.css';
import CountrySearch from './countrySearch'
import CountriesAll from './countriesAll'



const Background = styled.div`
  background-image: url(https://res.cloudinary.com/dg3lfqtcg/image/upload/v1567636722/f0e1869820b56bcc79819dee3f35490e_bvj5xg.jpg);
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`


function App() {
  return (

      <Background >
        <CountriesAll />
        <CountrySearch />
        </Background >

  )
}

export default App;
