import React from 'react';
import Nav from '../components/ui/Nav';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered knits, here's how to let your gold shine year-round.",
      date: "June 12, 2026",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Art of the Everyday Heirloom",
      excerpt: "Why the pieces you wear daily become the ones you'll pass down — and how to choose them well.",
      date: "May 28, 2026",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Behind the Craft: Our Lisbon Studio",
      excerpt: "A quiet morning with the artisans who shape every Velmora piece by hand.",
      date: "May 3, 2026",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Guide",
      excerpt: "How to choose a piece that feels personal, not generic — for the people you love most.",
      date: "April 15, 2026",
      readTime: "7 min",
    },
  ];

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-3">Stories & Reflections</div>
            <h1 className="text-5xl md:text-6xl">The Journal</h1>
          </div>

          <div className="space-y-12">
            {articles.map((article) => (
              <article key={article.id} className="border-b border-vel-border pb-12 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.01em]">
                    {article.title}
                  </h2>
                  <div className="text-xs text-vel-muted whitespace-nowrap">
                    {article.date} · {article.readTime}
                  </div>
                </div>
                <p className="text-[15px] text-vel-muted leading-relaxed mb-4 max-w-2xl">
                  {article.excerpt}
                </p>
                <Link 
                  to="#" 
                  className="text-sm uppercase tracking-[0.08em] border-b border-vel-text pb-0.5 inline-block hover:text-vel-gold-dark hover:border-vel-gold-dark"
                >
                  Read Story
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-vel-border text-center text-sm text-vel-muted">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
