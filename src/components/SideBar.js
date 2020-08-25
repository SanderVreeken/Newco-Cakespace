import React from 'react'

import Owner from './Owner'
import SearchBar from './SearchBar'

const SideBar = () => {

    return (
        <div className='sidebar'>
            <SearchBar />
            <Owner />
        </div>
    )
}

export default SideBar