import React from 'react'

const Country = ({ name, handleShowCountryClick }) => {
    return (
    <>
            <p> {name} <button value={name} onClick={handleShowCountryClick}>{'Show'}</button> </p> 
    </>
    )
}


export default Country