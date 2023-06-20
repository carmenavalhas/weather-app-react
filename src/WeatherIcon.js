import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudMoon, faCloudSun, faCloudRain, faCloudBolt, faSnowflake, faWater } 
from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faCloud, faCloudMoon, faCloudSun, faCloudRain, faSnowflake, faWater, faCloudBolt)

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": faSun,
    "01n": faCloudMoon,
    "02d": faCloudSun,
    "02n": faCloudSun,
    "03d": faCloudSun,
    "03n": faCloudMoon,
    "04d": faCloud,
    "04n": faCloud,
    "09d": faCloudRain,
    "09n": faCloudRain,
    "10d": faCloudRain,
    "10n": faCloudRain,
    "11d": faCloudBolt,
    "11n": faCloudRain,
    "13d": faSnowflake,
    "13n": faSnowflake,
    "50d": faWater,
    "50n": faWater,
  };
  return <FontAwesomeIcon 
  icon={codeMapping[props.code]}  
  size="2xl" 
  style={{color: "#D99F5A"}} /> ;
}