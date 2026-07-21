import React from 'react'
import { useCart } from '../context/CartContext'
import products from '../data/products'

export default function HomePage() {
  const { addToCart } = useCart()

  return (
    <div className="min-h-screen bg-amber-50">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-6xl md:text-8xl uppercase tracking-wider font-light mb-6">
            VELMORA
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Crafted to be Treasured
          </p>
          <button className="bg-amber-700 text-white px-12 py-4 hover:bg-amber-800 transition-all duration-500 text-sm uppercase tracking-wider font-medium">
            Shop the Collection
          </button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>🚚</span>
            <span>Free Worldwide Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <span>↩️</span>
            <span>30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✨</span>
            <span>18K Gold Plated</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌿</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-4xl uppercase tracking-wider text-center mb-16 text-gray-900">
          Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-white overflow-hidden mb-4 aspect-square relative">
                {/* Main image */}
                <div className="w-full h-full bg-amber-100 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                  <span className="text-amber-700 text-sm">{product.name}</span>
                </div>
                {/* Hover reveal - second image/angle */}
                <div className="absolute inset-0 bg-amber-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-amber-800 text-sm">✦ {product.name} ✦</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
              <h3 className="font-serif text-lg uppercase tracking-wider text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel-style Row */}
      <section className="bg-white py-20 overflow-hidden">
        <h2 className="font-serif text-4xl uppercase tracking-wider text-center mb-12 text-gray-900">
          Worn by You
        </h2>
        <div className="flex gap-4 overflow-x-auto px-4 pb-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex-shrink-0 w-64 h-96 bg-gray-900 relative">
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-white font-serif text-lg italic">
                  "Absolutely love my new earrings"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-4xl uppercase tracking-wider text-center mb-16 text-gray-900">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <div key={category} className="relative h-96 bg-gray-900 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl uppercase tracking-wider text-white font-light">
                  {category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-96 bg-gray-900" />
          <div>
            <h2 className="font-serif text-4xl uppercase tracking-wider mb-8 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Velmora was born from a simple belief: luxury should be accessible. We create demi-fine jewelry 
              that bridges the gap between precious and affordable, using 18K gold plating over high-quality brass 
              to create pieces that are both beautiful and enduring.
            </p>
            <button className="text-amber-700 uppercase tracking-wider text-sm font-medium hover:tracking-wider transition-all duration-300">
              Discover Our Story →
            </button>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl uppercase tracking-wider text-center mb-16 text-gray-900">
            Loved by Our Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah', text: 'The quality is incredible for the price. I get compliments every time I wear my Velmora pieces.' },
              { name: 'Emily', text: 'Finally, affordable jewelry that doesn\'t tarnish. I\'ve been wearing my necklace daily for months.' },
              { name: 'Jessica', text: 'The perfect gift for myself. The packaging is beautiful and the jewelry feels so luxe.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-700">★</span>
                  ))}
                </div>
                <p className="text-gray-900 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center font-serif">
                    {review.name[0]}
                  </div>
                  <span className="text-sm text-gray-600">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl uppercase tracking-wider mb-6 text-white">
            Join for 10% Off
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-white border-none focus:outline-none text-gray-900"
            />
            <button className="bg-amber-700 text-white px-8 py-3 hover:bg-amber-800 transition-all duration-300 text-sm uppercase tracking-wider font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4">Velmora</h3>
              <p className="text-sm text-gray-400">Demi-fine jewelry crafted to be treasured.</p>
            </div>
            <div>
              <h4 className="uppercase tracking-wider text-sm font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Earrings</li>
                <li>Necklaces</li>
                <li>Huggies</li>
                <li>Bestsellers</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider text-sm font-medium mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Shipping</li>
                <li>Returns</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider text-sm font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Journal</li>
                <li>Sustainability</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
            © 2026 Velmora Fine Jewelry
          </div>
        </div>
      </footer>
    </div>
  )
}
