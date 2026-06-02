import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const recipes = [
  {
    id: 'tzatziki',
    titleId: 'rec-tzatziki-title',
    descId: 'rec-tzatziki-desc',
    imgId: 'rec-img-tzatziki-8e1a3c',
    title: 'Classic Tzatziki',
    desc: 'Creamy Greek yogurt dip with grated cucumber, garlic, dill, and lemon.',
    time: '10 min',
    difficulty: 'Easy',
    tag: 'Dip',
  },
  {
    id: 'salad',
    titleId: 'rec-salad-title',
    descId: 'rec-salad-desc',
    imgId: 'rec-img-salad-2f7b5d',
    title: 'Cucumber & Tomato Salad',
    desc: 'A refreshing summer salad with red onion, olive oil, and fresh herbs.',
    time: '15 min',
    difficulty: 'Easy',
    tag: 'Salad',
  },
  {
    id: 'sushi',
    titleId: 'rec-sushi-title',
    descId: 'rec-sushi-desc',
    imgId: 'rec-img-sushi-5c9d0e',
    title: 'Cucumber Sushi Rolls',
    desc: 'Light and fresh kappa maki rolls with seasoned rice and crisp cucumber.',
    time: '30 min',
    difficulty: 'Medium',
    tag: 'Japanese',
  },
  {
    id: 'gazpacho',
    titleId: 'rec-gazpacho-title',
    descId: 'rec-gazpacho-desc',
    imgId: 'rec-img-gazpacho-1a4f6b',
    title: 'Cucumber Gazpacho',
    desc: 'A chilled, blended soup with cucumber, avocado, and a hint of jalapeño.',
    time: '20 min',
    difficulty: 'Easy',
    tag: 'Soup',
  },
  {
    id: 'pickles',
    titleId: 'rec-pickles-title',
    descId: 'rec-pickles-desc',
    imgId: 'rec-img-pickles-9b3e7a',
    title: 'Quick Dill Pickles',
    desc: 'Crunchy homemade pickles ready in 24 hours with garlic and fresh dill.',
    time: '24 hr',
    difficulty: 'Easy',
    tag: 'Preserved',
  },
  {
    id: 'water',
    titleId: 'rec-water-title',
    descId: 'rec-water-desc',
    imgId: 'rec-img-water-4d2c8f',
    title: 'Cucumber Mint Water',
    desc: 'Infused water with sliced cucumber, fresh mint, and a squeeze of lime.',
    time: '5 min',
    difficulty: 'Easy',
    tag: 'Drink',
  },
];

const difficultyColor = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Hard: 'bg-red-100 text-red-700',
};

const Recipes = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [active]);

  return (
    <section id="recipes" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-cucumber-pale text-cucumber font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            In the Kitchen
          </span>
          <h2 className="font-black text-3xl md:text-5xl text-cucumber-dark mb-4">
            Favourite Recipes
          </h2>
          <p className="text-cucumber-muted text-lg max-w-xl mx-auto">
            From quick snacks to elegant dishes — cucumber belongs in every meal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <div
              key={r.id}
              className="bg-cucumber-cream rounded-2xl overflow-hidden border border-cucumber-pale hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => setActive(active?.id === r.id ? null : r)}
            >
              <div className="relative overflow-hidden">
                <img
                  alt={r.title}
                  data-strk-img-id={r.imgId}
                  data-strk-img={`[${r.descId}] [${r.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 text-cucumber-dark text-xs font-bold px-3 py-1 rounded-full">
                  {r.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[r.difficulty]}`}>
                    {r.difficulty}
                  </span>
                  <span className="text-cucumber-muted text-xs">⏱ {r.time}</span>
                </div>
                <h3 id={r.titleId} className="font-bold text-lg text-cucumber-dark mb-1">
                  {r.title}
                </h3>
                <p id={r.descId} className="text-cucumber-muted text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
