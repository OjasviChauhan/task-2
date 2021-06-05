import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Weather from "./components/Weather";
import { weatherActions } from "./store/weatherSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather_data);

  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=c0ce945fbd27b35f620422f7b0dc33d6&units=metric"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(weatherActions.weatherDataReducer(data));
      });
  }, []);

  return <Weather data={weatherData} />;
}

export default App;
