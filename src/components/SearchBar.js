import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {

    return (
        <div className='searchbar'>
            <div className='searchbar__icon'>
                <AiOutlineSearch />
            </div>
            <input className='searchbar__input' placeholder='Search Cakespace'></input>
        </div>
    )
}

export default SearchBar