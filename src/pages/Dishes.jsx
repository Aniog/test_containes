import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-street',
    label: 'Street Food',
    color: 'bg-orange-100 text-orange-700',
    dishes: [
      {
        id: 'dish-tacos-pastor',
        imgId: 'dish-img-tacos-pastor-p1q2',
        title: 'Tacos al Pastor',
        description: 'Marinated pork on a vertical spit, served with pineapple, onion, and cilantro in a corn tortilla.',
      },
      {
        id: 'dish-elotes',
        imgId: 'dish-img-elotes-r3s4',
        title: 'Elotes',
        description: 'Grilled corn on the cob slathered with mayo, cotija cheese, chili powder, and lime juice.',
      },
      {
        id: 'dish-tlayuda',
        imgId: 'dish-img-tlayuda-t5u6',
        title: 'Tlayuda',
        description: 'A large, crispy tortilla topped with beans, Oaxacan cheese, meat, and fresh vegetables.',
      },
    ],
  },
  {
    id: 'cat-mains',
    label: 'Main Courses',
    color: 'bg-red-100 text-red-700',
    dishes: [
      {
        id: 'dish-mole-poblano',
        imgId: 'dish-img-mole-poblano-v7w8',
        title: 'Mole Poblano',
        description: 'A rich, complex sauce of dried chiles, chocolate, and spices served over turkey or chicken.',
      },
      {
        id: 'dish-cochinita',
        imgId: 'dish-img-cochinita-x9y0',
        title: 'Cochinita Pibil',
        description: 'Slow-roasted pork marinated in achiote and citrus, wrapped in banana leaves — a Yucatán classic.',
      },
      {
        id: 'dish-chiles-nogada',
        imgId: 'dish-img-chiles-nogada-a2b3',
        title: 'Chiles en Nogada',
        description: 'Stuffed poblano chiles topped with walnut cream sauce and pomegranate seeds — Mexico\'s patriotic dish.',
      },
      {
        id: 'dish-birria',
        imgId: 'dish-img-birria-c4d5',
        title: 'Birria',
        description: 'A deeply spiced stew of goat or beef, slow-cooked with chiles and served with consommé for dipping.',
      },
    ],
  },
  {
    id: 'cat-soups',
    label: 'Soups & Stews',
    color: 'bg-amber-100 text-amber-700',
    dishes: [
      {
        id: 'dish-pozole',
        imgId: 'dish-img-pozole-e6f7',
        title: 'Pozole',
        description: 'A hearty hominy soup with pork or chicken, garnished with cabbage, radish, oregano, and lime.',
      },
      {
        id: 'dish-sopa-lima',
        imgId: 'dish-img-sopa-lima-g8h9',
        title: 'Sopa de Lima',
        description: 'A bright, citrusy chicken soup from Yucatán, flavored with local limes and crispy tortilla strips.',
      },
      {
        id: 'dish-menudo',
        imgId: 'dish-img-menudo-i0j1',
        title: 'Menudo',
        description: 'A traditional tripe soup simmered with red chiles and hominy — beloved as a weekend morning ritual.',
      },
    ],
  },
  {
    id: 'cat-desserts',
    label: 'Desserts',
    color: 'bg-yellow-100 text-yellow-700',
    dishes: [
      {
        id: 'dish-churros',
        imgId: 'dish-img-churros-k2l3',
        title: 'Churros',
        description: 'Fried dough pastry dusted with cinnamon sugar, served with a thick chocolate dipping sauce.',
      },
      {
        id: 'dish-tres-leches',
        imgId: 'dish-img-tres-leches-m4n5',
        title: 'Tres Leches Cake',
        description: 'A sponge cake soaked in three kinds of milk — evaporated, condensed, and heavy cream.',
      },
      {
        id: 'dish-flan',
        imgId: 'dish-img-flan-o6p7',
        title: 'Flan',
        description: 'A silky caramel custard with Spanish roots, now a beloved staple across all of Mexico.',
      },
    ],
  },
];

const PageHeader = ({ label, title, subtitle }) => (
  <div className="pt-32 pb-16 px-6 bg-gray-900 text-center">
    <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-3">{label}</p>
    <h1
      className="text-white text-5xl md:text-6xl font-bold mb-4"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {title}
    </h1>
    <p className="text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
  </div>
);

const Dishes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        label="The Full Menu"
        title="Mexican Dishes"
        subtitle="From sizzling street food to slow-cooked stews — a tour through Mexico's most beloved recipes."
      />

      <div className="py-16 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto space-y-20">
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${cat.color}`}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.dishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="relative h-44 bg-orange-50">
                      <img
                        id={dish.id}
                        alt={dish.title}
                        data-strk-img-id={dish.imgId}
                        data-strk-img={`[${dish.id}] [${cat.id}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className="text-gray-900 text-lg font-semibold mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {dish.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{dish.description}</p>
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

export default Dishes;
