function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
  }

const orderSummaryDisplay = document.querySelector('#orderSummary .orders');
const totalBillDisplay = document.getElementById('totalBill');
const dropdowns = document.querySelectorAll('.quantity select');

let totalBill = 0;

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', updateOrderSummaryAndTotalBill);
});

function updateOrderSummaryAndTotalBill() {
    totalBill = 0;
    let orderSummary = ''; 

    let maxItemNameLength = 25;
    let maxQuantityLength = 3;
    let maxTotalLength = 5;

    dropdowns.forEach(dropdown => {
        const menuItem = dropdown.closest('.menuBody');
        const itemName = menuItem.querySelector('.itemName').innerText;
        const price = parseFloat(menuItem.querySelector('.prices').innerText.replace('Rs.', ''));
        const quantity = parseInt(dropdown.value);

        if (quantity >= 1) {
            totalBill += price * quantity;
            maxItemNameLength = Math.max(maxItemNameLength, itemName.length);
            maxQuantityLength = Math.max(maxQuantityLength, quantity.toString().length + price.toFixed(2).length + 3); // "x" and price
            maxTotalLength = Math.max(maxTotalLength, (price * quantity).toFixed(2).length);
        }
    });

    dropdowns.forEach(dropdown => {
        const menuItem = dropdown.closest('.menuBody');
        const itemName = menuItem.querySelector('.itemName').innerText;
        const price = parseFloat(menuItem.querySelector('.prices').innerText.replace('Rs.', ''));
        const quantity = parseInt(dropdown.value);

        if (quantity >= 1) {
            
            const itemNameSpaces = ' '.repeat(maxItemNameLength - itemName.length );
            const quantitySpaces = ' '.repeat(maxQuantityLength - (quantity.toString().length + price.toFixed(2).length + 3));
            const totalSpaces = ' '.repeat(maxTotalLength - (price * quantity).toFixed(2).length);

            
            const formattedItem = `${itemName}${itemNameSpaces}${quantity} x ${price.toFixed(2)}${quantitySpaces} = ${(price * quantity).toFixed(2)}<br>`;
            orderSummary += formattedItem;
        }
    });

    
    orderSummaryDisplay.innerHTML = orderSummary;

    
    totalBillDisplay.textContent = `Total Bill: Rs.${totalBill.toFixed(2)}`;
}


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExampleSlidesOnly');
    const carouselInstance = new bootstrap.Carousel(carousel);
  
    carouselInstance._config.interval = 2000; 
  
    carousel.addEventListener('slid.bs.carousel', function(event) {
      if (carouselInstance._activeElement === carousel.lastElementChild) {
        setTimeout(function() {
          carouselInstance.to(0); 
        }, 2000); 
      }
    });
  });
  