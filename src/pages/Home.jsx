import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ShieldCheck, Truck, RotateCcw, Heart } from 'lucide-react';

const Home = () => {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);
  
  const ugcImages = [
    { id: 1, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 888"%3E%3Crect width="500" height="888" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%238c857d"%3EUGC 1%3C/text%3E%3C/svg%3E', caption: 'Everyday elegance.' },
    { id: 2, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 888"%3E%3Crect width="500" height="888" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%238c857d"%3EUGC 2%3C/text%3E%3C/svg%3E', caption: 'Golden hour glow.' },
    { id: 3, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 888"%3E%3Crect width="500" height="888" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%238c857d"%3EUGC 3%3C/text%3E%3C/svg%3E', caption: 'Layered perfection.' },
    { id: 4, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 888"%3E%3Crect width="500" height="888" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%238c857d"%3EUGC 4%3C/text%3E%3C/svg%3E', caption: 'A touch of luxury.' },
  ];

  const categories = [
    { title: 'Earrings', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"%3E%3Crect width="800" height="1000" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%238c857d"%3EEarrings Category%3C/text%3E%3C/svg%3E', link: '/shop?category=earrings' },
    { title: 'Necklaces', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"%3E%3Crect width="800" height="1000" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%238c857d"%3ENecklaces Category%3C/text%3E%3C/svg%3E', link: '/shop?category=necklaces' },
    { title: 'Huggies', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"%3E%3Crect width="800" height="1000" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%238c857d"%3EHuggies Category%3C/text%3E%3C/svg%3E', link: '/shop?category=huggies' },
  ];

  return (
    <div className="w-full">
      {/* 1 & 2. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] w-full bg-velmora-dark text-velmora-base -mt-[88px]">
        <img 
          src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"%3E%3Crect width="1920" height="1080" fill="%232A2826"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="60" fill="%23E8D4B4"%3EHero Background Image%3C/text%3E%3C/svg%3E' 
          alt="Velmora Jewelry on Model" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6">Crafted to be<br />Treasured</h1>
          <p className="font-sans text-sm md:text-base max-w-lg mb-10 text-velmora-base/90 uppercase tracking-widest leading-loose">
            Demi-fine gold jewelry for the modern romantic. Elevate your everyday.
          </p>
          <Link 
            to="/shop" 
            className="px-10 py-4 bg-transparent border border-velmora-base hover:bg-velmora-base hover:text-velmora-dark transition-colors duration-300 uppercase text-xs tracking-[0.2em] font-medium"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-velmora-light border-y border-velmora-border py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs tracking-wider uppercase text-velmora-muted font-medium">
            <div className="flex items-center space-x-2"><Truck size={16} /><span>Free Worldwide Shipping</span></div>
            <div className="hidden md:block w-px h-4 bg-velmora-border"></div>
            <div className="flex items-center space-x-2"><RotateCcw size={16} /><span>30-Day Returns</span></div>
            <div className="hidden md:block w-px h-4 bg-velmora-border"></div>
            <div className="flex items-center space-x-2"><ShieldCheck size={16} /><span>18K Gold Plated</span></div>
            <div className="hidden md:block w-px h-4 bg-velmora-border"></div>
            <div className="flex items-center space-x-2"><Heart size={16} /><span>Hypoallergenic</span></div>
          </div>
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-wider uppercase mb-4">Most Coveted</h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Styled UGC Reel Row (Horizontal Scroll) */}
      <section className="bg-velmora-light py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl text-center tracking-wider uppercase">Spotted In Velmora</h2>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-4 md:px-8 pb-8 snap-x snap-mandatory">
          {ugcImages.map(ugc => (
            <div key={ugc.id} className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] snap-center group overflow-hidden">
              <img src={ugc.image} alt="User generated content" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 text-velmora-base">
                <p className="font-serif text-xl italic text-shadow-sm">{ugc.caption}</p>
                <div className="w-6 h-px bg-velmora-base mt-3"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category Tiles */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link key={category.title} to={category.link} className="group relative block aspect-[4/5] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-velmora-base/90 px-8 py-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="font-serif text-xl tracking-widest uppercase text-velmora-dark">{category.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Brand Story Split Section */}
      <section className="bg-velmora-light">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 aspect-square md:aspect-auto">
            <img 
              src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"%3E%3Crect width="1000" height="1000" fill="%23ecddebe"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%238c857d"%3EBrand Story Image%3C/text%3E%3C/svg%3E' 
              alt="Velmora Craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 text-center md:text-left">
            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">The Art of<br/>Restraint</h2>
              <p className="text-velmora-muted mb-8 leading-relaxed font-serif text-lg italic">
                "We believe jewelry shouldn't overpower the wearer, but rather illuminate them."
              </p>
              <p className="mb-10 text-sm leading-loose">
                Every Velmora piece is thoughtfully designed to bridge the gap between premium fine jewelry and accessible everyday wear. We use thick 18k gold plating over hypoallergenic brass to ensure lasting radiance.
              </p>
              <Link 
                to="/about" 
                className="inline-block border-b border-velmora-dark pb-1 text-xs tracking-widest uppercase font-medium hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-velmora-base">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl tracking-wider uppercase mb-16">Notes from our Clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { quote: "The quality is simply unmatched for the price. My huggies have survived daily wear for months.", author: "Sarah M." },
              { quote: "Beautiful packaging and the necklace glows exactly like my solid gold pieces.", author: "Elena R." },
              { quote: "I receive compliments every time I wear the Vivid Aura cuff. A truly unique design.", author: "Chloe T." }
            ].map((testimonial, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex space-x-1 mb-6 text-velmora-gold">
                  {[...Array(5)].map((_, j) => <Heart key={j} size={16} fill="currentColor" className="stroke-none" />)}
                </div>
                <p className="font-serif text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="w-8 h-px bg-velmora-border mb-4"></div>
                <p className="text-xs uppercase tracking-widest font-medium text-velmora-muted">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;