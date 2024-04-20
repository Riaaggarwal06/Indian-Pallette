function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
  }


// const orderSummaryDisplay = document.getElementById('orderSummary');
// const totalOrderSummaryDisplay = document.getElementById('totalOrderSummary');
// const totalBillDisplay = document.getElementById('totalBill');
// const dropdowns = document.querySelectorAll('.quantity select');

// let totalBill = 0;

// dropdowns.forEach(dropdown => {
//   dropdown.addEventListener('change', updateOrderSummaryAndTotalBill);
// });

// function updateOrderSummaryAndTotalBill() {
//   totalBill = 0;
//   let orderSummary = ''; // Initialize the order summary

//   dropdowns.forEach(dropdown => {
//     const menuItem = dropdown.closest('.menuBody');
//     const itemName = menuItem.querySelector('.itemName').innerText;
//     const price = parseFloat(menuItem.querySelector('.prices').innerText.replace('Rs.', ''));
//     const quantity = parseInt(dropdown.value);

//     if (quantity >= 1) {
//       totalBill += price * quantity;
//       const itemTotal = price * quantity;
//       orderSummary += `${itemName} - ${quantity} x ${price} = ${itemTotal}<br>`;
//     }
//   });

//   // Clear the existing order summary before updating
//   orderSummaryDisplay.innerHTML = '';

//   // Update the order summary
//   if (orderSummary !== '') {
//     orderSummaryDisplay.innerHTML = orderSummary;
//   }

//   // Update total bill display
//   totalBillDisplay.textContent = `Total Bill: Rs.${totalBill}`;

//   // Update total order summary
//   totalOrderSummaryDisplay.innerHTML = `<strong>Total Bill: Rs.${totalBill}</strong>`;
// }

const orderSummaryDisplay = document.getElementById('orderSummary');
const totalBillDisplay = document.getElementById('totalBill');
const dropdowns = document.querySelectorAll('.quantity select');

let totalBill = 0;

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', updateOrderSummaryAndTotalBill);
});

function updateOrderSummaryAndTotalBill() {
    totalBill = 0;
    let orderSummary = ''; // Initialize the order summary

    dropdowns.forEach(dropdown => {
        const menuItem = dropdown.closest('.menuBody');
        const itemName = menuItem.querySelector('.itemName').innerText;
        const price = parseFloat(menuItem.querySelector('.prices').innerText.replace('Rs.', ''));
        const quantity = parseInt(dropdown.value);

        if (quantity >= 1) {
            totalBill += price * quantity;
            const itemTotal = price * quantity;
            orderSummary += `${itemName} - ${quantity} x ${price} = ${itemTotal}<br>`;
        }
    });

    // Update the order summary display
    orderSummaryDisplay.innerHTML = `<h3>Order Summary:</h3>${orderSummary}`;

    // Update the total bill display
    totalBillDisplay.textContent = `Total Bill: Rs.${totalBill}`;
}
