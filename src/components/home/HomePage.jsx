import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, testimonials, ugcPosts, categories } from '@/data/products';

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-6 text-[#c9a96e]">Demi-Fine Gold Jewelry</p>
        <h1 className="velmora-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
          Everyday luxury pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="velmora-btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs tracking-wider">
            <item.icon className="w-4 h-4 text-[#c9a96e]" />
            <span className="text-white/80">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        {/* Quick add overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-white/95 backdrop-blur-sm text-[#1a1a1a] text-xs tracking-widest uppercase py-3 hover:bg-[#c9a96e] hover:text-white transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 className="velmora-product-name text-sm mb-1 group-hover:text-[#c9a96e] transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm text-[#8a8279]">${product.price.toFixed(2)}</p>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-[#c9a96e] text-[#c9a96e]" />
        <span className="text-xs text-[#8a8279]">{product.rating} ({product.reviews})</span>
      </div>
    </div>
  );
}

function Bestsellers() {
  return (
    <section className="velmora-section bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">Curated for You</p>
          <h2 className="velmora-heading text-3xl md:text-4xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline inline-flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function UGCRow() {
  return (
    <section className="py-16 bg-[#f5f0eb] overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">@velmorajewelry</p>
        <h2 className="velmora-heading text-3xl md:text-4xl">As Worn By You</h2>
      </div>
      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 sm:w-56 snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <p className="velmora-heading text-white text-sm p-4 tracking-wider">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryTiles() {
  return (
    <section className="velmora-section bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="velmora-heading text-3xl md:text-4xl">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="velmora-product-name text-white text-xl md:text-2xl tracking-[0.2em] mb-3">
                    {cat.name}
                  </h3>
                  <span className="text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="velmora-section bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4">Our Philosophy</p>
            <h2 className="velmora-heading text-3xl md:text-4xl mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="velmora-divider mb-6" />
            <p className="text-[#8a8279] leading-relaxed mb-6">
              At Velmora, we believe luxury shouldn't come with a luxury price tag. Each piece is thoughtfully designed 
              in our studio, crafted with 18K gold plating over recycled brass, and finished with hypoallergenic 
              materials that are gentle on sensitive skin.
            </p>
            <p className="text-[#8a8279] leading-relaxed mb-8">
              From everyday essentials to statement pieces, our collections are made to be mixed, layered, and 
              treasured for years to come.
            </p>
            <Link to="/about" className="velmora-btn-outline inline-flex items-center gap-2">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="velmora-section bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3">Kind Words</p>
          <h2 className="velmora-heading text-3xl md:text-4xl">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-6">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>
              <p className="velmora-heading text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="text-xs tracking-widest uppercase text-[#8a8279]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="velmora-heading text-3xl md:text-4xl mb-4">Join for 10% Off</h2>
        <p className="text-[#8a8279] mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>
        {submitted ? (
          <p className="velmora-heading text-xl text-[#c9a96e]">Welcome to the Velmora family!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-[#2a2a2a] text-white placeholder-[#8a8279] text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button type="submit" className="velmora-btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <Newsletter />
    </main>
  );
}
