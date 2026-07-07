import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export default function Journal() {
  const posts = [
    {
      id: "how-to-style-huggies",
      title: "How to Style Huggies for Every Ear",
      excerpt:
        "A curated guide to stacking huggies, cuffs and studs for a look that's unmistakably yours.",
    },
    {
      id: "caring-for-gold-jewelry",
      title: "Caring for Your Gold Plated Jewelry",
      excerpt:
        "Simple rituals to keep your pieces gleaming — from daily wear to long-term storage.",
    },
    {
      id: "the-gift-edit",
      title: "The Velmora Gift Edit",
      excerpt:
        "Thoughtful pieces for the people you love most, chosen by our studio.",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">The Journal</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <h2 className="font-serif text-2xl text-ink leading-tight group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-stone leading-relaxed text-sm">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-ink border-b border-gold inline-block pb-1">
                Read More
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button as={Link} to="/shop">Shop the Collection</Button>
        </div>
      </div>
    </div>
  )
}
