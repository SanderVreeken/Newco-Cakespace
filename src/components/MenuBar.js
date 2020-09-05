import React, { useState } from 'react'
import NavBar from './NavBar'

const MenuBar = () => {
    const [isMenuBarVisible, setisMenuBarVisible] = useState(false)

    return <div className='menubar' style={{
        visibility: isMenuBarVisible ? 'visible' : 'hidden'
    }}>
        <NavBar />
        <div className='menubar__shadow'></div>     
    </div>
}

export default MenuBar