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
  
  
 
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log('Countries fetched')
      })
  }

  /* const handleName = () => {
    
  } */
  //filters countries based on search criteria 
  
    const showCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    
   const country =  showCountries.length === 1 ? showCountries[0].name : ''
  
  
  
  
  const hookWeather = () => {
    console.log('Weather request tried,but not successful')
    if(country === ''){
      return
    }else{
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country}`) 
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
          console.log('Weather request successful')
          setWeather(weatherObj)
        }
      })
    .catch(error => {
        alert('Your monthly weather api usage limit has been reached.')
    })
    }
  }

  useEffect(hook,[])
  useEffect(hookWeather,[country])
  
  const handleSearch = (event) => {
        setSearch(event.target.value)
  }
  
  const handleShowCountryClick = (event) => {
    setSearch(event.target.value)
    
  } 
  return (
    <div>
      <h1>Hello Countries</h1>
      <Filter handleSearch={handleSearch} />
      {(search === '') ? '' : <Countries countries={showCountries} weather={weather}  handleShowCountryClick={handleShowCountryClick} number={10} />}
      {console.log('how many times')}
    </div>
  )
}

export default App;
