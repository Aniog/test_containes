import { StockImage } from "@/components/StockImage"

const posts = [
  {
    id: 1,
    title: "How to Layer Necklaces Like a Stylist",
    category: "Style Guide",
    date: "June 12, 2026",
  },
  {
    id: 2,
    title: "The Difference Between Gold-Plated and Gold Vermeil",
    category: "Materials",
    date: "May 28, 2026",
  },
  {
    id: 3,
    title: "5 Jewelry Gifts That Never Miss",
    category: "Gifting",
    date: "May 10, 2026",
  },
]

export default function Journal() {
  return (
    <div className="min-h-screen bg-paper pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
            The Journal
          </p>
          <h1 className="mt-2 font-serif text-4xl font-light text-ink md:text-6xl">
            Style Notes
          </h1>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <StockImage
                  id={`journal-${post.id}`}
                  query={`[journal-${post.id}-title]`}
                  ratio="4x3"
                  width={600}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-champagne">
                  {post.category}
                </p>
                <h2
                  id={`journal-${post.id}-title`}
                  className="mt-2 font-serif text-xl text-ink group-hover:text-champagne"
                >
                  {post.title}
                </h2>
                <p className="mt-2 text-xs text-taupe">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
