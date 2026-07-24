import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Will handle if it doesn't exist yet by mocking or creating

export const products = [
  {
    id: 'prod-001',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    description: 'Gold ear cuff with crystal accent',
    imgId: 'vivid-aura-1',
    imgHoverId: 'vivid-aura-2'
  },
  {
    id: 'prod-002',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    description: 'Multicolor floral crystal necklace',
    imgId: 'majestic-flora-1',
    imgHoverId: 'majestic-flora-2'
  },
  {
    id: 'prod-003',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings',
    imgId: 'golden-sphere-1',
    imgHoverId: 'golden-sphere-2'
  },
  {
    id: 'prod-004',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    description: 'Textured gold filigree drop earrings',
    imgId: 'amber-lace-1',
    imgHoverId: 'amber-lace-2'
  },
  {
    id: 'prod-005',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    description: 'Gift-boxed earring + necklace set',
    imgId: 'royal-heirloom-1',
    imgHoverId: 'royal-heirloom-2'
  }
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    // Store the actual loaded image URL into the cart so the cart doesn't have to query the plugin API that breaks at build
    const buttonElement = e.currentTarget;
    const parentContainer = buttonElement.closest('div.relative.aspect-\\[3\\/4\\]');
    let realImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
    
    if (parentContainer) {
      const imgElements = parentContainer.querySelectorAll('img[data-strk-img-id]');
      if (imgElements && imgElements.length > 0) {
        realImage = imgElements[0].src;
      }
    }

    addItem({
      ...product,
      variant: 'gold', // Default variant
      image: realImage
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div 
        className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
          data-strk-img-id={product.imgId}
          data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          data-strk-img-id={product.imgHoverId}
          data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Button */}
        <div className={cn(
          "absolute bottom-0 inset-x-0 p-4 translate-y-full transition-transform duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0",
        )}>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase hover:bg-background transition-colors shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="text-center group-hover:opacity-70 transition-opacity">
        <h3 id={`product-name-${product.id}`} className="font-serif text-lg tracking-wider mb-1">{product.name}</h3>
        <p id={`product-desc-${product.id}`} className="text-muted-foreground text-sm mb-2 opacity-0 h-0 overflow-hidden">{product.description}</p>
        <p className="font-medium text-sm">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      // Mock or actual call depending on if config exists
      if (typeof ImageHelper !== 'undefined') {
        const cancelTimer = setTimeout(() => {
            ImageHelper.loadImages(strkImgConfig || {}, containerRef.current);
        }, 100);
        return () => clearTimeout(cancelTimer);
      }
    } catch(e) {
        console.log("Image load error expected if sdk not fully ready", e);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-muted">
          <div 
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            data-strk-bg-id="home-hero-bg"
            data-strk-bg="[hero-subhead] [hero-headline]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          ></div>
          <div className="absolute inset-0 bg-black/20" /> {/* Slight dark overlay to ensure white text readability */}
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-3xl px-4 flex flex-col items-center">
          <h1 id="hero-headline" className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-sans font-light tracking-wide mb-10 max-w-xl drop-shadow-md">
            Elevate your everyday with demi-fine gold jewelry designed for the modern editorial aesthetic.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary-foreground text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary-foreground/90 transition-colors shadow-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-background py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-wider uppercase text-muted-foreground text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif mb-4">Our Bestsellers</h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">
              Discover the pieces and matching sets our community reaches for every day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/shop" 
              className="inline-block border border-primary text-foreground px-10 py-4 uppercase tracking-widest text-sm hover:bg-muted transition-colors"
            >
              View All Jewelry
            </Link>
          </div>
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="py-16 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif text-center">Spotted in Velmora</h2>
        </div>
        
        {/* Thumbnail Carousel */}
        <div className="flex overflow-x-auto gap-4 px-4 md:px-6 pb-8 no-scrollbar snap-x snap-mandatory">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative w-64 md:w-80 flex-none aspect-[9/16] bg-muted snap-center group overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Editorial look ${i}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-title] elegant gold jewelry editorial portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <p className="font-serif text-lg leading-tight">Everyday elegance, elevated.</p>
                <Link to="/shop" className="text-xs tracking-wider uppercase underline mt-2 inline-block">Shop the look</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'cat-1', title: 'Earrings', link: '/shop?category=earrings' },
              { id: 'cat-2', title: 'Necklaces', link: '/shop?category=necklaces' },
              { id: 'cat-3', title: 'Huggies', link: '/shop?category=huggies' }
            ].map((cat) => (
              <Link key={cat.id} to={cat.link} className="group block relative aspect-square md:aspect-[4/5] bg-muted overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${cat.title}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`cat-img-${cat.id}`}
                  data-strk-img={`[cat-label-${cat.id}] gold fine jewelry close up`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 
                    id={`cat-label-${cat.id}`} 
                    className="text-primary-foreground text-3xl font-serif tracking-width opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0"
                  >
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden order-2 md:order-1">
               <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora Studio"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="story-img-1"
                  data-strk-img="[story-headline] [story-desc]"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                />
            </div>
            <div className="order-1 md:order-2 max-w-lg">
              <h2 id="story-headline" className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Quiet Luxury, Accessible to All</h2>
              <p id="story-desc" className="text-muted-foreground font-light mb-8 leading-relaxed">
                Founded on the belief that premium jewelry shouldn't come with traditional retail markups. 
                We work directly with master jewelers to craft pieces that blend editorial design with every day wearability. 
                Each piece is heavily plated in 18k gold to ensure lasting radiance.
              </p>
              <Link to="/about" className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif">Loved by You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                text: "The quality is absolutely stunning. They have that heavy, expensive feel but are comfortable enough to sleep in. The Amber Lace earrings are my new staple.",
                author: "Sarah M.",
                stars: 5
              },
              {
                text: "Beautiful packaging and even more beautiful jewelry. I bought a set for my sister's wedding and had to come back to get one for myself.",
                author: "Elena R.",
                stars: 5
              },
              {
                text: "I've worn my huggies every day for three months—in the shower, working out—and they still look brand new. Truly excellent plating.",
                author: "Jessica T.",
                stars: 5
              }
            ].map((review, i) => (
              <div key={i} className="text-center flex flex-col items-center p-6 border border-border">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-primary text-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 flex-1">"{review.text}"</p>
                <p className="text-sm tracking-widest uppercase text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Join the Insiders</h2>
          <p className="font-light tracking-wide mb-10 opacity-90">
            Sign up for 10% off your first order, early access to new collections, and editorial jewelry styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors text-primary-foreground"
            />
            <button 
              type="submit"
              className="bg-primary-foreground text-primary px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary-foreground/90 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}