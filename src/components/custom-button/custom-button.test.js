import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './custom-button.component';

describe('button component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<CustomButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
