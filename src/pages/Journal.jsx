import { Link } from "react-router-dom"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"
import Newsletter from "@/components/layout/Newsletter"

const POSTS = [
  {
    id: "stack-guide",
    title: "The Five-Piece Ear Stack",
    excerpt:
      "How to layer huggies, cuffs, and studs for an everyday stack that looks considered — never crowded.",
    category: "Styling",
    readTime: "5 min",
    imgId: "journal-stack-guide",
    imageQuery: "woman ear stack multiple gold earrings close up editorial",
    featured: true,
  },
  {
    id: "care-101",
    title: "How to Make Gold Plating Last",
    excerpt:
      "Three small habits that will keep your demi-fine pieces looking new for years, not months.",
    category: "Care",
    readTime: "4 min",
    imgId: "journal-care-101",
    imageQuery: "gold jewelry polishing cloth care warm light flatlay",
  },
  {
    id: "gifting",
    title: "The Heirloom Edit: Gifting Guide",
    excerpt:
      "Our most-loved pieces for the women who already have everything — and the women who deserve something.",
    category: "Gifting",
    readTime: "6 min",
    imgId: "journal-gifting",
    imageQuery: "gold jewelry gift boxes wrapped presents warm holiday",
  },
  {
    id: "behind-the-atelier",
    title: "Inside the Jaipur Atelier",
    excerpt:
      "A photographic essay from our partner atelier, where every Velmora piece is finished by hand.",
    category: "Behind the Scenes",
    readTime: "8 min",
    imgId: "journal-behind-the-atelier",
    imageQuery: "jaipur india jewelry workshop artisans hands gold craft",
  },
  {
    id: "wedding-guest",
    title: "Wedding Guest, Refined",
    excerpt:
      "Quiet statement pieces for a season of celebrations — without upstaging the bride.",
    category: "Styling",
    readTime: "5 min",
    imgId: "journal-wedding-guest",
    imageQuery: "gold statement drop earrings on woman formal dress editorial",
  },
  {
    id: "sizing",
    title: "A Quiet Note on Sizing",
    excerpt:
      "How to find your earring and necklace size at home, with a soft tape measure and a quiet afternoon.",
    category: "Guide",
    readTime: "3 min",
    imgId: "journal-sizing",
    imageQuery: "gold jewelry measurement ring sizer soft fabric flatlay",
  },
]

export default function Journal() {
  const featured = POSTS.find((p) => p.featured)
  const others = POSTS.filter((p) => !p.featured)

  return (
    <>
      <section className="bg-cream-50 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="mx-auto max-w-editorial px-5 md:px-10 text-center">
          <p className="eyebrow">The Journal</p>
          <h1
            id="journal-title"
            className="mt-4 font-serif text-5xl md:text-7xl text-espresso-800"
          >
            Stories, <span className="italic">slowly</span> told
          </h1>
          <p className="mt-5 text-ink-muted text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Styling notes, behind-the-scenes essays, and care guides — published
            when we have something worth saying.
          </p>
        </div>
      </section>

      <section ref={makeStrkImageLoaderRef()} className="bg-cream-50 pb-24 md:pb-32">
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          {/* Featured */}
          {featured && (
            <Link
              to={`/journal/${featured.id}`}
              className="group block grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 md:mb-28"
            >
              <div className="md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                  <img
                    data-strk-img-id={featured.imgId}
                    data-strk-img={featured.imageQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1400"
                    alt={featured.title}
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow">
                  {featured.category} · {featured.readTime} read
                </p>
                <h2
                  id={`journal-${featured.id}-title`}
                  className="mt-4 font-serif text-3xl md:text-5xl text-espresso-800 leading-[1.05] text-balance"
                >
                  {featured.title}
                </h2>
                <p
                  id={`journal-${featured.id}-excerpt`}
                  className="mt-5 text-ink-muted text-base leading-relaxed text-pretty"
                >
                  {featured.excerpt}
                </p>
                <span className="mt-8 link-underline inline-flex items-center gap-2">
                  Read the essay
                  <ArrowRight className="h-3 w-3" strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {others.map((post) => (
              <Link
                key={post.id}
                to={`/journal/${post.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={post.imageQuery}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5">
                  {post.category} · {post.readTime}
                </p>
                <h3
                  id={`journal-${post.id}-title`}
                  className="mt-2 font-serif text-2xl text-espresso-800 text-balance"
                >
                  {post.title}
                </h3>
                <p
                  id={`journal-${post.id}-excerpt`}
                  className="mt-3 text-sm text-ink-muted leading-relaxed text-pretty"
                >
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest2 text-espresso-800 group-hover:text-gold-500 transition-colors">
                  Read
                  <ArrowUpRight className="h-3 w-3" strokeWidth={1.6} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
