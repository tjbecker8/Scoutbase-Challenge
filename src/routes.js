import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Countries from './countries'
import Code from './Code'



class Routes extends Component {



  render() {
  		return (

        <BrowserRouter>
				<Switch>


          <Route path="/countries" component={Countries} />
          <Route path="/countries/(code:)" component={Code} />
          <Route path="/" component={App} />



        </Switch>
			</BrowserRouter>
      )
    }
}

export default Routes;
