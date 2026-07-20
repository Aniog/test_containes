import React from 'react';
import { Link } from 'react-router-dom';
import { products, testimonials } from '../../data/products';
import { Star, ArrowRight } from 'lucide-react';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
            alt="Gold jewelry"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-warm-white px-6">
          <h1 className="serif text-5xl md:text-7xl mb-6 font-light">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
            Timeless pieces for life's most precious moments
          </p>
          <Link to="/shop" className="btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-cream py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm tracking-wider uppercase">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((trust) => (
            <span key={trust} className="text-charcoal">{trust}</span>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-4xl md:text-5xl text-center mb-16">Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
                </div>
                <h3 className="product-name text-sm mb-2">{product.name}</h3>
                <p className="text-sm text-soft-gray">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Reel-style Row */}
      <section className="py-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="serif text-4xl text-center mb-12">Styled by You</h2>
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex-shrink-0 w-72 md:w-80">
                <div className="aspect-[9/16] bg-charcoal rounded-lg overflow-hidden relative group cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1535632066927-ab7c9ab60908' : item === 2 ? '1611085583191-a3b181a88401' : '1535632066927-ab7c9ab60908'}?w=400&q=80`}
                    alt="UGC content"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <p className="text-warm-white serif text-lg">Perfect for layering</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-4xl md:text-5xl text-center mb-16">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
              { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
              { name: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' }
            ].map((category) => (
              <Link 
                key={category.name}
                to="/shop" 
                className="relative group overflow-hidden cursor-pointer"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                  <h3 className="serif text-3xl text-warm-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="serif text-4xl md:text-5xl mb-8">Our Story</h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
              Each piece is thoughtfully designed and crafted with 18K gold plating, ensuring that every 
              woman can treasure her own piece of everyday luxury.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-4xl md:text-5xl text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#C9A96E" stroke="#C9A96E" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-warm-white font-medium">
                    {testimonial.initial}
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-charcoal text-warm-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif text-4xl md:text-5xl mb-6">Join for 10% Off</h2>
          <p className="text-lg mb-12 font-light">
            Subscribe to receive exclusive offers, early access to new collections, and jewelry care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 bg-transparent border border-warm-white text-warm-white placeholder-soft-gray focus:outline-none focus:border-gold"
            />
            <button className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
