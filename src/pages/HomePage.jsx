import { useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { useToast } from '@/context/ToastContext.jsx'
import { categories, journalEntries, products, testimonials, trustItems, ugcMoments } from '@/lib/store-data.js'
import { useStrkImages } from '@/lib/useStrkImages.js'

function HomePage() {
  const [email, setEmail] = useState('')
  const { showToast } = useToast()
  const containerRef = useStrkImages([])
  const bestsellers = products

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      showToast('Please enter your email address')
      return
    }

    showToast('You are on the list for early access')
    setEmail('')
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory">
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-7h2k1m"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,23,21,0.88)_0%,rgba(31,23,21,0.58)_46%,rgba(31,23,21,0.32)_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:items-center lg:pt-28">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-velmora-cloud">Velmora Fine Jewelry</p>
            <h1 id="hero-title" className="font-display text-6xl leading-[0.92] md:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-velmora-cloud md:text-lg">
              Quietly luxurious demi-fine jewelry designed for self-purchase, gifting, and the beauty of an everyday gold ritual.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-sm uppercase tracking-[0.3em] text-velmora-ivory transition hover:bg-velmora-gold-deep"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product/royal-heirloom-set"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-velmora-cloud/40 px-7 py-4 text-sm uppercase tracking-[0.3em] text-velmora-ivory transition hover:border-velmora-ivory hover:bg-white/5"
              >
                View the Gift Edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line/50 bg-velmora-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-velmora-mist md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Curated Favorites"
            title="Bestsellers"
            description="The Velmora pieces our customers return to, gift often, and wear on repeat."
          />
          <Link to="/shop" className="hidden items-center gap-2 text-sm uppercase tracking-[0.28em] text-velmora-mist transition hover:text-velmora-ink md:inline-flex">
            Shop All
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-line/40 bg-velmora-sand/25 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Seen on You"
            title="A Reels-Style Edit"
            description="An intimate row of vertical styling moments made to feel personal, polished, and quietly celebratory."
          />
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[220px] overflow-hidden rounded-[2rem] border border-velmora-line/60 bg-velmora-panel shadow-[0_20px_70px_rgba(31,23,21,0.12)] md:min-w-[260px]"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    alt={moment.caption}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    data-strk-img-id={moment.imageId}
                    data-strk-img={`[${moment.descId}] [${moment.titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,23,21,0.04)_0%,rgba(31,23,21,0.55)_62%,rgba(31,23,21,0.82)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-velmora-ivory">
                    <p className="font-display text-3xl leading-none">{moment.caption}</p>
                  </div>
                </div>
                <div className="hidden">
                  <p id={moment.titleId}>{moment.title}</p>
                  <p id={moment.descId}>{moment.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Browse the Edit"
          title="Shop by Category"
          description="Each category is designed to feel elevated, wearable, and easy to mix into your own signature stack."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/shop"
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-line/60 bg-velmora-panel"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${category.descId}] [${category.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,23,21,0.08)_0%,rgba(31,23,21,0.22)_40%,rgba(31,23,21,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory transition duration-500 group-hover:translate-y-[-8px]">
                  <p id={category.titleId} className="font-display text-4xl">{category.name}</p>
                  <p id={category.descId} className="mt-3 text-sm uppercase tracking-[0.24em] text-velmora-cloud">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-ink py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[2rem] border border-velmora-line/20">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                alt="Velmora brand story"
                className="h-full w-full object-cover"
                data-strk-img-id="story-image-j8l2m5"
                data-strk-img="[story-desc] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-velmora-cloud">Velmora Ethos</p>
            <h2 id="story-title" className="mt-5 font-display text-5xl leading-none md:text-6xl">
              Jewelry with softness, polish, and permanence in spirit.
            </h2>
            <p id="story-desc" className="mt-6 text-base leading-8 text-velmora-cloud">
              Velmora was imagined for women who want a daily ritual of beauty without excess. Our pieces borrow the emotion of fine jewelry while staying accessible enough to gift, layer, and live in often.
            </p>
            <p className="mt-5 text-base leading-8 text-velmora-cloud">
              We pair warm editorial styling with easy wearability, creating gold-forward essentials that feel intimate, elevated, and meant to stay close.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-velmora-ivory transition hover:text-velmora-gold"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Loved by Customers"
          title="Quietly Glowing Reviews"
          description="Short notes from customers who came for a gift, a small indulgence, or a new signature pair."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-velmora-line/60 bg-white/60 p-8 text-velmora-ink shadow-[0_20px_60px_rgba(31,23,21,0.05)]"
            >
              <p className="text-velmora-gold">★★★★★</p>
              <p className="mt-5 text-base leading-8 text-velmora-mist">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-velmora-ink">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="rounded-[2.5rem] bg-velmora-gold px-6 py-12 text-center text-velmora-ivory shadow-[0_25px_70px_rgba(182,138,82,0.28)] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-velmora-ivory/80">Private List</p>
          <h2 className="mt-5 font-display text-4xl leading-none md:text-6xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-velmora-ivory/85">
            Access styling notes, first looks, and gifting edits before they land sitewide.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-velmora-ivory/40 bg-velmora-ivory/12 px-6 text-sm text-velmora-ivory placeholder:text-velmora-ivory/70 focus:border-velmora-ivory focus:outline-none"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-velmora-ink px-8 text-sm uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-panel"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>

      <section id="journal" className="border-t border-velmora-line/40 bg-velmora-sand/20 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Journal"
              title="The Editorial Layer"
              description="Thoughtful pieces on styling, gifting, and creating a jewelry wardrobe with ease."
            />
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-velmora-mist transition hover:text-velmora-ink">
              Explore the Collection
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-velmora-line/60 bg-velmora-line/40 md:grid-cols-3">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="bg-velmora-ivory p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">{entry.category}</p>
                <h3 className="mt-5 font-display text-3xl leading-none text-velmora-ink">{entry.title}</h3>
                <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-velmora-mist transition hover:text-velmora-ink">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
