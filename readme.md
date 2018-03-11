# Weather App for 5 day forecast

http://prakharsingh.github.io/weather-app

This app fetches data from openweather 5day/3hr api for Gurgaon, India Location and renders it in a human readable form.
The data is segregated day-wise and slot-wise as each day has upto 8 slots of 3hrs each.
The app has been developed over Facebook's create-react-app boilerplate. See https://github.com/facebook/create-react-app
## For devs

### Pre-requisites:
* Node JS stable -- see .nvmrc
* Install all dependencies `npm install`

### Running the App
`npm start` and see http://localhost:3000

### Production Build
`npm run build` and serve the 'build' folder

### Testing
All spec files are in their respective component folders. To run tests do `npm run test`.
Jest and Enzyme are used for testing see: https://github.com/facebook/jest and http://airbnb.io/enzyme/
