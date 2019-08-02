import React, { Component } from 'react';
import { VictoryLabel, VictoryAxis, VictoryLine } from 'victory';

class CustomTheme extends Component {
  render() {
    const styles = this.getStyles();
    const dataSetOne = this.getDataSetOne();
    const dataSetTwo = this.getDataSetTwo();
    const dataSetThree = this.getDataSetThree();
    const tickValues = this.getTickValues();

    return (
      <div>
        <svg style={styles.parent} viewBox="-50 30 550 450">

          <VictoryLabel x={0} y={55} style={styles.labelOne}
            text={"2019 Dashboard"}
          />

          <g transform={"translate(0, 40)"}>

            <VictoryAxis
              domain={[0, 12]}
              standalone={false}
              style={styles.axisYears}
              tickValues={tickValues}
            />

            <VictoryAxis dependentAxis
              domain={[0, 20000]}
              offsetX={50}
              orientation="left"
              standalone={false}
              style={styles.axisOne}
            />

            {/* dataset one */}
            <VictoryLine
              data={dataSetOne}
              domain={{x: [1, 12], y: [0, 20000]}}
              standalone={false}
              style={styles.lineOne}
            />

            {/* dataset two */}
            <VictoryLine
              data={dataSetTwo}
              domain={{x: [1, 12], y: [0, 20000]}}
              standalone={false}
              style={styles.lineTwo}
            />

            {/* dataset three */}
            <VictoryLine
              data={dataSetThree}
              domain={{x: [1, 12], y: [0, 20000]}}
              standalone={false}
              style={styles.lineThree}
            />
          </g>
        </svg>
      </div>
    );
  }

// commissions data set 
  getDataSetOne() {
    return [
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
      { x: 12, y: 2550 }
    ];
  }

  // totalSales data set 
  getDataSetTwo() {
      return [
        { x: 1, y: 600 },
        { x: 2, y: 760 },
        { x: 3, y: 870 },
        { x: 4, y: 780 },
        { x: 5, y: 950 },
        { x: 6, y: 960 },
        { x: 7, y: 1200 },
        { x: 8, y: 1140 },
        { x: 9, y: 1350 },
        { x: 10, y: 430 },
        { x: 11, y: 540 },
        { x: 12, y: 820 }
      ];
  }

  // totalViews data set 
  getDataSetThree() {
      return [
        { x: 1, y: 600 },
        { x: 2, y: 1760 },
        { x: 3, y: 1870 },
        { x: 4, y: 1780 },
        { x: 5, y: 1950 },
        { x: 6, y: 1960 },
        { x: 7, y: 11200 },
        { x: 8, y: 11140 },
        { x: 9, y: 13150 },
        { x: 10, y: 11430 },
        { x: 11, y: 11540 },
        { x: 12, y: 18120 }
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
    const BLUE_COLOR = "#47E4B1";
    const RED_COLOR = "#F1373B";
    const PURPLE_COLOR = "#9C528B";
    const GRAY_COLOR = "#45464C";

    return {
      parent: {
        boxSizing: "border-box",
        display: "inline",
        fontFamily: "'Open Sans', sans-serif",
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
        axis: { stroke: GRAY_COLOR, strokeWidth: 1},
        ticks: {
          stroke: GRAY_COLOR,
          strokeWidth: 2,
          size: 5
        },
        tickLabels: {
          fill: GRAY_COLOR,
          fontFamily: "inherit",
          fontSize: 10,
        }
      },

      // DATA SET ONE
      axisOne: {
        grid: {
          stroke: (tick) =>
            tick === -10 ? "transparent" : GRAY_COLOR,
          strokeWidth: 2
        },
        axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
        ticks: { strokeWidth: 2},
        tickLabels: {
          fill: GRAY_COLOR,
          fontFamily: "Open Sans",
          fontSize: 10
        }
      },
      labelOne: {
        fill: GRAY_COLOR,
        fontFamily: "Open Sans",
        fontSize: 14,
        fontWeight: 300
      },
      lineOne: {
        data: { stroke: BLUE_COLOR, strokeWidth: 2.5 }
      },
      axisOneCustomLabel: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontWeight: 300,
        fontSize: 21
      },

      // DATA SET TWO
      labelTwo: {
        textAnchor: "end",
        fill: RED_COLOR,
        fontFamily: "inherit",
        fontSize: 12,
        fontStyle: "italic"
      },
      lineTwo: {
        data: { stroke: RED_COLOR, strokeWidth: 2.5 }
      },
      lineThree: {
        data: { stroke: PURPLE_COLOR, strokeWidth: 2.5 }
      }
    };
  }
}

export default CustomTheme;
