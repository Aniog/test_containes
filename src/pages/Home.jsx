import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

const TrustBar = () => (
  <div className="bg-card border-b border-border py-3">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs text-secondary tracking-widest uppercase font-medium">
      <span className="w-1/2 md:w-auto text-center md:text-left py-1">Free Worldwide Shipping</span>
      <span className="w-1/2 md:w-auto text-center md:text-left py-1">30-Day Returns</span>
      <span className="w-1/2 md:w-auto text-center md:text-left py-1">18K Gold Plated</span>
      <span className="w-1/2 md:w-auto text-center md:text-left py-1">Hypoallergenic</span>
    </div>
  </div>
);

const seedProducts = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, image1: '[vivid-aura-earrings]', image2: '[vivid-aura-earrings-worn]' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, image1: '[majestic-flora-necklace]', image2: '[majestic-flora-necklace-worn]' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, image1: '[golden-sphere-huggies]', image2: '[golden-sphere-huggies-worn]' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, image1: '[amber-lace-earrings]', image2: '[amber-lace-earrings-worn]' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, image1: '[royal-heirloom-set]', image2: '[royal-heirloom-set-worn]' },
];

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addItem(product, 1, 'gold'); // Defaulting tone for quick add
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
  <div onClick={handleClick} className="group flex flex-col gap-4 cursor-pointer">
    <div className="relative aspect-[4/5] bg-card overflow-hidden rounded-sm">
      <img 
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
        data-strk-img-id={`prod-img1-${product.id}`}
        data-strk-img={product.image1}
        data-strk-img-ratio="4x5"
        className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
        alt={product.name}
      />
      <img 
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
        data-strk-img-id={`prod-img2-${product.id}`}
        data-strk-img={product.image2}
        data-strk-img-ratio="4x5"
        className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        alt={`${product.name} worn`}
      />
      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <Button 
           variant="secondary" 
           onClick={handleQuickAdd}
           className="w-full bg-background/90 backdrop-blur hover:bg-background text-foreground tracking-widest uppercase text-xs h-10"
        >
          Quick Add
        </Button>
      </div>
    </div>
    <div className="flex flex-col items-center text-center space-y-1">
      <h3 className="font-serif uppercase tracking-widest text-sm text-foreground">{product.name}</h3>
      <p className="text-secondary text-sm">${product.price}</p>
    </div>
  </div>
);
}

