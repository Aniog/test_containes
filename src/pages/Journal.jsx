import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'A guide to stacking chains, pendants, and chokers for that effortless layered look everyone loves.',
    category: 'Styling',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=400&fit=crop',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'Why 18K Gold Plated Is the Sweet Spot',
    excerpt: 'Understanding the difference between gold-plated, gold-filled, and vermeil — and why plated works best for everyday wear.',
    category: 'Materials',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Gift Guide: Earrings for Every Personality',
    excerpt: 'From minimalist huggies to statement drops — find the perfect pair for your best friend, mom, or yourself.',
    category: 'Gifting',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'How to Care for Your Gold Jewelry',
    excerpt: 'Simple habits to keep your Velmora pieces shining like day one — from storage tips to cleaning routines.',
    category: 'Care',
    date: 'March 22, 2026',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    readTime: '3 min read',
  },
];

export default function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 pt-8">
          <p className="section-subtitle mb-3">Inspiration</p>
          <h1 className="font-serif text-display">The Velmora Journal</h1>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-obsidian-900 rounded-sm overflow-hidden mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-widest-xl uppercase text-gold-400 border border-gold-500/30 px-2 py-0.5">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-obsidian-500">{article.readTime}</span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl text-cream-100 group-hover:text-gold-400 transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-sm text-obsidian-400 leading-relaxed">{article.excerpt}</p>
                <p className="text-xs text-obsidian-600">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
