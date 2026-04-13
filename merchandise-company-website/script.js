// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Show alert
        alert(`✅ "${productName}" (${productPrice}) added to cart!`);
        
        // Change button text temporarily
        const originalText = this.textContent;
        this.textContent = '✓ Added!';
        this.style.backgroundColor = '#4ECDC4';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 2000);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Welcome message in console
console.log('%cWelcome to TrendStyle Merchandise! 🛍️', 'font-size: 20px; font-weight: bold; color: #FF6B6B;');
console.log('%cThank you for visiting our store!', 'font-size: 14px; color: #4ECDC4;');
