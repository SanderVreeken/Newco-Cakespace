import React from 'react'
import { BiRocket } from 'react-icons/bi'

import Product from './Product'
import SearchBar from './SearchBar'
import Owner from './Owner'

const Content = () => {

    return (
        <div className='content'>
            <div className='content__header'>
                <div className='btn btn-light content__icon'>
                    <BiRocket />
                </div>
            </div>
            <div className='content__searchbar'>
                <SearchBar />
            </div>
            <Product />
            <Owner />
        </div>
    )
}

export default Content