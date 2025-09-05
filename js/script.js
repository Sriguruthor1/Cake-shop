// Cake data
const cakes = [
    {
        id: 1,
        name: "Chocolate Delight",
        price: 45,
        category: "chocolate",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f01b84bb-ee89-41dd-80fe-aeac05210c91.png",
        description: "Layers of moist chocolate cake with creamy fudge frosting.",
        rating: 4.8,
        reviews: 123
    },
    {
        id: 2,
        name: "Vanilla Dream",
        price: 40,
        category: "vanilla",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91a7db35-be77-4f49-96e7-9df358718c0e.png",
        description: "Classic vanilla layers with silky buttercream and fresh flowers.",
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        name: "Red Velvet Romance",
        price: 42,
        category: "specialty",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9bc5a37e-aa29-459e-80b0-6750d27f1252.png",
        description: "Velvety red cake with tangy cream cheese icing.",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "Carrot Surprise",
        price: 38,
        category: "specialty",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d8ed6b4-f995-41f7-bbc7-7aaf48aeba8a.png",
        description: "Spiced carrot cake with rich cream cheese topping.",
        rating: 4.6,
        reviews: 98
    },
    {
        id: 5,
        name: "Lemon Bliss",
        price: 41,
        category: "fruit",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c1ed686-6fa6-487b-ab93-4f3d3de119cc.png",
        description: "Tangy lemon cake with bright, zesty frosting.",
        rating: 4.8,
        reviews: 145
    },
    {
        id: 6,
        name: "Strawberry Heaven",
        price: 43,
        category: "fruit",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17731e56-d698-4d9e-8a6e-d750c2fe3cc2.png",
        description: "Fresh strawberry layers with fluffy whipped topping.",
        rating: 4.9,
        reviews: 112
    },
{
    id: 7,
    name: "Ferrero Rocher Fantasy",
    price: 52,
    category: "chocolate",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800",
    description: "Crunchy hazelnut praline with silky chocolate layers.",
    rating: 4.9,
    reviews: 145
},
{
    id: 8,
    name: "Black Forest Classic",
    price: 44,
    category: "chocolate",
    image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-classic-black-forest-cake-1-kg--203710-m.jpg",  
    description: "Chocolate sponge, cherries, and fresh cream.",
    rating: 4.7,
    reviews: 208
},

{
    id: 9,
    name: "Rasmalai Fusion",
    price: 55,
    category: "specialty",
       image: "img/Rasmalai Fusion.jpg ",  // ✅ fixed
    description: "Indian dessert twist with saffron and pistachio.",
    rating: 4.8,
    reviews: 132
},
{
    id: 10,
    name: "Red Velvet Raspberry",
    price: 49,
    category: "red-velvet",
        image: "img/Red Velvet Raspberry.jpg",  // ✅ fixed
    description: "Tangy raspberry coulis with cream cheese frosting.",
    rating: 4.6,
    reviews: 117
},
{
    id: 11,
    name: "Tiramisu Cloud",
    price: 53,
    category: "specialty",
        image: "img/Tiramisu Cloud.png",  // ✅ fixed
    description: "Coffee-soaked layers with mascarpone.",
    rating: 4.8,
    reviews: 201
},
{
    id: 12,
    name: "Blueberry Cheesecake",
    price: 48,
    category: "cheesecake",
    image: "img/Blueberry Cheesecake.jpg",  // ✅ fixed 
    description: "Creamy baked cheesecake topped with blueberries.",
    rating: 4.7,
    reviews: 188
},
{
    id: 13,
    name: "Butterscotch Crunch",
    price: 43,
    category: "specialty",
    image: "img/Butterscotch Crunch.jpg",  // ✅ fixed
    description: "Butterscotch caramel with almond praline.",
    rating: 4.5,
    reviews: 96
},
{
    id: 14,
    name: "Pineapple Fresh Cream",
    price: 39,
    category: "fruit",
    image: "img/Pineapple Fresh Cream.jpg",  // ✅ fixed
    description: "Light vanilla sponge with pineapple chunks.",
    rating: 4.4,
    reviews: 154
},
{
    id: 15,
    name: "Mango Mousse Magic",
    price: 46,
    category: "fruit",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
    description: "Seasonal mango purée folded into mousse.",
    rating: 4.6,
    reviews: 173
},
{
    id: 16,
    name: "Oreo Overload",
    price: 42,
    category: "chocolate",
    image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=800",
    description: "Cookies & cream crunch with chocolate ganache.",
    rating: 4.7,
    reviews: 221
}
];

const USD_TO_INR = 183; // USD to INR conversion rate


// Cart functionality
let cart = [];
let filters = { category: 'all', minPrice: 0, maxPrice: 100, sortBy: 'name' };

// DOM elements
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('total-price');



 const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "payout.html";
    });
  }


const emptyCartMessage = document.getElementById('empty-cart-message');
const cartTotal = document.getElementById('cart-total');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const cakeGrid = document.getElementById('cake-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');
const applyPrice = document.getElementById('apply-price');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const loadingSpinner = document.getElementById('loading-spinner');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCakes();
    loadCartFromStorage();
    updateCartUI();
    
    // Event listeners
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', checkout);
    menuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeAll);
    
    // Filter and sort events
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filters.category = button.dataset.filter;
            renderCakes();
        });
    });
    
    applyPrice.addEventListener('click', applyPriceFilter);
    sortSelect.addEventListener('change', () => {
        filters.sortBy = sortSelect.value;
        renderCakes();
    });
    
    searchInput.addEventListener('input', debounce(() => {
        renderCakes();
    }, 300));
});

