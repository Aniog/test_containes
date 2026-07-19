import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';
import products from '../data/products';

export default function Home() {
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
            alt="Gold jewelry"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            Discover our collection of demi-fine gold jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-white px-8 py-4 font-serif tracking-wider hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-light-gray py-4 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-charcoal">
            <div className="flex items-center gap-2">
              <Truck size={16} />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={16} />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12">Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                {product.name}
              </h3>
              <p className="text-warm-gray text-sm mb-1">{product.description}</p>
              <p className="font-serif text-lg">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
              <Link
                key={category}
                to="/shop"
                className="relative group overflow-hidden cursor-pointer"
              >
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
                  alt={category}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl text-white tracking-wider">
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Velmora jewelry"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <p className="text-warm-gray mb-6 leading-relaxed">
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
              Each piece in our collection is thoughtfully designed and crafted with the finest materials, 
              ensuring that every woman can find something that speaks to her unique style.
            </p>
            <p className="text-warm-gray mb-8 leading-relaxed">
              From our signature gold-plated designs to our carefully curated gemstone pieces, 
              every Velmora creation is made to be treasured and passed down through generations.
            </p>
            <Link
              to="/about"
              className="inline-block border border-charcoal px-8 py-3 font-serif tracking-wider hover:bg-charcoal hover:text-cream transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', initial: 'S', text: 'Absolutely love my Velmora pieces. The quality is exceptional and they look so elegant.' },
              { name: 'Emily R.', initial: 'E', text: 'Perfect for gifting! My sister loved the necklace I got her. Will definitely order again.' },
              { name: 'Jessica L.', initial: 'J', text: 'The gold plating is beautiful and hasn\'t faded at all. Great value for the price.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 text-center">
                <div className="flex justify-center mb-4 text-gold">
                  {'★'.repeat(5)}
                </div>
                <p className="text-charcoal mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-serif">
                    {testimonial.initial}
                  </div>
                  <span className="font-serif">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-charcoal text-cream p-12 md:p-20 text-center">
          <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
          <p className="text-warm-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive 10% off your first order, plus exclusive access to new collections and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-warm-gray focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-white px-8 py-3 font-serif tracking-wider hover:bg-gold-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
