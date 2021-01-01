import React from 'react'

export default function Display(props) {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <div>
                <p><strong>{props.responseObj.name}</strong></p>
                <p>{Math.round(props.responseObj.main.temp)} <br />
                {props.responseObj.weather[0].description}.
                </p>
            </div>
            : null
            }
        </div>
    )
}
