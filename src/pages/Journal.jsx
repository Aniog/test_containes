import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Learn how to create stunning layered looks with our guide to necklace stacking.',
      date: 'June 15, 2026',
      readTime: '4 min read',
    },
    {
      id: 2,
      title: 'Why Demi-Fine Jewelry is the New Luxury',
      excerpt: 'Discover why more women are choosing quality demi-fine pieces over fast fashion.',
      date: 'June 8, 2026',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'Caring for Your Gold Jewelry',
      excerpt: 'Simple tips to keep your Velmora pieces looking beautiful for years to come.',
      date: 'May 28, 2026',
      readTime: '3 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />
      <CartDrawer />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-wide mb-4">
                Journal
              </h1>
              <p className="text-[#78716C] text-sm tracking-wide max-w-md mx-auto">
                Stories, style guides, and the art of quiet luxury.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-[#F5F3F0] overflow-hidden mb-5">
                    <img
                      data-strk-img-id={`journal-${article.id}`}
                      data-strk-img={`[${article.title}] [${article.excerpt}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#A8A29E] tracking-wide mb-2">
                      {article.date} · {article.readTime}
                    </p>
                    <h2 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1A1A1A] tracking-wide mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#78716C] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
