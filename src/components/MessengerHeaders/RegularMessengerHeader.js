import React from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const RegularMessengerHeader = (props) => {

  return (
    <div className='btn messenger__header' onClick={() => props.setIsMessengerActive(!props.isMessengerActive)}>
      <h5 className='messenger__title'>Messages</h5>
      <div className='messenger__icon'>
        {props.isMessengerActive ? <AiOutlineDown /> : <AiOutlineUp />}
      </div>
    </div>
  )
}

export default RegularMessengerHeader