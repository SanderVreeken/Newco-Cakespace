import React from 'react'

import NavBar from './NavBar'
import { useStateValue } from './StateProvider'

const MenuBar = () => {
    const [{ isMenuBarActive }] = useStateValue()

    return <div className='menubar' style={{
        // visibility: isMenuBarVisible ? 'visible' : 'hidden',
        visibility: isMenuBarActive ? 'visible' : 'hidden'
    }}>
        <NavBar />
    </div>
}

export default MenuBar