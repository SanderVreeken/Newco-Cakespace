import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const User = () => {

    return (
        <div className='btn btn-light user'>
            <div className='user__body'>
                <div className='user__photo'></div>    
                <div className='user__profile'>
                    <h6 className='user__name'>SanderVreeken</h6>
                    <p className='user__alias'>@SanderVreeken</p>     
                </div>
            </div>
            <AiOutlineDown />
        </div>
    )
}

export default User