import React from 'react'

const Message = () => {

    return (
        <div className='btn message'>
            <div className='message__icon'></div>
            <div className='message__body'>
                <div className='message__author'>
                    <h6 className='message__name'>SanderVreeken</h6>
                    <p className='message__alias'>@SanderVreeken</p>
                </div>  
                <p className='message__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
            <p className='message__date'>19 Aug</p>
        </div>
    )
}

export default Message