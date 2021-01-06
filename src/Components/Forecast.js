import React, {useState} from 'react';
import Display from './Display/Display';
import Form from './Form/Form';

export default function Forecast() {
    const [responseObj ,setResponseObj] = useState({});
    let [city, setCity] = useState('');
    const uriEncodedCity = encodeURIComponent(city)
    let [unit, setUnit] = useState('imperial');
    
    function getWeather(e){
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		        "x-rapidapi-key": "8118f2e313msh16bc8122e66008dp1d3897jsn6b296224e5d6"/*process.env.REACT_APP_API_KEY*/,
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