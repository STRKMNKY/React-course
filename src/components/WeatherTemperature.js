import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

const icons = {
    sun: "day-sunny",
    rain: "rain",
    cloud: "cloud",
    cloudy: "cloudy",
    snow: "snow",
    windy: "windy"
}

const getWeatherIcon = weatherState => {
    const icon = icons[ weatherState ]
    if( icon ) {
        return <WeatherIcons name={ icon } size="2x"/>
    }
    else {
        return <WeatherIcons name='day-sunny' size="2x"/>
    }

}

const WeatherTemperature = ( { temperature, weatherState } ) =>(
    <div>
        { getWeatherIcon( weatherState ) }
        <span>{ `${ temperature }°` }</span>
    </div>
)

// Validation of data types received in the component
// If sonme value of some type diferent of whichone of we define it throws an error
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired // This param will not accept null values
}

export default WeatherTemperature