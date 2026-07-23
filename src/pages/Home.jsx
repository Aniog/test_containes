import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products, ugcReels, testimonials, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronRight, Star, Mail } from 'lucide-react';

const Home = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const ugcScrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = ugcScrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-charcoal/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-cream px-4 max-w-3xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl mb-6 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-light">
            Demi-fine gold jewelry for life's most precious moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-transparent border-2 border-cream text-cream px-10 py-4 text-sm uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-ivory py-6 border-y border-gold/20">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((text, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gold rounded-full"></div>
                <span className="text-charcoal/80 tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Bestsellers
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map(product => (
              <div
                key={product.id}
                className="group relative bg-white"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={hoveredProduct === product.id && product.images[1] 
                        ? product.images[1] 
                        : product.images[0]
                      }
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.tags.includes('new') && (
                      <div className="absolute top-4 left-4 bg-charcoal text-cream text-xs px-3 py-1 uppercase tracking-wider">
                        New
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 
                      className="product-name text-sm mb-2 hover:text-gold transition-colors"
                    >
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-taupe mb-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light">${product.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="fill-gold text-gold" />
                      <span className="text-sm text-taupe">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {hoveredProduct === product.id && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gold/20">
                    <button
                      onClick={() => addToCart(product, 1, product.variants[0])}
                      className="w-full bg-charcoal text-cream py-3 text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reels Row */}
      <section className="py-20 bg-charcoal text-cream overflow-hidden">
        <div className="container-luxury mb-10">
          <h2 
            className="text-4xl md:text-5xl text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Worn by You
          </h2>
        </div>
        
        <div 
          ref={ugcScrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 px-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcReels.concat(ugcReels).map((reel, index) => (
            <div
              key={`${reel.id}-${index}`}
              className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-ivory/10 rounded-lg overflow-hidden">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm mb-2 italic">{reel.caption}</p>
                    <p className="text-xs text-gold">{reel.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Shop by Category
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map(category => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden aspect-square md:aspect-[4/5] block"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 
                      className="text-3xl text-cream mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 text-cream">
                      <span className="text-sm uppercase tracking-wider">Shop Now</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Our Story
              </h2>
              <div className="w-16 h-px bg-gold mb-8"></div>
              <p className="text-lg mb-6 leading-relaxed font-light">
                Every piece of Velmora jewelry is crafted with intention, blending timeless design 
                with modern sensibility. We believe that fine jewelry should be accessible, 
                allowing you to celebrate life's everyday moments with pieces that feel 
                uniquely yours.
              </p>
              <p className="text-lg mb-10 leading-relaxed font-light">
                From our studio to your jewelry box, each piece undergoes meticulous 
                craftsmanship using 18K gold plating and the finest materials, ensuring 
                that your Velmora pieces become treasured heirlooms.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-charcoal border-b-2 border-gold pb-1 hover:text-gold transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Discover Our Journey</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Loved by Our Community
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 md:p-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed italic font-light">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-serif text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-taupe">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-charcoal text-cream">
        <div className="container-luxury max-w-2xl text-center">
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Join the Velmora Family
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-lg mb-10 font-light">
            Subscribe for exclusive access to new collections, styling tips, and 10% off your first order.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-cream/30 text-cream placeholder-cream/50 focus:border-gold focus:outline-none transition-colors"
            />
            <button className="bg-gold text-charcoal px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors duration-300 flex items-center justify-center space-x-2">
              <Mail size={16} />
              <span>Subscribe</span>
            </button>
          </div>
          
          <p className="text-sm text-taupe mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
