document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const mobileToggle = document.querySelector('.navbar__mobile-toggle');
    const nav = document.querySelector('.navbar__nav');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active'); 
        });
    }


    const productsData = [
        { category: 'Vegetable', name: 'Calabrese Broccoli', priceOld: '$20.00', priceNew: '$13.00', img: '../assets/product_1.png' },
        { category: 'Fresh', name: 'Fresh Banana Fruites', priceOld: '$20.00', priceNew: '$14.00', img: '../assets/product_2.png' },
        { category: 'Millets', name: 'White Nuts', priceOld: '$20.00', priceNew: '$15.00', img: '../assets/product_3.png' },
        { category: 'Vegetable', name: 'Vegan Red Tomato', priceOld: '$20.00', priceNew: '$17.00', img: '../assets/product_4.png' },
        { category: 'Health', name: 'Mung Bean', priceOld: '$20.00', priceNew: '$11.00', img: '../assets/product_5.png' },
        { category: 'Nuts', name: 'Brown Hazelnut', priceOld: '$20.00', priceNew: '$12.00', img: '../assets/product_6.png' },
        { category: 'Fresh', name: 'Eggs', priceOld: '$20.00', priceNew: '$17.00', img: '../assets/product_7.png' },
        { category: 'Fresh', name: 'Zelco Suji Elaichi Rusk', priceOld: '$20.00', priceNew: '$15.00', img: '../assets/product_8.png' }
    ];
    
    const offerProductsData = [
        { category: 'Vegetable', name: 'Mung Bean', priceOld: '$20.00', priceNew: '$11.00', img: '../assets/offer_1.png' },
        { category: 'Vegetable', name: 'Brown Hazelnut', priceOld: '$20.00', priceNew: '$12.00', img: '../assets/offer_2.png' },
        { category: 'Vegetable', name: 'Onion', priceOld: '$20.00', priceNew: '$17.00', img: '../assets/offer_3.png' },
        { category: 'Vegetable', name: 'Cabbage', priceOld: '$20.00', priceNew: '$17.00', img: '../assets/offer_4.png' },
    ];


    function createProductCard(product) {
        return `
            <div class="product-card">
                <span class="product-card__tag">${product.category}</span>
                <img src="${product.img}" alt="${product.name}" class="product-card__image">
                <h4 class="product-card__name">${product.name}</h4>
                <div class="product-card__footer">
                    <p class="product-card__price"><s>${product.priceOld}</s> ${product.priceNew}</p>
                    <div class="product-card__rating">★★★★★</div>
                </div>
            </div>
        `;
    }

    const mainProductGrid = document.querySelector('.products .product-grid');
    const offerProductGrid = document.querySelector('.offer .product-grid');

    if (mainProductGrid) {
        mainProductGrid.innerHTML = productsData.map(createProductCard).join('');
    }
    
    if (offerProductGrid) {
        offerProductGrid.innerHTML = offerProductsData.map(createProductCard).join('');
    }

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mainProductGrid.innerHTML += productsData.slice(0, 4).map(createProductCard).join('');
            loadMoreBtn.textContent = 'Loaded All!';
            loadMoreBtn.disabled = true;
        });
    }

});