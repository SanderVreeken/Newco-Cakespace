import React from 'react'

import { AiOutlineCompass, AiOutlineCreditCard, AiOutlineIdcard, AiOutlineMessage, AiOutlinePhone } from 'react-icons/ai'

const Owner = () => {

    return (
        <div className='owner'>
            <div className='owner__header'>
                <h4 className='owner__title'>Profile</h4>
            </div>
            <div className='owner__main'>
                <h5 className='owner__name'>SanderVreeken</h5>  
                <p className='owner__since'>Active for more than six months on Cakespace</p>
            </div>
            <div className='owner__validations'>
                <div className='owner__check'>
                    <div className='owner__icon'>
                        <AiOutlinePhone />
                    </div>
                    <p className='owner__valid'>Phone number is checked</p>                 
                </div>   
                <div className='owner__check'>
                    <div className='owner__icon'>
                        <AiOutlineCreditCard />
                    </div>
                    <p className='owner__valid'>Bank account is checked</p>                 
                </div>   
                <div className='owner__check'>
                    <div className='owner__icon'>
                        <AiOutlineIdcard />
                    </div>
                    <p className='owner__valid'>Identity is checked</p>                 
                </div>
            </div>
            <div className='owner__location'>
                <div className='owner__icon'>
                    <AiOutlineCompass />
                </div>
                <p className='owner__street'>Oostwaarts, Zoetermeer</p>  
            </div>
            <div className='btn owner__connect'>
                <div className='owner__icon'>
                    <AiOutlineMessage />
                </div>
                <p className='owner__message'>Contact Sander Vreeken</p>  
            </div>   
        </div>
    )
}

export default Owner