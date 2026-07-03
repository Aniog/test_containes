import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcImages } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 animate-fade-in">
                Crafted to be Treasured
              </h1>
              <p className="text-lg text-white/80 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Discover our collection of demi-fine gold jewelry — elegant pieces designed for life's special moments.
              </p>
              <Link
                to="/shop"
                className="inline-block btn-primary animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-sand py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xs uppercase tracking-widest text-velmora-charcoal/70">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              Bestsellers
            </h2>
            <p className="text-velmora-taupe">Our most loved pieces</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-velmora-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-3xl text-center text-velmora-charcoal">
            Styled by You
          </h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 snap-center"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-velmora-taupe/20">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-32 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              Shop by Category
            </h2>
            <p className="text-velmora-taupe">Find your perfect piece</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl md:text-4xl text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-32 bg-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-velmora-cream">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Our Story
              </h2>
              <p className="text-velmora-taupe leading-relaxed mb-6">
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. We craft demi-fine pieces that bridge the gap between luxury and accessibility.
              </p>
              <p className="text-velmora-taupe leading-relaxed mb-8">
                Each piece is thoughtfully designed in our studio, using ethically sourced materials and sustainable practices. Our jewelry is made to be worn, cherished, and passed down.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-velmora-gold hover:text-velmora-goldLight transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-velmora-sand/50 p-8 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-taupe'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-velmora-charcoal/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-serif text-velmora-charcoal">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-24 bg-velmora-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-charcoal text-white uppercase tracking-widest text-sm hover:bg-velmora-charcoal/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}