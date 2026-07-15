import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "How to Build an Ear Stack You'll Actually Wear",
    excerpt:
      "The art of layering huggies, cuffs, and studs without overthinking it.",
  },
  {
    id: 2,
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Simple habits to keep your pieces glowing for years.",
  },
  {
    id: 3,
    title: "The Gift Guide for Jewelry Lovers",
    excerpt: "Curated sets and single statement pieces for every occasion.",
  },
];

export default function Journal() {
  return (
    <div className="bg-velmora-cream">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          Journal
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-wide md:text-5xl">
          Notes on Style
        </h1>
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-velmora-sand bg-white p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <p className="text-xs text-velmora-taupe uppercase tracking-widest">
                Style Notes
              </p>
              <h2 className="mt-3 font-serif text-xl leading-tight tracking-wide">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-velmora-charcoal/80">
                {post.excerpt}
              </p>
              <Link
                to="#"
                className="mt-5 inline-block text-xs font-medium uppercase tracking-widest text-velmora-gold"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
