import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Main from './components/Main'
import Messenger from './components/Messenger'
import NavBar from './components/NavBar'

function App() {
  const [isMessengerActive, setIsMessengerActive] = useState(false)

  return (
    <div className='application'>
      <NavBar />
      <Main setIsMessengerActive={setIsMessengerActive}/> 

      <Messenger isMessengerActive={isMessengerActive} setIsMessengerActive={setIsMessengerActive} />
    </div>
  ) 
}

export default App;
