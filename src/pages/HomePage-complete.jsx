import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Vivid Aura Jewels', price: 42, desc: 'Gold ear cuff with crystal accent' },
    { id: 2, name: 'Majestic Flora Nectar', price: 68, desc: 'Multicolor floral crystal necklace' },
    { id: 3, name: 'Golden Sphere Huggies', price: 38, desc: 'Chunky gold dome huggie earrings' },
    { id: 4, name: 'Amber Lace Earrings', price: 54, desc: 'Textured gold filigree drop earrings' },
    { id: 5, name: 'Royal Heirloom Set', price: 95, desc: 'Gift-boxed earring + necklace set' }
  ];

  const testimonials = [
    { name: 'Sarah M.', initial: 'S', rating: 5, text: 'Absolutely love my Vivid Aura earrings! The quality is exceptional and they have become my everyday go-to piece.' },
    { name: 'Emily R.', initial: 'E', rating: 5, text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person.' },
    { name: 'Jessica L.', initial: 'J', rating: 5, text: 'Finally, jewelry that does not irritate my sensitive skin. The hypoallergenic claim is real!' }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Demi-fine gold jewelry for everyday elegance</p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-600 text-white px-10 py-4 text-sm tracking-widest hover:bg-yellow-500 transition-colors"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-24 h-0.5 bg-yellow-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm">{product.name}</span>
                </div>
                <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-8 py-3 text-xs uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
              <h3 className="font-serif text-sm tracking-wider uppercase mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.desc}</p>
              <p className="text-gray-900 font-medium">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC / Instagram-style Section */}
      <section className="bg-gray-50 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Worn by You</h2>
          <div className="w-24 h-0.5 bg-yellow-600 mx-auto"></div>
        </div>
        <div className="flex gap-6 overflow-x-auto px-4 pb-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex-shrink-0 w-72 h-96 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>UGC Image {item}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-white text-sm font-light italic">Perfect everyday elegance</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <div className="w-24 h-0.5 bg-yellow-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((category, index) => (
            <Link
              key={index}
              to="/shop"
              className="group relative h-96 bg-gray-200 overflow-hidden cursor-pointer block"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-lg uppercase tracking-wider">{category}</span>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-3xl mb-2">{category}</h3>
                  <p className="text-sm tracking-wide">Shop Now</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Brand Story Image</span>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Our Story</h2>
              <div className="w-24 h-0.5 bg-yellow-600 mb-8"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Velmora, we believe that jewelry should be as unique as the person wearing it. 
                Each piece in our collection is thoughtfully designed to celebrate life's precious moments, 
                from everyday elegance to special occasions.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our demi-fine jewelry combines the luxury of 18K gold plating with accessible pricing, 
                making it possible for every woman to own pieces that make her feel truly special.
              </p>
              <Link
                to="/about"
                className="inline-block border-b-2 border-yellow-600 pb-1 text-sm tracking-wider uppercase hover:text-yellow-600 transition-colors"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
            <div className="w-24 h-0.5 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-serif text-lg mr-4">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <div className="flex text-yellow-500">
                      {"★".repeat(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Join the Velmora Family</h2>
          <p className="text-xl mb-4 text-gray-300">Get 10% Off Your First Order</p>
          <p className="mb-12 text-gray-400 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 text-gray-900 text-sm"
            />
            <button className="bg-yellow-600 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-yellow-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
