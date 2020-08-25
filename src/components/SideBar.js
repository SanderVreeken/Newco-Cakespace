import React from 'react'

import Owner from './Owner'
import SearchBar from './SearchBar'

const SideBar = (props) => {

    return (
        <div className='sidebar'>
            <SearchBar />
            <Owner setIsChatting={props.setIsChatting} setIsMessengerActive={props.setIsMessengerActive}/>
        </div>
    )
}

export default SideBar