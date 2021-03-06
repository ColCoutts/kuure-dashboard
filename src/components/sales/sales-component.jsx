import React, { Component } from 'react';
import './sales.styles.scss';
import metrics from './sales.data.js';
// import Victory from '../victory/victory-component';
import MetricItem from '../metric-item/metric-item-component';
import CustomTheme from '../victory/custom-component';

class Sales extends Component {
  constructor() {
    super();
    this.state = {
      metrics: metrics
    }
  }

  render() {
    const { metrics } = this.state;
    return(
        <div className='sales-container'>
          <div className='sales-title'>
            <h1>Sales</h1>
          </div>
          <div className='data-visualizer'>
            <CustomTheme />
          </div>
          <div className='sales-menu'>
            {
              metrics.map(({id, ...otherMetricProps}) => (
                <MetricItem key={id} {...otherMetricProps} />
              ))
            }
          </div>
        </div>
    )
  }
}

export default Sales;
