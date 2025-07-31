const products = [
  {
    brand: "COCO LEE",
    title: "(Product 5) Sample – Makeup, Skincare And Perfumes For Sale",
    sku: "PRODUCT-5-HI-SM",
    availability: "Many In Stock",
    weight: "2.00 KGS",
    giftWrapping: "Options Available",
    shipping: "$10.00 (Fixed Shipping Cost)",
    oldPrice: "$69.00",
    newPrice: "$59.00",
    rating: 5,
    reviews: 1,
    soldText: "🔥 5 sold in last 36 hours",
    viewingText: "5 customers are viewing this product",
    selectedColor: "Mineral Green",
    selectedSize: "XS",
    badges: ["SALE", "BUNDLE"],
    thumbnails: [
      "./images/10__34819.jpg",
      "./images/07__87370.jpg",
      "./images/03__01593.jpg",
      "./images/products/product3.png"
    ],
    mainImage: "./images/products/product3.png",
    colors: [
      { hex: "#3d5c4d", disabled: false },
      { hex: "#888", disabled: true },
      { hex: "#f5c3ca", disabled: false }
    ],
    sizes: ["XS", "S", "M"]
  },
  {
    brand: "DIVA CHARM",
    title: "Rose Glow – Luxury Fragrance",
    sku: "ROSE-CHARM-88",
    availability: "Limited Stock",
    weight: "1.20 KGS",
    giftWrapping: "Not Available",
    shipping: "$8.00",
    oldPrice: "$79.00",
    newPrice: "$64.00",
    rating: 4,
    reviews: 3,
    soldText: "🔥 3 sold in last 12 hours",
    viewingText: "2 customers are viewing this product",
    selectedColor: "Rose Pink",
    selectedSize: "S",
    badges: ["HOT"],
    thumbnails: [
      "./images/rose1.jpg",
      "./images/rose2.jpg"
    ],
    mainImage: "./images/rose1.jpg",
    colors: [
      { hex: "#f5c3ca", disabled: false },
      { hex: "#d0b7dd", disabled: false }
    ],
    sizes: ["S", "M", "L"]
  },
  {
    brand: "GLAM MUSE",
    title: "Velvet Matte Lipstick – Long Wear",
    sku: "GLAM-LIP-VM123",
    availability: "In Stock",
    weight: "0.20 KGS",
    giftWrapping: "Available",
    shipping: "$5.00",
    oldPrice: "$39.00",
    newPrice: "$29.00",
    rating: 4,
    reviews: 12,
    soldText: "🔥 12 sold in last 24 hours",
    viewingText: "7 customers are viewing this product",
    selectedColor: "Bold Red",
    selectedSize: "M",
    badges: ["NEW", "SALE"],
    thumbnails: [
      "./images/lipstick1.jpg",
      "./images/lipstick2.jpg",
      "./images/lipstick3.jpg"
    ],
    mainImage: "./images/lipstick1.jpg",
    colors: [
      { hex: "#b22222", disabled: false },
      { hex: "#ff69b4", disabled: false },
      { hex: "#8b0000", disabled: false }
    ],
    sizes: ["S", "M", "L"]
  },
  {
    brand: "SKIN ESSENCE",
    title: "Hydra Boost Face Serum – Intense Hydration",
    sku: "SERUM-HYB-01",
    availability: "Only 3 left",
    weight: "0.50 KGS",
    giftWrapping: "Available",
    shipping: "$6.00",
    oldPrice: "$55.00",
    newPrice: "$45.00",
    rating: 5,
    reviews: 9,
    soldText: "🔥 7 sold in last 48 hours",
    viewingText: "6 customers are viewing this product",
    selectedColor: "Crystal Blue",
    selectedSize: "One Size",
    badges: ["BESTSELLER"],
    thumbnails: [
      "./images/serum1.jpg",
      "./images/serum2.jpg"
    ],
    mainImage: "./images/serum1.jpg",
    colors: [
      { hex: "#87cefa", disabled: false },
      { hex: "#4682b4", disabled: false }
    ],
    sizes: ["One Size"]
  }
];


let currentIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  renderProduct(products[currentIndex]);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % products.length;
  renderProduct(products[currentIndex]);
});

function renderProduct(product) {
  const container = document.getElementById("productContainer");

  const thumbImgs = product.thumbnails.map((src, i) =>
    `<img src="${src}" class="thumb ${i === 0 ? "active" : ""}" alt="thumb${i + 1}" />`
  ).join("");

  const badgesHTML = product.badges.map(b =>
    `<span style="color: white; font-size: 12px; background-color: ${b === 'SALE' ? 'red' : 'black'}; margin-right: 4px;">${b}</span>`
  ).join("");

  const ratingStars = Array(product.rating).fill('<i class="fa-solid fa-star"></i>').join("");

  const colorOptions = product.colors.map(c =>
    `<span class="color-circle${c.disabled ? ' disabled' : ''}" style="background:${c.hex};"></span>`
  ).join("");

  const sizeBtns = product.sizes.map(size =>
    `<button class="size-btn ${size === product.selectedSize ? 'active' : ''}">${size}</button>`
  ).join("");

  container.innerHTML = `
    <div class="left-panel">
      <div class="thumbnails">
        <button id="thumb-up">&#9650;</button>
        <div class="thumb-list">${thumbImgs}</div>
        <button id="thumb-down">&#9660;</button>
      </div>
      <div class="main-image-container">
        <div class="image-wrapper">
          <img id="mainImage" src="${product.mainImage}" alt="Main Product" />
          ${badgesHTML}
        </div>
        <p class="compare-colors"> Compare Colors</p>
      </div>
    </div>

    <div class="right-panel">
      <p class="brand"><a href="#">${product.brand}</a></p>
      <h1 class="product-title">${product.title}</h1>
      <div class="rating">
        ${ratingStars}
        <span>(${product.reviews} Review)</span>
        <a href="#">Write a review</a>
        <span class="sold">${product.soldText}</span>
      </div>
      <div class="info">
        <div>
          <p><strong>SKU:</strong></p>
          <p><strong>Availability:</strong></p>
          <p><strong>Weight:</strong></p>
          <p><strong>Gift Wrapping:</strong></p>
          <p><strong>Shipping:</strong></p>
        </div>
        <div>
          <p>${product.sku}</p>
          <p>${product.availability}</p>
          <p>${product.weight}</p>
          <p>${product.giftWrapping}</p>
          <p>${product.shipping}</p>
        </div>
      </div>
      <div class="price">
        <span class="old-price">${product.oldPrice}</span>
        <span class="new-price">${product.newPrice}</span>
      </div>
      <div class="options">
        <p><strong>Color</strong> <span>* ${product.selectedColor}</span></p>
        <div class="colors">${colorOptions}</div>
        <p><strong>Size</strong> <span>* ${product.selectedSize}</span></p>
        <div class="sizes">${sizeBtns}</div>
      </div>
      <p class="expert"><i class="fa-solid fa-comments"></i> Ask An Expert</p>
      <p><strong>Quantity:</strong></p>
      <div class="quantity-cart">
        <div class="quantity">
          <button id="decrease">−</button>
          <span id="qty">1</span>
          <button id="increase">+</button>
        </div>
        <div class="three-btns">
          <button class="add-to-cart-btn">ADD TO CART</button>
          <button class="icon-btn"><i class="fa-solid fa-heart"></i></button>
          <button class="icon-btn"><i class="fa-solid fa-share-alt"></i></button>
        </div>
      </div>
      <div class="buy-it-now-div">
        <button class="buy-it-now">BUY IT NOW</button>
        <div class="eye-icon">
          <i class="fa-solid fa-eye"></i>
          <p>${product.viewingText}</p>
        </div>
      </div>
    </div>
  `;
}

renderProduct(products[currentIndex]); 
