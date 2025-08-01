const products = [
    {
        id: 1,
        frontImg: "./images/products/product1.png",
        backImg: "./images/products/product6.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        id: 2,
        frontImg: "./images/products/product2.png",
        backImg: "./images/products/product7.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        id: 3,
        frontImg: "./images/products/product3.png",
        backImg: "./images/products/product1.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
      id: 4,
        frontImg: "./images/products/product4.png",
        backImg: "./images/products/product5.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
      id: 5,
        frontImg: "./images/products/product7.png",
        backImg: "./images/products/product6.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
      id: 6,
        frontImg: "./images/products/product4.png",
        backImg: "./images/products/product5.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        id: 7,
        frontImg: "./images/products/product7.png",
        backImg: "./images/products/product6.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    }
];


const container = document.querySelector('.product-container');

const cards = products.map((product) => {
    return `
         <div class="products data-id="${product.id}">
      <div class="product-img">
        <img class="product-img-front" src="${product.frontImg}" alt="Front View" />
        <img class="product-img-back" src="${product.backImg}" alt="Back View" />
        <span class="badge">${product.badge}</span>
        <button class="quick-view">QUICK VIEW</button>
        <span class="wishlist">&#10084;</span>
      </div>
      <div class="product-info">
        <h3 class="brand">${product.brand}</h3>
        <p class="description">${product.description}</p>
        <div class="price">${product.price}</div>
        <button class="add-to-cart">ADD TO CART</button>
      </div>
    </div>
    `;
}).join('');


container.innerHTML = cards;


// CARDS COROUSEL

document.querySelector('.arrow.left').addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});





// On card click -> store ID in localStorage -> redirect




// add to cart


// Handle Add to Cart
container.addEventListener('click', e => {
  // ADD TO CART
  if (e.target.classList.contains('add-to-cart')) {
    const card = e.target.closest('.products');
    const productId = parseInt(card.dataset.id);

    const productToAdd = products.find(p => p.id === productId);

    if (productToAdd) {
      // Get current cart or initialize
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if product already in cart
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.qty += 1; // Increase quantity
      } else {
        cart.push({ ...productToAdd, qty: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    }
  }

  // QUICK VIEW (redirect)
  const card = e.target.closest('.products');
  if (!card) return;
  const productId = card.dataset.id;
  if (!e.target.classList.contains('add-to-cart')) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'products.html';
  }
});





