import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherItem from './weather-item';

configure({ adapter: new Adapter() });

describe('<WeatherItem /> component spec', () => {
  const dummyProps = {
    weather: { icon: 'fake-icon', description: 'fake description'},
    info: { temp: 1, temp_max: 2, temp_min: 3 },
    wind: { speed: 4 }
  };

  const wrapper = shallow(<WeatherItem {...dummyProps} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an image', () => {
    const image = wrapper.find('img');

    expect(image).toHaveLength(1);
  });

  it('should render a list', () => {
    const list = wrapper.find('ul');

    expect(list).toHaveLength(1);
  });

  it('should render five headings', () => {
    const h3 = wrapper.find('h3');
    const h5 = wrapper.find('h5');

    expect(h3).toHaveLength(1);
    expect(h5).toHaveLength(4);
  });
});
