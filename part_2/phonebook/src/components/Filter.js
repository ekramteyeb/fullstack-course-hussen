import React from 'react'

const Filter = (props) => {
    return (
        <div>Filter shown with <input onChange={props.handleSearch} /></div>
    )
}

export default Filter