import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/data'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Home() {
  const { addToCart } = useCartStore()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-primary text-primary-foreground pt-20">
        <div 
          className="absolute inset-0 z-0 opacity-80 bg-cover bg-center"
          data-strk-bg-id="hero-bg-9a8b7c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        ></div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center mt-auto mb-32 md:mt-20 md:mb-0">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-sm max-w-4xl mx-auto leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-primary-foreground/90 font-light">
            Demi-fine gold jewelry for the modern romantic. Experience accessible luxury designed for everyday elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-widest text-sm font-semibold h-14 px-8 rounded-none border border-accent">
              <Link to="/collections">Shop the Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 uppercase tracking-widest text-sm font-semibold h-14 px-8 rounded-none">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs tracking-wider uppercase gap-x-8 gap-y-4">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Free Worldwide Shipping</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 30-Day Returns</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 18K Gold Plated</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Curated Favorites</h2>
              <p className="text-muted-foreground mt-2">Discover our most loved pieces.</p>
            </div>
            <Link to="/collections/bestsellers" className="hidden sm:inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors">
              Shop All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                  <Link to={`/products/${product.id}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {product.name}</span>
                  </Link>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`product-${product.id}-img1`}
                    data-strk-img={`[product-${product.id}-title] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                  {/* Subtle Add to Cart overlay on hover for desktop */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 md:flex hidden justify-center">
                    <Button 
                      className="w-full bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur-sm shadow-sm rounded-none border border-border"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product, product.variants[0]);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 id={`product-${product.id}-title`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                  <p className="mt-auto font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full uppercase tracking-widest text-xs h-12 rounded-none">Shop All Favorites</Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { id: 'cat-earrings', title: 'Earrings', subtitle: 'Statement & stud designs', ratio: '3x4' },
              { id: 'cat-necklaces', title: 'Necklaces', subtitle: 'Pendants to chains', ratio: '3x4' },
              { id: 'cat-huggies', title: 'Huggies', subtitle: 'Everyday ear stacks', ratio: '3x4' }
            ].map((cat) => (
              <Link key={cat.id} to={`/collections/${cat.title.toLowerCase()}`} className="group relative block aspect-[4/5] overflow-hidden bg-secondary">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-strk-img-id={`category-${cat.id}-img`}
                  data-strk-img={`[cat-${cat.id}-title] jewelry model wear`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-6 text-center">
                  <h3 id={`cat-${cat.id}-title`} className="text-3xl font-serif mb-2">{cat.title}</h3>
                  <p className="uppercase tracking-widest text-xs opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Shop Now</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 mb-12">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif text-center">Spotted in Velmora</h2>
          <p className="text-center text-muted-foreground mt-3 uppercase tracking-wider text-xs">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory lg:justify-center gap-4 px-4 sm:px-6 md:px-8" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="snap-center shrink-0 w-64 md:w-80 aspect-[9/16] relative group cursor-pointer bg-background">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={`Social post ${i}`}
                className="w-full h-full object-cover"
                data-strk-img-id={`ugc-post-${i}`}
                data-strk-img={`[ugc-title] jewelry worn on model lifestyle`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <p className="text-white font-serif text-lg leading-tight">Elevating the everyday.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0 flex flex-col md:flex-row bg-background">
        <div className="md:w-1/2 aspect-square md:aspect-[4/3] relative bg-secondary">
           <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Jewelry crafting"
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-subtitle] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
        </div>
        <div className="md:w-1/2 flex items-center justify-center p-12 md:p-20 lg:p-32">
          <div className="max-w-md">
            <h2 id="story-title" className="text-3xl md:text-4xl font-serif mb-6">Designed to Linger</h2>
            <p id="story-subtitle" className="text-muted-foreground leading-relaxed mb-8">
              Velmora was born from a desire to bridge the gap between costume jewelry that tarnishes and fine jewelry that stays locked in a safe. We craft demi-fine pieces using 18K gold plating over sustainable brass and sterling silver bases. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-4 italic font-serif text-lg">
              Quietly luxurious. Unapologetically confident. Made for your everyday.
            </p>
            <Button asChild variant="outline" className="uppercase tracking-widest text-xs h-12 px-8 rounded-none border-foreground hover:bg-foreground hover:text-background">
              <Link to="/about">Discover Our Roots</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { name: "Sarah M.", text: "The quality is unmatched for the price. I've worn my huggies every day for months and they still look brand new." },
              { name: "Elena R.", text: "Beautiful, thoughtful packaging. Received the Royal Heirloom set as a gift and I'm absolutely in love." },
              { name: "Chloe T.", text: "Customer service is incredible. The Vivid Aura Jewels are my new favorite statement piece." }
            ].map((review, i) => (
              <div key={i} className="pt-12 md:pt-0 md:px-8 first:pt-0 first:px-0 first:md:pr-8 last:md:pl-8 flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-accent">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed flex-1 w-full max-w-sm">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center max-w-2xl relative z-10">
          <h2 className="text-3xl font-serif mb-4">Join the Velmora World</h2>
          <p className="text-muted-foreground mb-8">Subscribe to receive 10% off your first order, plus exclusive access to new arrivals and secret sales.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 h-12 bg-transparent border-b border-border/80 focus:border-foreground outline-none transition-colors px-4 placeholder:text-muted-foreground/60 rounded-none bg-background/50"
              required
            />
            <Button type="submit" className="h-12 px-8 uppercase tracking-widest text-xs rounded-none bg-foreground text-background hover:bg-foreground/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  )
}
