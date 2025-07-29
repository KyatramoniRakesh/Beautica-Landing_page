

const products = [

    {
        title: 'Tomorrow',
        description: '(Product 20) Sample - Makeup, Skincare And Perfumes For Sale',
        price: '&99.09',
        image: './images/products/10641200-1349275186-847258__62485.jpg',
        hoverimage: './images/products/product1.png',
        new_badge: 'NEW'
    },
    {
        title: 'Tomorrow',
        description: '(Product 20) Sample - Makeup, Skincare And Perfumes For Sale',
        price: '&99.09',
        image: './images/products/17-thickbox_default__97060.jpg',
        hoverimage: './images/products/product8.png',
        new_badge: 'NEW'
    },
    {
        title: 'Tomorrow',
        description: '(Product 20) Sample - Makeup, Skincare And Perfumes For Sale',
        price: '&99.09',
        image: './images/products/11-thickbox_default__89207.jpg',
        hoverimage: './images/products/product9.png',
        new_badge: 'NEW'
    },
    {
        title: 'Tomorrow',
        description: '(Product 20) Sample - Makeup, Skincare And Perfumes For Sale',
        price: '&99.09',
        image: './images/products/product6.png',
        hoverimage: './images/products/product7.png',
        new_badge: 'NEW'
    },
    {
        title: 'Tomorrow',
        description: '(Product 20) Sample - Makeup, Skincare And Perfumes For Sale',
        price: '&99.09',
        image: './images/products/product4.png',
        hoverimage: './images/products/product5.png',
        new_badge: 'NEW'
    },
    {
        title: 'Tomorrow',
        description: '(Product 20) Sample - Makeup, Skincare And Perfumes For Sale',
        price: '&99.09',
        image: './images/products/product2.png',
        hoverimage: './images/products/product3.png',
        new_badge: 'NEW'
    },


];


// function to create cards

function createCards(product) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
            <span class="new_badge">${product.new_badge}</span>
            <span class="wishlist">&#9825;</span>
            <div class="image-wrapper">
                <img src="${product.image}" class="product-img"  alt="product image" />
                <img src="${product.hoverimage}" class="product-hover-img"  alt="hover image" />
            </div>
            <div class="quick-view">QUICK VIEW</div>
            <div class="product-title"> ${product.title}</div>
            <div class="product-desc">${product.description}</div>
            <div class="product-price"> ${product.price}</div>
            <div class="product-rating"> &#9734;&#9734;&#9734;&#9734;&#9734; </div>
            <button class="add-to-cart"> ADD TO CART</button>
            <div class="compare"><input type="checkbox"> Compare</div>
        
        `;

    return card;
};

function renderCards(productsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    productsArray.forEach(product => {
        const cardElement = createCards(product);
        container.appendChild(cardElement);
    });

};


renderCards(products, 'productcontainer');



// GRID AND LIST VIEW

const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const productContainer = document.getElementById('productcontainer');

gridViewBtn.addEventListener('click', () => {
    productContainer.classList.remove('list-view');
    productContainer.classList.add('grid-view');
});

listViewBtn.addEventListener('click', () => {
    productContainer.classList.remove('grid-view');
    productContainer.classList.add('list-view');
});



// BOTTOM 3 CARDS 

const data = [
    {
        image: './images/category-banner-bottom-1.jpg',
        subTitle: 'Custom CMS Block',
        title: 'Cosmo De Milance',
        para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla, nec tincidunt risus morbi ultricies est ditae odio ultrices imperdiet. Cras accumsan dorci maces consequat blandi susto dusto elementum libero non honcus purus sem sit amet enimos. ',
        button: 'SHOP NOW',
    },
    {
        image: './images/category-banner-bottom-2.jpg',
        subTitle: 'Trend Now',
        title: 'Lorem De Dorus',
        para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla, nec tincidunt risus morbi ultricies est ditae odio ultrices imperdiet. Cras accumsan dorci maces consequat blandi susto dusto elementum libero non honcus purus sem sit amet enimos. ',
        button: 'SHOP NOW',
    },
    {
        image: './images/category-banner-bottom-3.jpg',
        subTitle: 'Beauty Accessories',
        title: ' Milancelos Lynun',
        para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla, nec tincidunt risus morbi ultricies est ditae odio ultrices imperdiet. Cras accumsan dorci maces consequat blandi susto dusto elementum libero non honcus purus sem sit amet enimos. ',
        button: 'SHOP NOW',
    },
];


const sliderContent = document.getElementById('slider-content'); 
const sliderDots = document.getElementById('slide-dots');        


let currentIndex = 0;

function renderSlide(index){
    const item = data[index];

    sliderContent.innerHTML = `
        <div class="sliders"> 
            <div class="left-slide">
                <img src="${item.image}" atl="${item.title} image" />
            </div>
            <div class="right-slide">
                <h5> ${item.subTitle}</h5>
                <h3>${item.title}</h3>
                <p>${item.para}</p>
                <button>${item.button}</button>
            </div>
        </div>
    `;

    document.querySelectorAll('.dot').forEach((dot,i) => {
        dot.classList.toggle('active', i == index);
    });
};

function generateDots() {
  data.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
      currentIndex = index;
      renderSlide(index);
    });
    sliderDots.appendChild(dot);
  });
}

generateDots();
renderSlide(currentIndex);
