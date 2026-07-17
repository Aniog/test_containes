import { Link } from "react-router-dom"
import { useStrkImages, IMG_PLACEHOLDER } from "@/lib/strk-images"

const posts = [
  {
    id: "styling-huggies",
    title: "How to Style Huggies for Every Occasion",
    excerpt: "From the office to evening, three ways to wear your everyday gold.",
    category: "Styling",
    imgId: "journal-1-a1",
  },
  {
    id: "gold-care",
    title: "Caring for Your Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years to come.",
    category: "Care",
    imgId: "journal-2-a1",
  },
  {
    id: "gifting-guide",
    title: "The Velmora Gifting Guide",
    excerpt: "Thoughtful picks for the women you love — and for yourself.",
    category: "Gifting",
    imgId: "journal-3-a1",
  },
]

export default function Journal() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-20">
        <p className="text-xs uppercase tracking-widest2 text-gold">The Journal</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
          Notes on Gold & Living
        </h1>
        <p className="mt-4 max-w-md mx-auto text-sm text-stone">
          Styling notes, care rituals, and stories from the studio.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => {
            const titleId = `journal-${post.id}-title`
            const excerptId = `journal-${post.id}-excerpt`
            return (
              <article key={post.id} className="group">
                <Link to="/journal" className="block overflow-hidden bg-sand aspect-[4x3]">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${excerptId}] [${titleId}] gold jewelry editorial warm`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src={IMG_PLACEHOLDER}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <p className="mt-5 text-xs uppercase tracking-widest2 text-gold">{post.category}</p>
                <h2 id={titleId} className="mt-2 font-serif text-2xl text-ink">
                  <Link to="/journal" className="hover:text-gold transition-colors">{post.title}</Link>
                </h2>
                <p id={excerptId} className="mt-2 text-sm text-stone">{post.excerpt}</p>
                <Link
                  to="/journal"
                  className="mt-4 inline-block text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
                >
                  Read More →
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
