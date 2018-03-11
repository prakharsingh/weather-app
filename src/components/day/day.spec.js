import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Day from './day';

configure({ adapter: new Adapter() });

describe('<Day /> component spec', () => {
  const dummyProps = {
    onSelection: jest.fn(),
    day: { name: 'test' },
  };

  const wrapper = shallow(<Day {...dummyProps} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a button', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
  });

  it('should call a function onClick', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(dummyProps.onSelection).toHaveBeenCalled();
  });
});
