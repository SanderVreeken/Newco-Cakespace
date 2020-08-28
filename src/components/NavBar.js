import React from 'react'
import { AiOutlineBook, AiOutlineGlobal, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { BiRocket } from 'react-icons/bi'

import User from './User'

const NavBar = () => {

    const navBarItems = [
        {
            active: false,
            name: 'Home',
            icon: <AiOutlineHome />,
        }, {
            active: true,
            name: 'Explore',
            icon: <AiOutlineGlobal />
        }, {
            active: false,
            name: 'Bookmark',
            icon: <AiOutlineBook />
        }, {
            active: false,
            name: 'Profile',
            icon: <AiOutlineUser />
        }
    ]

    return (
        <nav className='navbar'>
            <div className='navbar__main'>
                <div className='btn btn-light navbar__header'>
                    <BiRocket />
                </div>
                {navBarItems.map(item => {
                    return (
                        <div className='btn btn-light navbar__item' style={{
                            // Changing the color of the icon based on whether the page is actually active.
                            color: item.active ? 'rgb(29, 161, 242)' : null
                        }}>
                            <div className='navbar__icon'>
                                {item.icon}   
                            </div>
                            <h5 className='navbar__name'>{item.name}</h5>
                        </div>
                    )
                })}
                <div className='btn btn-primary navbar__button'>
                    <h6 className='navbar__add'>Add Product</h6>
                    <AiOutlinePlus />
                </div>
            </div>
            <User />
        </nav>
    )
}

export default NavBar