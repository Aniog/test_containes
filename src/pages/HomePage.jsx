import { Link } from 'react-router-dom';
import { Star, Truck, RefreshCw, Gem, Heart, ArrowRight, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, testimonials, trustPoints, ugcContent, categories } from '../data/products';

export default function HomePage() {
  const bestsellers = products.slice(0, 5);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-cream/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-cream mb-6 animate-fade-in">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-cream/80 mb-8 font-light animate-fade-in delay-200">
            Demi-fine gold jewelry for the modern woman. Designed for everyday elegance.
          </p>
          <Link 
            to="/shop"
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase border border-cream text-cream hover:bg-cream hover:text-charcoal transition-all duration-300 animate-fade-in delay-300"
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={24} className="text-cream rotate-90" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-ivory border-y" style={{ borderColor: 'var(--color-champagne)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-warm-gray">
                {point.icon === 'truck' && <Truck size={16} className="text-gold" />}
                {point.icon === 'refresh' && <RefreshCw size={16} className="text-gold" />}
                {point.icon === 'gem' && <Gem size={16} className="text-gold" />}
                {point.icon === 'heart' && <Heart size={16} className="text-gold" />}
                <span>{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-gold mb-3">CURATED FOR YOU</p>
            <h2 className="text-warm-black">Bestsellers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/shop"
              className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-gold transition-colors group"
            >
              View All Jewelry
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC/Reels Row */}
      <section className="py-12 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h3 className="text-cream text-center font-serif text-xl">Styled By You</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 hide-scrollbar">
          {ugcContent.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] relative rounded-lg overflow-hidden group"
            >
              {/* Placeholder for UGC images - using gradient backgrounds */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, var(--color-gold-dark) 0%, var(--color-warm-black) 100%)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-cream text-sm font-light leading-relaxed mb-2">
                  "{item.caption}"
                </p>
                <p className="text-cream/60 text-xs">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-gold mb-3">EXPLORE</p>
            <h2 className="text-warm-black">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                {/* Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-cream font-serif text-2xl mb-2">{category.name}</h3>
                  <p className="text-cream/70 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <p className="text-sm tracking-widest text-gold mb-4">OUR STORY</p>
              <h2 className="text-warm-black mb-6">
                Jewelry That Tells Your Story
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  At Velmora, we believe every woman deserves to wear jewelry that makes her feel 
                  confident, beautiful, and uniquely herself. Our pieces are crafted with intention, 
                  designed for real life.
                </p>
                <p>
                  Each piece in our collection is made with 18K gold plating on hypoallergenic 
                  stainless steel, ensuring you can wear your favorites from morning coffee to 
                  evening cocktails without worry.
                </p>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider group"
              >
                <span className="border-b border-current pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors">
                  Discover Our Journey
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-gold mb-3">TESTIMONIALS</p>
            <h2 className="text-warm-black">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-ivory p-8 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      fill="var(--color-gold)"
                      stroke="var(--color-gold)"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-warm-gray italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-medium text-warm-black">{testimonial.name}</p>
                  <p className="text-xs text-muted mt-1">
                    Purchased: {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-gold">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-cream mb-4">Join the Velmora World</h2>
          <p className="text-cream/80 mb-8">
            Subscribe for 10% off your first order and be the first to know about new collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-cream text-warm-black text-sm outline-none"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-warm-black transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-cream/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>
    </main>
  );
}
