import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import { SUN, RAIN, CLOUD, CLOUDY, SNOW, WINDY } from '../constants/weather'

const WeatherData = () => (
    <div>
        <h2>Here will be inserted the weather data of the location</h2>
        <WeatherTemperature temperature={20} weatherState={'cloud'} />
        <WeatherExtraInfo humidity={45} wind={"50 m/s"}/>
    </div>
)

export default WeatherData