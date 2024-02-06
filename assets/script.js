const labels = ['May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16'];

const chartUsers = document.getElementById('users-chart');
new Chart (chartUsers, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: '',
      data: [0, 3000, 2000, 3700, 500, 2500, 1500],
      borderWidth: 1,
      borderColor: '#7d78c8',
      backgroundColor: '#f3f3ff',
      fill: 'start'
    }]
  },
  options: {
    scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: true,
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      },
      labels: {
        display: false
      }
    },
    maintainAspectRatio: false
  }
})

const chartNewUsers = document.getElementById('new-users-chart');
new Chart(chartNewUsers, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: '',
      data: [500, 1800, 2500, 1400, 2500, 2000, 3000],
      borderWidth: 1,
      borderColor: '#7d78c8',
      backgroundColor: '#f3f3ff',
      fill: 'start'
    }]
  },
  options: {
    scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: true,
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      },
      labels: {
        display: false
      }
    },
    maintainAspectRatio: false
  }
});