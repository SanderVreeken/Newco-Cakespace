import React from 'react'
import { AiFillHeart, AiOutlineClockCircle, AiOutlineEye, AiOutlineHeart, AiFillStar } from 'react-icons/ai'

const Product = () => {

    // Function to get the stars loaded within the page.
    const getStarsElement = (number) => {
        const stars = []
        for (let n = 0; n < number; n++) {
            stars.push(
                <div className='product__star'>
                    <AiFillStar />
                </div>
            )
        }

        return (
            <div className='product__stars'>
                {stars.map(star => {
                    return star
                })}
            </div>    
        )
    }

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
            <div className='product__photos'>
                <div className='product__photo'></div>
                <div className='product__photo'></div>
                <div className='product__photo'></div>
            </div>
            <div className='product__information'>
                <p>€ 12,95</p>
                <p>Single pie</p>
                {getStarsElement(4)}
            </div>

            <div className='product__description'>
                <h6>About this item</h6>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
            </div>
            {/* <div className='product__body'></div> */}            
        </div>
    )
}

export default Product