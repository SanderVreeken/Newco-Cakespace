import React from 'react'
import { AiOutlineDown, AiOutlineArrowLeft, AiOutlineUp } from 'react-icons/ai'

const ChatMessengerHeader = (props) => {

  return (
    <div className='btn messenger__header' onClick={() => props.setIsMessengerActive(!props.isMessengerActive)}>
      <div className='messenger__icon' onClick={(e) => e.stopPropagation()}>
        <AiOutlineArrowLeft />
      </div>
      <h5 className='messenger__title'>SanderVreeken</h5>
      <div className='messenger__icon'>
        {props.isMessengerActive ? <AiOutlineDown /> : <AiOutlineUp />}
      </div>
    </div>
  )
}

export default ChatMessengerHeader