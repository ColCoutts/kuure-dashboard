import React, { Component } from 'react';
import './collabs.styles.scss';
import sections from './collabs.data.js';
import MenuItem from '../menu-item/menu-item.component';

class Collabs extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <div>
        <div>
          <h1>Collabs</h1>
          <h2>Available Products</h2>
        </div>
        <div className='collabs-menu'>
          {
            sections.map(({id, ...otherProps}) => (
              <MenuItem key={id} {...otherProps} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Collabs;
