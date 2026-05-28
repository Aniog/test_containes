import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const dishes = [
  {
    id: 'dish-tacos',
    imgId: 'dish-img-tacos-9k3m',
    title: 'Tacos al Pastor',
    description: 'Marinated pork on a vertical spit, served with pineapple, onion, and cilantro.',
  },
  {
    id: 'dish-mole',
    imgId: 'dish-img-mole-4p8x',
    title: 'Mole Poblano',
    description: 'A rich, complex sauce of chiles, chocolate, and spices over tender chicken.',
  },
  {
    id: 'dish-enchiladas',
    imgId: 'dish-img-enchiladas-2r7n',
    title: 'Enchiladas',
    description: 'Corn tortillas rolled around filling and smothered in chili sauce and cheese.',
  },
  {
    id: 'dish-pozole',
    imgId: 'dish-img-pozole-6t1w',
    title: 'Pozole',
    description: 'A hearty hominy soup with pork, garnished with cabbage, radish, and lime.',
  },
  {
    id: 'dish-chiles',
    imgId: 'dish-img-chiles-5v9b',
    title: 'Chiles en Nogada',
    description: 'Stuffed poblano chiles topped with walnut cream sauce and pomegranate seeds.',
  },
  {
    id: 'dish-tamales',
    imgId: 'dish-img-tamales-8c4j',
    title: 'Tamales',
    description: 'Masa dough filled with meats or cheese, wrapped in corn husks and steamed.',
  },
];

const DishesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="dishes" ref={containerRef} className="py-20 px-6 bg-[#FDF6EC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-3">
            Must-Try Classics
          </p>
          <h2
            id="dishes-title"
            className="text-gray-900 text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Iconic Dishes
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            From street food to festive feasts, these dishes define the heart of Mexican cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-52 overflow-hidden bg-orange-100">
                <img
                  id={dish.id}
                  alt={dish.title}
                  data-strk-img-id={dish.imgId}
                  data-strk-img={`[${dish.id}] [dishes-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {dish.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishesSection;
