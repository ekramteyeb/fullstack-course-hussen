import React from 'react'
import Country from './Country'
import CountryDetail from './CountryDetail'

const Countries = ({ countries, number, handleShowCountryClick, weather}) => {
    
    if(countries.length > number){
        return 'Too many matches, specify another filter'
    }else if(countries.length < 1){
        return 'No matches found.'
    }else{
           if(countries.length === 1){
               return (
                countries.map(country => 
                    <CountryDetail 
                        key={country.name} 
                        name={country.name} 
                        capital={country.capital} 
                        population={country.population} 
                        languages={country.languages} 
                        flag={country.flag}
                        temprature={weather.temperature}
                        wind={weather.wind}
                        icon={weather.icon}
                        direction={weather.w_direction}
                        
                    />
                ))}else{
                    return (
                        countries.map(country =>
                            <Country
                                key={country.name}
                                name={country.name}
                                handleShowCountryClick={handleShowCountryClick}

                            />
                        )
                    )
                }
                
                
        
    }
   
}

export default Countries
   

