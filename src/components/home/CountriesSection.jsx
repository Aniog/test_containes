import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const countries = [
  {
    id: 'usa',
    flag: '🇺🇸',
    country: 'United States',
    dish: 'Southern Fried Chicken',
    description:
      'The gold standard. Buttermilk-marinated chicken dredged in seasoned flour and fried to a shatteringly crisp crust. Nashville hot chicken adds a fiery cayenne paste that has taken the world by storm.',
    keyIngredients: ['Buttermilk', 'Cayenne', 'Paprika', 'Cast-iron skillet'],
    spiceLevel: 2,
    color: 'from-red-50 to-amber-50',
    accent: 'text-red-600',
  },
  {
    id: 'korea',
    flag: '🇰🇷',
    country: 'South Korea',
    dish: 'Yangnyeom Chicken',
    description:
      'Double-fried for an impossibly thin, glass-like crunch, then glazed in a sweet-spicy gochujang sauce. Korean fried chicken sparked a global craze and pairs perfectly with cold beer — a combo called "chimaek."',
    keyIngredients: ['Gochujang', 'Soy sauce', 'Garlic', 'Potato starch'],
    spiceLevel: 3,
    color: 'from-rose-50 to-red-50',
    accent: 'text-rose-600',
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    country: 'Japan',
    dish: 'Karaage',
    description:
      'Bite-sized chicken thighs marinated in soy, sake, and ginger, then coated in potato starch and fried twice. Juicy inside, feather-light outside. A beloved izakaya staple served with kewpie mayo and lemon.',
    keyIngredients: ['Soy sauce', 'Sake', 'Ginger', 'Potato starch'],
    spiceLevel: 1,
    color: 'from-orange-50 to-yellow-50',
    accent: 'text-orange-600',
  },
  {
    id: 'nigeria',
    flag: '🇳🇬',
    country: 'Nigeria',
    dish: 'Nigerian Fried Chicken',
    description:
      'First boiled with a bold blend of spices — curry, thyme, seasoning cubes — then deep-fried to a rich mahogany finish. The pre-seasoning technique ensures flavor penetrates every fiber of the meat.',
    keyIngredients: ['Curry powder', 'Thyme', 'Scotch bonnet', 'Seasoning cubes'],
    spiceLevel: 3,
    color: 'from-green-50 to-emerald-50',
    accent: 'text-green-700',
  },
  {
    id: 'peru',
    flag: '🇵🇪',
    country: 'Peru',
    dish: 'Pollo a la Brasa',
    description:
      'While technically rotisserie, Peru\'s iconic chicken is marinated in a heady mix of cumin, garlic, soy, and ají amarillo, then cooked over wood fire. Served with aji verde sauce, it\'s a national obsession.',
    keyIngredients: ['Ají amarillo', 'Cumin', 'Soy sauce', 'Garlic'],
    spiceLevel: 2,
    color: 'from-yellow-50 to-amber-50',
    accent: 'text-yellow-700',
  },
  {
    id: 'india',
    flag: '🇮🇳',
    country: 'India',
    dish: 'Chicken 65',
    description:
      'A fiery South Indian street food legend. Chicken is marinated in a vivid red paste of chili, ginger, garlic, and yogurt, then deep-fried and finished with curry leaves and green chilies. The origin of the name remains deliciously mysterious.',
    keyIngredients: ['Red chili', 'Curry leaves', 'Yogurt', 'Garam masala'],
    spiceLevel: 4,
    color: 'from-orange-50 to-red-50',
    accent: 'text-orange-700',
  },
  {
    id: 'philippines',
    flag: '🇵🇭',
    country: 'Philippines',
    dish: 'Crispy Pata',
    description:
      'A showstopper of a dish — pork knuckle (or chicken) slow-braised in aromatics until tender, then deep-fried until the skin blisters and crackles. Served with a vinegar-soy dipping sauce, it\'s pure celebration food.',
    keyIngredients: ['Soy sauce', 'Vinegar', 'Bay leaves', 'Star anise'],
    spiceLevel: 1,
    color: 'from-blue-50 to-indigo-50',
    accent: 'text-blue-700',
  },
  {
    id: 'austria',
    flag: '🇦🇹',
    country: 'Austria',
    dish: 'Backhendl',
    description:
      'Austria\'s beloved breaded fried chicken, predating the American version by centuries. Chicken pieces are coated in fine breadcrumbs and pan-fried in lard or butter until golden. A staple of Viennese taverns since the 18th century.',
    keyIngredients: ['Breadcrumbs', 'Eggs', 'Lard', 'Lemon'],
    spiceLevel: 1,
    color: 'from-amber-50 to-yellow-50',
    accent: 'text-amber-700',
  },
];

const SpiceIndicator = ({ level }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={`text-sm ${i <= level ? 'opacity-100' : 'opacity-20'}`}>
        🌶️
      </span>
    ))}
  </div>
);

const CountryCard = ({ country, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <article
      ref={cardRef}
      className={`bg-gradient-to-br ${country.color} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 hover:-translate-y-1`}
    >
      {/* Card image */}
      <div className="relative h-52 overflow-hidden bg-amber-100">
        <img
          alt={country.dish}
          className="w-full h-full object-cover"
          data-strk-img-id={`country-img-${country.id}-${index}`}
          data-strk-img={`[card-dish-${country.id}] [card-country-${country.id}] fried chicken dish`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 shadow-sm">
          <span className="text-xl">{country.flag}</span>
          <span
            id={`card-country-${country.id}`}
            className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
          >
            {country.country}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3
          id={`card-dish-${country.id}`}
          className={`font-serif font-bold text-xl mb-2 ${country.accent}`}
        >
          {country.dish}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {country.description}
        </p>

        {/* Spice level */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
            Spice Level
          </span>
          <SpiceIndicator level={country.spiceLevel} />
        </div>

        {/* Key ingredients */}
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium block mb-2">
            Key Ingredients
          </span>
          <div className="flex flex-wrap gap-2">
            {country.keyIngredients.map((ing) => (
              <span
                key={ing}
                className="bg-white/70 text-gray-700 text-xs px-3 py-1 rounded-full border border-amber-200 font-medium"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const CountriesSection = () => (
  <section id="countries" className="py-20 md:py-28 px-4 md:px-8 bg-amber-50">
    <div className="max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-amber-500 text-sm uppercase tracking-widest font-semibold mb-3">
          Global Flavors
        </p>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-4">
          8 Countries, 8 Crispy Legends
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Every culture has perfected the art of frying chicken in its own unique way. Here are some of the world's most iconic versions.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <CountryCard key={country.id} country={country} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default CountriesSection;
