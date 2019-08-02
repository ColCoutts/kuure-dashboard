import React from 'react';
import { shallow } from 'enzyme';
import Header from './header-component';

describe('victory component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
