import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering',
      excerpt: 'How to build a jewelry wardrobe that feels personal, not prescribed.',
      date: 'July 12, 2026',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      readTime: '6 min',
    },
    {
      id: 2,
      title: 'Why We Choose 18K Gold Plate',
      excerpt: 'A closer look at the materials that make our pieces last a lifetime.',
      date: 'June 28, 2026',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      readTime: '4 min',
    },
    {
      id: 3,
      title: 'Gifting with Intention',
      excerpt: 'The quiet power of giving something that will be worn for years.',
      date: 'June 10, 2026',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      readTime: '5 min',
    },
    {
      id: 4,
      title: 'Behind the Craft',
      excerpt: 'Meet the artisans who shape every curve and setting by hand.',
      date: 'May 22, 2026',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      readTime: '7 min',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navigation />

      <div className="container py-12">
        <div className="max-w-2xl mb-12">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Stories</span>
          <h1 className="font-serif text-4xl mt-2">The Journal</h1>
          <p className="mt-4 text-[#6B645C] text-lg">
            Reflections on craft, wear, and the quiet luxury of pieces made to last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-[#F1EDE6] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.06em] uppercase text-[#8A8178] mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-xl mb-2 group-hover:text-[#B89778] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#6B645C] text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E8E2D9] text-center">
          <p className="text-sm text-[#6B645C]">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;