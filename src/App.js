import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Main from './components/Main'
import MenuBar from './components/MenuBar'
import Messenger from './components/Messenger'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='application'>
      <NavBar/>
      <Main /> 

      <MenuBar />
      <Messenger />
    </div>
  ) 
}

export default App
