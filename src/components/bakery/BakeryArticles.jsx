import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock } from 'lucide-react';

const articles = [
  {
    id: 'sourdough-starter',
    titleId: 'article-sourdough-starter-title',
    descId: 'article-sourdough-starter-desc',
    imgId: 'article-img-sourdough-starter-v4w5x6',
    title: 'The Art of the Sourdough Starter',
    excerpt:
      'A living culture of wild yeast and bacteria is the heart of every great sourdough loaf. Learn how we nurture ours — and how you can start your own at home.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    category: 'Baking Tips',
  },
  {
    id: 'seasonal-ingredients',
    titleId: 'article-seasonal-ingredients-title',
    descId: 'article-seasonal-ingredients-desc',
    imgId: 'article-img-seasonal-ingredients-y7z8a9',
    title: 'Why We Bake with the Seasons',
    excerpt:
      'From strawberry galettes in June to spiced pumpkin loaves in October, our menu follows the rhythm of the harvest. Here\'s why seasonal baking matters.',
    date: 'May 14, 2026',
    readTime: '4 min read',
    category: 'Philosophy',
  },
  {
    id: 'croissant-lamination',
    titleId: 'article-croissant-lamination-title',
    descId: 'article-croissant-lamination-desc',
    imgId: 'article-img-croissant-lamination-b1c2d3',
    title: 'The Secret Behind a Perfect Croissant',
    excerpt:
      'Lamination — the process of folding butter into dough dozens of times — is what creates those impossibly flaky layers. We take you behind the scenes.',
    date: 'April 30, 2026',
    readTime: '6 min read',
    category: 'Behind the Scenes',
  },
];

const BakeryArticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="articles" className="bg-warm-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber font-playfair italic text-lg mb-2">From Our Kitchen</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brown-dark mb-4">
            Stories & Recipes
          </h2>
          <p className="text-brown-light max-w-xl mx-auto">
            We love sharing the craft behind our bakes — tips, techniques, and the
            stories that make each loaf and pastry special.
          </p>
        </div>

        {/* Articles grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-sage text-warm-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-brown-light text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3
                  id={article.titleId}
                  className="text-xl font-playfair font-semibold text-brown-dark mb-3 leading-snug group-hover:text-amber transition-colors"
                >
                  {article.title}
                </h3>

                <p id={article.descId} className="text-brown-light text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <span className="inline-block mt-4 text-amber text-sm font-semibold hover:underline">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BakeryArticles;