// Render cakes based on filters
function renderCakes() {
    showLoading();
    
    setTimeout(() => {
        let filteredCakes = [...cakes];
        
        // Apply category filter
        if (filters.category !== 'all') {
            filteredCakes = filteredCakes.filter(cake => cake.category === filters.category);
        }
        
        // Apply price filter
        const min = priceMin.value ? parseInt(priceMin.value) : 0;
        const max = priceMax.value ? parseInt(priceMax.value) : 100;
        filteredCakes = filteredCakes.filter(cake => cake.price >= min && cake.price <= max);
        
        // Apply search filter
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredCakes = filteredCakes.filter(cake => 
                cake.name.toLowerCase().includes(searchTerm) || 
                cake.description.toLowerCase().includes(searchTerm)
            );
        }
        
        // Apply sorting
        switch(filters.sortBy) {
            case 'price-low':
                filteredCakes.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredCakes.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                filteredCakes.sort((a, b) => b.rating - a.rating);
                break;
            default:
                filteredCakes.sort((a, b) => a.name.localeCompare(b.name));
        }
        
        // Render cakes
        cakeGrid.innerHTML = '';
        
        if (filteredCakes.length === 0) {
            cakeGrid.innerHTML = `
                <div class="col-span-3 text-center py-10">
                    <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-600">No cakes found</h3>
                    <p class="text-gray-500">Try adjusting your filters or search term</p>
                </div>
            `;
        } else {
            filteredCakes.forEach(cake => {
                const cakeElement = createCakeElement(cake);
                cakeGrid.appendChild(cakeElement);
            });
        }
        
        hideLoading();
    }, 500); // Simulate loading
}

// Create cake element
function createCakeElement(cake) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg shadow-lg overflow-hidden cake cake-layout';
    div.dataset.category = cake.category;
    div.dataset.price = cake.price;
    
    // Generate star rating
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(cake.rating)) {
            stars += '<i class="fas fa-star text-yellow-400"></i>';
        } else if (i === Math.ceil(cake.rating) && !Number.isInteger(cake.rating)) {
            stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
        } else {
            stars += '<i class="far fa-star text-yellow-400"></i>';
        }
    }
    
    div.innerHTML = `
        <img src="${cake.image}" alt="${cake.name}" class="w-full h-48 object-cover">
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-2">${cake.name}</h3>
            <p class="mb-4">${cake.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-pink-600 font-bold text-xl">₹${(cake.price * USD_TO_INR).toFixed(0)}</span>
                <button class="add-to-cart bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-colors" data-id="${cake.id}">Add to Cart</button>
            </div>
            <div class="mt-3 flex items-center">
                <div class="flex items-center space-x-1">
                    ${stars}
                    <span class="text-sm text-gray-600">${cake.rating} (${cake.reviews} reviews)</span>
                </div>
            </div>
        </div>
    `;
    
    // Add event listener to the button
    div.querySelector('.add-to-cart').addEventListener('click', () => addToCart(cake));
    
    return div;
}

// Cart functions
function addToCart(cake) {
    const existingItem = cart.find(item => item.id === cake.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: cake.id,
            name: cake.name,
            price: cake.price,
            image: cake.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
    
    // Show feedback animation
    const cartIcon = document.getElementById('cart-btn');
    cartIcon.classList.add('cart-bounce');
    setTimeout(() => {
        cartIcon.classList.remove('cart-bounce');
    }, 1000);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    saveCartToStorage();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
            saveCartToStorage();
        }
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        cartTotal.classList.add('hidden');
    } else {
        emptyCartMessage.classList.add('hidden');
        cartTotal.classList.remove('hidden');
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">₹${(item.price * USD_TO_INR).toFixed(0)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons
        cartItems.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', () => updateQuantity(parseInt(button.dataset.id), -1));
        });
        
        cartItems.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', () => updateQuantity(parseInt(button.dataset.id), 1));
        });
        
        cartItems.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => removeFromCart(parseInt(button.dataset.id)));
        });
        
        // Update total price
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.textContent = `₹${(total * USD_TO_INR).toFixed(0)}`;
    }
}

function openCart() {
    cartSidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function checkout() {
    showLoading();
    
    setTimeout(() => {
        alert('Thank you for your order! We will reach you soon.');
        cart = [];
        updateCartUI();
        saveCartToStorage();
        closeCartSidebar();
        hideLoading();
    }, 1500);
}

// Mobile menu functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('hidden');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
}

function closeAll() {
    closeCartSidebar();
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('open');
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Filter functions
function applyPriceFilter() {
    renderCakes();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

// Local storage functions
function saveCartToStorage() {
    localStorage.setItem('sweetDelightsCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('sweetDelightsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}


// Confirm Order button
const confirmOrderBtn = document.getElementById('confirm-order');
if (confirmOrderBtn) {
  confirmOrderBtn.addEventListener('click', function () {
    alert("🎉 Your order has been placed successfully!");
    window.location.href = "index.html"; // redirect back to homepage
  });
}