const Home = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    // Dynamically import ImageHelper only when needed to avoid issues if SDK isn't fully ready
    import('@strikingly/sdk').then(({ ImageHelper }) => {
       import('@/strk-img-config.json').then((module) => {
         if (containerRef.current) {
            ImageHelper.loadImages(module.default || module, containerRef.current);
         }
       }).catch(() => {
          // If strk-img-config.json doesn't exist yet, that's okay for now.
          console.warn("strk-img-config.json not found, skipping image loading.");
       });
    }).catch((e) => console.error("Could not load ImageHelper", e));
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-20 md:mt-0">
        <div 
          className="absolute inset-0 z-0 bg-[#3f3b35]" /* Fallback color matching jewelry vibe */
        >
          <div 
            className="absolute inset-0 w-full h-full"
            data-strk-bg-id="hero-bg"
            data-strk-bg="[hero-title] [hero-subtitle] gold demi-fine jewelry worn by elegant woman editorial lighting dark background"
            data-strk-bg-ratio="16x9"
            style={{ 
               // inline style to ensure background covers, though class should handle
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center mt-12 md:mt-0">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif text-[#FDFBF8] mb-4 drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-[#FDFBF8]/90 mb-10 font-sans max-w-xl text-shadow-sm">
            Discover our collection of premium demi-fine gold jewelry, designed for the modern romantic and everyday elegance.
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg tracking-widest uppercase text-sm h-12 px-8">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl mb-4">Our Bestsellers</h2>
          <div className="w-12 h-[1px] bg-primary mb-6"></div>
          <p id="bestsellers-desc" className="text-secondary max-w-2xl">
            The most loved pieces in our collection, meticulously crafted in 18k gold vermeil to elevate your everyday look.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {seedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Section */}
      <section className="py-24 bg-card w-full overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 id="ugc-title" className="text-3xl md:text-4xl text-center mb-4">Spotted in Velmora</h2>
           <div className="w-12 h-[1px] bg-primary mb-6 mx-auto"></div>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-4 md:px-12 no-scrollbar">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="shrink-0 w-64 md:w-80 aspect-[9/16] relative snap-center rounded-sm overflow-hidden group">
               <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" 
                  data-strk-img-id={`ugc-img-${i}`}
                  data-strk-img={`[ugc-title] lifestyle vertical jewelry worn woman ${i} gold earrings necklace`}
                  data-strk-img-ratio="9x16"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
                  alt={`Lifestyle photo ${i}`}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-[#FDFBF8] font-serif italic text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    "Everyday elegance defined."
                  </p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'cat-ear', title: 'Earrings', query: 'gold earrings flatlay neutral background editorial' },
              { id: 'cat-neck', title: 'Necklaces', query: 'gold necklaces layered flatlay warm lighting' },
              { id: 'cat-hug', title: 'Huggies', query: 'gold chunky huggies earrings flatlay aesthetics' }
            ].map(cat => (
              <Link key={cat.id} to={`/shop?category=${cat.title.toLowerCase()}`} className="group block relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                 <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
                  data-strk-img-id={`cat-img-${cat.id}`}
                  data-strk-img={cat.query}
                  data-strk-img-ratio="4x5"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
                  alt={`Shop ${cat.title}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors duration-500">
                  <span className="bg-background/95 text-foreground px-8 py-3 font-serif uppercase tracking-widest text-sm transition-transform duration-500 group-hover:-translate-y-2 shadow-sm rounded-sm">
                    {cat.title}
                  </span>
                </div>
              </Link>
            ))}
         </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 hidden md:flex min-h-[500px]">
          <div className="w-1/2 relative pr-8">
             <div 
                className="absolute inset-0 rounded-sm overflow-hidden"
                data-strk-bg-id="story-bg"
                data-strk-bg="[story-title] jewelry craftsmanship gold editorial neutral aesthetic"
                data-strk-bg-ratio="4x5"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
          </div>
          <div className="w-1/2 flex flex-col justify-center pl-16">
             <h2 id="story-title" className="text-4xl mb-6 leading-tight">Quiet Luxury,<br/>Made Accessible.</h2>
             <div className="w-12 h-[1px] bg-primary mb-8"></div>
             <p className="text-secondary leading-relaxed mb-8 max-w-md">
               Velmora was born from a desire for jewelry that bridges the gap between high-end fine pieces and fleeting fashion accessories. We create demi-fine gold jewelry designed to be lived in, loved, and layered.
             </p>
             <div>
                <Button variant="outline" asChild className="tracking-widest uppercase text-xs h-10 px-6">
                  <Link to="/about">Our Story</Link>
                </Button>
             </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="md:hidden flex flex-col container mx-auto px-4">
           <div 
              className="w-full aspect-square mb-8 rounded-sm overflow-hidden"
              data-strk-bg-id="story-bg-mobile"
              data-strk-bg="[story-title-mobile] jewelry craftsmanship gold editorial neutral aesthetic"
              data-strk-bg-ratio="1x1"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <h2 id="story-title-mobile" className="text-3xl mb-6 leading-tight">Quiet Luxury,<br/>Made Accessible.</h2>
            <div className="w-12 h-[1px] bg-primary mb-6"></div>
            <p className="text-secondary leading-relaxed mb-8">
              Velmora was born from a desire for jewelry that bridges the gap between high-end fine pieces and fleeting fashion accessories. We create demi-fine gold jewelry designed to be lived in.
            </p>
            <Button variant="outline" asChild className="w-full tracking-widest uppercase text-xs h-10">
              <Link to="/about">Our Story</Link>
            </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-3xl mb-16 font-serif">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { id: 1, text: "The quality is unbelievable for the price. I've worn my huggies every day for months and they still look brand new.", name: "Sarah J." },
            { id: 2, text: "Beautiful packaging and stunning jewelry. It instantly elevates my everyday outfits. Will definitely be ordering more.", name: "Elena M." },
            { id: 3, text: "I bought a necklace as a gift for my sister and ended up ordering one for myself. The vintage gold tone is perfect.", name: "Chloe T." }
          ].map(review => (
            <div key={review.id} className="flex flex-col items-center px-4">
              <div className="flex text-primary mb-6">
                {[1,2,3,4,5].map(star => (
                   <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                ))}
              </div>
              <p className="font-serif text-lg italic text-foreground mb-6 max-w-sm">"{review.text}"</p>
              <span className="text-xs font-sans tracking-widest uppercase text-secondary">— {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-card py-24 mb-0 border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-serif mb-4 text-foreground">A Gift for You</h2>
          <p className="mb-8 text-secondary">Join the Velmora insider list to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-background border border-border px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-sm"
              required
            />
            <Button type="submit" className="whitespace-nowrap tracking-widest uppercase text-xs h-12 sm:h-auto px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;