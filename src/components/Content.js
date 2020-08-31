import React from 'react'

import Product from './Product'
import SearchBar from './SearchBar'
import Owner from './Owner'

const Content = () => {

    return (
        <div className='content'>
            <div className='content__searchbar'>
                <SearchBar />
            </div>
            <Product />
            <Owner />
        </div>
    )
}

export default Content