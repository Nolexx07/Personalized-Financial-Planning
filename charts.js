const ctx = document.getElementById('expenseChart').getContext('2d');

const expenseData = {
  labels: ['Food', 'Rent', 'Utilities', 'Entertainment'],
  datasets: [{
    data: [500, 1000, 300, 200],
    backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
  }]
};

const expenseChart = new Chart(ctx, {
  type: 'pie',
  data: expenseData,
  options: {
    responsive: true,
  }
});
