import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import Result from './Result'

import { USERS } from '../Mockdata'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('')

    return (
        <div className='searchbar'>
            <div className='searchbar__main'>
                <div className='searchbar__icon'>
                    <AiOutlineSearch />
                </div>
                <input className='searchbar__input' onChange={event => setSearchText(event.target.value)} placeholder='Search Cakespace' value={searchText}></input>
            </div>
            <div className='searchbar__results' style={{
                visibility: searchText.length > 0 ? 'visible' : 'hidden'
            }}>
                {USERS.map(user => <Result user={user}/>)}
            </div>
        </div>
    )
}

export default SearchBar