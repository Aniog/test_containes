import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  categoryTiles,
  journalPosts,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/storefront'
import { Button } from '@/components/ui/Button'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { ProductCard } from '@/components/shop/ProductCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const bestsellers = products.slice(0, 5)

const Home = () => (
  <div className="bg-brand-parchment">
    <section className="relative min-h-screen overflow-hidden bg-brand-ink px-5 pb-10 pt-28 text-brand-parchment md:px-8 lg:px-12 lg:pt-32">
      <div className="absolute inset-0">
        <ImageSlot
          slotId="velmora-hero-01"
          query="[hero-subtitle] [hero-title]"
          ratio="16x9"
          width="1600"
          alt="Velmora hero"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(31,25,22,0.86),rgba(31,25,22,0.48),rgba(31,25,22,0.78))]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:min-h-[84vh] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 pb-8">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-overline text-brand-sand">
              Quiet luxury, crafted daily
            </p>
            <h1 id="hero-title" className="max-w-xl text-5xl leading-[0.9] text-white md:text-7xl">
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="max-w-lg text-base leading-8 text-brand-parchment/88 md:text-lg"
            >
              Demi-fine gold jewelry designed for self-purchase, thoughtful gifting,
              and the subtle confidence of wearing something beautifully made.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as="link" to="/shop" className="justify-center sm:justify-start">
              Shop the Collection
            </Button>
            <Button as="link" to="/products/royal-heirloom-set" variant="ghost">
              Explore gift favorites
            </Button>
          </div>
        </div>

        <div className="grid gap-5 self-end rounded-hero border border-white/10 bg-white/8 p-5 backdrop-blur md:grid-cols-2">
          <div className="space-y-2 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
            <p className="text-xs uppercase tracking-overline text-brand-sand">Signature finish</p>
            <p className="text-3xl leading-none text-white">18K plated glow</p>
            <p className="text-sm leading-7 text-brand-parchment/80">
              Designed to look polished from early coffee runs to evening dinners.
            </p>
          </div>
          <div className="space-y-2 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
            <p className="text-xs uppercase tracking-overline text-brand-sand">Gift worthy</p>
            <p className="text-3xl leading-none text-white">Under $120</p>
            <p className="text-sm leading-7 text-brand-parchment/80">
              Premium presentation and a price point that feels considered, not excessive.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-brand-line bg-brand-mist px-5 py-4 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[11px] font-semibold uppercase tracking-overline text-brand-ink md:gap-x-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-6">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden h-3 w-px bg-brand-line md:block" /> : null}
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <SectionHeading
        eyebrow="Bestsellers"
        title="An edit of the pieces women return to"
        description="Refined silhouettes, warm gold finishes, and effortless shapes for gifting or keeping close." 
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl space-y-8 px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
      <SectionHeading
        eyebrow="Seen on you"
        title="A reel-style strip of everyday polish"
        description="Quiet sparkle styled on ear, neck, and wrist in warm, editorial moments."
      />
      <div className="no-scrollbar flex gap-5 overflow-x-auto pb-2">
        {ugcMoments.map((moment) => (
          <article
            key={moment.id}
            className="group relative min-w-[240px] max-w-[240px] overflow-hidden rounded-[2rem] border border-brand-line bg-brand-sand shadow-soft"
          >
            <div className="aspect-[9/16]">
              <ImageSlot
                slotId={moment.slotId}
                query={`[ugc-${moment.id}-caption] [ugc-title]`}
                ratio="9x16"
                width="480"
                alt={moment.caption}
                className="transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(31,25,22,0.82))] p-5">
              <p id="ugc-title" className="sr-only">
                Velmora styling moments
              </p>
              <p id={`ugc-${moment.id}-caption`} className="font-serif text-2xl text-white">
                {moment.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl space-y-8 px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
      <SectionHeading
        eyebrow="Shop by category"
        title="A restrained way to browse"
        description="Choose the silhouette that suits the moment: ear-focused, gift-ready, or made to layer."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {categoryTiles.map((tile) => (
          <Link
            key={tile.name}
            to={`/shop?category=${encodeURIComponent(tile.name)}`}
            className="group relative overflow-hidden rounded-[2rem] border border-brand-line bg-brand-sand shadow-soft"
          >
            <div className="aspect-[4/5]">
              <ImageSlot
                slotId={tile.slotId}
                query={`[category-${tile.name.toLowerCase()}-label] [category-title]`}
                ratio="4x3"
                width="900"
                alt={tile.name}
                className="transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(31,25,22,0.78))] opacity-90 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-white">
              <span id={`category-${tile.name.toLowerCase()}-label`} className="font-serif text-3xl">
                {tile.name}
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section id="story" className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-2 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] bg-brand-sand shadow-panel">
        <div className="aspect-[4/5]">
          <ImageSlot
            slotId="velmora-story-10a"
            query="[story-body] [story-title]"
            ratio="4x3"
            width="1000"
            alt="Velmora story"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-[2rem] border border-brand-line bg-white p-8 shadow-soft md:p-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
            Our story
          </p>
          <h2 id="story-title" className="text-4xl leading-none md:text-5xl">
            Jewelry designed with softness, presence, and longevity in mind.
          </h2>
          <p id="story-body" className="text-base leading-8 text-brand-cocoa">
            Velmora began with the idea that demi-fine jewelry should feel elevated
            but still wearable, giftable, and part of real life. Each silhouette is
            shaped to bring warmth to everyday styling, with finishes that look
            quietly luxurious from the first wear.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-overline text-brand-ink"
          >
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl space-y-8 px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
      <SectionHeading
        eyebrow="Loved by customers"
        title="What wearing Velmora feels like"
        align="center"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-brand-line bg-white p-6 shadow-soft"
          >
            <div className="mb-5 flex gap-1 text-brand-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-base leading-8 text-brand-cocoa">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-overline text-brand-ink">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
      <div className="rounded-[2.25rem] bg-brand-ink px-6 py-10 text-brand-parchment shadow-panel md:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
              Join the list
            </p>
            <h2 className="text-4xl leading-none text-white md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-xl text-sm leading-7 text-brand-sand md:text-base">
              New arrivals, thoughtful gifting edits, and styling notes delivered with a light touch.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="h-14 rounded-full border border-white/20 bg-white px-5 text-sm text-brand-ink outline-none placeholder:text-brand-cocoa"
            />
            <Button className="h-14 justify-center px-8">Join</Button>
          </form>
        </div>
      </div>
    </section>

    <section id="journal" className="mx-auto max-w-7xl space-y-8 px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
      <SectionHeading
        eyebrow="Journal"
        title="Editorial notes on styling, gifting, and care"
        description="A quieter approach to jewelry content, grounded in real wear and considered rituals."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {journalPosts.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-soft"
          >
            <div className="aspect-[4/3] bg-brand-sand">
              <ImageSlot
                slotId={post.slotId}
                query={`[journal-${post.slug}-excerpt] [journal-${post.slug}-title]`}
                ratio="4x3"
                width="700"
                alt={post.title}
              />
            </div>
            <div className="space-y-4 p-6">
              <h3 id={`journal-${post.slug}-title`} className="text-3xl leading-none text-brand-ink">
                {post.title}
              </h3>
              <p id={`journal-${post.slug}-excerpt`} className="text-sm leading-7 text-brand-cocoa">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-overline text-brand-ink"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
)

export default Home
