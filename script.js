document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.order-now');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const pizzaTitle = this.closest('.card-body').querySelector('.card-title').textContent;
            alert(pizzaTitle + ' has been added to your cart!');
        });
    });
});