const products = [
    {
        frontImg: "./images/products/product1.png",
        backImg: "./images/products/product6.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        frontImg: "./images/products/product2.png",
        backImg: "./images/products/product7.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        frontImg: "./images/products/product3.png",
        backImg: "./images/products/product1.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        frontImg: "./images/products/product4.png",
        backImg: "./images/products/product5.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        frontImg: "./images/products/product7.png",
        backImg: "./images/products/product6.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
        frontImg: "./images/products/product4.png",
        backImg: "./images/products/product5.png",
        brand: "TOMMORROW",
        description: "Product (X) Sample - Makeup, Skincare...",
        price: "$76.00",
        badge: "New"
    },
    {
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
         <div class="products">
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





