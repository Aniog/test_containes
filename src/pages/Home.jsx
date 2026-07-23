import { useRef } from 'react'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard.jsx'
import { StockBackground, StockImage } from '@/components/store/ImageSlot.jsx'
import SiteFooter from '@/components/store/SiteFooter.jsx'
import { categories, products, testimonials, trustItems, ugcMoments } from '@/data/storefront.js'
import useStrkImages from '@/hooks/useStrkImages.jsx'

const Home = () => {
  const containerRef = useRef(null)
  const bestsellerProducts = products.slice(0, 5)

  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-velmora-porcelain text-velmora-noir">
      <section className="relative min-h-[100svh] overflow-hidden bg-velmora-noir text-velmora-ivory">
        <div className="absolute inset-0">
          <StockBackground
            backgroundId="hero-bg-velmora-5de91b"
            className="h-full w-full bg-velmora-noir bg-cover bg-center"
            descId="hero-desc"
            titleId="hero-title"
            width="1800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-velmora-noir via-velmora-noir/65 to-velmora-noir/25" />
          </StockBackground>
        </div>

        <div className="relative section-wrap flex min-h-[100svh] items-end py-28 pb-16 md:pb-24 lg:items-center">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <p className="eyebrow text-velmora-champagne">Premium demi-fine jewelry</p>
            <h1 id="hero-title" className="max-w-xl text-5xl leading-[0.9] text-velmora-ivory sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Crafted to be Treasured
            </h1>
            <p id="hero-desc" className="max-w-xl text-base leading-8 text-velmora-ivory/78 md:text-lg">
              Quietly luxurious gold jewelry for self-purchase and meaningful gifting, designed to slip into your every day with warmth and ease.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link className="luxury-button-primary" to="/shop">
                Shop the Collection
              </Link>
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-brand text-velmora-ivory/80 transition-colors duration-300 hover:text-velmora-champagne"
                to="/shop"
              >
                Discover bestsellers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-mist/30 bg-velmora-ivory text-velmora-noir">
        <div className="section-wrap flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-[11px] font-medium uppercase tracking-brand text-velmora-noir/70 md:gap-x-10">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section-wrap py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="eyebrow">Bestsellers</p>
            <h2 className="text-4xl text-velmora-noir md:text-5xl">Jewelry with lasting presence</h2>
          </div>
          <Link
            className="hidden items-center gap-2 text-sm uppercase tracking-brand text-velmora-noir/70 transition-colors duration-300 hover:text-velmora-noir md:inline-flex"
            to="/shop"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} idPrefix={`home-bestseller-${index}`} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-velmora-noir py-16 text-velmora-ivory md:py-24">
        <div className="section-wrap">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="eyebrow text-velmora-champagne">Styled in real life</p>
              <h2 className="text-4xl text-velmora-ivory md:text-5xl">A reel of warm, wearable moments</h2>
            </div>
            <span className="hidden text-sm uppercase tracking-brand text-velmora-mist md:inline-block">
              Swipe to explore
            </span>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-3">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[260px] max-w-[260px] overflow-hidden rounded-[2rem] border border-velmora-ivory/10 bg-velmora-truffle/35"
              >
                <StockImage
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition-transform duration-500 ease-luxe group-hover:scale-105"
                  descId={moment.descId}
                  imageId={moment.imageId}
                  ratio="9x16"
                  titleId={moment.titleId}
                  width="600"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/65 to-transparent px-5 pb-6 pt-16">
                  <p id={moment.titleId} className="font-serif text-3xl text-velmora-ivory">
                    {moment.title}
                  </p>
                  <p id={moment.descId} className="mt-2 text-sm leading-6 text-velmora-ivory/78">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 md:py-24">
        <div className="mb-10 space-y-3">
          <p className="eyebrow">Shop by category</p>
          <h2 className="text-4xl text-velmora-noir md:text-5xl">Choose your signature</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="group relative overflow-hidden rounded-soft bg-velmora-noir text-velmora-ivory shadow-soft"
              to={`/shop?category=${category.id}`}
            >
              <StockImage
                alt={category.name}
                className="aspect-[4/5] w-full object-cover opacity-85 transition-transform duration-500 ease-luxe group-hover:scale-105"
                descId={category.descId}
                imageId={category.imageId}
                titleId={category.titleId}
                width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p id={category.titleId} className="font-serif text-4xl text-velmora-ivory">
                  {category.name}
                </p>
                <p id={category.descId} className="mt-3 max-w-sm text-sm leading-7 text-velmora-ivory/75">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="section-wrap py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-soft bg-velmora-noir shadow-velvet">
            <StockImage
              alt="Velmora story"
              className="aspect-[4/5] w-full object-cover"
              descId="story-desc"
              imageId="story-image-f4e2ad"
              titleId="story-title"
              width="1100"
            />
          </div>
          <div className="surface-panel p-8 md:p-10 lg:p-12">
            <p className="eyebrow">Brand story</p>
            <h2 id="story-title" className="mt-4 text-4xl leading-tight text-velmora-noir md:text-5xl">
              Jewelry designed to feel intimate, polished, and easy to live in.
            </h2>
            <p id="story-desc" className="mt-6 text-base leading-8 text-velmora-noir/72">
              Velmora was imagined as a modern jewelry wardrobe: warm gold tones, gentle sparkle, and elevated silhouettes that feel just as right for gifting as they do for yourself. Every piece is shaped to be beautiful in motion and refined enough to return to again and again.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-brand text-velmora-rosewood transition-colors duration-300 hover:text-velmora-noir"
              to="/shop"
            >
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 md:py-24">
        <div className="mb-10 space-y-3">
          <p className="eyebrow">Loved by customers</p>
          <h2 className="text-4xl text-velmora-noir md:text-5xl">Kind words, worn often</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="surface-panel p-7 md:p-8">
              <div className="flex items-center gap-1 text-velmora-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-noir/78">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-brand text-velmora-rosewood">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="section-wrap pb-16 md:pb-24">
        <div className="rounded-soft bg-velmora-champagne px-6 py-10 text-velmora-noir shadow-velvet md:px-10 md:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-brand text-velmora-noir/70">Private access</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-base leading-8 text-velmora-noir/72">
              Be first to discover new drops, styling notes, and gifting edits curated for quiet luxury lovers.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[420px] lg:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-velmora-noir/15 bg-velmora-ivory px-5 text-sm text-velmora-noir outline-none transition-colors duration-300 placeholder:text-velmora-noir/45 focus:border-velmora-noir/35"
            />
            <button type="submit" className="inline-flex h-14 items-center justify-center rounded-full bg-velmora-noir px-8 text-sm font-semibold uppercase tracking-brand text-velmora-ivory transition-transform duration-300 ease-luxe hover:-translate-y-0.5">
              Join now
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default Home
