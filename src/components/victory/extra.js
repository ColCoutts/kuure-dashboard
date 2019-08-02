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
        {/* commmissions by month */}

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
                { x: 1, y: 120 },
                { x: 2, y: 140 },
                { x: 3, y: 120 },
                { x: 4, y: 158 },
                { x: 5, y: 250 },
                { x: 6, y: 340 },
                { x: 7, y: 540 },
                { x: 8, y: 670 },
                { x: 9, y: 780 },
                { x: 10, y: 890 },
                { x: 11, y: 900 },
                { x: 12, y: 850 }
              ]
            }
            
          />

          {/* totalSales by month */}

          <VictoryBar
            data={
              [
                { x: 1, y: 600 },
                { x: 2, y: 760 },
                { x: 3, y: 870 },
                { x: 4, y: 780 },
                { x: 5, y: 950 },
                { x: 6, y: 960 },
                { x: 7, y: 1200 },
                { x: 8, y: 1140 },
                { x: 9, y: 1350 },
                { x: 10, y: 1430 },
                { x: 11, y: 1540 },
                { x: 12, y: 1820 }
              ]
            }
          />

          {/* total views by month */}

          <VictoryBar
            data={
              [
                { x: 1, y: 840 },
                { x: 2, y: 1140 },
                { x: 3, y: 2340 },
                { x: 4, y: 3240 },
                { x: 5, y: 2940 },
                { x: 6, y: 4540 },
                { x: 7, y: 5640 },
                { x: 8, y: 8740 },
                { x: 9, y: 8840 },
                { x: 10, y: 8940 },
                { x: 11, y: 10940 },
                { x: 12, y: 12040 },
              ]
            }
          />
         
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default Victory;
