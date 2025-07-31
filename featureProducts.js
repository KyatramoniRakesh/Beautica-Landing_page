const featuredProducts = [
  {
    frontImg: './images/products/product1.png',
    backImg: './images/products/product6.png',
    brand: 'FRENCH CONNECTION',
    description: '(Product 1) Sample - Makeup, Skincare And Perfumes For Sale',
    price: '$49.00',
  },
  {
    frontImg: './images/products/product2.png',
    backImg: './images/products/product7.png',
    brand: 'TOMORROW',
    description: '(Product 2) Sample - Makeup, Skincare And Perfumes For Sale',
    price: '$69.00',
  },
  {
    frontImg: './images/products/product3.png',
    backImg: './images/products/product4.png',
    brand: 'COCO LEE',
    description: '(Product 3) Sample - Makeup, Skincare And Perfumes For Sale',
    price: '$89.00',
  },
  {
    frontImg: './images/products/product1.png',
    backImg: './images/products/product6.png',
    brand: 'FRENCH CONNECTION',
    description: '(Product 1) Sample - Makeup, Skincare And Perfumes For Sale',
    price: '$49.00',
  },
  {
    frontImg: './images/products/product2.png',
    backImg: './images/products/product7.png',
    brand: 'TOMORROW',
    description: '(Product 2) Sample - Makeup, Skincare And Perfumes For Sale',
    price: '$69.00',
  },
  {
    frontImg: './images/products/product3.png',
    backImg: './images/products/product4.png',
    brand: 'COCO LEE',
    description: '(Product 3) Sample - Makeup, Skincare And Perfumes For Sale',
    price: '$89.00',
  },
];

const featuredContainer = document.getElementById('featuredProductContainer');

const featuredCards = featuredProducts.map((product) => {
  return `
    <div class="featured-card">
      <div class="featured-image-wrapper">
        <img class="featured-img featured-front" src="${product.frontImg}" alt="${product.brand}" />
        <img class="featured-img featured-back" src="${product.backImg}" alt="${product.brand}" />
        <button class="featured-quick-view">QUICK VIEW</button>
        <span class="featured-wishlist">&#10084;</span>
      </div>
      <div class="featured-info">
        <h3 class="featured-brand">${product.brand}</h3>
        <p class="featured-description">${product.description}</p>
        <div class="featured-price">${product.price}</div>
        <button class="featured-add-to-cart">QUICK ADD</button>
      </div>
    </div>
  `;
}).join('');

featuredContainer.innerHTML = featuredCards;



const leftArrow = document.querySelector('.featured-left');
const rightArrow = document.querySelector('.featured-right');
const scrollContainer = document.getElementById('featuredProductContainer');

const scrollAmount = 300;

leftArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
});

rightArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
});
