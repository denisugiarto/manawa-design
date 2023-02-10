//Bill Chart
let ctxCovidHumidity = document.getElementById('covidHumidityChart');

console.log(ctxCovidHumidity);
if (ctxCovidHumidity != null) {
  const covidHumidityChart = new Chart(ctxCovidHumidity, {
    type: 'line',
    data: {
      labels: [
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
      ],
      datasets: [
        {
          label: 'Tairawhiti',
          data: [30, 150, 120, 85, 50, 40, 32, 26, 58, 40, 20, 35],
          backgroundColor: '#59a2c9',
          borderColor: '#59a2c9',
          borderWidth: 2,
          fill: false,
          pointStyle: 'circle',
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.1,
          yAxisID: 'y1'
        },
        {
          label: 'All Tairawhiti rooms',
          data: [58, 64, 67, 68, 66, 65, 65.5, 62, 61, 63.5, 62, 62],
          backgroundColor: '#28a745',
          borderColor: '#28a745',
          borderWidth: 2,
          fill: false,
          borderDash: [7, 7],
          pointStyle: 'circle',
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.1,
          yAxisID: 'y'
        },
        {
          label: "All lounge's",
          data: [56, 59, 64, 65, 63, 62, 62.5, 61.5, 60, 60, 59, 59],
          backgroundColor: '#356bb5',
          borderColor: '#356bb5',
          borderWidth: 2,
          fill: false,
          borderDash: [7, 7],
          pointStyle: 'circle',
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.1,
          yAxisID: 'y'
        },
        {
          label: 'All bedrooms',
          data: [58, 62, 65, 66, 64, 63, 63.5, 60, 59, 58.5, 58, 58],
          backgroundColor: '#dc3545',
          borderColor: '#dc3545',
          borderWidth: 2,
          fill: false,
          borderDash: [7, 7],
          pointStyle: 'circle',
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.1,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      stacked: false,

      plugins: {
        legend: {
          position: 'bottom',
          display: false
        }
      },
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false
          },
          ticks: {
            color: '#B8B8B8',
            font: {
              size: 10
            }
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          border: {
            display: false,
            dash: [4, 4]
          },
          grid: {
            color: '#D9D9D9',
            tickBorderDash: [4, 4]
          },
          title: {
            display: true,
            text: 'Humidity',
            color: '#B8B8B8',
            font: {
              size: 12
            }
          },
          ticks: {
            color: '#B8B8B8',
            font: {
              size: 10
            }
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          border: {
            display: false,
            dash: [4, 4]
          },
          grid: {
            color: '#D9D9D9',
            tickBorderDash: [4, 4]
          },
          title: {
            display: true,
            text: 'Covid Case',
            color: '#B8B8B8',
            font: {
              size: 12
            }
          },
          ticks: {
            color: '#B8B8B8',
            font: {
              size: 10
            }
          },

          // grid line settings
          grid: {
            drawOnChartArea: false // only want the grid lines for one axis to show up
          }
        }
      }
    }
  });
}
