import { ArrowRight, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import NewsletterBanner from '@/components/layout/NewsletterBanner'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Stars from '@/components/ui/Stars'
import { categoryTiles, journalEntries, products, testimonials, trustBadges, ugcMoments } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const HomePage = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div className="absolute inset-0" data-strk-bg-id="velmora-hero-bg-1e4a" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
        <div className="absolute inset-0 velmora-hero-bg" />
        <div className="container-shell relative flex min-h-screen items-end py-24 pb-16 pt-32 md:items-center md:pb-24">
          <div className="max-w-2xl space-y-8">
            <p className="eyebrow-label text-velmora-ivory/75">Fine jewelry for the everyday ritual</p>
            <div className="space-y-5">
              <h1 id="hero-title" className="max-w-xl text-6xl leading-[0.92] text-velmora-ivory md:text-8xl">Crafted to be Treasured</h1>
              <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-velmora-ivory/82 md:text-lg">Warm, quietly luminous demi-fine jewelry for gifting, collecting, and wearing on repeat.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="premium-button">Shop the Collection</Link>
              <a href="#story" className="premium-button-secondary border-velmora-ivory/30 text-velmora-ivory hover:border-velmora-ivory hover:bg-velmora-ivory hover:text-velmora-ink">Discover the story</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-pearl/55">
        <div className="container-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-center text-xs uppercase tracking-[0.2em] text-velmora-mocha md:justify-between">
          {trustBadges.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="container-shell py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Bestsellers" title="The pieces our community wears on repeat" description="Refined staples and subtle statement pieces designed to move easily from self-purchase to gifting." />
          <Link to="/shop" className="hidden items-center gap-2 text-sm uppercase tracking-[0.18em] text-velmora-mocha transition hover:text-velmora-ink md:inline-flex">Shop all <MoveRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-ink py-20 text-velmora-ivory md:py-24">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow="Styled by you" title="A reel of soft gold moments" description="A warm, lived-in edit inspired by the way Velmora is worn from morning errands to candlelit dinners." tone="light" />
          <div className="velmora-hide-scrollbar flex gap-5 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative min-w-[250px] max-w-[250px] overflow-hidden rounded-[1.75rem] border border-velmora-ivory/10 bg-velmora-ivory/5">
                <div className="velmora-tall-ratio relative">
                  <img alt={moment.title} className="velmora-image-fill transition duration-500 group-hover:scale-105" data-strk-img-id={`${moment.id}-visual-2cf8`} data-strk-img={`[${moment.id}-subtitle] [${moment.id}-title]`} data-strk-img-ratio="9x16" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p id={`${moment.id}-subtitle`} className="text-xs uppercase tracking-[0.18em] text-velmora-ivory/70">{moment.subtitle}</p>
                    <h3 id={`${moment.id}-title`} className="mt-2 text-3xl leading-tight text-velmora-ivory">{moment.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="container-shell py-20 md:py-28">
        <div className="mb-10">
          <SectionHeading eyebrow="Shop by category" title="An edit for every kind of shine" description="Build an ear stack, layer a neckline, or find the pair you’ll gift again and again." />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link key={tile.id} to={tile.route} className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-pearl shadow-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img alt={tile.name} className="velmora-image-fill transition duration-500 group-hover:scale-105" data-strk-img-id={`${tile.id}-image-cf12`} data-strk-img={`[${tile.id}-description] [${tile.id}-title]`} data-strk-img-ratio="3x4" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-velmora-ivory">
                  <div>
                    <h3 id={`${tile.id}-title`} className="text-4xl text-velmora-ivory">{tile.name}</h3>
                    <p id={`${tile.id}-description`} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/80">{tile.description}</p>
                  </div>
                  <span className="rounded-full border border-velmora-ivory/35 p-3"><ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="container-shell py-20 md:py-28">
        <div id="story" className="grid gap-10 overflow-hidden rounded-[2.2rem] border border-velmora-line bg-velmora-pearl/45 shadow-card lg:grid-cols-[1.05fr_0.95fr]">
          <div className="velmora-story-ratio min-h-[420px] overflow-hidden">
            <img alt="Velmora fine jewelry brand story" className="velmora-image-fill" data-strk-img-id="brand-story-image-41ad" data-strk-img="[story-copy] [story-title]" data-strk-img-ratio="4x3" data-strk-img-width="1200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          </div>
          <div className="flex flex-col justify-center px-6 py-10 md:px-10 lg:px-14">
            <div className="space-y-6">
              <p className="eyebrow-label">Brand story</p>
              <h2 id="story-title" className="text-5xl leading-tight md:text-6xl">Jewelry that feels intimate, not overdone</h2>
              <p id="story-copy" className="max-w-xl text-base leading-8 text-velmora-mocha">Velmora was created for women who want the feeling of fine jewelry without waiting for an occasion. Every piece is designed to feel elevated, softly expressive, and easy to live in — from a polished huggie to a gift-ready set that arrives beautifully boxed.</p>
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-velmora-mocha transition hover:text-velmora-ink">Our Story <MoveRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="mb-10">
          <SectionHeading eyebrow="Testimonials" title="Loved for the details" description="Short notes from women who came for one piece and found themselves building a whole collection." />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[1.8rem] border border-velmora-line bg-velmora-pearl/35 p-8 shadow-card">
              <Stars light={false} />
              <p className="mt-6 text-lg leading-8 text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-velmora-mocha">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <NewsletterBanner />

      <section id="journal" className="container-shell py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Journal" title="Editorial notes from the atelier" description="A light, thoughtful read on layering, gifting, and building the jewelry wardrobe you actually wear." />
          <a href="#" className="hidden items-center gap-2 text-sm uppercase tracking-[0.18em] text-velmora-mocha transition hover:text-velmora-ink md:inline-flex">Read more <MoveRight className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[1.75rem] border border-velmora-line bg-velmora-pearl/35 p-8 shadow-card">
              <p className="eyebrow-label">Journal</p>
              <h3 className="mt-4 text-4xl leading-tight">{entry.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-velmora-mocha">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
