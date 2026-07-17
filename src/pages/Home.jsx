import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';

const seedProducts = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42 },
  { id: '2', name: 'Majestic Flora Nectar', price: 68 },
  { id: '3', name: 'Golden Sphere Huggies', price: 38 },
  { id: '4', name: 'Amber Lace Earrings', price: 54 },
  { id: '5', name: 'Royal Heirloom Set', price: 95 },
];

const ugcItems = [
  { id: 'u1', caption: 'Everyday stacking essentials.' },
  { id: 'u2', caption: 'Golden hour glow.' },
  { id: 'u3', caption: 'The perfect gift to yourself.' },
  { id: 'u4', caption: 'Layering favorites.' },
  { id: 'u5', caption: 'Romantic details.' },
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          data-strk-bg-id="hero-bg-992x1"
          data-strk-bg="[hero-title] [hero-sub] model wearing warm gold jewelry close up editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-white max-w-3xl">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Crafted to be Treasured</h1>
          <p id="hero-sub" className="text-lg md:text-xl font-sans mb-10 text-white/90">Premium demi-fine gold jewelry for the modern romantic.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent text-accent-foreground px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs md:text-sm tracking-widest uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif mb-4">Our Bestsellers</h2>
              <p className="text-muted-foreground">The pieces everyone is loving right now.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-secondary transition-colors">
              Shop All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
            {seedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/shop" className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-secondary transition-colors">
              Shop All
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif mb-4">Styled By You</h2>
          <p className="text-muted-foreground">Tag us @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:px-8 gap-4">
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] snap-center group rounded-sm overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-${item.id}-cap] [ugc-title] lifestyle instagram reel jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <p id={`ugc-${item.id}-cap`} className="text-white font-serif text-xl italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="categories-title" className="text-3xl md:text-4xl font-serif mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map(category => (
              <Link to={`/shop?category=${category.toLowerCase()}`} key={category} className="group relative aspect-[4/5] overflow-hidden rounded-sm block">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${category}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-${category}`}
                  data-strk-img={`${category} jewelry editorial close up on model`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-serif uppercase tracking-widest px-8 py-3 border border-white/50 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden">
               <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora brand story"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="brand-story-img"
                  data-strk-img="[story-title] [story-desc] jewelry artisan workshop warm lighting"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                />
            </div>
            <div className="max-w-xl">
              <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8">Quiet Luxury, Everyday Wear</h2>
              <p id="story-desc" className="text-primary-foreground/80 mb-6 leading-relaxed">
                Velmora was born from a desire to bridge the gap between costume jewelry that tarnishes and fine jewelry that breaks the bank. 
              </p>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                We believe in the power of subtle details. Each piece in our collection is crafted with premium materials to stand the test of time, designed to be layered, loved, and lived in.
              </p>
              <Link to="/about" className="inline-block border-b border-primary-foreground pb-1 uppercase tracking-widest text-sm hover:text-accent transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                text: "I haven't taken off my Golden Sphere Huggies since I got them. They're the perfect weight and look incredibly high-end.",
                name: "Sarah M."
              },
              {
                text: "The packaging alone felt like a dream. The Vivid Aura ear cuff adds exactly the right amount of edge to my daily stack.",
                name: "Elena R."
              },
              {
                text: "I have sensitive ears but have had zero issues with Velmora pieces. Beautiful craftsmanship for the price point.",
                name: "Chloe T."
              }
            ].map((review, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="uppercase tracking-widest text-sm font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Insider List</h2>
          <p className="mb-10 text-accent-foreground/80">Sign up for styling tips, early access to new collections, and 10% off your first order.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-b border-accent-foreground/30 px-4 py-3 focus:outline-none focus:border-accent-foreground placeholder:text-accent-foreground/50 transition-colors"
              required
            />
            <button className="bg-accent-foreground text-accent px-8 py-3 uppercase tracking-widest text-sm hover:bg-accent-foreground/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
