import 'whatwg-fetch';

const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const queryParams = 'q=Gurgaon&units=metric&type=accurate';

const fetchWeather = (appId) => fetch(`${baseUrl}?${queryParams}&appid=${appId}`);

export default fetchWeather;
