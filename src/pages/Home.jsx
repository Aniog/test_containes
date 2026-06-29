import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ProductCard } from '@/components/ProductCard'
import { StarRating } from '@/components/StarRating'
import { products, categories, testimonials, ugcPosts } from '@/data/products'
import { PLACEHOLDER_SVG } from '@/lib/images'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[620px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-black/30 z-10"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-20" />
      <div className="relative z-30 text-center text-white px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-xs md:text-sm uppercase tracking-brand mb-4 text-white/80">
          Demi-fine gold jewelry
        </p>
        <h1 id="hero-title" className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Modern heirlooms in 18k gold plate. Designed for everyday luxury and the moments worth remembering.
        </p>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-brand text-xs px-8 py-6 rounded-sm"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}

const TrustBar = () => (
  <div className="bg-[#231F1B] text-white/90 py-3.5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] md:text-xs uppercase tracking-brand">
      <span>Free Worldwide Shipping</span>
      <span className="hidden sm:inline text-white/30">·</span>
      <span>30-Day Returns</span>
      <span className="hidden sm:inline text-white/30">·</span>
      <span>18K Gold Plated</span>
      <span className="hidden sm:inline text-white/30">·</span>
      <span>Hypoallergenic</span>
    </div>
  </div>
)

const Bestsellers = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Curated for you</p>
          <h2 className="font-heading text-4xl md:text-5xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="uppercase tracking-brand text-xs border-foreground hover:bg-foreground hover:text-background"
          >
            <Link to="/shop">Shop All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const UgcRow = () => {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-brand text-muted-foreground mb-2">@velmorafinejewelry</p>
            <h2 className="font-heading text-3xl md:text-4xl">Velmora in the Wild</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="p-2 border border-border rounded-full hover:bg-background">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} className="p-2 border border-border rounded-full hover:bg-background">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={`ugc-img-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={PLACEHOLDER_SVG}
              alt={post.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p id={`ugc-caption-${post.id}`} className="font-heading text-lg leading-tight">{post.caption}</p>
              <p className="text-[10px] uppercase tracking-brand text-white/70 mt-1">{post.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const CategoryTiles = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Shop by category</p>
          <h2 className="font-heading text-4xl md:text-5xl">Find Your Finish</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-muted transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-title-${category.id}]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${category.id}`}
                  className="font-heading text-3xl md:text-4xl text-white uppercase tracking-brand border-b border-transparent group-hover:border-white pb-1 transition-all"
                >
                  {category.label}
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
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="story" ref={containerRef} className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden">
            <img
              data-strk-img-id="story-image-velmora"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src={PLACEHOLDER_SVG}
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-brand text-muted-foreground mb-4">Our Philosophy</p>
            <h2 id="story-title" className="font-heading text-4xl md:text-5xl mb-6">Jewelry for Real Life</h2>
            <p id="story-body" className="text-muted-foreground leading-relaxed mb-6">
              Velmora was born from a simple belief: luxury should feel effortless. We design demi-fine
              pieces in 18k gold plate that move with you — from morning coffee to midnight toasts. Every
              curve, clasp, and finish is considered so you never have to choose between timeless and
              wearable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our collections are small, intentional, and made to be mixed, stacked, and treasured for
              years.
            </p>
            <Link
              to="/"
              className="inline-flex items-center text-xs uppercase tracking-brand border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Our Story <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Loved by you</p>
        <h2 className="font-heading text-4xl md:text-5xl">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-card border border-border p-6 md:p-8 rounded-sm text-center"
          >
            <StarRating rating={t.rating} size={14} />
            <p className="mt-4 text-foreground leading-relaxed">“{t.text}”</p>
            <Separator className="my-4" />
            <p className="text-xs uppercase tracking-brand text-muted-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-5xl mb-3">Join for 10% Off</h2>
        <p className="text-primary-foreground/80 mb-8">First order access, new drops, and styling notes — delivered quietly.</p>
        {status === 'success' ? (
          <p className="text-lg">Thank you. Your code is on the way.</p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-white"
            />
            <Button
              type="submit"
              className="bg-[#231F1B] text-white hover:bg-[#231F1B]/90 uppercase tracking-brand text-xs px-6"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

export const Home = () => {
  return (
    <main className="bg-background">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
