export default class WeatherService {
  static asynch getWeather(city) {
    try {
    const response = await fetch(`http://api.oneweathermap.org/data.2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}