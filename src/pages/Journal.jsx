import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage"

const posts = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Huggies for Every Day",
    excerpt: "Three ways to wear the everyday gold earring you'll never take off.",
    imgId: "journal-huggies-01",
  },
  {
    id: "the-care-guide",
    title: "The Gold Jewelry Care Guide",
    excerpt: "Simple rituals to keep your pieces warm and luminous for years.",
    imgId: "journal-care-01",
  },
  {
    id: "gifting-with-intention",
    title: "Gifting with Intention",
    excerpt: "Choosing a piece that becomes an heirloom, not just a gift.",
    imgId: "journal-gifting-01",
  },
]

export default function Journal() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="container-editorial py-16 text-center md:py-24">
        <p className="eyebrow">The Journal</p>
        <h1 className="heading-serif mt-4 text-4xl md:text-6xl">Stories from the Studio</h1>
      </div>

      <div className="container-editorial grid grid-cols-1 gap-10 pb-24 md:grid-cols-3">
        {posts.map((post) => {
          const titleId = `j-${post.id}-title`
          const excerptId = `j-${post.id}-excerpt`
          return (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <StrkImage
                  imgId={post.imgId}
                  query={`[${excerptId}] [${titleId}]`}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                />
              </div>
              <h2 id={titleId} className="mt-5 font-serif text-2xl text-ink">
                {post.title}
              </h2>
              <p id={excerptId} className="mt-2 font-sans text-sm text-ink-muted">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-flex items-center gap-1 font-sans text-[11px] uppercase tracking-ultra text-gold-deep link-underline"
              >
                Read More <ArrowUpRight className="h-3 w-3" />
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
