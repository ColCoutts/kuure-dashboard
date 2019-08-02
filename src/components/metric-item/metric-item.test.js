import React from 'react';
import { shallow } from 'enzyme';
import MetricItem from './metric-item-component';

describe('MetricItem component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<MetricItem title="Test" metric="lots" />);
    expect(wrapper).toMatchSnapshot();
  });
});
