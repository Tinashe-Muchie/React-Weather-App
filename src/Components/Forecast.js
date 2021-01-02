import React, {useState} from 'react';
import Display from './Display';
import Form from './Form';

export default function Forecast() {
    const [responseObj ,setResponseObj] = useState({});
    let [city, setCity] = useState('');
    const uriEncodedCity = encodeURIComponent(city)
    let [unit, setUnit] = useState('imperial');
    
    function getWeather(e){
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	            }
            })
            .then(response => response.json())
            .then(response => {
                            setResponseObj(response)
                            })
            .catch(err => {
	                    console.error(err);
            });
        e.preventDefault();
        }
    return (
        
        <div>   
            <Form unit={unit} city={city} setCity={setCity} setUnit={setUnit} getWeather={getWeather} />
            <Display responseObj={responseObj} />
        </div>
    )
}