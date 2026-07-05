import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PRODUCTS } from '@/lib/data'
import { useCartStore } from '@/lib/store'
import { toast } from 'sonner'
import { ShieldCheck, Truck, RotateCcw, Droplets } from 'lucide-react'

// Helper for image loading
import { useEffect, useRef } from 'react'

export function Home() {
  const containerRef = useRef(null)

  const { addItem } = useCartStore()

  const bestsellers = PRODUCTS.slice(0, 4)

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success(`Added ${product.name} to cart`)
  }

  return (
    <div ref={containerRef} className="w-full relative bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-secondary/30"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="gold jewelry worn on neck warm luxury neutral background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        {/* Fallback mockup bg */}
        <div className="absolute inset-0 z-0 bg-[#D4CEC4] mix-blend-multiply pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left mt-10 md:mt-20">
          <div className="max-w-2xl bg-background/60 md:bg-transparent p-8 md:p-0 backdrop-blur-md md:backdrop-blur-none inline-block pb-10">
            <span className="uppercase tracking-widest text-xs font-semibold mb-4 block text-foreground drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Velmora Fine Jewelry</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
              Crafted to be <br/><i className="italic font-light">Treasured</i>
            </h1>
            <p className="text-foreground text-lg mb-10 max-w-md mx-auto md:mx-0 font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Elevate your everyday with demi-fine gold essentials. Ethically crafted for the modern romantic.
            </p>
            <Button size="lg" asChild className="w-full md:w-auto">
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-background border-y border-border py-4 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-y-4 gap-x-8 text-xs font-medium uppercase tracking-wider text-muted-foreground w-full">
            <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Free Worldwide Shipping</div>
            <div className="flex items-center gap-2"><RotateCcw className="w-4 h-4 text-primary" /> 30-Day Returns</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 18K Gold Plated</div>
            <div className="flex items-center gap-2"><Droplets className="w-4 h-4 text-primary" /> Hypoallergenic</div>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-3 text-foreground">Our Most Loved</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Iconic essentials</p>
          </div>
          <Link to="/shop" className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors text-foreground">
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {bestsellers.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block group/card text-foreground">
              <div className="relative aspect-[3/4] mb-4 bg-secondary/30 overflow-hidden border border-border">
                <img 
                  alt={product.imageAlt}
                  className="object-cover w-full h-full transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 absolute inset-0 z-10"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  dangerouslySetInnerHTML={{ __html: '' }} // hack to bypass jsx restrictions for custom attrs
                  {...{[product.image.split('="')[0]]: product.image.split('="')[1].replace('"', '')}}
                  data-strk-img-id={`best-${product.id}-1`}
                  data-strk-img-ratio="2x3"
                />
                 <img 
                  alt={`${product.name} worn`}
                  className="object-cover w-full h-full absolute inset-0 z-0"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  {...{[product.altImage.split('="')[0]]: product.altImage.split('="')[1].replace('"', '')}}
                  data-strk-img-id={`best-${product.id}-2`}
                  data-strk-img-ratio="2x3"
                />
                
                <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover/card:opacity-100 transition-opacity z-20 translate-y-2 group-hover/card:translate-y-0 duration-300">
                  <Button 
                    className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm" 
                    variant="outline"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Quick Add
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif uppercase tracking-wider text-sm mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm font-light">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
           <Button variant="outline" asChild className="w-full border-foreground text-foreground">
            <Link to="/shop">Shop All Bestsellers</Link>
          </Button>
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="bg-[#EFECE5] py-24 overflow-hidden border-y border-border">
        <div className="container mx-auto px-6 mb-12 text-center text-foreground">
          <h2 className="text-3xl font-serif">Spotted in Velmora</h2>
          <p className="text-foreground/60 mt-2">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll strip */}
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 md:mx-0">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="min-w-[280px] w-[280px] md:w-[320px] aspect-[9/16] relative snap-center flex-none bg-muted overflow-hidden group">
               <img 
                  alt={`Editorial ${i}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img={`[ugc-title-${i}] gold jewelry style women`}
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img-ratio="9x16"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p id={`ugc-title-${i}`} className="text-white font-serif italic text-lg leading-snug">"The perfect golden touch for date night."</p>
                  <p className="text-white/90 text-xs uppercase tracking-widest mt-2 block font-medium">Shop the look</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 container mx-auto px-6 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[600px]">
          <Link to="/shop?category=earrings" className="relative group overflow-hidden bg-secondary row-span-1 md:row-span-1">
             <img 
                  alt="Shop Earrings"
                  className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img="gold link earrings closeup"
                  data-strk-img-id="cat-earrings"
                  data-strk-img-ratio="4x3"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-center bg-background/95 backdrop-blur py-4 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-border/50">
                <span className="font-serif uppercase tracking-widest text-lg text-foreground">Earrings</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-center md:hidden">
                <span className="font-serif uppercase tracking-widest text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Earrings</span>
              </div>
          </Link>
          
          <Link to="/shop?category=necklaces" className="relative group overflow-hidden bg-secondary row-span-1 md:row-span-1">
             <img 
                  alt="Shop Necklaces"
                  className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img="gold pendant necklace woman chest"
                  data-strk-img-id="cat-neck"
                  data-strk-img-ratio="4x3"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-center bg-background/95 backdrop-blur py-4 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-border/50">
                <span className="font-serif uppercase tracking-widest text-lg text-foreground">Necklaces</span>
              </div>
               <div className="absolute bottom-8 left-8 right-8 text-center md:hidden">
                <span className="font-serif uppercase tracking-widest text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Necklaces</span>
              </div>
          </Link>

          <Link to="/shop?category=huggies" className="relative group overflow-hidden bg-secondary row-span-1 md:row-span-1">
             <img 
                  alt="Shop Huggies"
                  className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img="gold huggie hoops ear closeup"
                  data-strk-img-id="cat-huggies"
                  data-strk-img-ratio="4x3"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-center bg-background/95 backdrop-blur py-4 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-border/50">
                <span className="font-serif uppercase tracking-widest text-lg text-foreground">Huggies</span>
              </div>
               <div className="absolute bottom-8 left-8 right-8 text-center md:hidden">
                <span className="font-serif uppercase tracking-widest text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Huggies</span>
              </div>
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative bg-secondary aspect-[4/5] border border-border">
            <img 
                alt="Velmora Studio"
                className="object-cover w-full h-full"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img="jewelry maker studio gold rings editorial"
                data-strk-img-id="story-img"
                data-strk-img-ratio="3x4"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-lg text-foreground">
            <h2 className="text-4xl font-serif mb-6 text-foreground">Designed for the <br/>Everyday Romantic</h2>
            <p className="text-foreground/80 text-lg font-light leading-relaxed mb-8">
              We believe fine jewelry shouldn't live in a safe. It should be worn, loved, and lived in. That's why we create demi-fine pieces using thick 18K gold vermeil—designed to give you the luxury feel at an accessible price point, without compromising on quality or ethics.
            </p>
            <Button variant="outline" asChild size="lg" className="border-foreground hover:bg-foreground hover:text-background rounded-none">
              <Link to="/">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
       <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-serif text-3xl mb-16 text-foreground">Words of Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "I haven't taken off my Golden Sphere Huggies since they arrived. The perfect weight, the perfect color, zero irritation. Completely obsessed.",
                author: "Sarah M.",
                rating: 5
              },
              {
                text: "Finally, jewelry that actually looks expensive without the literal diamond price tag. The packaging was stunning—felt like opening a true gift to myself.",
                author: "Elena V.",
                rating: 5
              },
              {
                text: "The Majestic Flora necklace is delicate but so well-made. I've showered with it on and it hasn't tarnished at all. Beautiful piece.",
                author: "Chloe T.",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-background p-8 border border-border shadow-sm text-center flex flex-col items-center">
                <div className="flex gap-1 mb-4 text-[#B89A6A]">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-foreground px-4 flex-1">"{review.text}"</p>
                <div className="w-8 h-[1px] bg-primary/40 my-4" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}