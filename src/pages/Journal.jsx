import { Link } from "react-router-dom";

const posts = [
  {
    title: "The Art of Layering Gold",
    excerpt:
      "How to stack your favorite pieces for maximum impact — from delicate chains to statement hoops.",
    image:
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=800&auto=format&fit=crop&q=80",
    date: "July 15, 2026",
  },
  {
    title: "Caring for Your Gold Jewelry",
    excerpt:
      "Simple steps to keep your pieces looking as brilliant as the day you received them.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=80",
    date: "June 28, 2026",
  },
  {
    title: "Gift Guide: Jewelry She'll Treasure",
    excerpt:
      "Curated picks for every occasion — birthdays, anniversaries, or just because.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    date: "June 10, 2026",
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#1C1917] font-medium">
            Journal
          </h1>
          <p className="text-[#6B6358] mt-3 text-sm tracking-[0.08em] uppercase">
            Stories, style, and craftsmanship
          </p>
          <div className="w-12 h-px bg-[#B8943C] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#E5DED5] rounded-sm overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-[#6B6358] tracking-[0.08em] uppercase">
                  {post.date}
                </p>
                <h2 className="font-['Cormorant_Garamond'] text-xl text-[#1C1917] mt-2 font-medium group-hover:text-[#B8943C] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B6358] text-sm mt-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to="/shop"
                  className="inline-block mt-3 text-xs tracking-[0.1em] uppercase text-[#B8943C] font-medium hover:text-[#D4B96A] transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}