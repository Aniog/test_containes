import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcImages } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-velmora-charcoal">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/80 via-velmora-charcoal/40 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-serif text-5xl md:text-7xl text-velmora-cream leading-tight">
                Crafted to be Treasured
              </h1>
              <p className="mt-6 text-velmora-sand text-lg md:text-xl leading-relaxed">
                Premium demi-fine jewelry for the modern woman. 
                Ethically crafted, designed to last, made to be loved.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-10 bg-velmora-gold text-velmora-charcoal px-10 py-4 uppercase tracking-widest text-sm hover:bg-velmora-goldLight transition-colors duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-charcoal text-velmora-cream py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xs uppercase tracking-widest text-velmora-taupe">
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

      {/* Bestsellers */}
      <section className="py-20 md:py-32 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Bestsellers</h2>
            <p className="mt-4 text-velmora-taupe">Our most-loved pieces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-velmora-sand/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-3xl text-center text-velmora-charcoal">As Seen On You</h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56 snap-center"
            >
              <div className="aspect-[9/16] bg-velmora-sand relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
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
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl md:text-4xl text-velmora-cream tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-velmora-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] bg-velmora-sand">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
                alt="Crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Our Story</h2>
              <div className="hairline my-6" />
              <p className="text-velmora-taupe leading-relaxed mb-6">
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We craft pieces that bridge the gap between fine jewelry and fashion accessories—premium quality, accessible prices.
              </p>
              <p className="text-velmora-taupe leading-relaxed mb-8">
                Each piece is designed in our studio and ethically crafted using sustainable materials. Our 18K gold-plated jewelry is made to be worn and treasured every day.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-velmora-charcoal hover:text-velmora-gold transition-colors uppercase tracking-widest text-sm"
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
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8 bg-velmora-sand/20">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-velmora-taupe italic mb-4">"{testimonial.text}"</p>
                <p className="font-serif text-velmora-charcoal">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">Join the Velmora Circle</h2>
            <p className="mt-4 text-velmora-taupe">
              Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-velmora-taupe/30 text-velmora-cream placeholder-velmora-taupe focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-velmora-gold text-velmora-charcoal uppercase tracking-widest text-sm hover:bg-velmora-goldLight transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}