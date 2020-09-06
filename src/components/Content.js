import React from 'react'
import { BiRocket } from 'react-icons/bi'

import Product from './Product'
import SearchBar from './SearchBar'
import Owner from './Owner'
import { useStateValue } from './StateProvider'

const Content = () => {
    const [{ isMenuBarActive }, dispatch] = useStateValue()

    const updateIsMenuBarActive = event => {
        dispatch({
          type: 'UPDATE_IS_MENUBAR_ACTIVE',
          item: !isMenuBarActive,
        })
      }

    return (
        <div className='content'>
            <div className='content__header'>
                <div className='btn btn-light content__icon' onClick={() => updateIsMenuBarActive()}>
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