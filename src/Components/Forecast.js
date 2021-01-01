import React, {useState} from 'react';

export default function Forecast() {
    const [responseObj ,setResponseObj] = useState({});
    function getForecast(){
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8118f2e313msh16bc8122e66008dp1d3897jsn6b296224e5d6",
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
        
    }
    return (
        
        <div>   
           <>
            {JSON.stringify(responseObj)}
            <input type='text' placeholder = 'type in your city'></input><br/>
            <input type='radio' id="fahrenheit" name='units' value='Fahrenheit' />
            <label for='fahrenheit'>Fahrenheit</label>
            <input type='radio' id='celcius' name='units' value='Celcius' />
            <label for='celcius'>Celsius</label><br />
            <input type='button' value='Get Forecast' onClick={getForecast} />
           </> 
        </div>
    )
}
