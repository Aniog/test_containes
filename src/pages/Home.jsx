import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products, categories, testimonials } from '@/data/products';

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-white/90">
            Demi-fine jewelry designed for the modern woman. Quiet luxury, warm and timeless.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors"
          >
            Shop the Collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4 text-xs tracking-widest uppercase text-stone-600">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">Bestsellers</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Our most-loved pieces, chosen by women who appreciate quiet luxury and timeless design.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white text-stone-900 py-3 text-xs tracking-widest uppercase hover:bg-stone-100 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-sm tracking-wider text-center">{product.name}</h3>
                <p className="text-stone-500 text-sm text-center mt-1">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12 tracking-wide">As Seen On You</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-stone-100 rounded-sm overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1611591437281-460bfbe1220a' : i === 2 ? '1630019852942-f89202989a59' : i === 3 ? '1599643478518-a784e5dc4c8f' : i === 4 ? '1611652022419-a9419f74343d' : '1608042314453-ae338d80c427'}?w=400&q=80`}
                  alt={`UGC ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif tracking-wide">
                  @velmora_worn
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">Shop by Category</h2>
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
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-widest">
                    {category.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:pl-12">
              <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">Our Story</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Velmora was born from a belief that fine jewelry should be accessible, meaningful, and designed to be worn every day. Each piece is thoughtfully crafted from 18K gold-plated materials, with attention to detail that ensures lasting beauty.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                We work with skilled artisans to create jewelry that feels luxurious without the luxury price tag. From our family to yours, every Velmora piece is made to be treasured.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-stone-900 text-sm tracking-widest uppercase border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors"
              >
                Read Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 border border-stone-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <p className="text-sm tracking-widest uppercase text-stone-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">Join for 10% Off</h2>
          <p className="text-stone-400 mb-8">Be the first to know about new arrivals, exclusive offers, and styling inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="bg-white text-stone-900 px-8 py-3 text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
