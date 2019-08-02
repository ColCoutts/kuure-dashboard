import React from 'react';
import { shallow } from 'enzyme';
import Header from './header-component';

describe('header component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
