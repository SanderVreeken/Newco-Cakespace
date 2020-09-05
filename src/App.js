import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Main from './components/Main'
import MenuBar from './components/MenuBar'
import Messenger from './components/Messenger'
import NavBar from './components/NavBar'

function App() {
  const [isChatting, setIsChatting] = useState(false)
  const [isMessengerActive, setIsMessengerActive] = useState(false)
  const [isMenuBarVisible, setisMenuBarVisible] = useState(false)

  return (
    <div className='application'>
      <NavBar/>
      <Main setIsChatting={setIsChatting} setIsMessengerActive={setIsMessengerActive}/> 

      <MenuBar />
      <Messenger isChatting={isChatting} isMessengerActive={isMessengerActive} setIsChatting={setIsChatting} setIsMessengerActive={setIsMessengerActive} />
    </div>
  ) 
}

export default App
