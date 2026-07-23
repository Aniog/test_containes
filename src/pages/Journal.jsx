import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"
import { Button } from "@/components/ui/Button"

const posts = [
  {
    id: "j1",
    title: "How to Style Gold Huggies for Every Day",
    excerpt: "Three effortless ways to wear your huggies from desk to dinner.",
    imgId: "journal-1-n14",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "j2",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years.",
    imgId: "journal-2-o15",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "j3",
    title: "The Art of the Quiet Luxury Stack",
    excerpt: "Why less is more when layering gold this season.",
    imgId: "journal-3-p16",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Notes from the Studio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light">Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4x3] bg-sand overflow-hidden mb-5">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-2">
                Styling
              </p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl leading-tight group-hover:text-gold transition-colors duration-300"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="text-stone mt-2 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-xs uppercase tracking-[0.18em] border-b border-ink pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button as={Link} to="/shop" variant="outline">
            Shop the Collection
          </Button>
        </div>
      </div>
    </div>
  )
}
