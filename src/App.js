import React, {Component} from 'react'
import SalonList from './components/SalonList'
import Salon from './components/Salon'
import ListGroup from 'react-bootstrap/ListGroup'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App () {

  return ( 
    <div className="App">
      <ListGroup>
        <Router>
          <Switch>
            <Route
              path="/"
              component={SalonList}
            />
            <Route
              exact
              path="/:id" 
              render={({ match }, props) => <Salon match={match} {...props} />}
            />
          </Switch>
        </Router>
      </ListGroup>
    </div>
  )
}

export default App