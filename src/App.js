import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section>
      <h1>App</h1>
      <Link to='/gif/colombia'>
        Colombia
      </Link>
      <br></br>
      <Link to="/gif/peru">
        Peru
      </Link>
      <br></br>
      <Link to="/gif/chile">
        Chile
      </Link>
      <Route 
        component={ListOfGifs}
        path="/gif/:keyword"
      /> 
      </section>
    </div>
  )
}
