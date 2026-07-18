import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1600&h=900&fit=crop"
            alt="Gold jewelry"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-90">
            Timeless demi-fine jewelry for life's most precious moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-4 text-sm tracking-wide transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-600 rounded-full" />
              Free Worldwide Shipping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-600 rounded-full" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-600 rounded-full" />
              18K Gold Plated
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-yellow-600 rounded-full" />
              Hypoallergenic
            </span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
                alt="Vivid Aura Jewels"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-sm uppercase tracking-wide mb-2">Vivid Aura Jewels</h3>
            <p className="font-serif text-lg">$42</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop"
                alt="Majestic Flora Nectar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-sm uppercase tracking-wide mb-2">Majestic Flora Nectar</h3>
            <p className="font-serif text-lg">$68</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <img
                src="https://images.unsplash.com/photo-1630019852942-fd3d6bdba6b1?w=400&h=400&fit=crop"
                alt="Golden Sphere Huggies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-sm uppercase tracking-wide mb-2">Golden Sphere Huggies</h3>
            <p className="font-serif text-lg">$38</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
                alt="Amber Lace Earrings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-sm uppercase tracking-wide mb-2">Amber Lace Earrings</h3>
            <p className="font-serif text-lg">$54</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop"
                alt="Royal Heirloom Set"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-sm uppercase tracking-wide mb-2">Royal Heirloom Set</h3>
            <p className="font-serif text-lg">$95</p>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/shop" className="group relative overflow-hidden aspect-square bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop"
              alt="Earrings"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-wider">
                Earrings
              </h3>
            </div>
          </Link>
          
          <Link to="/shop" className="group relative overflow-hidden aspect-square bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop"
              alt="Necklaces"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-wider">
                Necklaces
              </h3>
            </div>
          </Link>
          
          <Link to="/shop" className="group relative overflow-hidden aspect-square bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1630019852942-fd3d6bdba6b1?w=600&h=600&fit=crop"
              alt="Huggies"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-wider">
                Huggies
              </h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
                alt="Velmora jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Velmora, we believe that fine jewelry should be accessible without compromising on quality.
                Each piece is crafted with meticulous attention to detail, using 18K gold plating and
                hypoallergenic materials that are designed to be treasured for a lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                From everyday elegance to special occasions, our demi-fine jewelry collection bridges
                the gap between luxury and accessibility, offering pieces that celebrate life's precious moments.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-yellow-600 hover:gap-4 transition-all duration-300"
              >
                <span className="tracking-wide">Discover Our Story</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <div className="flex text-yellow-600 mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "Absolutely love my Velmora pieces. The quality is exceptional and they look even better in person."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-serif">
                  S
                </div>
                <span className="font-serif">Sarah M.</span>
              </div>
            </div>
            
            <div className="bg-white p-8">
              <div className="flex text-yellow-600 mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "Perfect for gifting! My sister hasn't taken off her necklace since I gave it to her."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-serif">
                  E
                </div>
                <span className="font-serif">Emily R.</span>
              </div>
            </div>
            
            <div className="bg-white p-8">
              <div className="flex text-yellow-600 mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "Finally, affordable jewelry that doesn't irritate my sensitive skin. Will definitely be ordering more."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-serif">
                  J
                </div>
                <span className="font-serif">Jessica L.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Join for 10% Off</h2>
          <p className="text-lg mb-10 opacity-90">
            Subscribe to our newsletter and receive exclusive offers, new arrivals, and jewelry care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-600"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-sm tracking-wide transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl mb-6">VELMORA</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Timeless demi-fine jewelry crafted to be treasured. Premium quality, accessible luxury.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Shop</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><Link to="/shop" className="hover:opacity-100 transition-opacity">All Jewelry</Link></li>
                <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Earrings</Link></li>
                <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Necklaces</Link></li>
                <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Huggies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Help</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping Info</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Returns</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Size Guide</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Journal</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">© 2024 Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Instagram</a>
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Pinterest</a>
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
