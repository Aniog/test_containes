import { StrkImage } from "@/components/ui/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"
import { Link } from "react-router-dom"

const posts = [
  {
    id: "journal-1",
    title: "How to Style Gold Huggies for Every Day",
    excerpt:
      "Three simple ways to wear our most-loved huggies, from the office to an evening out.",
    imgId: "journal-1",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "journal-2",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt:
      "A short guide to keeping your pieces luminous for years to come.",
    imgId: "journal-2",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "journal-3",
    title: "The Art of the Gift: Choosing Jewelry She'll Treasure",
    excerpt:
      "Notes on gifting — how to read a style and choose a piece that lasts.",
    imgId: "journal-3",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  const ref = useImageLoader([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
            Notes from the Studio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">
            The Journal
          </h1>
          <p className="mt-4 text-sm text-muted max-w-md mx-auto">
            Styling notes, care guides and stories from behind the bench.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-stone">
                <StrkImage
                  imgId={post.imgId}
                  query={`[${post.descId}] [${post.titleId}]`}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest2 text-gold">
                Styling
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-espresso leading-snug"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-xs uppercase tracking-wide2 text-ink border-b border-gold pb-0.5 hover:text-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
