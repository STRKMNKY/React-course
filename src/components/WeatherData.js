import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'

const WeatherData = () => (
    <div>
        <h2>Here will be inserted the weather data of the location</h2>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo></WeatherExtraInfo>
    </div>
)

export default WeatherData