import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Home = () => {
  // Select 5 products for bestsellers (all of them for this small catalog)
  const bestsellers = products;

  // UGC mock data - vertical reel style images
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Morning light' },
    { id: 2, image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80', caption: 'Golden hour' },
    { id: 3, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', caption: 'Everyday elegance' },
    { id: 4, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Soft details' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Treasured' },
  ];

  const testimonials = [
    { name: 'Elena M.', text: 'The quality is exceptional. I wear my huggies every day and they still look brand new.' },
    { name: 'Sofia R.', text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.' },
    { name: 'Aisha K.', text: 'Finally found jewelry that doesn\'t irritate my skin. The gold tone is so warm and beautiful.' },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="hero min-h-[100dvh]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
          alt="Velmora Fine Jewelry"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Crafted to be Treasured</h1>
          <p className="hero-subtitle">Demi-fine gold jewelry, made for the moments that matter.</p>
          <Link to="/shop">
            <Button variant="primary" size="lg">Shop the Collection</Button>
          </Link>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-center">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item, i) => (
              <span key={i} className="trust-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="section-title">Bestsellers</h2>
        <div className="product-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline">View All Jewelry</Button>
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-bg-alt py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title mb-10">As Seen On You</h2>
          <div className="ugc-scroll">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="section-title">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', category: 'earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', category: 'necklaces', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80' },
            { label: 'Huggies', category: 'huggies', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
          ].map((cat) => (
            <Link
              key={cat.category}
              to={`/shop?category=${cat.category}`}
              className="category-tile group"
            >
              <img src={cat.img} alt={cat.label} />
              <div className="category-label">
                <span className="category-label-text">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-bg-alt overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000&q=85"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="heading-serif text-3xl mb-6">Our Story</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn, not saved for special occasions.
              </p>
              <p>
                We design demi-fine pieces that feel precious yet practical — gold that warms against your skin, stones that catch the light just so, silhouettes that feel timeless.
              </p>
              <p>
                Every piece is crafted with intention, using responsibly sourced materials and traditional techniques passed down through generations.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-6 text-sm uppercase tracking-widest text-gold hover:text-gold-dark transition-colors">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-bg-alt py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-title">Words from Our Community</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-xs uppercase tracking-widest text-text-muted">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="heading-serif text-2xl text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-sm text-white/70 mb-8">Be the first to know about new arrivals and private events.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing! (Demo)');
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <Button variant="primary" type="submit">Subscribe</Button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
