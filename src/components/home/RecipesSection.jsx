import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Users } from 'lucide-react';

const recipes = [
  {
    id: 'recipe-1',
    title: 'Brown Butter Pasta',
    subtitle: 'Silky pasta tossed in nutty brown butter with sage and parmesan',
    time: '20 min',
    serves: '2',
    tag: 'Butter',
    tagColor: 'bg-butter text-brown-dark',
    imgId: 'recipe-img-a1b2c3',
  },
  {
    id: 'recipe-2',
    title: 'Cheese Fondue',
    subtitle: 'Classic Swiss fondue with Gruyère and Emmental, served with crusty bread',
    time: '30 min',
    serves: '4',
    tag: 'Cheese',
    tagColor: 'bg-sage text-cream',
    imgId: 'recipe-img-d4e5f6',
  },
  {
    id: 'recipe-3',
    title: 'Butter Croissants',
    subtitle: 'Flaky, golden croissants made with layers of cultured butter',
    time: '3 hrs',
    serves: '8',
    tag: 'Butter',
    tagColor: 'bg-butter text-brown-dark',
    imgId: 'recipe-img-g7h8i9',
  },
  {
    id: 'recipe-4',
    title: 'Baked Brie with Honey',
    subtitle: 'Warm, gooey brie topped with walnuts, thyme, and wildflower honey',
    time: '25 min',
    serves: '6',
    tag: 'Cheese',
    tagColor: 'bg-sage text-cream',
    imgId: 'recipe-img-j1k2l3',
  },
];

const RecipesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="recipes" ref={containerRef} className="py-24 bg-parchment">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-semibold text-brown mb-3 block">
            From Our Kitchen
          </span>
          <h2
            id="recipes-section-title"
            className="font-playfair text-4xl md:text-5xl font-bold text-brown-dark mb-4"
          >
            Recipes to Savour
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            Let our butter and cheese be the star of your table. Simple recipes,
            extraordinary flavour.
          </p>
        </div>

        {/* Recipe grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-cream rounded-2xl shadow-md overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={recipe.imgId}
                  data-strk-img={`[${recipe.id}-subtitle] [${recipe.id}-title] [recipes-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${recipe.tagColor}`}>
                  {recipe.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={`${recipe.id}-title`} className="font-playfair text-lg font-bold text-brown-dark mb-1 leading-snug">
                  {recipe.title}
                </h3>
                <p id={`${recipe.id}-subtitle`} className="text-warm-gray text-xs leading-relaxed mb-4">
                  {recipe.subtitle}
                </p>
                <div className="flex items-center gap-4 text-warm-gray text-xs">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {recipe.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} />
                    Serves {recipe.serves}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border-2 border-brown text-brown hover:bg-brown hover:text-cream font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View All Recipes
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
