import { Link } from "react-router-dom";

const POSTS = [
  {
    id: "how-to-care-for-gold-plating",
    title: "How to Make Gold-Plated Jewelry Last",
    excerpt:
      "Five small habits that keep demi-fine gold pieces glowing for years, not weeks.",
    read: "4 min read",
    date: "June 12, 2026",
  },
  {
    id: "stacking-earrings-2026",
    title: "The 2026 Guide to Stacking Earrings",
    excerpt:
      "Curated mixes for every ear — from second-lobe minimalism to triple-pierce drama.",
    read: "6 min read",
    date: "May 28, 2026",
  },
  {
    id: "the-story-behind-vivid-aura",
    title: "The Story Behind Vivid Aura",
    excerpt:
      "How a single crystal on a slim cuff became our most-stocked piece of the year.",
    read: "3 min read",
    date: "May 02, 2026",
  },
  {
    id: "gifting-guide-bridal",
    title: "A Quiet Luxury Bridal Gifting Guide",
    excerpt:
      "Hand-picked pieces for showers, bridesmaids, and the bride herself.",
    read: "5 min read",
    date: "April 18, 2026",
  },
];

export default function Journal() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 md:pt-24">
        <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
          The Journal
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-espresso">
          Stories, Styling & Care
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
          Long-form notes on demi-fine jewelry, slow gifting, and how to wear
          what you already own.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
        {POSTS.map((post, idx) => (
          <article
            key={post.id}
            className={idx === 0 ? "md:col-span-2" : ""}
          >
            <Link to="#" className="group block">
              <div
                className={`relative w-full overflow-hidden rounded-sm bg-bone/40 ${
                  idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A221A] via-[#1F1A14] to-[#0E0A07]" />
                <div className="absolute inset-0 flex items-end p-8">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-bone/70">
                    {post.read}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal">
                  {post.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl md:text-3xl text-espresso group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-[11px] tracking-[0.22em] uppercase border-b border-espresso/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                  Read the story
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}