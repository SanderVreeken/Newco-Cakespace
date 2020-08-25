import React, { useState } from 'react'

import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const Messenger = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='messenger' style={{
      // Using state to animate the visibility of the component.
      bottom: isActive ? 0 : -477
    }}>
      <div className='btn messenger__header' onClick={() => setIsActive(!isActive)}>
        <h5 className='messenger__title'>Messages</h5>
        <div className='messenger__icon'>
          {isActive ? <AiOutlineDown /> : <AiOutlineUp />}
        </div>
      </div>
    </div>
  )
}

export default Messenger