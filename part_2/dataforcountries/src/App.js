import React,{useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Filter from './component/Filter';
import  Countries from './component/Countries';


const  App = () => {
  
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY_REE
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})
  
  const showCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
  const country = showCountries.length === 1 ? showCountries[0].name : ''
  const url = 'http://api.weatherstack.com/current?'
  
  const hookCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hookCountries, [])
 

  const hookWeather = () => {
    if(country === ''){
      return
    }else{
    axios
      .get(`${url}access_key=${API_KEY}&query=${country}`) 
      .then(response => {
        if (response.success === false){
          console.log('there is error')
          return 
        }else{
          const wResponse = response.data.current
          const weatherObj = {
            temperature: wResponse.temperature,
            wind:wResponse.wind_speed,
            icon:wResponse.weather_icons[0],
            w_direction:wResponse.wind_dir,
          }
          
          setWeather(weatherObj)
        }
      })
    .catch(error => {
        alert('Your monthly weather api usage limit has been reached.')
    })
    }
  }

  useEffect(hookWeather, [country])
  
  const handleSearch = (event) => {
        setSearch(event.target.value)
  }
  
  const handleShowCountryClick = (event) => {
    setSearch(event.target.value)
    
  } 
  return (
    <div>
      <h1>Countries current weather</h1>
      <Filter handleSearch={handleSearch} />
      {(search === '') ? '' : <Countries countries={showCountries} weather={weather}  handleShowCountryClick={handleShowCountryClick} number={10} />}
    </div>
  )
}

export default App;
