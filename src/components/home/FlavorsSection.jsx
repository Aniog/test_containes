import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const flavors = [
  {
    id: 'orange',
    name: 'Orange',
    emoji: '🍊',
    tagline: 'The Original Classic',
    description: 'The iconic flavor that started it all. Bright, zesty, and irresistibly refreshing.',
    color: 'fanta-orange',
    bg: 'bg-orange-50',
    badge: 'bg-fanta-orange',
    titleId: 'flavor-orange-title',
    descId: 'flavor-orange-desc',
    imgId: 'flavor-img-orange-d4e5f6',
  },
  {
    id: 'grape',
    name: 'Grape',
    emoji: '🍇',
    tagline: 'Bold & Juicy',
    description: 'Deep, rich grape flavor with a sparkling twist that tingles your taste buds.',
    color: 'fanta-purple',
    bg: 'bg-purple-50',
    badge: 'bg-fanta-purple',
    titleId: 'flavor-grape-title',
    descId: 'flavor-grape-desc',
    imgId: 'flavor-img-grape-g7h8i9',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    emoji: '🍓',
    tagline: 'Sweet & Playful',
    description: 'Sun-ripened strawberry sweetness in every sip — pure summer in a bottle.',
    color: 'fanta-red',
    bg: 'bg-red-50',
    badge: 'bg-fanta-red',
    titleId: 'flavor-strawberry-title',
    descId: 'flavor-strawberry-desc',
    imgId: 'flavor-img-strawberry-j1k2l3',
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    emoji: '🍍',
    tagline: 'Tropical Escape',
    description: 'A tropical burst of golden pineapple that transports you to paradise.',
    color: 'fanta-yellow',
    bg: 'bg-yellow-50',
    badge: 'bg-yellow-400',
    titleId: 'flavor-pineapple-title',
    descId: 'flavor-pineapple-desc',
    imgId: 'flavor-img-pineapple-m4n5o6',
  },
  {
    id: 'lime',
    name: 'Lime',
    emoji: '🍋',
    tagline: 'Crisp & Tangy',
    description: 'Sharp, citrusy lime with a refreshing fizz that wakes up your senses.',
    color: 'fanta-green',
    bg: 'bg-green-50',
    badge: 'bg-fanta-green',
    titleId: 'flavor-lime-title',
    descId: 'flavor-lime-desc',
    imgId: 'flavor-img-lime-p7q8r9',
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    emoji: '🫐',
    tagline: 'Cool & Mysterious',
    description: 'Smooth, cool blueberry flavor with a deep berry sweetness you\'ll crave.',
    color: 'fanta-blue',
    bg: 'bg-blue-50',
    badge: 'bg-fanta-blue',
    titleId: 'flavor-blueberry-title',
    descId: 'flavor-blueberry-desc',
    imgId: 'flavor-img-blueberry-s1t2u3',
  },
];

const colorTextMap = {
  'fanta-orange': 'text-fanta-orange',
  'fanta-purple': 'text-fanta-purple',
  'fanta-red': 'text-fanta-red',
  'fanta-yellow': 'text-yellow-500',
  'fanta-green': 'text-fanta-green',
  'fanta-blue': 'text-fanta-blue',
};

const FlavorsSection = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(flavors[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeFlavor = flavors.find((f) => f.id === active);

  return (
    <section id="flavors" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-fanta-orange/10 text-fanta-orange font-poppins font-semibold text-sm rounded-full px-4 py-1 mb-4 uppercase tracking-widest">
            Our Flavors
          </span>
          <h2
            id="flavors-title"
            className="font-poppins font-black text-4xl md:text-5xl text-fanta-dark mb-4"
          >
            Pick Your Favorite
          </h2>
          <p className="font-poppins text-gray-500 text-lg max-w-xl mx-auto">
            From classic orange to exotic tropical blends — there's a Fanta for every mood.
          </p>
        </div>

        {/* Flavor tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {flavors.map((flavor) => (
            <button
              key={flavor.id}
              onClick={() => setActive(flavor.id)}
              className={`font-poppins font-semibold rounded-full px-5 py-2 text-sm transition-all duration-200 border-2 ${
                active === flavor.id
                  ? `${flavor.badge} text-white border-transparent scale-105 shadow-md`
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {flavor.emoji} {flavor.name}
            </button>
          ))}
        </div>

        {/* Active flavor detail */}
        {flavors
          .filter((f) => f.id === active)
          .map((flavor) => (
            <div
              key={flavor.id}
              className={`${flavor.bg} rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center shadow-lg`}
            >
              <div>
                <span className={`font-poppins font-semibold text-sm uppercase tracking-widest ${colorTextMap[flavor.color]} mb-3 block`}>
                  {flavor.tagline}
                </span>
                <h3
                  id={flavor.titleId}
                  className={`font-poppins font-black text-4xl md:text-5xl ${colorTextMap[flavor.color]} mb-4`}
                >
                  {flavor.emoji} {flavor.name}
                </h3>
                <p
                  id={flavor.descId}
                  className="font-poppins text-gray-700 text-lg leading-relaxed mb-8"
                >
                  {flavor.description}
                </p>
                <div className="flex gap-4">
                  <span className={`${flavor.badge} text-white font-poppins font-bold rounded-full px-6 py-2 text-sm`}>
                    Try It Now
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className={`absolute inset-0 ${flavor.badge} opacity-20 rounded-full blur-2xl scale-110`} />
                  <img
                    data-strk-img-id={flavor.imgId}
                    data-strk-img={`[${flavor.descId}] [${flavor.titleId}] [flavors-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Fanta ${flavor.name}`}
                    className="relative w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}

        {/* Flavor grid preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {flavors.map((flavor) => (
            <button
              key={flavor.id}
              onClick={() => setActive(flavor.id)}
              className={`${flavor.bg} rounded-2xl p-4 text-center transition-all duration-200 hover:scale-105 border-2 ${
                active === flavor.id ? `border-current ${colorTextMap[flavor.color]}` : 'border-transparent'
              }`}
            >
              <div className="text-3xl mb-2">{flavor.emoji}</div>
              <p className={`font-poppins font-bold text-sm ${colorTextMap[flavor.color]}`}>
                {flavor.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
