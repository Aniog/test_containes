import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const meals = [
  {
    id: 'meal-img-1',
    titleId: 'meal-title-1',
    subtitleId: 'meal-sub-1',
    time: 'Le Petit Déjeuner',
    english: 'Breakfast',
    description: 'A simple affair — a fresh croissant or tartine (buttered baguette) with jam, alongside a café au lait or hot chocolate.',
    items: ['Croissant', 'Tartine', 'Café au Lait', 'Pain au Chocolat'],
  },
  {
    id: 'meal-img-2',
    titleId: 'meal-title-2',
    subtitleId: 'meal-sub-2',
    time: 'Le Déjeuner',
    english: 'Lunch',
    description: 'The main meal of the day in France. A proper lunch includes an entrée, plat principal, cheese course, and dessert — often with wine.',
    items: ['Entrée', 'Plat Principal', 'Fromage', 'Dessert'],
  },
  {
    id: 'meal-img-3',
    titleId: 'meal-title-3',
    subtitleId: 'meal-sub-3',
    time: 'Le Dîner',
    english: 'Dinner',
    description: 'A lighter but still structured evening meal. Soups, salads, and charcuterie boards are common, followed by a simple main course.',
    items: ['Soupe', 'Salade', 'Charcuterie', 'Tarte'],
  },
];

const MealStructureSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">
            The French Way
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            A Day of French Eating
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8" />
          <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
            In France, meals are rituals — unhurried, social, and deeply pleasurable. Here is how a typical French day unfolds at the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <div key={meal.id} className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#8B1A2F] rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8E0D5] shadow-sm h-full">
                <div className="h-44 overflow-hidden">
                  <img
                    alt={meal.time}
                    className="w-full h-full object-cover"
                    data-strk-img-id={meal.id}
                    data-strk-img={`[${meal.subtitleId}] [${meal.titleId}] French meal food`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={meal.titleId} className="font-['Playfair_Display'] text-xl font-bold text-[#1C1C1C] mb-1">
                    {meal.time}
                  </h3>
                  <p id={meal.subtitleId} className="text-[#8B1A2F] text-sm font-medium italic mb-3">
                    {meal.english}
                  </p>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-4">{meal.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {meal.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-white text-[#1C1C1C] border border-[#E8E0D5] px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealStructureSection;
