import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const flavors = [
  {
    id: 'original',
    name: 'Sprite Original',
    tagline: 'The Classic',
    description: 'The crisp, clean lemon-lime taste that started it all. Pure refreshment in every sip.',
    color: 'from-sprite-green to-sprite-lime',
    badge: 'Classic',
    badgeColor: 'bg-white text-sprite-green',
    titleId: 'flavor-original-title',
    descId: 'flavor-original-desc',
    imgId: 'flavor-img-original-d4e5f6',
  },
  {
    id: 'zero',
    name: 'Sprite Zero Sugar',
    tagline: 'Zero Compromise',
    description: 'All the bold lemon-lime flavor with zero sugar. Refreshment without the guilt.',
    color: 'from-slate-700 to-slate-500',
    badge: 'Zero Sugar',
    badgeColor: 'bg-sprite-lime text-white',
    titleId: 'flavor-zero-title',
    descId: 'flavor-zero-desc',
    imgId: 'flavor-img-zero-g7h8i9',
  },
  {
    id: 'cranberry',
    name: 'Sprite Cranberry',
    tagline: 'Tart & Refreshing',
    description: 'A bold twist on the classic — lemon-lime meets the tart burst of cranberry.',
    color: 'from-red-700 to-rose-500',
    badge: 'Limited',
    badgeColor: 'bg-white text-red-700',
    titleId: 'flavor-cranberry-title',
    descId: 'flavor-cranberry-desc',
    imgId: 'flavor-img-cranberry-j1k2l3',
  },
  {
    id: 'tropical',
    name: 'Sprite Tropical Mix',
    tagline: 'Island Vibes',
    description: 'Escape to the tropics with a vibrant blend of lemon-lime and exotic tropical fruits.',
    color: 'from-yellow-500 to-orange-400',
    badge: 'New',
    badgeColor: 'bg-white text-orange-600',
    titleId: 'flavor-tropical-title',
    descId: 'flavor-tropical-desc',
    imgId: 'flavor-img-tropical-m4n5o6',
  },
  {
    id: 'ginger',
    name: 'Sprite Ginger',
    tagline: 'Bold & Spicy',
    description: 'The refreshing lemon-lime you love with a bold kick of real ginger flavor.',
    color: 'from-amber-600 to-yellow-400',
    badge: 'Fan Fave',
    badgeColor: 'bg-white text-amber-700',
    titleId: 'flavor-ginger-title',
    descId: 'flavor-ginger-desc',
    imgId: 'flavor-img-ginger-p7q8r9',
  },
  {
    id: 'lymonade',
    name: 'Sprite Lymonade',
    tagline: 'Sweet & Tart',
    description: 'Sprite meets lemonade for a sweet, tart, and totally refreshing summer drink.',
    color: 'from-lime-500 to-yellow-300',
    badge: 'Summer',
    badgeColor: 'bg-white text-lime-700',
    titleId: 'flavor-lymonade-title',
    descId: 'flavor-lymonade-desc',
    imgId: 'flavor-img-lymonade-s1t2u3',
  },
];

export default function Flavors() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="flavors" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sprite-green font-bold uppercase tracking-widest text-sm mb-3 font-poppins">
            Something for Everyone
          </p>
          <h2
            id="flavors-title"
            className="text-5xl md:text-6xl font-black text-gray-900 uppercase font-poppins leading-tight"
          >
            Our Flavors
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto font-poppins">
            From the classic original to bold new twists — find your perfect Sprite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor) => (
            <article
              key={flavor.id}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
            >
              <div className={`relative bg-gradient-to-br ${flavor.color} p-8 flex justify-center items-center min-h-52`}>
                <span className={`absolute top-4 right-4 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full ${flavor.badgeColor} font-poppins`}>
                  {flavor.badge}
                </span>
                <img
                  data-strk-img-id={flavor.imgId}
                  data-strk-img={`[${flavor.descId}] [${flavor.titleId}] [flavors-title] sprite soda can`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={flavor.name}
                  className="w-32 h-32 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-sprite-green mb-1 font-poppins">
                  {flavor.tagline}
                </p>
                <h3
                  id={flavor.titleId}
                  className="text-xl font-black text-gray-900 mb-2 font-poppins"
                >
                  {flavor.name}
                </h3>
                <p
                  id={flavor.descId}
                  className="text-gray-500 text-sm leading-relaxed font-poppins"
                >
                  {flavor.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
