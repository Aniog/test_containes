import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and tones for an effortless, collected look.",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Quiet Power of Everyday Gold",
      excerpt: "Why the pieces you reach for daily matter more than the ones saved for special occasions.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your gold pieces looking warm and luminous for years.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 4,
      title: "Behind the Design: The Sphere Huggie",
      excerpt: "From sketch to sample — the story of one of our most beloved silhouettes.",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      readTime: "7 min",
    },
  ];

  return (
    <div>
      <div className="bg-velmora-surface py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-2">Stories & Reflections</div>
          <h1 className="serif text-4xl md:text-5xl">The Journal</h1>
        </div>
      </div>

      <div className="container section">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="/about" className="block">
                <div className="aspect-[16/10] overflow-hidden bg-velmora-surface mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-widest text-velmora-text-muted mb-2">
                  <span>{article.date}</span>
                  <span className="w-px h-3 bg-velmora-border" />
                  <span>{article.readTime}</span>
                </div>
                <h2 className="serif text-2xl mb-3 group-hover:text-velmora-gold-dark transition-colors">
                  {article.title}
                </h2>
                <p className="text-velmora-text-muted leading-relaxed text-[15px]">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-sm tracking-widest text-velmora-gold group-hover:underline">
                  READ MORE →
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border text-center text-sm text-velmora-text-muted">
          More stories coming soon. Follow us on Instagram for daily inspiration.
        </div>
      </div>
    </div>
  );
};

export default Journal;
