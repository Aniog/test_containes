import * as React from "react"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { ProductCard } from "../components/ProductCard"
import { products, categories, testimonials } from "../data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../strk-img-config.json"

export default function Home() {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-surface-dim"
            data-strk-bg-id="home-hero-bg"
            data-strk-bg="[hero-headline] warm gold jewelry model close up elegant lighting editorial"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl mx-auto">
            Demi-fine jewelry for the modern romantic.
          </p>
          <Button size="lg" className="bg-brand hover:bg-brand-dark text-white rounded-none tracking-widest uppercase text-xs h-14 px-10 transition-colors">
            Shop the Collection
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-[10px] md:text-xs uppercase tracking-widest text-ink-light font-medium text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-border"></span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-border"></span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-border"></span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
          <a href="/shop" className="text-sm font-medium uppercase tracking-widest flex items-center hover:text-brand transition-colors">
            Shop All <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map((product, idx) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              isNew={product.isNew}
              imageId1={`product-${product.id}-img1`}
              imageId2={`product-${product.id}-img2`}
            />
          ))}
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="py-12 bg-surface-dim overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
          <h2 className="font-serif text-3xl text-ink mb-3">Styled By You</h2>
          <p className="text-ink-light">@velmorajewelry</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] snap-center bg-border overflow-hidden group cursor-pointer">
              <img 
                data-strk-img-id={`ugc-img-${item}`}
                data-strk-img="women wearing elegant warm gold jewelry instagram reel style portrait"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Styled by customer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="font-serif italic text-lg mb-2">"My everyday essential pieces."</p>
                <div className="flex items-center gap-2 text-xs">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-16">The Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a href={`/shop?category=${cat.id}`} key={cat.id} className="group relative aspect-[3/4] overflow-hidden bg-surface-dim block">
              <img 
                data-strk-img-id={cat.imageId}
                data-strk-img={`[cat-name-${cat.id}] collection beautiful gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 opacity-100 transform transition-transform duration-500">
                  <h3 id={`cat-name-${cat.id}`} className="font-serif uppercase tracking-widest text-lg text-ink m-0">{cat.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/5] bg-brand-darker relative overflow-hidden">
              <img 
                data-strk-img-id="brand-story-img"
                data-strk-img="jewelry making craftsmanship hands elegant detail gold"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Elevating the Everyday</h2>
              <p className="text-brand-light text-lg mb-8 leading-relaxed font-light">
                Founded on the belief that luxury should be accessible, Velmora bridges the gap between fast fashion and fine jewelry. We design for the modern romantic—creating pieces that are meant to be worn, loved, and lived in.
              </p>
              <a href="/about" className="inline-flex items-center text-sm uppercase tracking-widest hover:text-brand-light transition-colors pb-1 border-b border-brand-light/50 hover:border-brand-light">
                Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 bg-surface text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-16">Kind Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test) => (
            <div key={test.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-brand">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-serif text-lg text-ink-light italic leading-relaxed mb-6">"{test.text}"</p>
              <p className="uppercase tracking-widest text-xs font-medium text-ink">— {test.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-surface-dim">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Join the Velmora Club</h2>
          <p className="text-ink-light mb-8">Sign up to receive 10% off your first order, plus early access to new collections.</p>
          
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              required
              className="flex-1 bg-white border border-border px-4 py-3 h-12 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand rounded-none"
            />
            <Button type="submit" className="bg-ink hover:bg-ink-light text-white rounded-none tracking-widest uppercase text-xs h-12 px-8 transition-colors mt-4 sm:mt-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
