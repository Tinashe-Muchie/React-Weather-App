import React from 'react'
import classes from './Display.module.css'

export default function Display(props) {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <>
            <div className={classes.Display}>
                <p><strong>{props.responseObj.name}, {props.responseObj.sys.country}</strong></p>
                <div><strong>temperature: </strong>{Math.round(props.responseObj.main.temp)}{'\u00b0'} </div><br />
                <span><strong>description: </strong> {props.responseObj.weather[0].description}</span><br />
                <div><span><strong>min temp: </strong>{Math.round(props.responseObj.main.temp_min)}{'\u00b0'}</span> <span><strong>max temp: </strong>{Math.round(props.responseObj.main.temp_max)}{'\u00b0'}</span></div><br />
                <span><strong>humidity: </strong>{props.responseObj.main.humidity}</span><br />
                <span><strong>wind speed: </strong>{props.responseObj.wind.speed}</span>
            </div>
            </>
            : null
            }
        </div>
    )
}
