
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'


// The Main component renders one of the links

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/test' component={Test}/>
    </Switch>
  </main>
)

export default Main