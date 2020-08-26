import React from 'react'
import { AiFillHeart, AiOutlineClockCircle, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'

const Product = () => {

    return (
        <div className='product'>
            <div className='product__header'>
                <h4 className='product__title'>Strawberry Rhubarb Pie</h4>
                <div className='product__like'>
                    <AiOutlineHeart />
                </div>
            </div>
            <div className='product__meta'>
                <div className='product__metatag'>
                    <AiOutlineEye />
                    <p>24,279 seen</p>
                </div>
                <div className='product__metatag'>
                    <AiOutlineHeart />
                    <p>161 saved</p>
                </div>
                <div className='product__metatag'>
                    <AiOutlineClockCircle />
                    <p>19-08-2020</p>
                </div>
            </div>
            <div className='product__body'>
                <div className='product__photo'></div>
                <div className='product__information'>
                    {/* <p className='product__rate'>€10,49</p> */}
                    {/* <div className='btn btn-primary product__buy'>Buy this cake!</div> */}
                </div>
                
            </div>

            
        </div>
    )
}

export default Product