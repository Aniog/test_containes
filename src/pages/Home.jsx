import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { products } from '../data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const SVG_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnLz4=";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-[#2C2A26]"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
        <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide max-w-4xl leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subhead" className="mt-6 text-lg md:text-xl font-light tracking-wide max-w-xl text-white/90">
          Demi-fine gold jewelry for the modern everyday. Elevate your collection with accessible luxury.
        </p>
        <Link 
          to="/shop" 
          className="mt-10 inline-flex items-center gap-2 bg-primary text-white border border-primary px-8 py-4 text-sm tracking-widest uppercase hover:bg-transparent hover:text-white transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

const TrustBar = () => {
  return (
    <div className="w-full bg-foreground text-background py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-widest uppercase text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-primary">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-primary">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-primary">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  const bestsellers = products.slice(0, 4)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl tracking-wide">Bestsellers</h2>
          <Link to="/shop" className="text-sm tracking-widest uppercase pb-1 border-b border-foreground hover:text-primary hover:border-primary transition-colors">
            Shop All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
                <img 
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-id={product.imgId}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={SVG_PLACEHOLDER}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Second image on hover effect */}
                <div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img 
                    data-strk-img={`[${product.descId}] [${product.titleId}] model worn`}
                    data-strk-img-id={`${product.imgId}-hover`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src={SVG_PLACEHOLDER}
                    alt={`${product.name} worn`}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-xs tracking-widest uppercase px-3 py-1 z-10">
                    {product.tag}
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                  <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-colors border border-transparent hover:border-primary">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 id={product.titleId} className="font-serif text-lg tracking-wide uppercase">{product.name}</h3>
              <p className="mt-1 text-muted-foreground">${product.price}</p>
              <p id={product.descId} className="hidden">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const CategoryTiles = () => {
  const categories = [
    { title: "Earrings", id: "cat-earrings" },
    { title: "Necklaces", id: "cat-necklaces" },
    { title: "Huggies", id: "cat-huggies" }
  ]

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="categories-title" className="sr-only">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <Link to={`/shop?category=${cat.title}`} key={idx} className="group relative aspect-square overflow-hidden block">
              <img 
                data-strk-img={`[${cat.id}] category banner`}
                data-strk-img-id={`banner-${cat.id}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src={SVG_PLACEHOLDER}
                alt={cat.title}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={cat.id} className="text-white font-serif text-3xl tracking-widest uppercase">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const BrandStory = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden">
            <img 
              data-strk-img="[story-text] [story-title] woman wearing fine jewelry"
              data-strk-img-id="brand-story-img"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={SVG_PLACEHOLDER}
              alt="Woman wearing Velmora jewelry"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 id="story-title" className="font-serif text-4xl lg:text-5xl tracking-wide mb-8">
              Quiet Luxury for the Everyday
            </h2>
            <p id="story-text" className="text-muted-foreground text-lg leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We craft modern heirlooms using vermeil and 18K solid gold plating, designed to be worn, loved, and lived in.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Each piece in our collection moves seamlessly from morning coffee to evening celebrations. No heavy markups, no fast fashion—just beautifully crafted pieces that feel like you.
            </p>
            <div>
              <Link to="/about" className="inline-block border-b border-foreground text-sm tracking-widest uppercase pb-1 hover:text-primary hover:border-primary transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const UGCReelRow = () => {
  const images = Array(6).fill(null).map((_, i) => ({
    id: `ugc-${i}`,
    titleId: `ugc-title-${i}`
  }))

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="mb-12 text-center">
        <h2 id="ugc-section-title" className="font-serif text-3xl lg:text-4xl tracking-wide mb-4">
          Worn By You
        </h2>
        <p className="text-muted-foreground">@velmorajewelry</p>
      </div>
      
      {/* Hide scrollbar but allow horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-8 scrollbar-hide snap-x" style={{ scrollSnapType: 'x mandatory' }}>
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <div key={`ugc-${idx}`} className="min-w-[280px] max-w-[280px] md:min-w-[320px] aspect-[9/16] relative flex-shrink-0 snap-center group">
            <img 
              data-strk-img={`[ugc-section-title] instagram reel style aesthetic jewelry photo ${idx+1}`}
              data-strk-img-id={`ugc-img-${idx}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={SVG_PLACEHOLDER}
              alt="UGC"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <p className="text-white text-sm font-serif italic mb-2 opacity-90">"Perfect everyday staple."</p>
               <Link to="/shop" className="text-white text-xs tracking-widest uppercase border-b border-white/50 pb-1 hover:border-white transition-colors">
                 Shop the Look
               </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Testimonials = () => {
  const reviews = [
    { text: "The quality is unmatched for the price point. My earrings haven't tarnished after months of daily wear.", author: "Sarah M." },
    { text: "Finally found demi-fine jewelry that doesn't irritate my sensitive skin. The Amber Lace earrings are breathtaking.", author: "Elena R." },
    { text: "Beautiful packaging and the necklace itself is so weighty and luxurious. Will definitely be a returning customer.", author: "Michelle K." }
  ]

  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="reviews-title" className="sr-only">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed flex-grow">"{review.text}"</p>
              <p className="text-sm tracking-widest uppercase font-medium">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Newsletter = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground text-center px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-serif text-4xl mb-4">Join the List</h2>
        <p className="mb-10 text-primary-foreground/80">Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
        <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow bg-transparent border-b border-primary-foreground/50 py-3 px-4 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors"
            required
          />
          <button type="submit" className="sm:ml-4 border border-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <CategoryTiles />
      <Bestsellers />
      <BrandStory />
      <UGCReelRow />
      <Testimonials />
      <Newsletter />
    </div>
  )
}