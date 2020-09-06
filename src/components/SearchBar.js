import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import Result from './Result'

import { USERS } from '../Mockdata'

const SearchBar = () => {

    return (
        <div className='searchbar'>
            <div className='searchbar__main'>
                <div className='searchbar__icon'>
                    <AiOutlineSearch />
                </div>
                <input className='searchbar__input' placeholder='Search Cakespace'></input>
            </div>
            <div className='searchbar__results'>
                {USERS.map(user => <Result user={user}/>)}
            </div>
        </div>
    )
}

export default SearchBar