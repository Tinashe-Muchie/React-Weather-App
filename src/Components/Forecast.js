import React, {useState} from 'react';
import Display from './Display';

export default function Forecast() {
    const [responseObj ,setResponseObj] = useState({});
    let [city, setCity] = useState('');
    const uriEncodedCity = encodeURIComponent(city)
    let [unit, setUnit] = useState('imperial');
    
    function getForecast(e){
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
           <>
           <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    /><br />
                <input
                    type="radio"
                    name="units"
                    checked={unit === "imperial"}
                    value="imperial"
                    onChange={(e) => setUnit(e.target.value)}
                    />  
                <label>Fahrenheit</label>
                <input
                    type="radio"
                    name="units"
                    checked={unit === "metric"}
                    value="metric"
                    onChange={(e) => setUnit(e.target.value)}
                    />
                <label>Celcius</label><br />
                <button type="submit">Get Forecast</button>

            </form> 
            <Display responseObj={responseObj} />
           </> 
        </div>
    )
}
