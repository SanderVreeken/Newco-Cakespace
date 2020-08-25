import React from 'react'
import { AiOutlineDown, AiOutlineArrowLeft, AiOutlineUp } from 'react-icons/ai'

import ListMessengerBody from './MessengerBodies/ListMessengerBody'

const Messenger = (props) => {

  // Function to decide and load the back arrow icon when the user chatting.
  const getBackIcon = (isChatting) => {
    if (isChatting) {
      return (
        <div className='messenger__icon' onClick={(event) => returnToList(event)}>
          <AiOutlineArrowLeft />
        </div>
      )
    }
  }
  
  // Function changing the layout of the component by changing state, while making sure the function of the parent element is not triggered.
  const returnToList = (event) => {
    event.stopPropagation()
    props.setIsChatting(false)
  }

  return (
    <div className='messenger' style={{
      // Using state to animate the visibility of the component.
      bottom: props.isMessengerActive ? 0 : -477
    }}> 
      <div className='btn messenger__header' onClick={() => props.setIsMessengerActive(!props.isMessengerActive)}>
        {getBackIcon(props.isChatting)}
        <h5 className='messenger__title'>{props.isChatting ? 'SanderVreeken' : 'Messages'}</h5>
        <div className='messenger__icon'>
          {props.isMessengerActive ? <AiOutlineDown /> : <AiOutlineUp />}
        </div>
      </div>
      <ListMessengerBody />
    </div>
  )
}

export default Messenger