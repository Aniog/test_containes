import { Link } from "react-router-dom"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

const POSTS = [
  { id: "j1", title: "How to Layer Gold Necklaces", excerpt: "A simple guide to building a layered look that feels effortless.", imgId: "journal-1-velmora-1a" },
  { id: "j2", title: "Caring for Demi-Fine Jewelry", excerpt: "Keep your pieces gleaming with these everyday care rituals.", imgId: "journal-2-velmora-2b" },
  { id: "j3", title: "The Quiet Luxury Edit", excerpt: "Understated pieces that speak volumes — our styling notes.", imgId: "journal-3-velmora-3c" },
]

export default function Journal() {
  return (
    <ImageLoader className="pt-16 md:pt-20" deps={[]}>
      <section className="border-b border-line">
        <div className="mx-auto max-w-editorial px-6 md:px-10 py-14 text-center">
          <p className="eyebrow">Notes & Stories</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Styling notes, care guides and stories from the Velmora studio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-editorial px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {POSTS.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={p.title}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[journal-${p.id}-title] [journal-${p.id}-excerpt] gold jewelry`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={`journal-${p.id}-title`}
                className="mt-5 font-serif text-2xl text-ink"
              >
                {p.title}
              </h2>
              <p
                id={`journal-${p.id}-excerpt`}
                className="mt-2 text-sm text-stone"
              >
                {p.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-3 inline-block text-xs uppercase tracking-widest2 text-gold hover:text-gold-deep"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </ImageLoader>
  )
}
