import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slot from './slot';

configure({ adapter: new Adapter() });

describe('<Slot /> component spec', () => {
  const dummyProps = {
    onSelection: jest.fn(),
    title: 'dummy title',
  };

  const wrapper = shallow(<Slot {...dummyProps} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div with title', () => {
    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
    expect(div.prop('children')).toEqual(dummyProps.title);
  });

  it('should call a function onClick', () => {
    const div = wrapper.find('div');
    div.simulate('click');
    expect(dummyProps.onSelection).toHaveBeenCalled();
  });
});
