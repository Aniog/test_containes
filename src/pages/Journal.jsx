import { Newsletter } from "@/components/home/Newsletter";

const POSTS = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Everyday Looks",
    excerpt:
      "From desk to dinner — our guide to making demi-fine jewelry work around the clock.",
    image:
      "https://images.unsplash.com/photo-1617038220893-7d9f79c4b39c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Gift Guide for Minimalist Jewelry Lovers",
    excerpt:
      "Thoughtful, timeless pieces that feel personal — without the guesswork.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Caring for Your 18K Gold-Plated Pieces",
    excerpt:
      "Simple habits to keep your jewelry shining for years to come.",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Journal
          </p>
          <h1 className="font-serif text-4xl font-light sm:text-5xl">
            Style Notes
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer overflow-hidden bg-parchment"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light leading-snug transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
