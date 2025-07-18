const form = document.getElementById('spendingForm');
const spendingTable = document.getElementById('spendingTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  const newRow = spendingTable.insertRow();
  newRow.innerHTML = `
    <td>${category}</td>
    <td>$${amount}</td>
  `;

  document.getElementById('category').value = '';
  document.getElementById('amount').value = '';
});
