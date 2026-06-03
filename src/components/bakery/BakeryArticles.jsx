import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, X } from 'lucide-react';

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
    body: [
      'A sourdough starter is a fermented mixture of flour and water that captures wild yeast and lactic acid bacteria from the environment. Unlike commercial yeast, a starter is alive — it needs to be fed regularly and cared for like a small pet.',
      'At La Maison, our starter — affectionately named "Marguerite" — has been active for over 12 years. Every morning, our head baker feeds her a fresh mixture of organic rye and white flour before the first loaves are shaped.',
      'To start your own at home, mix 50g of whole wheat flour with 50g of lukewarm water in a clean jar. Leave it uncovered at room temperature for 24 hours. Each day, discard half and feed it again with fresh flour and water. By day 5 to 7, you should see bubbles and a pleasant tangy smell — your starter is ready.',
      'The key to a great starter is consistency: same time each day, same flour, same temperature. Once established, you can store it in the fridge and feed it once a week if you bake less frequently.',
      'The wild yeast in your starter will give your bread a complex, slightly sour flavor that commercial yeast simply cannot replicate. It also improves the bread\'s shelf life and digestibility. Once you bake your first sourdough loaf, you\'ll never go back.',
    ],
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
    body: [
      'Walk into La Maison in June and you\'ll find strawberry tarts glistening in the display case. Come back in October and those same shelves will hold spiced pumpkin loaves and apple turnovers. This is not by accident — it is our philosophy.',
      'Seasonal baking means working with ingredients at their peak. A strawberry picked in June is sweeter, more fragrant, and more flavorful than one shipped from a greenhouse in January. When we use the best ingredients, we need to do less to them. The fruit speaks for itself.',
      'We partner with three local farms within 30 miles of our bakery. Each week, we receive a delivery of whatever is freshest — stone fruits in summer, root vegetables in autumn, citrus in winter, and tender herbs in spring. Our pastry team then builds the weekly specials around what arrives.',
      'This approach also means our menu is never boring. Regulars know that if they love the cherry clafoutis, they have a narrow window to enjoy it. That scarcity makes each seasonal item feel special — a small celebration of the time of year.',
      'We believe that baking in harmony with the seasons is not just better for flavor. It supports local farmers, reduces food miles, and keeps us connected to the natural world. In a bakery, as in life, the best things are worth waiting for.',
    ],
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
    body: [
      'A perfect croissant is one of the most technically demanding things a baker can make. The outside should shatter when you bite into it, sending a cascade of flakes onto your shirt. The inside should be soft, honeycomb-like, and rich with butter. Achieving both at once is the challenge.',
      'The secret is lamination. After mixing a simple enriched dough, we rest it overnight in the refrigerator. The next morning, we encase a large, flat slab of cold butter inside the dough and begin a series of folds — called "turns" — that create hundreds of alternating layers of dough and butter.',
      'At La Maison, we perform three double turns, which results in 144 distinct layers. Between each turn, the dough rests in the fridge for at least 30 minutes. This keeps the butter cold and firm so it stays in separate layers rather than melting into the dough.',
      'The butter we use is a French AOP beurre de tourage — a dry, pliable butter with a higher fat content than standard butter. It bends without cracking when cold, which is essential for lamination. Using the wrong butter is one of the most common mistakes home bakers make.',
      'When the croissants go into a hot oven, the water in the butter turns to steam. That steam pushes the layers apart, creating the characteristic open, airy structure. The butter then fries the dough from within, giving the outside its deep golden color and shattering crunch.',
      'The whole process — from mixing to baking — takes two days. We think every minute is worth it.',
    ],
  },
];

const ArticleModal = ({ article, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, modalRef.current);
  }, [article]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-brown-dark/70" />
      <div
        ref={modalRef}
        className="relative bg-warm-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Hero image */}
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
          <img
            alt={article.title}
            data-strk-img-id={`modal-${article.imgId}`}
            data-strk-img={`[modal-${article.descId}] [modal-${article.titleId}]`}
            data-strk-img-ratio="3x2"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent" />
          <span className="absolute top-4 left-4 bg-sage text-warm-white text-xs font-semibold px-3 py-1 rounded-full">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-brown-dark/60 hover:bg-brown-dark text-warm-white rounded-full p-2 transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-brown-light text-xs mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2
            id={`modal-${article.titleId}`}
            className="text-2xl md:text-3xl font-playfair font-bold text-brown-dark mb-2 leading-snug"
          >
            {article.title}
          </h2>
          <p id={`modal-${article.descId}`} className="text-brown-light italic mb-6 text-sm">
            {article.excerpt}
          </p>

          <div className="border-t border-amber/20 pt-6 flex flex-col gap-4">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-brown leading-relaxed text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BakeryArticles = () => {
  const containerRef = useRef(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

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
              onClick={() => setSelectedArticle(article)}
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

                <button
                  className="mt-4 text-amber text-sm font-semibold hover:underline bg-transparent border-none p-0"
                  onClick={(e) => { e.stopPropagation(); setSelectedArticle(article); }}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </section>
  );
};

export default BakeryArticles;
