import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Your Necklaces Like a Pro',
      excerpt: 'Master the art of layering with our guide to creating the perfect necklace stack.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
      date: 'January 15, 2024'
    },
    {
      id: 2,
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Tips and tricks to keep your favorite pieces looking brand new for years.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop',
      date: 'December 28, 2023'
    },
    {
      id: 3,
      title: 'The Art of Gifting Jewelry',
      excerpt: 'Find the perfect piece for every occasion with our curated gift guide.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=400&fit=crop',
      date: 'December 10, 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal text-center mb-4">
            Journal
          </h1>
          <p className="text-velmora-warm-gray text-center mb-12">
            Stories, styling tips, and behind the scenes
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to="/journal/1">
                  <div className="aspect-[3/2] bg-velmora-light-gray overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs text-velmora-warm-gray mb-2">{article.date}</p>
                  <h2 className="font-serif text-xl text-velmora-charcoal mb-2 group-hover:text-velmora-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-velmora-warm-gray">{article.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Journal;