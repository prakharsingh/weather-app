import React from 'react';
import { fetchWeather } from '../../api/open-weather';
import { Day, Title, Slot, WeatherItem } from '../../components';
import styles from './home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      city: null,
      weather: [],
      selectedDay: null,
      selectedSlot: null,
      error: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await fetchWeather('37bb8b26b73d027506e5bfa6169cea89');
    const { message, city, list} = await response.json();

    if(response.status >= 200 && response.status <=300) {
      const groupedWeather = list.reduce((sorted, item) => {
        const day =  new Date(item.dt * 1000).getDay();
        const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
        const exists = sorted.find((item) => (item.name === dayName));

        if(!exists) {
          sorted = sorted.concat([{ name: dayName, items: [item]}]);
        } else {
          const idx = sorted.indexOf(exists);
          exists.items.push(item);
          sorted.splice(idx, 1, exists);
        }
        return sorted;
      }, []);

      return this.setState({
        city: city,
        weather: groupedWeather,
        selectedDay: groupedWeather[0],
        selectedSlot: groupedWeather[0].items[0],
        isLoading: false,
      });
    }

    this.setState({ error: message, isLoading: false});
  }

  render() {
    const { city, weather, selectedDay, selectedSlot, error, isLoading } = this.state;

    if (isLoading) {
      return <div> Loading ...</div>;
    }

    if (error) {
      return <h2 style={{ color: 'red' }}> {error} </h2>;
    }

    return (
      <div className={styles.container}>
        <Title city={city} date={selectedSlot && selectedSlot.dt}/>
        <div className={styles.block}>
          <div className={styles.weatherContainer}>
            {
              selectedSlot &&
              <WeatherItem
                weather={selectedSlot.weather[0]}
                wind={selectedSlot.wind}
                info={selectedSlot.main}
              />
            }
          </div>
          <div className={styles.daysContainer}>
            {
              weather.map((day, idx) => (
                <Day
                  key={idx}
                  day={day}
                  onSelection={this.handleDaySelection}
                />
              ))
            }
          </div>
        </div>
        <div className={styles.slotsContainer}>
          {
            selectedDay && selectedDay.items.map((item, idx) => {
              const date = new Date(item.dt * 1000);
              const time = `${date.getHours()}:${date.getMinutes()}`;

              return (
                <Slot
                  key={idx}
                  title={time}
                  slot={item}
                  onSelection={this.handleSlotSelection}
                />
              );
            })
          }
        </div>
      </div>
    );
  };

  handleDaySelection = (day) => {
    this.setState({ selectedDay: day, selectedSlot: day.items[0] });
  };

  handleSlotSelection = (slot) => {
    this.setState({ selectedSlot: slot });
  }
}

export default Home;
