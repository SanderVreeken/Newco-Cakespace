import React from 'react'

import Content from './Content'
import SideBar from './SideBar'

const Main = (props) => {

    return (
        <main className='main'>
            <Content />
            <SideBar setIsChatting={props.setIsChatting} setIsMessengerActive={props.setIsMessengerActive} />
        </main>
    )
}

export default Main