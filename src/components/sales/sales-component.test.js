import React from 'react';
import { shallow } from 'enzyme';
import Sales from './sales-component';

describe('sales component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<Sales />);
    expect(wrapper).toMatchSnapshot();
  });
});
