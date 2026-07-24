import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Without the Tangle',
      excerpt: 'A guide to mixing lengths, textures, and tones for an effortless look.',
      date: 'July 12, 2026',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Quiet Power of Everyday Gold',
      excerpt: 'Why the pieces you wear daily become the ones that matter most.',
      date: 'June 28, 2026',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
      category: 'Journal',
    },
    {
      id: 3,
      title: 'Caring for Your Demi-Fine Jewelry',
      excerpt: 'Simple rituals to keep your pieces looking new for years.',
      date: 'June 10, 2026',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
      category: 'Care',
    },
    {
      id: 4,
      title: 'Gifting Jewelry: A Modern Guide',
      excerpt: 'How to choose a piece that feels personal, not generic.',
      date: 'May 22, 2026',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      category: 'Gifting',
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />
      <CartDrawer />

      <div className="container py-12">
        <div className="max-w-2xl mb-12">
          <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark mb-1">The Velmora Journal</div>
          <h1 className="text-4xl mb-4">Stories & Rituals</h1>
          <p className="text-velmora-text-muted">
            Notes on wearing, gifting, and caring for the jewelry that becomes part of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="/journal" className="block">
                <div className="aspect-[16/10] bg-velmora-bg-alt overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-widest text-velmora-text-muted mb-2">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-xl mb-2 group-hover:text-velmora-gold-dark transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-velmora-text-muted line-clamp-2">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-velmora-text-muted">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;