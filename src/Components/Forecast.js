import React, {useState} from 'react';
import Display from './Display/Display';
import Form from './Form/Form';

export default function Forecast() {
    const [responseObj ,setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    function getWeather(e){
        e.preventDefault();

        if (city.length === 0){
            return setError(true);
        }
        
        setError(false);
        setResponseObj({});
        setLoading(true);

        const uriEncodedCity = encodeURIComponent(city)

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	            }
            })
            .then(response => response.json())
            .then(response => {
                            if  (response.cod !==200){
                                throw new Error();
                            }
                            setResponseObj(response);
                            setLoading(false);
                            })
            .catch(err => {
                setError(true);
                setLoading(false);
	            console.error(err);
            });
        
        }
    return (
        
        <div>   
            <Form unit={unit} city={city} setCity={setCity} setUnit={setUnit} getWeather={getWeather} />
            <Display responseObj={responseObj} error={error} loading={loading}/>
        </div>
    )
}