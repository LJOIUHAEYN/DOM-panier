document.addEventListener("DOMContentLoaded", function() {
    // Quantity adjustment buttons
    const plusButtons = document.querySelectorAll('.card .btn-primary:nth-of-type(2)');
    const minusButtons = document.querySelectorAll('.card .btn-primary:first-of-type');
    const quantitySpans = document.querySelectorAll('.card .d-grid span');
    

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantitySpans[index].textContent);
            quantity++;
            quantitySpans[index].textContent = quantity;
            updateTotalPrice();
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantitySpans[index].textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpans[index].textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Delete items from the cart
    const deleteButtons = document.querySelectorAll('.card .bg-red-500');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = button.closest('.card');
            card.remove();
            updateTotalPrice();
        });
    });

    /*look code of favorit in html
    ??????????????????????????????
    ??????????????????????????????
    
    
    */
   // like button 


    // Update total price
    function updateTotalPrice() {
        let totalPrice = 0;
        const prices = document.querySelectorAll('.card .bg-black-100');
        const quantities = document.querySelectorAll('.card .d-grid span');
        for (let i = 0; i < prices.length; i++) {
            const price = parseFloat(prices[i].textContent.replace('$', ''));
            const quantity = parseInt(quantities[i].textContent);
            totalPrice += price * quantity;
        }
        document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    }
});

