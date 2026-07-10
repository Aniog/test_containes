import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const fruits = [
  {
    id: 'apple',
    name: 'Apples',
    season: 'Sep – Nov',
    desc: 'Crisp and sweet, our apples are hand-picked at peak ripeness. Available in Fuji, Gala, and Granny Smith varieties.',
    imgId: 'fruit-apple-img-a1b2c3',
    titleId: 'fruit-apple-title',
    descId: 'fruit-apple-desc',
  },
  {
    id: 'peach',
    name: 'Peaches',
    season: 'Jul – Aug',
    desc: 'Juicy and fragrant, our peaches are a summer favorite. Perfect for eating fresh or making preserves.',
    imgId: 'fruit-peach-img-d4e5f6',
    titleId: 'fruit-peach-title',
    descId: 'fruit-peach-desc',
  },
  {
    id: 'pear',
    name: 'Pears',
    season: 'Aug – Oct',
    desc: 'Smooth and buttery, our pears ripen slowly on the tree for the best texture and flavor.',
    imgId: 'fruit-pear-img-g7h8i9',
    titleId: 'fruit-pear-title',
    descId: 'fruit-pear-desc',
  },
  {
    id: 'cherry',
    name: 'Cherries',
    season: 'Jun – Jul',
    desc: 'Bright and bold, our cherries are among the first fruits of the season. Sweet and tart varieties available.',
    imgId: 'fruit-cherry-img-j1k2l3',
    titleId: 'fruit-cherry-title',
    descId: 'fruit-cherry-desc',
  },
  {
    id: 'plum',
    name: 'Plums',
    season: 'Aug – Sep',
    desc: 'Deep purple and richly flavored, our plums are wonderful fresh or turned into jams and sauces.',
    imgId: 'fruit-plum-img-m4n5o6',
    titleId: 'fruit-plum-title',
    descId: 'fruit-plum-desc',
  },
  {
    id: 'strawberry',
    name: 'Strawberries',
    season: 'May – Jun',
    desc: 'Small, sweet, and intensely flavored — our strawberries are the first sign that summer is here.',
    imgId: 'fruit-strawberry-img-p7q8r9',
    titleId: 'fruit-strawberry-title',
    descId: 'fruit-strawberry-desc',
  },
];

const Fruits = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-farm-orange text-sm font-medium uppercase tracking-widest mb-2">What We Grow</p>
          <h1 className="text-4xl font-bold text-gray-900">Our Fruits</h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Seasonal, fresh, and grown with care. Here's what you'll find at Green Valley Farm throughout the year.
          </p>
        </div>
      </section>

      {/* Fruit grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  alt={fruit.name}
                  data-strk-img-id={fruit.imgId}
                  data-strk-img={`[${fruit.descId}] [${fruit.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 id={fruit.titleId} className="font-semibold text-gray-900 text-lg">{fruit.name}</h3>
                  <span className="text-xs text-farm-orange font-medium bg-orange-50 px-2.5 py-1 rounded-full">
                    {fruit.season}
                  </span>
                </div>
                <p id={fruit.descId} className="text-gray-500 text-sm leading-relaxed">{fruit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal note */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Availability Changes with the Seasons</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Our fruits are only available when they're naturally ripe. We don't store or ship — everything is picked fresh for you. Contact us to find out what's available right now.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Fruits;
