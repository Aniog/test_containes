import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless beauty", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Timeless style", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Delicate details", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staples.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A wonderful gift for myself.", rating: 5 },
    { name: "Isabella T.", text: "I wear my necklace every day. It has held up beautifully and gets so many compliments.", rating: 5 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-base overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-6xl md:text-7xl font-serif mb-6 tracking-tight">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop">
            <Button variant="gold" className="px-10">Shop the Collection</Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-sm tracking-[0.1em] text-taupe text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-taupe mb-2">DISCOVER</p>
            <h2 className="text-4xl font-serif">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-gold transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
                <img 
                  src={product.imageSecondary} 
                  alt={product.name} 
                  className="product-card-image-secondary"
                />
                <div className="product-card-actions">
                  <Button 
                    variant="gold" 
                    className="w-full text-xs py-3"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-wider mb-1 hover:text-gold transition-colors">
                    {product.name}
                  </p>
                </Link>
                <p className="text-sm text-taupe">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-light-gray py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-taupe mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-taupe mb-2">EXPLORE</p>
          <h2 className="text-4xl font-serif">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", category: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", category: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={`/shop?category=${cat.category}`} className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-tile-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-light-gray overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80" 
              alt="Velmora craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-taupe mb-4">OUR HERITAGE</p>
            <h2 className="text-4xl font-serif mb-6">Our Story</h2>
            <p className="text-taupe leading-relaxed mb-8">
              Founded with a belief that beautiful jewelry should be accessible, Velmora creates 
              demi-fine pieces that honor traditional craftsmanship while embracing modern sensibilities. 
              Each piece is designed to be worn, loved, and passed down.
            </p>
            <Link to="/about">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-base py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] text-white/60 mb-10">LOVED BY OUR COMMUNITY</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/90 italic mb-4">"{testimonial.text}"</p>
                <p className="text-sm text-white/60">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif mb-4 text-white">Join for 10% off</h3>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); toast.success('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              required
            />
            <Button variant="gold" type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;