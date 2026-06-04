import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, X } from 'lucide-react';

const articles = [
  {
    id: 'sourdough-starter',
    titleId: 'art-pg-sourdough-starter-title',
    descId: 'art-pg-sourdough-starter-desc',
    imgId: 'art-pg-img-sourdough-starter-a1b2c3',
    title: 'The Art of the Sourdough Starter',
    excerpt: 'A living culture of wild yeast and bacteria is the heart of every great sourdough loaf. Learn how we nurture ours — and how you can start your own at home.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    category: 'Baking Tips',
    body: [
      'A sourdough starter is a fermented mixture of flour and water that captures wild yeast and lactic acid bacteria from the environment. Unlike commercial yeast, a starter is alive — it needs to be fed regularly and cared for like a small pet.',
      'At La Maison, our starter — affectionately named "Marguerite" — has been active for over 12 years. Every morning, our head baker feeds her a fresh mixture of organic rye and white flour before the first loaves are shaped.',
      'To start your own at home, mix 50g of whole wheat flour with 50g of lukewarm water in a clean jar. Leave it uncovered at room temperature for 24 hours. Each day, discard half and feed it again with fresh flour and water. By day 5 to 7, you should see bubbles and a pleasant tangy smell — your starter is ready.',
      'The key to a great starter is consistency: same time each day, same flour, same temperature. Once established, you can store it in the fridge and feed it once a week if you bake less frequently.',
      "The wild yeast in your starter will give your bread a complex, slightly sour flavor that commercial yeast simply cannot replicate. It also improves the bread's shelf life and digestibility. Once you bake your first sourdough loaf, you'll never go back.",
    ],
  },
  {
    id: 'seasonal-ingredients',
    titleId: 'art-pg-seasonal-title',
    descId: 'art-pg-seasonal-desc',
    imgId: 'art-pg-img-seasonal-d4e5f6',
    title: 'Why We Bake with the Seasons',
    excerpt: "From strawberry galettes in June to spiced pumpkin loaves in October, our menu follows the rhythm of the harvest. Here's why seasonal baking matters.",
    date: 'May 14, 2026',
    readTime: '4 min read',
    category: 'Philosophy',
    body: [
      "Walk into La Maison in June and you'll find strawberry tarts glistening in the display case. Come back in October and those same shelves will hold spiced pumpkin loaves and apple turnovers. This is not by accident — it is our philosophy.",
      'Seasonal baking means working with ingredients at their peak. A strawberry picked in June is sweeter, more fragrant, and more flavorful than one shipped from a greenhouse in January. When we use the best ingredients, we need to do less to them. The fruit speaks for itself.',
      'We partner with three local farms within 30 miles of our bakery. Each week, we receive a delivery of whatever is freshest — stone fruits in summer, root vegetables in autumn, citrus in winter, and tender herbs in spring.',
      'This approach also means our menu is never boring. Regulars know that if they love the cherry clafoutis, they have a narrow window to enjoy it. That scarcity makes each seasonal item feel special — a small celebration of the time of year.',
      'We believe that baking in harmony with the seasons is not just better for flavor. It supports local farmers, reduces food miles, and keeps us connected to the natural world. In a bakery, as in life, the best things are worth waiting for.',
    ],
  },
  {
    id: 'croissant-lamination',
    titleId: 'art-pg-croissant-title',
    descId: 'art-pg-croissant-desc',
    imgId: 'art-pg-img-croissant-g7h8i9',
    title: 'The Secret Behind a Perfect Croissant',
    excerpt: 'Lamination — the process of folding butter into dough dozens of times — is what creates those impossibly flaky layers. We take you behind the scenes.',
    date: 'April 30, 2026',
    readTime: '6 min read',
    category: 'Behind the Scenes',
    body: [
      'A perfect croissant is one of the most technically demanding things a baker can make. The outside should shatter when you bite into it, sending a cascade of flakes onto your shirt. The inside should be soft, honeycomb-like, and rich with butter.',
      'The secret is lamination. After mixing a simple enriched dough, we rest it overnight in the refrigerator. The next morning, we encase a large, flat slab of cold butter inside the dough and begin a series of folds — called "turns" — that create hundreds of alternating layers of dough and butter.',
      'At La Maison, we perform three double turns, which results in 144 distinct layers. Between each turn, the dough rests in the fridge for at least 30 minutes. This keeps the butter cold and firm so it stays in separate layers rather than melting into the dough.',
      'The butter we use is a French AOP beurre de tourage — a dry, pliable butter with a higher fat content than standard butter. It bends without cracking when cold, which is essential for lamination.',
      'When the croissants go into a hot oven, the water in the butter turns to steam. That steam pushes the layers apart, creating the characteristic open, airy structure. The whole process — from mixing to baking — takes two days. We think every minute is worth it.',
    ],
  },
  {
    id: 'flour-guide',
    titleId: 'art-pg-flour-title',
    descId: 'art-pg-flour-desc',
    imgId: 'art-pg-img-flour-j1k2l3',
    title: "A Baker's Guide to Flour",
    excerpt: 'Not all flour is created equal. From high-protein bread flour to delicate cake flour, understanding the differences will transform your baking.',
    date: 'April 12, 2026',
    readTime: '5 min read',
    category: 'Baking Tips',
    body: [
      "Flour is the foundation of almost everything we bake, yet it's one of the most misunderstood ingredients. Walk into any supermarket and you'll find a dozen varieties. Choosing the right one makes an enormous difference.",
      'Bread flour has a high protein content — typically 12 to 14 percent. That protein forms gluten when mixed with water, giving bread its chewy, elastic structure. Use it for sourdough, baguettes, and pizza dough.',
      'All-purpose flour sits in the middle, with around 10 to 12 percent protein. It is versatile enough for cookies, muffins, and simple cakes, but it lacks the strength for serious bread or the tenderness for fine pastry.',
      'Cake flour has the lowest protein content — around 7 to 9 percent. Less gluten means a more tender, delicate crumb. It is the right choice for layer cakes, chiffon cakes, and fine biscuits.',
      'At La Maison, we mill some of our own flour from heritage wheat varieties. The flavor complexity of freshly milled flour is something you simply cannot buy off a shelf. If you ever get the chance to try it, do not hesitate.',
    ],
  },
  {
    id: 'morning-routine',
    titleId: 'art-pg-morning-title',
    descId: 'art-pg-morning-desc',
    imgId: 'art-pg-img-morning-m4n5o6',
    title: 'A Day in the Life: 4am at the Bakery',
    excerpt: 'While the city sleeps, our bakers are already at work. We take you through a typical morning at La Maison, from the first loaf to the open sign.',
    date: 'March 28, 2026',
    readTime: '4 min read',
    category: 'Behind the Scenes',
    body: [
      "The alarm goes off at 3:45am. By 4:00am, head baker Thomas is already at the bakery, unlocking the door in the dark and switching on the oven. The first thing he does every morning — before anything else — is check on Marguerite, our sourdough starter.",
      'By 4:30am, the first batch of sourdough loaves is shaped and loaded into the deck oven. The smell of baking bread fills the kitchen within minutes. There is nothing quite like it.',
      'While the bread bakes, the pastry team arrives and begins laminating croissant dough that was prepared the night before. The kitchen is quiet except for the sound of rolling pins and the hum of the proofer.',
      'By 6:30am, the first trays of croissants come out of the oven — golden, fragrant, and impossibly flaky. The display case begins to fill. The coffee machine is switched on.',
      "At 7:00am, we open the doors. The first customers of the day are usually regulars — people who've been coming for years, who know exactly what they want and greet Thomas by name. That's what we do this for.",
    ],
  },
  {
    id: 'butter-guide',
    titleId: 'art-pg-butter-title',
    descId: 'art-pg-butter-desc',
    imgId: 'art-pg-img-butter-p7q8r9',
    title: 'Why Butter Quality Changes Everything',
    excerpt: 'We use French AOP butter in our croissants and laminated pastries. Here is why the quality of your butter is the single biggest variable in pastry baking.',
    date: 'March 10, 2026',
    readTime: '3 min read',
    category: 'Ingredients',
    body: [
      'Ask any pastry chef what the most important ingredient in their kitchen is, and most will say butter. Not flour, not eggs — butter. The quality, fat content, and flavor of your butter will define the character of everything you make with it.',
      'Standard supermarket butter typically contains around 80 percent fat. European-style butters push that to 82 to 84 percent. The difference sounds small, but it is significant. Higher fat means less water, which means crisper, flakier pastry and a richer flavor.',
      'For our croissants, we use a French AOP beurre de tourage — a specialized butter designed specifically for lamination. It has a plasticity that allows it to be rolled thin without cracking, even when cold. This is what makes those 144 layers possible.',
      'The flavor of great butter is complex — slightly grassy, faintly tangy, deeply rich. When you bite into a croissant made with it, you taste the difference immediately. It is not just richer; it is more interesting.',
      'Our advice: wherever your budget allows, buy the best butter you can find. It is the one upgrade that will improve every single thing you bake.',
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
      <div ref={modalRef} className="relative bg-warm-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
          <img
            alt={article.title}
            data-strk-img-id={`modal-pg-${article.imgId}`}
            data-strk-img={`[modal-pg-${article.descId}] [modal-pg-${article.titleId}]`}
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
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-brown-light text-xs mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
          </div>
          <h2 id={`modal-pg-${article.titleId}`} className="text-2xl md:text-3xl font-playfair font-bold text-brown-dark mb-2 leading-snug">
            {article.title}
          </h2>
          <p id={`modal-pg-${article.descId}`} className="text-brown-light italic mb-6 text-sm">{article.excerpt}</p>
          <div className="border-t border-amber/20 pt-6 flex flex-col gap-4">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-brown leading-relaxed text-sm md:text-base">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page hero */}
      <div className="bg-brown-dark py-20 px-6 text-center">
        <p className="text-amber-light font-playfair italic text-lg mb-2">From Our Kitchen</p>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4" style={{ color: '#FFFDF8' }}>
          Stories & Recipes
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: 'rgba(255,253,248,0.75)' }}>
          Tips, techniques, and the stories behind our bakes — written by the people
          who make them every morning.
        </p>
      </div>

      {/* Grid */}
      <div className="bg-cream py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-warm-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelected(article)}
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
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                </div>
                <h3 id={article.titleId} className="text-xl font-playfair font-semibold text-brown-dark mb-3 leading-snug group-hover:text-amber transition-colors">
                  {article.title}
                </h3>
                <p id={article.descId} className="text-brown-light text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <button
                  className="mt-4 text-amber text-sm font-semibold hover:underline bg-transparent border-none p-0"
                  onClick={(e) => { e.stopPropagation(); setSelected(article); }}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default Articles;
