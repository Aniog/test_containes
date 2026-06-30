import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import products from '../../data/products';

export default function HomePage() {
  const bestsellers = products.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-charcoal/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6 animate-fade-in">
            Crafted to be<br />Treasured
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Quiet luxury, thoughtfully designed. Discover our collection of demi-fine gold jewelry, 
            crafted for the modern woman who appreciates timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-velmora-charcoal px-10 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-all duration-300"
          >
            Shop the Collection
            <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-cream border-y border-velmora-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {[
              'Free Worldwide Shipping',
              '30-Day Returns',
              '18K Gold Plated',
              'Hypoallergenic'
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
                <span className="font-sans text-sm tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Bestsellers</h2>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="font-sans text-velmora-text-secondary max-w-2xl mx-auto">
            Our most loved pieces, chosen by women who appreciate quiet luxury and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="bg-velmora-charcoal py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white text-center mb-16">
            Worn by You
          </h2>
        </div>
        <div className="flex space-x-6 overflow-x-auto px-6 lg:px-8 pb-8 no-scrollbar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex-shrink-0 w-72 md:w-80">
              <div className="aspect-[9/16] bg-velmora-charcoal-light rounded-lg overflow-hidden relative group cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-${1611085583191 + item}?w=400&q=80`}
                  alt="Customer wearing Velmora jewelry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-white text-lg italic">
                      "Absolutely in love with my Velmora pieces"
                    </p>
                    <p className="font-sans text-white/70 text-sm mt-2">@sarah.m</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-center mb-16">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
          ].map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name.toLowerCase()}`}
              className="group relative h-96 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-4xl font-medium text-white tracking-wider uppercase">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-velmora-warm-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-96 lg:h-[600px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
                Our Story
              </h2>
              <div className="divider-gold w-24" />
              <p className="font-sans text-lg text-velmora-text-secondary leading-relaxed">
                At Velmora, we believe that jewelry should be as unique as the woman who wears it. 
                Founded with a passion for quiet luxury and thoughtful design, our pieces are crafted 
                to celebrate life's everyday moments and milestone occasions alike.
              </p>
              <p className="font-sans text-lg text-velmora-text-secondary leading-relaxed">
                Each piece in our collection is designed with intention, using only the finest materials 
                and time-honored techniques. We're committed to creating jewelry that not only looks 
                beautiful but feels meaningful—pieces that become part of your story.
              </p>
              <Link
                to="/about"
                className="btn-secondary inline-block"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-center mb-16">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { name: 'Sarah', initial: 'S', rating: 5, text: "I absolutely love my Vivid Aura ear cuff! The quality is incredible and it's so comfortable to wear all day." },
            { name: 'Emily', initial: 'E', rating: 5, text: "The Majestic Flora necklace is even more beautiful in person. I've received so many compliments!" },
            { name: 'Jessica', initial: 'J', rating: 5, text: "Finally, affordable luxury that doesn't compromise on quality. Velmora has become my go-to for gifts." },
          ].map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-soft space-y-4">
              <div className="flex text-velmora-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-sans text-velmora-text-secondary italic">"{review.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-velmora-gold font-medium">{review.initial}</span>
                </div>
                <span className="font-sans text-sm font-medium">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-charcoal py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6">
            Join the Velmora Family
          </h2>
          <p className="font-sans text-lg text-velmora-cream/70 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive 10% off your first order. Be the first to discover 
            new collections, exclusive offers, and jewelry care tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 font-sans text-sm bg-velmora-charcoal-light/50 border border-velmora-cream/20 text-white placeholder:text-velmora-cream/40 focus:outline-none focus:border-velmora-gold rounded"
              required
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-charcoal px-8 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-all duration-300 rounded"
            >
              Subscribe
            </button>
          </form>
          <p className="font-sans text-xs text-velmora-cream/40 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-velmora-sand mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-velmora-charcoal/60 flex items-center justify-center">
              <span className="font-sans text-sm text-white uppercase tracking-wider">Sold Out</span>
            </div>
          )}
        </div>
      </Link>

      <div className="space-y-2">
        <h3 className="product-name text-base">
          <Link to={`/product/${product.id}`} className="hover:text-velmora-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="font-sans text-sm text-velmora-text-secondary">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-medium">${product.price}</span>
          <div className="flex items-center space-x-1">
            <span className="text-velmora-gold">★</span>
            <span className="font-sans text-sm text-velmora-text-secondary">{product.rating}</span>
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className="w-full mt-3 py-3 font-sans text-sm font-medium tracking-wider uppercase border border-velmora-charcoal hover:bg-velmora-charcoal hover:text-velmora-cream transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}
