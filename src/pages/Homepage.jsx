import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../products';

export default function Homepage() {
  const featuredProducts = getFeaturedProducts();

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolutely beautiful jewelry. The quality is exceptional for the price point. I get compliments every time I wear my Velmora pieces.',
      initial: 'S',
    },
    {
      name: 'Emily R.',
      rating: 5,
      text: 'I\'ve been wearing my Golden Sphere Huggies every day for months and they still look brand new. Truly hypoallergenic!',
      initial: 'E',
    },
    {
      name: 'Jessica L.',
      rating: 5,
      text: 'The perfect gift for myself and my friends. Elegant, timeless, and the packaging is so luxurious. Will definitely order again.',
      initial: 'J',
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
            alt="Velmora Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-charcoal/40" />
        </div>
        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-light italic">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-lg md:text-xl font-light max-w-2xl mx-auto">
            Demi-fine jewelry that celebrates life's precious moments. 18K gold plated, hypoallergenic, designed for everyday luxury.
          </p>
          <Link to="/shop" className="btn-primary inline-block mt-8">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-warm py-4">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-2">
              <Truck size={18} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw size={18} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles size={18} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">18K Gold Plated</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck size={18} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-4">Bestsellers</h2>
            <div className="hairline w-24 mx-auto my-4" />
            <p className="font-sans text-velmora-stone max-w-2xl mx-auto">
              Our most loved pieces, crafted with care and designed to be worn every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="section-padding bg-velmora-charcoal text-velmora-cream">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-4">Worn by You</h2>
            <div className="hairline border-velmora-charcoal-light/30 w-24 mx-auto my-4" />
            <p className="font-sans text-velmora-stone">
              See how our community styles their Velmora pieces
            </p>
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-72 h-96 relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1611085583191' : item === 2 ? '1535632066927' : item === 3 ? '1599643478518' : item === 4 ? '1630019852942' : '1515562141207'}-a3b181a88401?w=400&q=80`}
                  alt={`UGC ${item}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-lg italic text-velmora-cream">
                    "Absolutely love my new earrings!"
                  </p>
                  <p className="font-sans text-xs text-velmora-gold mt-1">@customer_{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-4">Shop by Category</h2>
            <div className="hairline w-24 mx-auto my-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
              <Link
                key={category}
                to={`/shop?category=${category}`}
                className="relative h-80 overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${category === 'Earrings' ? '1630019852942' : category === 'Necklaces' ? '1611085583191' : '1535632066927'}-a3b181a88401?w=800&q=80`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl text-white tracking-widest uppercase">
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-velmora-warm">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                alt="Velmora Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl">Our Story</h2>
              <div className="hairline w-24 my-4" />
              <p className="font-sans text-velmora-charcoal-light leading-relaxed">
                At Velmora, we believe that fine jewelry should be accessible without compromising on quality. Our pieces are crafted with 18K gold plating, ensuring each piece maintains its luster and beauty for years to come.
              </p>
              <p className="font-sans text-velmora-charcoal-light leading-relaxed">
                Every design is inspired by the timeless elegance of classical jewelry, reimagined for the modern woman who values both beauty and substance.
              </p>
              <Link to="/about" className="btn-primary inline-block mt-4">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-4">What Our Customers Say</h2>
            <div className="hairline w-24 mx-auto my-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-velmora-gold fill-velmora-gold" />
                  ))}
                </div>
                <p className="font-sans text-velmora-charcoal-light italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-velmora-gold text-white rounded-full flex items-center justify-center font-serif">
                    {testimonial.initial}
                  </div>
                  <span className="font-sans text-sm font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-velmora-charcoal text-velmora-cream">
        <div className="container-padding max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
          <div className="hairline border-velmora-charcoal-light/30 w-24 mx-auto my-4" />
          <p className="font-sans text-velmora-stone mb-8">
            Subscribe to our newsletter and receive 10% off your first order, plus exclusive access to new collections and special offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-velmora-charcoal-light/30 border border-velmora-charcoal-light/50 text-velmora-cream placeholder:text-velmora-stone focus:outline-none focus:border-velmora-gold font-sans text-sm"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
