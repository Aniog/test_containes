import { Link } from "react-router-dom"
import { StrkBackground } from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

const posts = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Gold Huggies",
    excerpt: "Three ways to wear the everyday hoop.",
    imgId: "journal-1-velmora",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "the-art-of-gifting",
    title: "The Art of Gifting Fine Jewelry",
    excerpt: "Choosing a piece they will treasure for years.",
    imgId: "journal-2-velmora",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "caring-for-gold",
    title: "Caring for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing.",
    imgId: "journal-3-velmora",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="mx-auto max-w-content px-5 md:px-8 py-16 md:py-24 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
          The Journal
        </p>
        <h1 className="font-serif text-4xl md:text-6xl">Stories from the Studio</h1>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Notes on craft, styling, and the quiet art of wearing gold.
        </p>
      </div>

      <div className="mx-auto max-w-content px-5 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link to="/journal" className="block aspect-[4/3] overflow-hidden bg-sand mb-5">
                <StrkBackground
                  bgId={post.imgId}
                  query={`[${post.descId}] [${post.titleId}]`}
                  ratio="4x3"
                  width={700}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <h2
                id={post.titleId}
                className="font-serif text-2xl leading-tight group-hover:text-gold transition-colors"
              >
                <Link to="/journal">{post.title}</Link>
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-muted">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
