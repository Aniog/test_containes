import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Flame } from 'lucide-react';

const recipes = [
  {
    id: 'recipe-1',
    title: 'Green Power Smoothie Bowl',
    titleId: 'recipe-title-1',
    description: 'Spinach, banana, mango, and chia seeds blended into a vibrant, nutrient-dense breakfast bowl.',
    descId: 'recipe-desc-1',
    time: '10 min',
    calories: '320 kcal',
    tag: 'Breakfast',
    tagColor: 'bg-green-100 text-green-700',
    imgId: 'recipe-img-b2e4f7',
  },
  {
    id: 'recipe-2',
    title: 'Quinoa & Roasted Veggie Salad',
    titleId: 'recipe-title-2',
    description: 'Protein-packed quinoa tossed with roasted bell peppers, zucchini, and a lemon-tahini dressing.',
    descId: 'recipe-desc-2',
    time: '25 min',
    calories: '410 kcal',
    tag: 'Lunch',
    tagColor: 'bg-yellow-100 text-yellow-700',
    imgId: 'recipe-img-c3a5d8',
  },
  {
    id: 'recipe-3',
    title: 'Baked Salmon with Herbs',
    titleId: 'recipe-title-3',
    description: 'Omega-3 rich salmon fillet baked with fresh dill, garlic, and lemon, served with steamed broccoli.',
    descId: 'recipe-desc-3',
    time: '30 min',
    calories: '480 kcal',
    tag: 'Dinner',
    tagColor: 'bg-orange-100 text-orange-700',
    imgId: 'recipe-img-d4b6e9',
  },
];

const Recipes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="recipes" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#2d7a4f] text-sm font-semibold uppercase tracking-widest">Wholesome Meals</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Healthy Recipes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Simple, delicious, and nutritious recipes crafted by our expert chefs and dietitians to make healthy eating enjoyable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  alt={recipe.title}
                  className="w-full h-52 object-cover bg-gray-100"
                  data-strk-img-id={recipe.imgId}
                  data-strk-img={`[${recipe.descId}] [${recipe.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="480"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${recipe.tagColor}`}>
                  {recipe.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={recipe.titleId} className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                <p id={recipe.descId} className="text-sm text-gray-600 leading-relaxed mb-4">{recipe.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {recipe.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-400" /> {recipe.calories}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#cta"
            className="inline-block border-2 border-[#2d7a4f] text-[#2d7a4f] px-8 py-3 rounded-full font-semibold hover:bg-[#e8f5ee] transition-colors"
          >
            View All Recipes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
