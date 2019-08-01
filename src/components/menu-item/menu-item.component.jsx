import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, description, imageUrl, history, match, linkUrl }) => (
  <div
  className='menu-item'
  onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
    className='background-image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    ></div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{description}</h2>
      <h3>REQUEST</h3>
    </div>
  </div>
);

export default withRouter(MenuItem);
