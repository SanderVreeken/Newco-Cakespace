import React from 'react'
import { AiOutlineDown, AiOutlineArrowLeft, AiOutlineUp } from 'react-icons/ai'

import Message from './Message'
import { useStateValue } from './StateProvider'

const Messenger = () => {
  const [{ isChatting, isMessengerActive }, dispatch] = useStateValue()

  // Function to decide and load the back arrow icon when the user chatting.
  const getBackIcon = isChatting => {
    if (isChatting) {
      return (
        <div className='messenger__icon' onClick={(event) => updateIsChatting(event)}>
          <AiOutlineArrowLeft />
        </div>
      )
    }
  }

  // Function to decide and load the chats in case the user is not chatting already.
  const getMessagesList = isChatting => {
    if (!isChatting) {
      return (
        <Message />
      )
    }
  }

  const updateIsChatting = event => {
    event.stopPropagation()
    dispatch({
      type: 'UPDATE_IS_CHATTING',
      item: !isChatting,
    })
  }

  const updateIsMessengerActive = () => {
    dispatch({
      type: 'UPDATE_IS_MESSENGER_ACTIVE',
      item: !isMessengerActive,
    })
  }

  return (
    <div className='messenger' style={{
      // Using state to animate the visibility of the component.
      bottom: isMessengerActive ? 0 : -477
    }}> 
      <div className='btn messenger__header' onClick={() => updateIsMessengerActive()}>
        {getBackIcon(isChatting)}
        <h5 className='messenger__title'>{isChatting ? 'SanderVreeken' : 'Messages'}</h5>
        <div className='btn btn-light messenger__icon'>
          {isMessengerActive ? <AiOutlineDown /> : <AiOutlineUp />}
        </div>
      </div>
      <div className='messenger__body'>
        {getMessagesList(isChatting)}
      </div>
    </div>
  )
}

export default Messenger
