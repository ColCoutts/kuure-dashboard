import React from 'react';
import { shallow } from 'enzyme';
import Collabs from './collabs-component';

describe('collabs component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<Collabs />);
    expect(wrapper).toMatchSnapshot();
  });
});
