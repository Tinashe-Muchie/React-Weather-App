import React from 'react'
import classes from './Form.module.css'

export default function Form(props) {
    return (
        <div>
           <>
           <form onSubmit={props.getWeather} className={classes.Form}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                    className={classes.inputText}
                    /><br />
                <div className={classes.Radio}>
                <input
                    type="radio"
                    name="units"
                    checked={props.unit === "imperial"}
                    value="imperial"
                    onChange={(e) => props.setUnit(e.target.value)}
                    className={classes.Radio}
                    />  
                <label>{'\u00b0'}F</label>
                <input
                    type="radio"
                    name="units"
                    checked={props.unit === "metric"}
                    value="metric"
                    onChange={(e) => props.setUnit(e.target.value)}
                    className={classes.Radio}
                    />
                <label>{'\u00b0'}C</label>
                </div><br />
                <button type="submit" className={classes.Button}>Get Weather</button>
            </form>
            </> 
        </div>
    )
}

