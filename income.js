const incomeForm = document.getElementById('incomeForm');
const incomeTable = document.getElementById('incomeTable').getElementsByTagName('tbody')[0];

incomeForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const source = document.getElementById('source').value;
  const amount = document.getElementById('incomeAmount').value;

  const newRow = incomeTable.insertRow();
  newRow.innerHTML = `
    <td>${source}</td>
    <td>$${amount}</td>
  `;

  document.getElementById('source').value = '';
  document.getElementById('incomeAmount').value = '';
});
