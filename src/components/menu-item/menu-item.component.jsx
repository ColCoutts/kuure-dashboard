import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, description, imageUrl, history, match, linkUrl }) => (
  <div>
    <div
    className='background-image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    ></div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <h2>{description}</h2>
      <span>REQUEST</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
