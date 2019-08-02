import React from 'react';
import { shallow } from 'enzyme';
import CustomTheme from './custom-component';

describe('victory component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<CustomTheme />);
    expect(wrapper).toMatchSnapshot();
  });
});
