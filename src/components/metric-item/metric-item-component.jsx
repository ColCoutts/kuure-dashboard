import React from 'react';
import './metric-item.styles.scss';

const MetricItem = ({ title, metric, color }) => (
  <div className={`${color} metric-item`}>
    <h1>{metric}</h1>
    <h2>{title}</h2>
  </div>
)

export default MetricItem;
