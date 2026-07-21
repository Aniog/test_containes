import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';
import { products, categories, testimonials, ugcContent } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/60 via-velmora-charcoal/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-velmora-cream">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-velmora-gold-light max-w-xl mx-auto animate-slide-up delay-100">
            Premium demi-fine jewelry for the modern woman. Elegant pieces designed to be worn and cherished every day.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-10 bg-velmora-gold text-white px-10 py-4 font-medium tracking-wide hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-hover animate-slide-up delay-200"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-charcoal text-velmora-cream py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              Free Worldwide Shipping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              18K Gold Plated
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              Hypoallergenic
            </span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-velmora-gold hover:text-velmora-gold-dark transition-colors"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <div
                key={product.id}
                className="group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[4/5] bg-velmora-light-gray overflow-hidden">
                    <img
                      src={hoveredProduct === product.id ? product.imageHover : product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-velmora-cream py-3 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Quick Add
                    </button>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-xs uppercase tracking-product">
                      {product.name}
                    </h3>
                    <p className="text-sm text-velmora-warm-gray mt-1">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-velmora-light-gray overflow-hidden">
        <div className="container mb-8">
          <h2 className="font-serif text-3xl text-center">As Seen On You</h2>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 relative group"
            >
              <div className="aspect-[9/16] bg-velmora-charcoal overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl text-velmora-cream tracking-wider group-hover:scale-110 transition-transform duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-velmora-light-gray overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-velmora-gold text-sm tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6">
                Jewelry Designed for Life's Moments
              </h2>
              <p className="text-velmora-warm-gray leading-relaxed mb-6">
                At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. Our pieces are crafted with intention, using only the finest materials and time-honored techniques.
              </p>
              <p className="text-velmora-warm-gray leading-relaxed mb-8">
                Each design balances modern elegance with timeless appeal, creating pieces that transition seamlessly from everyday moments to special occasions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-velmora-gold font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-velmora-light-gray">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-velmora-white p-8 shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                    />
                  ))}
                </div>
                <p className="text-velmora-warm-gray leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-velmora-gold-light rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-velmora-gold-dark">
                      {testimonial.initials}
                    </span>
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-velmora-charcoal">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
              Join the Velmora Circle
            </h2>
            <p className="text-velmora-gold-light mb-8">
              Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-transparent border border-velmora-warm-gray text-velmora-cream placeholder:text-velmora-warm-gray focus:border-velmora-gold outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white px-8 py-4 font-medium hover:bg-velmora-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}