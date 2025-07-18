const budgetForm = document.getElementById('budgetForm');
const budgetTable = document.getElementById('budgetTable').getElementsByTagName('tbody')[0];

budgetForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const goal = document.getElementById('goal').value;
  const goalAmount = document.getElementById('goalAmount').value;
  const currentSavings = document.getElementById('currentSavings').value;
  const progress = (currentSavings / goalAmount) * 100;

  const newRow = budgetTable.insertRow();
  newRow.innerHTML = `
    <td>${goal}</td>
    <td>$${goalAmount}</td>
    <td>$${currentSavings}</td>
    <td>${progress.toFixed(2)}%</td>
  `;

  document.getElementById('goal').value = '';
  document.getElementById('goalAmount').value = '';
  document.getElementById('currentSavings').value = '';
});
