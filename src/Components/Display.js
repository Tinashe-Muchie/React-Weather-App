import React from 'react'

export default function Display(props) {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <>
                <p><strong>{props.responseObj.name}</strong></p>
                <p>{Math.round(props.responseObj.main.temp)}{'\u00b0'} <br />
                {props.responseObj.weather[0].description}.
                </p>
            </>
            : null
            }
        </div>
    )
}
