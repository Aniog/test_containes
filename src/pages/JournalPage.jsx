import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  {
    id: "stack-the-gold",
    title: "How to Stack the Gold",
    excerpt: "A short guide to layering necklaces, huggies, and cuffs without ever looking overdone.",
    read: "4 min read",
  },
  {
    id: "the-gift-edit",
    title: "The Velmora Gift Edit",
    excerpt: "Six pieces — one for every woman on your list, from the friend who has everything to your sister.",
    read: "6 min read",
  },
  {
    id: "behind-the-plating",
    title: "Behind the Plating",
    excerpt: "Why our 18K gold plating outlasts the rest, and how to keep your pieces glowing for years.",
    read: "5 min read",
  },
]

export default function JournalPage() {
  return (
    <main className="bg-cream pt-32 pb-20 min-h-screen">
      <div className="container-velmora">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Journal</p>
          <h1 className="display-headline text-4xl md:text-6xl text-ink">Stories & Style</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/5] bg-ink overflow-hidden mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-ink-soft to-ink" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl text-gold/30 italic">V</span>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{post.read}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-light font-light leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                to={`/journal/${post.id}`}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-ink group-hover:text-gold transition-colors"
              >
                Read More
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
