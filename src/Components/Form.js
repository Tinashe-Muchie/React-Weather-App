import React from 'react'

export default function Form(props) {
   
    return (
        <div>
           <>
           <form onSubmit={props.getWeather}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                    /><br />
                <input
                    type="radio"
                    name="units"
                    checked={props.unit === "imperial"}
                    value="imperial"
                    onChange={(e) => props.setUnit(e.target.value)}
                    />  
                <label>Fahrenheit</label>
                <input
                    type="radio"
                    name="units"
                    checked={props.unit === "metric"}
                    value="metric"
                    onChange={(e) => props.setUnit(e.target.value)}
                    />
                <label>Celcius</label><br />
                <button type="submit">Get Weather</button>
            </form>
            </> 
        </div>
    )
}

