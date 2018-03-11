import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home';

configure({ adapter: new Adapter() });

const fakeData = {
  status: 200,
  city: { name: 'Fake City' },
  list: [{
    "dt": 1520553600,
    "main": {
      "temp": 16.21,
      "temp_min": 16.21,
      "temp_max": 16.25,
      "pressure": 997.77,
      "sea_level": 1026.94,
      "grnd_level": 997.77,
      "humidity": 70,
      "temp_kf": -0.05
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.61, "deg": 81.007 },
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-09 00:00:00"
  }, {
    "dt": 1520564400,
    "main": {
      "temp": 21.62,
      "temp_min": 21.62,
      "temp_max": 21.65,
      "pressure": 999.25,
      "sea_level": 1028.23,
      "grnd_level": 999.25,
      "humidity": 51,
      "temp_kf": -0.03
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "02d" }],
    "clouds": { "all": 8 },
    "wind": { "speed": 1.76, "deg": 87.0047 },
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-09 03:00:00"
  }, {
    "dt": 1520575200,
    "main": {
      "temp": 30.14,
      "temp_min": 30.14,
      "temp_max": 30.16,
      "pressure": 999.18,
      "sea_level": 1027.76,
      "grnd_level": 999.18,
      "humidity": 40,
      "temp_kf": -0.02
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.06, "deg": 128.505 },
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-09 06:00:00"
  }, {
    "dt": 1520586000,
    "main": {
      "temp": 31.28,
      "temp_min": 31.28,
      "temp_max": 31.28,
      "pressure": 996.6,
      "sea_level": 1025.18,
      "grnd_level": 996.6,
      "humidity": 32,
      "temp_kf": 0
    },
    "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }],
    "clouds": { "all": 48 },
    "wind": { "speed": 2.66, "deg": 289.5 },
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-09 09:00:00"
  }, {
    "dt": 1520596800,
    "main": {
      "temp": 25.06,
      "temp_min": 25.06,
      "temp_max": 25.06,
      "pressure": 997.07,
      "sea_level": 1025.53,
      "grnd_level": 997.07,
      "humidity": 38,
      "temp_kf": 0
    },
    "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }],
    "clouds": { "all": 56 },
    "wind": { "speed": 3.12, "deg": 225.003 },
    "rain": { "3h": 0.1 },
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-09 12:00:00"
  }, {
    "dt": 1520607600,
    "main": {
      "temp": 19.36,
      "temp_min": 19.36,
      "temp_max": 19.36,
      "pressure": 998.43,
      "sea_level": 1027.35,
      "grnd_level": 998.43,
      "humidity": 61,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.81, "deg": 256.502 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-09 15:00:00"
  }, {
    "dt": 1520618400,
    "main": {
      "temp": 14.96,
      "temp_min": 14.96,
      "temp_max": 14.96,
      "pressure": 998.89,
      "sea_level": 1027.85,
      "grnd_level": 998.89,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.26, "deg": 296.502 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-09 18:00:00"
  }, {
    "dt": 1520629200,
    "main": {
      "temp": 13.25,
      "temp_min": 13.25,
      "temp_max": 13.25,
      "pressure": 997.77,
      "sea_level": 1027.05,
      "grnd_level": 997.77,
      "humidity": 84,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.21, "deg": 292.002 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-09 21:00:00"
  }, {
    "dt": 1520640000,
    "main": {
      "temp": 12.26,
      "temp_min": 12.26,
      "temp_max": 12.26,
      "pressure": 998.28,
      "sea_level": 1027.69,
      "grnd_level": 998.28,
      "humidity": 84,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.57, "deg": 295.006 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-10 00:00:00"
  }, {
    "dt": 1520650800,
    "main": {
      "temp": 19.73,
      "temp_min": 19.73,
      "temp_max": 19.73,
      "pressure": 1000.31,
      "sea_level": 1029.35,
      "grnd_level": 1000.31,
      "humidity": 57,
      "temp_kf": 0
    },
    "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }],
    "clouds": { "all": 12 },
    "wind": { "speed": 2.47, "deg": 316.503 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-10 03:00:00"
  }, {
    "dt": 1520661600,
    "main": {
      "temp": 27.84,
      "temp_min": 27.84,
      "temp_max": 27.84,
      "pressure": 1000.26,
      "sea_level": 1028.84,
      "grnd_level": 1000.26,
      "humidity": 45,
      "temp_kf": 0
    },
    "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }],
    "clouds": { "all": 12 },
    "wind": { "speed": 2.57, "deg": 332.001 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-10 06:00:00"
  }, {
    "dt": 1520672400,
    "main": {
      "temp": 30.79,
      "temp_min": 30.79,
      "temp_max": 30.79,
      "pressure": 997.52,
      "sea_level": 1025.84,
      "grnd_level": 997.52,
      "humidity": 34,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.88, "deg": 314.001 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-10 09:00:00"
  }, {
    "dt": 1520683200,
    "main": {
      "temp": 29.87,
      "temp_min": 29.87,
      "temp_max": 29.87,
      "pressure": 996.35,
      "sea_level": 1024.72,
      "grnd_level": 996.35,
      "humidity": 24,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.57, "deg": 329.001 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-10 12:00:00"
  }, {
    "dt": 1520694000,
    "main": {
      "temp": 22,
      "temp_min": 22,
      "temp_max": 22,
      "pressure": 997.52,
      "sea_level": 1026.27,
      "grnd_level": 997.52,
      "humidity": 37,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.82, "deg": 343.002 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-10 15:00:00"
  }, {
    "dt": 1520704800,
    "main": {
      "temp": 17.66,
      "temp_min": 17.66,
      "temp_max": 17.66,
      "pressure": 997.79,
      "sea_level": 1026.84,
      "grnd_level": 997.79,
      "humidity": 62,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.46, "deg": 334.004 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-10 18:00:00"
  }, {
    "dt": 1520715600,
    "main": {
      "temp": 14.12,
      "temp_min": 14.12,
      "temp_max": 14.12,
      "pressure": 997.16,
      "sea_level": 1026.48,
      "grnd_level": 997.16,
      "humidity": 82,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.3, "deg": 312.5 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-10 21:00:00"
  }, {
    "dt": 1520726400,
    "main": {
      "temp": 13.18,
      "temp_min": 13.18,
      "temp_max": 13.18,
      "pressure": 997.19,
      "sea_level": 1026.59,
      "grnd_level": 997.19,
      "humidity": 88,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.03, "deg": 302.003 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-11 00:00:00"
  }, {
    "dt": 1520737200,
    "main": {
      "temp": 19.35,
      "temp_min": 19.35,
      "temp_max": 19.35,
      "pressure": 998.88,
      "sea_level": 1027.88,
      "grnd_level": 998.88,
      "humidity": 66,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.02, "deg": 302 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-11 03:00:00"
  }, {
    "dt": 1520748000,
    "main": {
      "temp": 28.29,
      "temp_min": 28.29,
      "temp_max": 28.29,
      "pressure": 998.94,
      "sea_level": 1027.5,
      "grnd_level": 998.94,
      "humidity": 44,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.46, "deg": 317.5 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-11 06:00:00"
  }, {
    "dt": 1520758800,
    "main": {
      "temp": 31.25,
      "temp_min": 31.25,
      "temp_max": 31.25,
      "pressure": 996.86,
      "sea_level": 1025.24,
      "grnd_level": 996.86,
      "humidity": 33,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.62, "deg": 326.002 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-11 09:00:00"
  }, {
    "dt": 1520769600,
    "main": {
      "temp": 30.25,
      "temp_min": 30.25,
      "temp_max": 30.25,
      "pressure": 995.82,
      "sea_level": 1024.18,
      "grnd_level": 995.82,
      "humidity": 24,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.04, "deg": 335.001 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-11 12:00:00"
  }, {
    "dt": 1520780400,
    "main": {
      "temp": 22.34,
      "temp_min": 22.34,
      "temp_max": 22.34,
      "pressure": 997.07,
      "sea_level": 1025.77,
      "grnd_level": 997.07,
      "humidity": 36,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.36, "deg": 342.001 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-11 15:00:00"
  }, {
    "dt": 1520791200,
    "main": {
      "temp": 17.39,
      "temp_min": 17.39,
      "temp_max": 17.39,
      "pressure": 997.61,
      "sea_level": 1026.64,
      "grnd_level": 997.61,
      "humidity": 57,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.89, "deg": 331.501 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-11 18:00:00"
  }, {
    "dt": 1520802000,
    "main": {
      "temp": 14.91,
      "temp_min": 14.91,
      "temp_max": 14.91,
      "pressure": 996.98,
      "sea_level": 1026.19,
      "grnd_level": 996.98,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.61, "deg": 325.503 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-11 21:00:00"
  }, {
    "dt": 1520812800,
    "main": {
      "temp": 12.45,
      "temp_min": 12.45,
      "temp_max": 12.45,
      "pressure": 996.66,
      "sea_level": 1026.06,
      "grnd_level": 996.66,
      "humidity": 84,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.24, "deg": 315.507 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-12 00:00:00"
  }, {
    "dt": 1520823600,
    "main": {
      "temp": 20.96,
      "temp_min": 20.96,
      "temp_max": 20.96,
      "pressure": 998.44,
      "sea_level": 1027.39,
      "grnd_level": 998.44,
      "humidity": 57,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.44, "deg": 304.004 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-12 03:00:00"
  }, {
    "dt": 1520834400,
    "main": {
      "temp": 29.61,
      "temp_min": 29.61,
      "temp_max": 29.61,
      "pressure": 998.75,
      "sea_level": 1027.32,
      "grnd_level": 998.75,
      "humidity": 42,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.04, "deg": 341.505 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-12 06:00:00"
  }, {
    "dt": 1520845200,
    "main": {
      "temp": 32.13,
      "temp_min": 32.13,
      "temp_max": 32.13,
      "pressure": 996.4,
      "sea_level": 1024.74,
      "grnd_level": 996.4,
      "humidity": 32,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.94, "deg": 333.502 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-12 09:00:00"
  }, {
    "dt": 1520856000,
    "main": {
      "temp": 31.07,
      "temp_min": 31.07,
      "temp_max": 31.07,
      "pressure": 995.15,
      "sea_level": 1023.48,
      "grnd_level": 995.15,
      "humidity": 23,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.76, "deg": 328.001 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-12 12:00:00"
  }, {
    "dt": 1520866800,
    "main": {
      "temp": 24,
      "temp_min": 24,
      "temp_max": 24,
      "pressure": 996.47,
      "sea_level": 1025.22,
      "grnd_level": 996.47,
      "humidity": 29,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.14, "deg": 357.5 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-12 15:00:00"
  }, {
    "dt": 1520877600,
    "main": {
      "temp": 19.29,
      "temp_min": 19.29,
      "temp_max": 19.29,
      "pressure": 997.07,
      "sea_level": 1026.05,
      "grnd_level": 997.07,
      "humidity": 43,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.95, "deg": 354.003 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-12 18:00:00"
  }, {
    "dt": 1520888400,
    "main": {
      "temp": 15.92,
      "temp_min": 15.92,
      "temp_max": 15.92,
      "pressure": 996.13,
      "sea_level": 1025.26,
      "grnd_level": 996.13,
      "humidity": 55,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.59, "deg": 349.503 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-12 21:00:00"
  }, {
    "dt": 1520899200,
    "main": {
      "temp": 13.75,
      "temp_min": 13.75,
      "temp_max": 13.75,
      "pressure": 995.65,
      "sea_level": 1024.88,
      "grnd_level": 995.65,
      "humidity": 68,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.24, "deg": 325.001 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-13 00:00:00"
  }, {
    "dt": 1520910000,
    "main": {
      "temp": 22.27,
      "temp_min": 22.27,
      "temp_max": 22.27,
      "pressure": 997.22,
      "sea_level": 1026.04,
      "grnd_level": 997.22,
      "humidity": 46,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.36, "deg": 316.51 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-13 03:00:00"
  }, {
    "dt": 1520920800,
    "main": {
      "temp": 30.87,
      "temp_min": 30.87,
      "temp_max": 30.87,
      "pressure": 997.25,
      "sea_level": 1025.74,
      "grnd_level": 997.25,
      "humidity": 39,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.89, "deg": 19.5017 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-13 06:00:00"
  }, {
    "dt": 1520931600,
    "main": {
      "temp": 33,
      "temp_min": 33,
      "temp_max": 33,
      "pressure": 994.61,
      "sea_level": 1022.89,
      "grnd_level": 994.61,
      "humidity": 32,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.94, "deg": 349.011 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-13 09:00:00"
  }, {
    "dt": 1520942400,
    "main": {
      "temp": 31.98,
      "temp_min": 31.98,
      "temp_max": 31.98,
      "pressure": 993.39,
      "sea_level": 1021.57,
      "grnd_level": 993.39,
      "humidity": 23,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.11, "deg": 3.50012 },
    "rain": {},
    "sys": { "pod": "d" },
    "dt_txt": "2018-03-13 12:00:00"
  }, {
    "dt": 1520953200,
    "main": {
      "temp": 24.17,
      "temp_min": 24.17,
      "temp_max": 24.17,
      "pressure": 994.47,
      "sea_level": 1023.12,
      "grnd_level": 994.47,
      "humidity": 30,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.97, "deg": 17.5035 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-13 15:00:00"
  }, {
    "dt": 1520964000,
    "main": {
      "temp": 20.4,
      "temp_min": 20.4,
      "temp_max": 20.4,
      "pressure": 995.16,
      "sea_level": 1023.96,
      "grnd_level": 995.16,
      "humidity": 43,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.26, "deg": 2.00528 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-13 18:00:00"
  }, {
    "dt": 1520974800,
    "main": {
      "temp": 16.73,
      "temp_min": 16.73,
      "temp_max": 16.73,
      "pressure": 994.32,
      "sea_level": 1023.31,
      "grnd_level": 994.32,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.46, "deg": 345.5 },
    "rain": {},
    "sys": { "pod": "n" },
    "dt_txt": "2018-03-13 21:00:00"
  }]
};

describe('<Home /> component spec', () => {
  const mockResponse = (status, statusText, response) => {
    return new Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

  it('should render loading by default ', () => {
    const wrapper = shallow(<Home/>, { disableLifecycleMethods: true });
    expect(wrapper.contains(<div> Loading ...</div>)).toBe(true);
  });

  it('should render weather', async (done) => {
    const fakePromise = Promise.resolve(mockResponse(200, null, JSON.stringify(fakeData)));
    window.fetch = jest.fn().mockImplementationOnce(() => (fakePromise));

    const wrapper = mount(<Home />);
    await Promise.all([fakePromise]);
    setImmediate(() => {
      try {
        expect(wrapper.state('isLoading')).toEqual(false);
        expect(wrapper.state('city')).toEqual(fakeData.city);
      } catch (e) {
        done.fail(e);
      }
      done();
    });
  });
});
