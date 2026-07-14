import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';
import products from '../../data/products';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Timeless pieces for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold hover:bg-velmora-gold-dark text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-cream py-4 border-y border-velmora-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-velmora-charcoal">
              <item.icon size={16} className="text-velmora-gold" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Bestsellers</h2>
        <p className="text-center text-velmora-charcoal-light mb-16 tracking-wide">
          Our most loved pieces
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative overflow-hidden bg-velmora-cream aspect-[4/5] mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white">
                  Quick Add
                </button>
              </div>
              <h3 className="font-serif text-sm tracking-wider uppercase mb-2">
                {product.name}
              </h3>
              <p className="text-velmora-gold font-medium">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const UGCSection = () => {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=700&fit=crop', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop', caption: 'Layered perfection' },
    { id: 3, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop', caption: 'Minimalist vibes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop', caption: 'Stacked & styled' }
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Styled by You</h2>
        <p className="text-center text-velmora-charcoal-light mb-16 tracking-wide">
          #VelmoraMoments
        </p>

        <div className="flex gap-4 overflow-x-auto scroll-snap-x-mandatory pb-4 md:grid md:grid-cols-5 md:overflow-visible">
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-none w-64 md:w-auto scroll-snap-align-start">
              <div className="relative aspect-[9/16] overflow-hidden bg-velmora-cream">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm italic font-serif">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop', path: '/shop?category=Earrings' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop', path: '/shop?category=Necklaces' },
    { name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop', path: '/shop?category=Huggies' }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-square block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl text-white tracking-widest uppercase">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
            <p className="text-velmora-charcoal-light mb-6 leading-relaxed">
              At Velmora, we believe that jewelry should be as unique as the moments it celebrates. 
              Each piece is thoughtfully designed and crafted with the finest materials, ensuring 
              that every creation becomes a cherished part of your story.
            </p>
            <p className="text-velmora-charcoal-light mb-10 leading-relaxed">
              From our studio to your jewelry box, we pour our hearts into creating pieces that 
              transcend trends and become timeless treasures.
            </p>
            <Link
              to="/about"
              className="inline-block border-b-2 border-velmora-gold text-velmora-charcoal hover:text-velmora-gold transition-colors tracking-wide"
            >
              Discover Our Journey →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah', initial: 'S', rating: 5, text: 'Absolutely love my Vivid Aura Jewels! The quality is outstanding and I get compliments every time I wear them.' },
    { name: 'Emily', initial: 'E', rating: 5, text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person.' },
    { name: 'Jessica', initial: 'J', rating: 5, text: 'Finally, affordable jewelry that doesn\'t compromise on quality. My Golden Sphere Huggies are my new everyday go-to.' }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 border border-velmora-gold/20">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-velmora-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-velmora-charcoal-light mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center text-velmora-gold font-serif">
                  {testimonial.initial}
                </div>
                <span className="font-serif text-velmora-charcoal">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-charcoal text-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <p className="text-velmora-cream mb-10 tracking-wide">
          Sign up for 10% off your first order, plus exclusive access to new collections and styling tips.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-transparent border border-velmora-gold/50 text-white placeholder:text-velmora-cream/50 focus:outline-none focus:border-velmora-gold"
          />
          <button
            type="submit"
            className="bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-4 text-sm tracking-widest uppercase transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const Homepage = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Homepage;
