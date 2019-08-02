import React, { Component } from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup
} from 'victory';
import data from './victory.data.js';

// each victory bar is a metric: commissions, totalViews, totalSales

class Victory extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }

  render() {
    return(
      <VictoryChart>
        <VictoryGroup
          offset={5}
          colorScale={"qualitative"}
        >
          <VictoryBar
          style={{ data: { stroke: '2px solid #f2f2' }}}
            categories={
              {
                x: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ]
              }
            }
            data={
              [
                { x: 1, y: 10 },
                { x: 2, y: 10 },
                { x: 3, y: 10 },
                { x: 4, y: 10 },
                { x: 5, y: 10 },
                { x: 6, y: 10 },
                { x: 7, y: 10 },
                { x: 8, y: 10 },
                { x: 9, y: 10 },
                { x: 10, y: 10 },
                { x: 11, y: 10 },
                { x: 12, y: 10 }
              ]
            }
            
          />
          <VictoryBar
            data={
              [
                { x: 1, y: 20 },
                { x: 2, y: 20 },
                { x: 3, y: 20 },
                { x: 4, y: 20 },
                { x: 5, y: 20 },
                { x: 6, y: 20 },
                { x: 7, y: 20 },
                { x: 8, y: 20 },
                { x: 9, y: 20 },
                { x: 10, y: 20 },
                { x: 11, y: 20 },
                { x: 12, y: 20 }
              ]
            }
          />
          <VictoryBar
            data={
              [
                { x: 1, y: 40 },
                { x: 2, y: 40 },
                { x: 3, y: 40 },
                { x: 4, y: 40 },
                { x: 5, y: 40 },
                { x: 6, y: 40 },
                { x: 7, y: 40 },
                { x: 8, y: 40 },
                { x: 9, y: 40 },
                { x: 10, y: 40 },
                { x: 11, y: 40 },
                { x: 12, y: 40 },
              ]
            }
          />
         
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default Victory;
