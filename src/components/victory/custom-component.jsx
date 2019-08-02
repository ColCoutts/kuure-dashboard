import React, { Component } from 'react';
import { VictoryLabel, VictoryAxis, VictoryLine } from 'victory';

class CustomTheme extends Component {
  render() {
    const styles = this.getStyles();
    const dataSetOne = this.getDataSetOne();
    const dataSetTwo = this.getDataSetTwo();
    const tickValues = this.getTickValues();

    return (
      <div>
        <svg style={styles.parent} viewBox="-50 0 550 450">

          {/* Create stylistic elements */}
          <rect x="420" y="10" width="20" height="20" fill="#458ca8"/>

          {/* Define labels */}
          <VictoryLabel x={25} y={24} style={styles.title}
            text="An outlook"
          />
          <VictoryLabel x={25} y={55} style={styles.labelOne}
            text={"Economy \n % change on a year earlier"}
          />


          <g transform={"translate(0, 40)"}>
            {/* Add shared independent axis */}
            <VictoryAxis
              scale="time"
              standalone={false}
              style={styles.axisYears}
              tickValues={tickValues}
              
              
            />

            {/*
              Add the dependent axis for the first data set.
              Note that all components plotted against this axis will have the same y domain
            */}
            <VictoryAxis dependentAxis
              domain={[0, 50000]}
              offsetX={50}
              orientation="left"
              standalone={false}
              style={styles.axisOne}
            />

            {/* dataset one */}
            <VictoryLine
              data={dataSetOne}
              domain={{
                x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                y: [-10, 15]
              }}
              interpolation="monotoneX"
              scale={{x: "time", y: "linear"}}
              standalone={false}
              style={styles.lineOne}
            />

            {/*
              Add the dependent axis for the second data set.
              Note that all components plotted against this axis will have the same y domain
            */}
            <VictoryAxis dependentAxis
              domain={[0, 50]}
              orientation="right"
              standalone={false}
              style={styles.axisTwo}
            />

            {/* dataset two */}
            <VictoryLine
              data={dataSetTwo}
              domain={{
                x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                y: [0, 50]
              }}
              interpolation="monotoneX"
              scale={{x: "time", y: "linear"}}
              standalone={false}
              style={styles.lineTwo}
            />
          </g>
        </svg>
      </div>
    );
  }

  getDataSetOne() {
    return [
      {x: 5, y: 12},
      {x: 45, y: 10},
      {x: 33, y: 11},
      {x: 88, y: 5},
      {x: 33, y: 4},
      {x: 266, y: 6},
      {x: 38000, y: 5},
      {x: new Date(2005, 1, 1), y: 7},
      {x: new Date(2006, 1, 1), y: 8},
      {x: new Date(2007, 1, 1), y: 9},
      {x: new Date(2008, 1, 1), y: -8.5},
      {x: new Date(2009, 1, 1), y: -9},
      {x: new Date(2010, 1, 1), y: 5},
      {x: new Date(2013, 1, 1), y: 1},
      {x: new Date(2014, 1, 1), y: 2},
      {x: new Date(2015, 1, 1), y: -5}
    ];
  }

  getDataSetTwo() {
    return [
      {x: new Date(2000, 1, 1), y: 5},
      {x: new Date(2003, 1, 1), y: 6},
      {x: new Date(2004, 1, 1), y: 4},
      {x: new Date(2005, 1, 1), y: 10},
      {x: new Date(2006, 1, 1), y: 12},
      {x: new Date(2007, 2, 1), y: 48},
      {x: new Date(2008, 1, 1), y: 19},
      {x: new Date(2009, 1, 1), y: 31},
      {x: new Date(2011, 1, 1), y: 49},
      {x: new Date(2014, 1, 1), y: 40},
      {x: new Date(2015, 1, 1), y: 21}
    ];
  }

  getTickValues() {
    return [
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
    ];
  }

  getStyles() {
    const BLUE_COLOR = "#00a3de";
    const RED_COLOR = "#7c270b";

    return {
      parent: {
        background: "#ccdee8",
        boxSizing: "border-box",
        display: "inline",
        padding: 0,
        fontFamily: "'Fira Sans', sans-serif",
        width: "100%",
        height: "auto"
      },
      title: {
        textAnchor: "start",
        verticalAnchor: "end",
        fill: "#000000",
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: "bold"
      },
      labelNumber: {
        textAnchor: "middle",
        fill: "#ffffff",
        fontFamily: "inherit",
        fontSize: "14px"
      },

      // INDEPENDENT AXIS
      axisYears: {
        axis: { stroke: "black", strokeWidth: 1},
        ticks: {
          stroke: "black",
          strokeWidth: 1
        },
        tickLabels: {
          fill: "black",
          fontFamily: "inherit",
          fontSize: 16
        }
      },

      // DATA SET ONE
      axisOne: {
        grid: {
          stroke: (tick) =>
            tick === -10 ? "transparent" : "#ffffff",
          strokeWidth: 2
        },
        axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
        ticks: { strokeWidth: 0 },
        tickLabels: {
          fill: BLUE_COLOR,
          fontFamily: "Open Sans",
          fontSize: 10
        }
      },
      labelOne: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontSize: 12,
        fontStyle: "italic"
      },
      lineOne: {
        data: { stroke: BLUE_COLOR, strokeWidth: 4.5 }
      },
      axisOneCustomLabel: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontWeight: 300,
        fontSize: 21
      },

      // DATA SET TWO
      axisTwo: {
        axis: { stroke: RED_COLOR, strokeWidth: 0 },
        tickLabels: {
          fill: RED_COLOR,
          fontFamily: "inherit",
          fontSize: 16
        }
      },
      labelTwo: {
        textAnchor: "end",
        fill: RED_COLOR,
        fontFamily: "inherit",
        fontSize: 12,
        fontStyle: "italic"
      },
      lineTwo: {
        data: { stroke: RED_COLOR, strokeWidth: 4.5 }
      },

      // HORIZONTAL LINE
      lineThree: {
        data: { stroke: "#e95f46", strokeWidth: 2 }
      }
    };
  }
}

export default CustomTheme;
