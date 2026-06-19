import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/data';

const HomePage = () => {
  const bestsellers = products.slice(0, 5);

  const ugcPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Everyday elegance" },
    { id: 2, image: "https://images.unsplash.com/photo-1620656798579-1984d9e97e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Golden hour" },
    { id: 3, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Layered to perfection" },
    { id: 4, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Statement pieces" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1588444650733-d0767b0dc08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Model wearing gold jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 font-serif tracking-wide drop-shadow-sm">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl mb-10 font-light tracking-wide text-white/90">Premium demi-fine gold jewelry for the modern editorial wardrobe.</p>
          <Link to="/shop">
            <button className="bg-primary hover:bg-accent text-white px-10 py-4 tracking-widest uppercase text-sm font-medium transition-colors border border-transparent">
              Shop the Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-foreground py-4 border-b border-border">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center text-xs md:text-sm tracking-widest uppercase font-medium whitespace-nowrap overflow-x-auto scrollbar-hide py-1">
            <span className="px-4">Free Worldwide Shipping</span>
            <span className="px-4 text-muted-foreground">•</span>
            <span className="px-4">30-Day Returns</span>
            <span className="px-4 text-muted-foreground">•</span>
            <span className="px-4">18K Gold Plated</span>
            <span className="px-4 text-muted-foreground">•</span>
            <span className="px-4">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors pb-1 border-b border-foreground">
              View All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: '/shop?category=earrings' },
              { title: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478514-4a8846663528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: '/shop?category=necklaces' },
              { title: 'Huggies', image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: '/shop?category=huggies' }
            ].map((category) => (
              <Link to={category.link} key={category.title} className="group relative aspect-[3/4] overflow-hidden bg-background">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="bg-white/90 backdrop-blur-sm px-8 py-4 text-center font-serif text-xl tracking-widest uppercase text-foreground">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[700px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Jewelry design process" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center bg-background">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Quiet luxury, <br/>made accessible.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Velmora was born from a desire for demi-fine jewelry that bridges the gap between fleeting fashion pieces and inaccessible fine jewelry. We believe everyday pieces should feel extraordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Using 18k gold vermeil over a sterling silver or brass base, our pieces are designed to be lived in, layered, and loved for years to come.
            </p>
            <div>
              <Link to="#" className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors pb-1 border-b border-foreground">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UGC / Instagram Row */}
      <section className="py-20 md:py-32 overflow-hidden bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Worn by You</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">@VelmoraJewelry</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 scrollbar-hide snap-x">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative w-64 md:w-72 aspect-[9/16] flex-shrink-0 snap-center group overflow-hidden bg-muted">
              <img 
                src={post.image} 
                alt="User generated content" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-center">
                <p className="font-serif italic text-lg">{post.caption}</p>
              </div>
            </div>
          ))}
          {/* Add a few more just to fill screen width */}
          <div className="relative w-64 md:w-72 aspect-[9/16] flex-shrink-0 snap-center group overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="User generated content" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { text: "The quality is absolutely stunning. I haven't taken my Golden Sphere Huggies off since they arrived. They look and feel like solid gold.", author: "Eleanor T." },
              { text: "Beautiful packaging and even more beautiful jewelry. The Vivid Aura ear cuff adds exactly the right amount of edge to my daily look.", author: "Sarah M." },
              { text: "Finally found demi-fine jewelry that doesn't tarnish after a month. So impressed with the craftsmanship of the Majestic Flora necklace.", author: "Jessica R." }
            ].map((review, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="flex gap-1 text-primary mb-6">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="font-serif text-xl italic leading-relaxed mb-6">"{review.text}"</p>
                <p className="tracking-widest uppercase text-sm text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Join the Insider List</h2>
          <p className="text-white/70 mb-10 text-lg">Receive 10% off your first order, plus early access to new collections and editorial features.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent border border-white/30 text-white px-6 py-4 outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-white hover:bg-accent px-8 py-4 tracking-widest uppercase text-sm font-medium transition-colors border border-transparent"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;