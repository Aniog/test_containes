import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-[#1A1A1A]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-[#FAF8F5] px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-[#FAF8F5]/80 mb-8 max-w-2xl mx-auto">
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates timeless elegance.
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1A1A1A] text-[#FAF8F5] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
              Free Worldwide Shipping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
              18K Gold Plated
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
              Hypoallergenic
            </span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#1A1A1A]">Bestsellers</h2>
            <p className="text-[#8B8580]">Our most loved pieces</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-gold-outline inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-[#F5F0E8] overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">As Seen On You</h2>
        </div>
        
        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 pb-4">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56 aspect-[9/16] relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-[#FAF8F5] text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#1A1A1A]">Shop by Category</h2>
            <p className="text-[#8B8580]">Find your perfect piece</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="relative aspect-[3/4] overflow-hidden group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/30 group-hover:bg-[#1A1A1A]/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl md:text-4xl text-[#FAF8F5] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[#FAF8F5]">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
              <p className="text-[#8B8580] leading-relaxed mb-6">
                Founded with a passion for creating jewelry that transcends trends, Velmora represents the essence of quiet luxury. Each piece is thoughtfully designed to become a cherished part of your personal story.
              </p>
              <p className="text-[#8B8580] leading-relaxed mb-8">
                We believe in jewelry that doesn't just accessorize, but becomes an extension of who you are. Our demi-fine collections balance accessibility with uncompromising quality, ensuring every piece feels special.
              </p>
              <Link to="/about" className="text-[#C9A962] uppercase tracking-wider text-sm hover:underline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#1A1A1A]">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8 bg-[#F5F0E8]">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#8B8580]'}
                    />
                  ))}
                </div>
                <p className="text-[#1A1A1A] mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#8B8580] text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-[#C9A962]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#1A1A1A]">Join the Velmora Circle</h2>
          <p className="text-[#1A1A1A]/70 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and receive 10% off your first order, plus exclusive access to new collections and private sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#FAF8F5] border-none outline-none text-[#1A1A1A] placeholder-[#8B8580]"
            />
            <button type="submit" className="px-8 py-4 bg-[#1A1A1A] text-[#FAF8F5] uppercase tracking-wider text-sm hover:bg-[#2D2D2D] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}