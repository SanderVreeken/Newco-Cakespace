import React from 'react'

const Result = (props) => {

    return (
        <div className='btn btn-light result'>
            <div className='result__photo' style={{
                backgroundImage: `url(https://sandervreeken.github.io/Newco-Cakespace/images/users/${props.user.alias}.jpg)`
            }}></div>
            <div className='result__user'>
                <h6 className='result__name'>{props.user.name}</h6>
                <p className='result__alias'>{`@${props.user.alias}`}</p>
            </div>
        </div>
    )
}

export default Result