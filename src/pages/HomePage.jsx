import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, RotateCcw, Shield, ChevronRight, ArrowRight } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

// Trust Bar Component
function TrustBar() {
  const trustItems = [
    { icon: <Truck size={18} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={18} />, text: '30-Day Returns' },
    { icon: <Shield size={18} />, text: '18K Gold Plated' },
    { icon: <Shield size={18} />, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-[rgb(var(--color-foreground))] text-[rgb(var(--color-background))] py-3">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs tracking-wider uppercase">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden mb-4 bg-[rgb(var(--color-card))]">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[rgb(var(--color-foreground))] px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[rgb(var(--color-accent))] hover:text-white"
          >
            Add to Cart
          </button>
        </div>
        <h3
          className="product-name text-lg mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {product.name}
        </h3>
        <p className="text-[rgb(var(--color-muted))] text-sm mb-2">{product.description}</p>
        <div className="flex items-center gap-2">
          <div className="flex text-[rgb(var(--color-accent))]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                className={i < Math.floor(product.rating) ? '' : 'opacity-30'}
              />
            ))}
          </div>
          <span className="text-xs text-[rgb(var(--color-muted))]">({product.reviews})</span>
        </div>
        <p className="text-lg mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          ${product.price}
        </p>
      </Link>
    </div>
  );
}

// Homepage Component
export default function HomePage() {
  const bestsellers = products.slice(0, 5);
  const testimonials = [
    { name: 'Sarah M.', initial: 'S', text: 'Absolutely love my Velmora pieces. The quality is exceptional and I get compliments every time I wear them.', rating: 5 },
    { name: 'Emily R.', initial: 'E', text: 'Perfect for gifting! Bought the Royal Heirloom Set for my sister and she hasn\'t taken it off since.', rating: 5 },
    { name: 'Jessica L.', initial: 'J', text: 'The gold plating is beautiful and hasn\'t tarnished at all. Finally, affordable jewelry that lasts.', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&q=80"
            alt="Gold jewelry hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-5xl md:text-7xl mb-6 font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md mx-auto font-light">
            Demi-fine jewelry for life's most meaningful moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-[rgb(var(--color-foreground))] px-10 py-4 tracking-wider uppercase text-sm hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2
            className="text-4xl md:text-5xl text-center mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 bg-[rgb(var(--color-card))] overflow-hidden">
        <div className="container-custom mb-8">
          <h2
            className="text-4xl md:text-5xl text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Worn by You
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] bg-[rgb(var(--color-background))] rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <img
                src={`https://images.unsplash.com/photo-${1535632066927 + item * 1000}?w=400&q=80`}
                alt={`UGC ${item}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm italic">@customer_{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20">
        <div className="container-custom">
          <h2
            className="text-4xl md:text-5xl text-center mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map((category, index) => (
              <Link
                key={category}
                to={`/shop?category=${category}`}
                className="relative group overflow-hidden aspect-square bg-[rgb(var(--color-card))]"
              >
                <img
                  src={products[index]?.images[0] || products[0].images[0]}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <h3
                    className="text-white text-3xl tracking-wider uppercase"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-20 bg-[rgb(var(--color-card))]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-md">
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Our Story
              </h2>
              <p className="text-[rgb(var(--color-muted))] leading-relaxed mb-8">
                At Velmora, we believe that jewelry should be both accessible and exceptional. 
                Each piece in our collection is thoughtfully designed and crafted with the finest 
                materials, ensuring that every woman can find something that speaks to her unique style.
              </p>
              <p className="text-[rgb(var(--color-muted))] leading-relaxed mb-8">
                From our studio to your jewelry box, we're committed to creating pieces that become 
                cherished parts of your story.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:opacity-70 transition-opacity"
              >
                Discover More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <h2
            className="text-4xl md:text-5xl text-center mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Loved by Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[rgb(var(--color-card))] p-8 text-center">
                <div className="flex justify-center mb-4 text-[rgb(var(--color-accent))]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[rgb(var(--color-muted))] italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--color-border))] flex items-center justify-center">
                    <span className="text-sm uppercase">{testimonial.initial}</span>
                  </div>
                  <span className="text-sm tracking-wider uppercase">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-20 bg-[rgb(var(--color-foreground))] text-[rgb(var(--color-background))]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Join the Velmora Family
          </h2>
          <p className="mb-8 text-sm tracking-wider uppercase opacity-80">
            Get 10% off your first order + exclusive access to new collections
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 border border-white text-white tracking-wider uppercase text-sm hover:bg-white hover:text-[rgb(var(--color-foreground))] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export { TrustBar, ProductCard };
