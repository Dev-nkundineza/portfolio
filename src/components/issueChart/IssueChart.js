import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

class IssueChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [IssueData["open"], IssueData["closed"]],
          backgroundColor: ["#28a745", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
        },
      ],
    };

    return (
      <div className="issue-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="issue-chart-header">Issue Distribution</h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default IssueChart;