import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import CountriesList from './countriesList'
import CountriesCode from './countriesCode'



class Routes extends Component {



  render() {
  		return (

        <BrowserRouter>
				<Switch>

          
          <Route path="/countries" component={CountriesList} />
          <Route path="/countries/(code:)" component={CountriesCode} />
          <Route path="/" component={App} />



        </Switch>
			</BrowserRouter>
      )
    }
}

export default Routes;
