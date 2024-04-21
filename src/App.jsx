import React from "react";
import { useState, useEffect } from "react";

import Image from "./components/Image.jsx";
import Header from "./components/Header.jsx";

import moment from "moment";

const WEATHER_API = {
  key: "45320eb98dd32e71513cf76378fc81e7",
  base: "http://api.openweathermap.org/data/2.5/",
  icon: "https://openweathermap.org/img/w",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter" || typeof event.key === "undefined") {
      if (query.length > 0) {
        fetch(
          `${WEATHER_API.base}weather?q=${query}&units=metric&APPID=${WEATHER_API.key}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
          });
      }
    }
  };

  return (
    <div className="wrapper">
      <Header className="jumbotron alert alert-warning" />
      <main className="main">
        <section className="weather">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12 my-3">
                Today: {moment().format("dddd")} {moment().format("LL")}
              </div>
            </div>
            <div className="search__form m-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search__input"
                  placeholder="Enter the city name: "
                  aria-describedby="searchButton"
                  name="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={search}
                />
                <button
                  type="button"
                  className="input-group-text"
                  id="searchButton"
                  onClick={search}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                  </svg>
                </button>
              </div>
            </div>
            {typeof weather.main != "undefined" ? (
              <div className="row mt-5 mb-5">
                <div className="search-panel offset-md-2 col-md-8 col-sm-12 my-3">
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <h2>
                        {console.log(weather)}
                        {weather.name}, {weather.sys.country}
                      </h2>
                    </div>
                    <div className="card-body">
                      <div className="card-img">
                        <Image
                          src={`${WEATHER_API.icon}/${weather.weather[0].icon}.png`}
                          alt="Weather Status Image"
                        />
                      </div>
                      <div className="card-temperature d-flex flex-row align-items-center justify-content-start gap-3">
                        <i className="bi bi-thermometer-half display-6"></i>
                        <h3 className="mb-0">
                          {Math.round(weather.main.temp)}°c
                        </h3>
                      </div>
                      <div className="card-wind d-flex flex-row align-items-center justify-content-start gap-3">
                        <i className="bi bi-wind display-6"></i>
                        <h3>{Math.round(weather.wind.speed)} m/s</h3>
                      </div>
                      <div className="card-weather fw-bold">
                        Weather status: {weather.weather[0].main}
                        <p className="text-capitalize fw-normal">
                          {weather.weather[0].description}
                        </p>
                      </div>
                      <div className="card-coords">
                        Latitude:{" "}
                        <span className="fw-bold">
                          {weather.coord.lat.toFixed(2)}
                        </span>{" "}
                        and Longitude:{" "}
                        <span className="fw-bold">
                          {weather.coord.lon.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // <h2 className="mt-5 text-center">There is no city like this {query}. Try another request!</h2>
              ""
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
