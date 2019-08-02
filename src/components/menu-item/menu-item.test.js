import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './menu-item.component';

describe('menuitem component', () => {
  it('renders a snapshot', () => {
    const wrapper =
    shallow(<MenuItem
      title="test"
      description="nother test"
      imageUrl="/image"
      history=""
      match=""
      linkUrl="testUrl"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
