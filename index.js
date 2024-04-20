function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
  }

  const menuBtn = document.getElementById('menuBtn');
const billDisplay = document.getElementById('bill');
const orderDetails = document.getElementById('orderDetails');

menuBtn.addEventListener('click', calculateBill);

function calculateBill() {
  let totalBill = 0;
  let orderSummary = '';

  document.querySelectorAll('.menuBody').forEach(menuItem => {
    const itemName = menuItem.querySelector('.itemName').innerText;
    const price = parseFloat(menuItem.querySelector('.prices').innerText.replace('Rs.', ''));
    const quantity = parseInt(menuItem.querySelector('select').value);

    if (quantity === 1 || quantity === 2) {
        totalBill += price * quantity;
        orderSummary += `${itemName} - Quantity: ${quantity}<br>`;
      }
  });

  billDisplay.textContent = `Total Bill: Rs.${totalBill}`;

  orderDetails.innerHTML = `<h3>Order Summary:</h3>${orderSummary}`;
}
