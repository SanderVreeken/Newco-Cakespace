import React, { useState } from 'react'

import ChatMessengerHeader from './MessengerHeaders/ChatMessengerHeader'
import RegularMessengerHeader from './MessengerHeaders/RegularMessengerHeader'

const Messenger = (props) => {
  const [isChatting, setIsChatting] = useState(true)

  return (
    <div className='messenger' style={{
      // Using state to animate the visibility of the component.
      bottom: props.isMessengerActive ? 0 : -477
    }}>
      {isChatting ? <ChatMessengerHeader isMessengerActive={props.isMessengerActive} setIsMessengerActive={props.setIsMessengerActive} /> : <RegularMessengerHeader isMessengerActive={props.isMessengerActive} setIsMessengerActive={props.setIsMessengerActive} />}
      <div className='messenger__body'>
      </div>
    </div>
  )
}

export default Messenger