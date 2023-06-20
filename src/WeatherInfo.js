import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faWind, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="d-flex justify-content-center mt-5">{props.data.city}</h1>
      <ul>
        <li className="d-flex justify-content-center">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description d-flex justify-content-center mb-5">{props.data.description}</li>
      </ul>
      <div className="info d-flex justify-content-center">
        <div className="row mt-2 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
            <div>
              <span className="canvas">
              <WeatherIcon code={props.data.icon}/> 
              </span>
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          
        </div>
        <div className="weather-states col-8 mb-3 d-flex justify-content-center">
          <ul>
            <li className="humidity">
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} />{" "}Humidity: {props.data.humidity}%</li>
            <li className="wind">
            <FontAwesomeIcon icon={faWind} />{" "}Wind: {Math.round(props.data.wind)} km/h</li>
            <li className="real-feel">
            <FontAwesomeIcon icon={faFaceSmileBeam} />{" "}Real feel: {Math.round(props.data.feelslike)}ºC</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
