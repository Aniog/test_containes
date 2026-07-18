import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import CartDrawer from '../components/cart/CartDrawer';

function HomePage() {
  const products = [
    { id: 1, name: "VIVID AURA JEWELS", price: 42, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { id: 2, name: "MAJESTIC FLORA NECTAR", price: 68, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" },
    { id: 3, name: "GOLDEN SPHERE HUGGIES", price: 38, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { id: 4, name: "AMBER LACE EARRINGS", price: 54, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { id: 5, name: "ROYAL HEIRLOOM SET", price: 95, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" }
  ];

  const { addToCart, toggleCart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="font-['Cormorant_Garamond'] text-2xl tracking-[0.2em] uppercase text-[#2C2C2C]">
              Velmora
            </h1>
            <div className="flex items-center space-x-8">
              <a href="/shop" className="text-sm tracking-wider uppercase">Shop</a>
              <a href="/collections" className="text-sm tracking-wider uppercase">Collections</a>
              <a href="/about" className="text-sm tracking-wider uppercase">About</a>
              {/* Cart Icon */}
              <button onClick={toggleCart} className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-[#2C2C2C] flex items-center justify-center mt-20">
        <div className="text-center text-white px-4">
          <h2 className="font-['Cormorant_Garamond'] text-5xl mb-6 italic">
            Crafted to be Treasured
          </h2>
          <p className="text-lg mb-8 font-['Cormorant_Garamond']">
            Demi-fine gold jewelry for life's precious moments
          </p>
          <button className="bg-[#C9A96E] text-white px-8 py-3 text-sm tracking-wider uppercase">
            Shop the Collection
          </button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F5F0EB] py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-sm tracking-wider uppercase text-[#2C2C2C]">
          <span>Free Worldwide Shipping</span>
          <span>|</span>
          <span>30-Day Returns</span>
          <span>|</span>
          <span>18K Gold Plated</span>
          <span>|</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="font-['Cormorant_Garamond'] text-4xl text-center mb-12">
          Bestsellers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="cursor-pointer">
              <div className="relative bg-[#F5F0EB] aspect-square mb-4 flex items-center justify-center group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#2C2C2C] px-4 py-2 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Add to Cart
                </button>
              </div>
              <h4 className="text-sm tracking-wider uppercase">{product.name}</h4>
              <p className="font-['Cormorant_Garamond'] text-lg">${product.price}.00</p>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 bg-[#F5F0EB]">
        <h3 className="font-['Cormorant_Garamond'] text-4xl text-center mb-12">
          #VelmoraStyle
        </h3>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4">
          {['Everyday Elegance', 'Stacking Goals', 'Minimalist Vibes', 'Date Night Ready'].map((label, idx) => (
            <div key={idx} className="relative flex-shrink-0 w-64 h-96 bg-[#2C2C2C]">
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-white font-['Cormorant_Garamond'] text-xl italic">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="font-['Cormorant_Garamond'] text-4xl text-center mb-12">
          Shop by Category
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <div key={category} className="relative h-80 bg-[#F5F0EB] flex items-center justify-center cursor-pointer">
              <h4 className="font-['Cormorant_Garamond'] text-3xl text-[#2C2C2C]">
                {category}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-96 bg-[#2C2C2C]"></div>
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-4xl mb-6">
              Our Story
            </h3>
            <p className="text-[#2C2C2C] mb-6">
              At Velmora, we believe that jewelry should be as unique as the moments it celebrates.
            </p>
            <a href="/about" className="text-sm tracking-wider uppercase border-b-2 border-[#C9A96E] pb-1">
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="font-['Cormorant_Garamond'] text-4xl text-center mb-12">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah M.', text: 'Absolutely love my new earrings!' },
            { name: 'Emily R.', text: 'Perfect gift for my sister.' },
            { name: 'Jessica L.', text: 'The gold plating is beautiful.' }
          ].map((review, idx) => (
            <div key={idx} className="text-center p-6 bg-[#F5F0EB]">
              <div className="flex justify-center mb-4 text-[#C9A96E]">
                ★★★★★
              </div>
              <p className="text-[#2C2C2C] mb-4 italic">"{review.text}"</p>
              <p className="text-sm tracking-wider uppercase">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2C2C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-['Cormorant_Garamond'] text-4xl mb-4">
            Join the Velmora Family
          </h3>
          <p className="mb-8 font-['Cormorant_Garamond'] italic">
            Get 10% off your first order
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60"
            />
            <button className="bg-[#C9A96E] px-6 py-3 text-sm tracking-wider uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="font-['Cormorant_Garamond'] text-2xl mb-4">Velmora</h4>
          <p className="text-sm text-gray-400">&copy; 2024 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
}

export default HomePage;
