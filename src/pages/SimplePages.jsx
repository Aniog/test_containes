import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StrkImage from "@/components/StrkImage"
import { Eyebrow, Reveal } from "@/components/ui"
import { categories, products } from "@/data/products"
import { useStrkImages } from "@/lib/use-strk-images"

export function CollectionsPage() {
  const strkRef = useStrkImages()
  return (
    <div ref={strkRef} className="bg-ivory pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="text-center">
          <Eyebrow>Collections</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-light text-noir md:text-6xl">
            Chapters in <em className="italic text-gold-deep">gold</em>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted">
            Each Velmora collection is a small-batch chapter — designed around a
            feeling, crafted to be kept.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <Link to={`/shop?category=${cat.id}`} className="group relative block aspect-[3/4] overflow-hidden bg-noir">
                <img
                  data-strk-img-id={`${cat.imgId}-collections`}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] elegant gold jewelry editorial photography, warm tones`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.id}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <span className="font-serif text-2xl font-light uppercase tracking-[0.25em] text-ivory">{cat.id}</span>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-gold-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Shop the edit
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <Link to="/shop?category=Sets" className="group relative block overflow-hidden bg-noir">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <StrkImage
                imgId="collections-sets-banner-5e8c3a"
                query="[collections-sets-title] luxury gold jewelry gift set in an elegant linen box, ribbon, dark editorial"
                ratio="16x9"
                width="1400"
                alt="The Gift Edit"
                className="h-full w-full opacity-80 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-65"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Eyebrow className="text-gold-light">Gift-Ready</Eyebrow>
              <h2 id="collections-sets-title" className="mt-3 font-serif text-3xl font-light uppercase tracking-[0.2em] text-ivory md:text-4xl">
                The Gift Edit
              </h2>
              <span className="mt-5 inline-flex items-center gap-2 border border-ivory/40 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors group-hover:border-gold-light group-hover:text-gold-light">
                Explore sets <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="bg-ivory pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-noir md:text-5xl">
              Quiet luxury,<br />made <em className="italic text-gold-deep">reachable</em>
            </h1>
            <p className="mt-6 text-[15px] font-light leading-relaxed text-muted">
              Velmora was founded in 2019 at a single workbench, with a simple
              frustration: jewelry that felt precious cost too much, and jewelry
              that was affordable felt disposable. We believed there was a third
              way — demi-fine.
            </p>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-muted">
              Every Velmora piece begins as recycled brass, is plated in a
              generous layer of 18k gold, and is finished with a tarnish-resistant
              coat. Crystals are set by hand. Batches stay small on purpose —
              we'd rather make fewer, better things.
            </p>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-muted">
              Today Velmora lives in the jewelry boxes of over 40,000 women
              worldwide — worn to weddings and to the grocery store, gifted at
              graduations and bought on ordinary Tuesdays. That was always the
              point.
            </p>
            <Link
              to="/shop"
              className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-noir transition-colors hover:text-gold-deep"
            >
              Shop the collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <StrkImage
                imgId="about-atelier-img-3d7a9f"
                query="[about-values-heading] artisan jeweler hands polishing gold earrings at a workbench, warm window light, editorial"
                ratio="4x3"
                width="900"
                alt="Inside the Velmora atelier"
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {[
            { title: "Small Batches", body: "We produce in limited runs to keep quality high and waste low. When a piece sells out, it's gone until the next chapter." },
            { title: "Honest Materials", body: "Recycled brass cores, thick 18k gold plating, hand-set crystals, and nickel-free finishes that are kind to sensitive skin." },
            { title: "Fair Pricing", body: "By selling directly to you — no middlemen, no mall markups — heirloom-feeling jewelry stays between $30 and $120." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="bg-ivory">
              <div className="p-8 text-center md:p-10">
                <h2 id={i === 0 ? "about-values-heading" : undefined} className="font-serif text-xl uppercase tracking-[0.18em] text-noir">
                  {v.title}
                </h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

const journalPosts = [
  {
    id: "care-guide",
    imgId: "journal-img-care-6b2f4d",
    tag: "Care",
    title: "How to keep demi-fine gold glowing for years",
    excerpt: "Five small rituals — from last-on, first-off to the soft-cloth rule — that keep 18k plating luminous.",
    date: "July 2026",
  },
  {
    id: "stacking-guide",
    imgId: "journal-img-stack-9c4e1a",
    tag: "Styling",
    title: "The art of the ear stack: huggies, cuffs & drops",
    excerpt: "Start with a dome huggie, add a cuff halfway up, finish with lace. A formula that never misses.",
    date: "June 2026",
  },
  {
    id: "gifting-guide",
    imgId: "journal-img-gift-2f8d5b",
    tag: "Gifting",
    title: "What her jewelry says (and how to get it right)",
    excerpt: "Minimalist or maximalist? A short field guide to choosing a piece she'll actually wear.",
    date: "May 2026",
  },
]

export function JournalPage() {
  return (
    <div className="bg-ivory pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="text-center">
          <Eyebrow>The Journal</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-light text-noir md:text-6xl">
            Notes from the <em className="italic text-gold-deep">atelier</em>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {journalPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <article className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  <StrkImage
                    imgId={post.imgId}
                    query={`[journal-title-${post.id}] gold jewelry editorial still life, warm tones, magazine photography`}
                    ratio="4x3"
                    width="700"
                    alt={post.title}
                    className="h-full w-full transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-gold-deep">
                  {post.tag} · {post.date}
                </p>
                <h2
                  id={`journal-title-${post.id}`}
                  className="mt-2 font-serif text-2xl font-light leading-snug text-noir transition-colors group-hover:text-gold-deep"
                >
                  {post.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-noir">
                  Read the story <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <p className="font-serif text-2xl font-light italic text-muted">
            More stories arriving with the next chapter.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block border border-noir px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-noir transition-colors hover:bg-noir hover:text-ivory"
          >
            Shop the pieces
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
