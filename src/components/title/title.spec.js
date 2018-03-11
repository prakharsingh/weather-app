import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './title';

configure({ adapter: new Adapter() });

describe('<Title /> component spec', () => {
  const dummyProps = {
    city: { name: 'test', country: 'mock'},
    date: 1520553600,
  };

  const dateOptions = {
    year: 'numeric', month: 'short', day: 'numeric', weekday: 'short',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
  };


  const wrapper = shallow(<Title {...dummyProps} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render two headings', () => {
    const h3 = wrapper.find('h3');
    const h5 = wrapper.find('h5');

    expect(h3).toHaveLength(1);
    expect(h5).toHaveLength(1);

    expect(h3.prop('children')).toEqual(`${dummyProps.city.name}, ${dummyProps.city.country}`);
    expect(h5.prop('children')).toEqual(new Date(dummyProps.date*1000).toLocaleString('en-us', dateOptions));
  });
});
