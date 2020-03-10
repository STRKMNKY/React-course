import React from 'react'
import PropTypes from 'prop-types'

const WeatherExtraInfo = ( {humidity, wind} ) => (
    <div>
        <span>{ humidity }%- { wind } viento</span> 
    </div>
)

WeatherExtraInfo.propType = {
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo