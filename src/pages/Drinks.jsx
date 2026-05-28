import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHeader from '@/components/PageHeader';

const drinkGroups = [
  {
    id: 'drinks-ancient',
    label: 'Ancient & Traditional',
    tagColor: 'bg-amber-100 text-amber-800',
    borderColor: 'border-amber-300',
    drinks: [
      {
        id: 'drink-pulque',
        imgId: 'drink-img-pulque-a1b2',
        name: 'Pulque',
        type: 'Fermented · Alcoholic',
        origin: 'Central Mexico',
        flavor: 'Milky, slightly sour, earthy',
        description:
          'One of the oldest alcoholic drinks in the Americas, pulque is made from the fermented sap of the maguey plant. Revered by the Aztecs as a sacred drink, it was reserved for priests and elders. Today it is enjoyed in pulquerías across Mexico City.',
        badge: 'Pre-Hispanic',
        badgeColor: 'bg-amber-600 text-white',
      },
      {
        id: 'drink-atole',
        imgId: 'drink-img-atole-c3d4',
        name: 'Atole',
        type: 'Hot Drink · Non-Alcoholic',
        origin: 'Mesoamerica',
        flavor: 'Thick, sweet, warming',
        description:
          'A warm, thick beverage made from masa (corn dough), water, and piloncillo. Flavored with cinnamon, vanilla, or fruit, atole has been consumed since pre-Hispanic times and remains a beloved morning and evening drink, especially in winter.',
        badge: 'Pre-Hispanic',
        badgeColor: 'bg-amber-600 text-white',
      },
      {
        id: 'drink-champurrado',
        imgId: 'drink-img-champurrado-e5f6',
        name: 'Champurrado',
        type: 'Hot Drink · Non-Alcoholic',
        origin: 'Central Mexico',
        flavor: 'Rich, chocolatey, spiced',
        description:
          'A chocolate-based atole thickened with masa and sweetened with piloncillo. Champurrado is the quintessential cold-weather drink of Mexico, traditionally served alongside tamales during the Christmas season and Día de los Muertos.',
        badge: 'Colonial Fusion',
        badgeColor: 'bg-orange-600 text-white',
      },
      {
        id: 'drink-tejate',
        imgId: 'drink-img-tejate-g7h8',
        name: 'Tejate',
        type: 'Cold Drink · Non-Alcoholic',
        origin: 'Oaxaca',
        flavor: 'Earthy, chocolatey, floral',
        description:
          'A cold, frothy drink from Oaxaca made from toasted corn, cacao, mamey sapote seeds, and the flower of the rosita de cacao. Prepared by hand in large clay bowls, tejate is a living link to pre-Columbian Zapotec culture.',
        badge: 'Pre-Hispanic',
        badgeColor: 'bg-amber-600 text-white',
      },
    ],
  },
  {
    id: 'drinks-agave',
    label: 'Agave Spirits',
    tagColor: 'bg-green-100 text-green-800',
    borderColor: 'border-green-300',
    drinks: [
      {
        id: 'drink-tequila',
        imgId: 'drink-img-tequila-i9j0',
        name: 'Tequila',
        type: 'Spirit · Alcoholic',
        origin: 'Jalisco',
        flavor: 'Earthy, citrusy, peppery',
        description:
          'Distilled from the blue Weber agave plant, tequila can only be produced in Jalisco and a few other designated states. Blanco is crisp and fresh; reposado is aged in oak for up to a year; añejo develops deep, complex notes over longer aging.',
        badge: 'Protected Origin',
        badgeColor: 'bg-green-700 text-white',
      },
      {
        id: 'drink-mezcal',
        imgId: 'drink-img-mezcal-k1l2',
        name: 'Mezcal',
        type: 'Spirit · Alcoholic',
        origin: 'Oaxaca',
        flavor: 'Smoky, complex, earthy',
        description:
          'Made from any of over 30 agave varieties, mezcal gets its signature smokiness from roasting the piñas (agave hearts) in underground pits. Oaxaca produces the most, but Guerrero, Durango, and San Luis Potosí also have celebrated traditions.',
        badge: 'Protected Origin',
        badgeColor: 'bg-green-700 text-white',
      },
      {
        id: 'drink-raicilla',
        imgId: 'drink-img-raicilla-m3n4',
        name: 'Raicilla',
        type: 'Spirit · Alcoholic',
        origin: 'Jalisco Coast',
        flavor: 'Fruity, floral, wild',
        description:
          'A lesser-known agave spirit from the coastal and mountain regions of Jalisco, raicilla is made from wild agave species. It has a lighter, more floral character than mezcal and is gaining recognition among craft spirits enthusiasts worldwide.',
        badge: 'Artisanal',
        badgeColor: 'bg-teal-600 text-white',
      },
      {
        id: 'drink-sotol',
        imgId: 'drink-img-sotol-o5p6',
        name: 'Sotol',
        type: 'Spirit · Alcoholic',
        origin: 'Chihuahua',
        flavor: 'Herbal, dry, mineral',
        description:
          'Technically not an agave spirit — sotol is distilled from the Desert Spoon plant (Dasylirion). It is the signature spirit of Chihuahua, Durango, and Coahuila in northern Mexico, with a dry, grassy character distinct from tequila or mezcal.',
        badge: 'Northern Mexico',
        badgeColor: 'bg-blue-600 text-white',
      },
    ],
  },
  {
    id: 'drinks-refreshing',
    label: 'Aguas & Refreshments',
    tagColor: 'bg-sky-100 text-sky-800',
    borderColor: 'border-sky-300',
    drinks: [
      {
        id: 'drink-horchata',
        imgId: 'drink-img-horchata-q7r8',
        name: 'Horchata',
        type: 'Cold Drink · Non-Alcoholic',
        origin: 'Nationwide',
        flavor: 'Sweet, creamy, cinnamon',
        description:
          'A refreshing cold drink made from rice, milk, cinnamon, and sugar. Served over ice, horchata is a staple at taquerías and markets across Mexico. Its Spanish roots were adapted with local ingredients to create a uniquely Mexican version.',
        badge: 'Agua Fresca',
        badgeColor: 'bg-sky-600 text-white',
      },
      {
        id: 'drink-jamaica',
        imgId: 'drink-img-jamaica-s9t0',
        name: 'Agua de Jamaica',
        type: 'Cold Drink · Non-Alcoholic',
        origin: 'Nationwide',
        flavor: 'Tart, floral, ruby red',
        description:
          'Brewed from dried hibiscus flowers, agua de jamaica is one of Mexico\'s most beloved aguas frescas. Its deep crimson color and tart, cranberry-like flavor make it as beautiful as it is refreshing. Rich in antioxidants and vitamin C.',
        badge: 'Agua Fresca',
        badgeColor: 'bg-sky-600 text-white',
      },
      {
        id: 'drink-tepache',
        imgId: 'drink-img-tepache-u1v2',
        name: 'Tepache',
        type: 'Fermented · Low-Alcohol',
        origin: 'Pre-Hispanic Mexico',
        flavor: 'Sweet, tangy, lightly fizzy',
        description:
          'A lightly fermented drink made from pineapple rinds, piloncillo, and cinnamon. Tepache has pre-Hispanic origins and is sold by street vendors throughout Mexico. Its mild fermentation gives it a gentle fizz and a complex sweet-sour flavor.',
        badge: 'Fermented',
        badgeColor: 'bg-yellow-600 text-white',
      },
      {
        id: 'drink-cafe-olla',
        imgId: 'drink-img-cafe-olla-w3x4',
        name: 'Café de Olla',
        type: 'Hot Drink · Non-Alcoholic',
        origin: 'Nationwide',
        flavor: 'Bold, spiced, aromatic',
        description:
          'Coffee brewed in a clay pot (olla) with cinnamon and piloncillo (raw cane sugar). The clay vessel is said to impart a subtle mineral quality to the brew. Café de olla is a morning ritual across Mexico, especially in rural areas.',
        badge: 'Morning Ritual',
        badgeColor: 'bg-orange-700 text-white',
      },
    ],
  },
  {
    id: 'drinks-cocktails',
    label: 'Cocktails & Mixed Drinks',
    tagColor: 'bg-red-100 text-red-800',
    borderColor: 'border-red-300',
    drinks: [
      {
        id: 'drink-margarita',
        imgId: 'drink-img-margarita-y5z6',
        name: 'Margarita',
        type: 'Cocktail · Alcoholic',
        origin: 'Mexico / Border Region',
        flavor: 'Citrusy, salty, tart',
        description:
          'The world\'s most popular tequila cocktail — tequila, triple sec, and fresh lime juice, served in a salt-rimmed glass. Its exact origin is disputed, with several Mexican bartenders and border-town stories claiming credit. Timeless and iconic.',
        badge: 'Classic Cocktail',
        badgeColor: 'bg-red-600 text-white',
      },
      {
        id: 'drink-michelada',
        imgId: 'drink-img-michelada-a7b8',
        name: 'Michelada',
        type: 'Beer Cocktail · Alcoholic',
        origin: 'San Luis Potosí',
        flavor: 'Tangy, spicy, savory',
        description:
          'Beer mixed with lime juice, hot sauce, Worcestershire, and tomato juice, served in a chili-salt-rimmed glass. The michelada is Mexico\'s answer to the Bloody Mary — a bold, savory drink perfect for brunch or a hot afternoon.',
        badge: 'Beer Cocktail',
        badgeColor: 'bg-red-600 text-white',
      },
      {
        id: 'drink-paloma',
        imgId: 'drink-img-paloma-c9d0',
        name: 'Paloma',
        type: 'Cocktail · Alcoholic',
        origin: 'Jalisco',
        flavor: 'Grapefruit, tart, refreshing',
        description:
          'Tequila mixed with grapefruit soda (traditionally Squirt) and a squeeze of lime, served over ice with a salted rim. The Paloma is arguably more popular than the Margarita within Mexico itself — lighter, more refreshing, and deeply satisfying.',
        badge: 'Classic Cocktail',
        badgeColor: 'bg-red-600 text-white',
      },
      {
        id: 'drink-mezcal-negroni',
        imgId: 'drink-img-mezcal-negroni-e1f2',
        name: 'Mezcal Negroni',
        type: 'Cocktail · Alcoholic',
        origin: 'Modern Mexican Bars',
        flavor: 'Smoky, bitter, complex',
        description:
          'A modern Mexican twist on the Italian Negroni — mezcal replaces gin, adding a smoky depth to the bitter Campari and sweet vermouth. A symbol of Mexico\'s thriving craft cocktail scene, found in the best bars of Mexico City and Oaxaca.',
        badge: 'Modern Craft',
        badgeColor: 'bg-purple-600 text-white',
      },
    ],
  },
];

const Drinks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        label="From Ancient to Modern"
        title="Mexican Drinks"
        subtitle="From sacred pre-Hispanic brews to world-famous spirits — Mexico's drink culture is as rich as its food."
      />

      <div className="py-16 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto space-y-20">
          {drinkGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${group.tagColor}`}>
                  {group.label}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.drinks.map((drink) => (
                  <div
                    key={drink.id}
                    className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 ${group.borderColor} flex flex-col`}
                  >
                    <div className="relative h-44 bg-amber-50">
                      <img
                        id={drink.id}
                        alt={drink.name}
                        data-strk-img-id={drink.imgId}
                        data-strk-img={`[${drink.id}] [${group.id}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${drink.badgeColor}`}>
                        {drink.badge}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3
                        className="text-gray-900 text-lg font-bold mb-0.5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {drink.name}
                      </h3>
                      <p className="text-orange-500 text-xs font-medium mb-1">{drink.type}</p>
                      <p className="text-gray-400 text-xs mb-3">
                        <span className="font-semibold text-gray-500">Origin:</span> {drink.origin} &nbsp;·&nbsp;
                        <span className="italic">{drink.flavor}</span>
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{drink.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drinks;
