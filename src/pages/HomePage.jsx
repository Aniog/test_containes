import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';
import { products, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal via-velmora-graphite to-velmora-charcoal">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
            Demi-fine jewelry for life's precious moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-white px-10 py-4 font-serif tracking-wider hover:bg-velmora-goldDark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-warm py-6 border-y border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-velmora-charcoal">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RefreshCw, text: '30-Day Returns' },
              { icon: Sparkles, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={18} className="text-velmora-gold" />
                <span className="tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Bestsellers</h2>
        <p className="text-center text-velmora-graphite mb-12 tracking-wide">
          Our most loved pieces
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white overflow-hidden"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-velmora-graphite mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-velmora-graphite">{product.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="w-full mt-4 bg-velmora-charcoal text-white py-2 text-sm tracking-wider hover:bg-velmora-gold transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 bg-velmora-warm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-serif text-4xl text-center">Styled by You</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8">
          {[
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
            'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80'
          ].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-[500px] relative rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt="Styled jewelry"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-serif italic text-lg">
                  "Absolutely love my new pieces"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
            { name: 'Huggies', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80' },
          ].map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className="relative h-96 overflow-hidden group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="font-serif text-3xl text-white uppercase tracking-widest">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-velmora-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
              <p className="text-velmora-graphite leading-relaxed mb-4">
                Founded with a passion for accessible luxury, Velmora creates demi-fine jewelry
                that bridges the gap between precious and fashion. Each piece is thoughtfully
                designed to be worn, loved, and treasured.
              </p>
              <p className="text-velmora-graphite leading-relaxed mb-8">
                We believe that beautiful jewelry shouldn't be reserved for special occasions.
                Our pieces are crafted to become part of your everyday story.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-velmora-gold hover:text-velmora-goldDark transition-colors font-serif tracking-wider"
              >
                Discover More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 text-center">
              <div className="flex justify-center mb-4 text-yellow-400">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-velmora-graphite italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold text-white flex items-center justify-center font-serif">
                  {testimonial.initial}
                </div>
                <span className="font-serif text-velmora-charcoal">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-velmora-charcoal text-velmora-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Family</h2>
          <p className="text-velmora-mist mb-8 tracking-wide">
            Get 10% off your first order plus exclusive access to new collections
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-graphite text-velmora-cream placeholder-velmora-mist focus:outline-none focus:border-velmora-gold"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 font-serif tracking-wider hover:bg-velmora-goldDark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
