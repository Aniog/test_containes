import { useEffect } from 'react';

export default function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-4">
          Journal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-charcoal leading-tight">
          Stories, Styling, and Substance
        </h1>
        <div className="mt-12 space-y-12">
          {[
            {
              title: 'How to Build a Capsule Jewelry Collection',
              date: 'July 15, 2026',
              excerpt: 'Five pieces. Endless combinations. Here is our guide to building a jewelry wardrobe that works as hard as you do.',
            },
            {
              title: 'The Art of Layering Necklaces',
              date: 'June 28, 2026',
              excerpt: 'From delicate chains to bold pendants, learn the secrets to creating effortlessly layered looks.',
            },
            {
              title: 'Why 18K Gold Plating Matters',
              date: 'June 10, 2026',
              excerpt: 'Not all gold plating is created equal. We break down what 18K really means and why it is worth investing in.',
            },
          ].map((post, i) => (
            <article key={i} className="border-b border-velmora-border pb-10">
              <p className="text-xs text-velmora-stone uppercase tracking-widest">{post.date}</p>
              <h2 className="mt-2 font-serif text-2xl md:text-3xl text-velmora-charcoal hover:text-velmora-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-velmora-stone leading-relaxed">{post.excerpt}</p>
              <button className="mt-4 text-xs font-medium uppercase tracking-widest text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
