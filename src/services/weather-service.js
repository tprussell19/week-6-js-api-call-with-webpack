export default class WeatherService {
  static getWeather(city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.oneweathermap.org/data.2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}