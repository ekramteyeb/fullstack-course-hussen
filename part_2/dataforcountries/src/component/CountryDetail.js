import React from 'react'

const CountryDetail = (props) => {
    return (
        <div >
            <h1 id="name" >{props.name}</h1>
            <p>Capital : {props.capital}</p>
            <p>Population : {props.population}</p>
            
            <h3>Languages</h3>
            <ul>
                {props.languages.map(lang => <li key={lang.name}>  {lang.name}</li>)}
            
            </ul>
            <div><img src={props.flag} alt="flag"/></div>

            <h3>Weather in {props.capital}</h3>
            <div>
                <p><b>Temprature:</b>{props.temprature} Celcius</p>
                <div><img  src={props.icon} alt="temprature"/> </div>
                <p><b>Wind :</b>{props.wind} mph direction <b>{props.direction}</b> </p>
                
            </div>
        </div>

    )

} 

export default CountryDetail