import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHeader from '@/components/PageHeader';

const festivals = [
  {
    id: 'fest-muertos',
    imgId: 'fest-img-muertos-a1b2',
    name: 'Día de los Muertos',
    date: 'November 1–2',
    season: 'Autumn',
    seasonColor: 'bg-orange-100 text-orange-700',
    accentColor: 'border-orange-400',
    description:
      'The most iconic Mexican celebration, Día de los Muertos honors deceased loved ones with elaborate altars (ofrendas) laden with their favorite foods and drinks. Families gather in cemeteries to share meals with the spirits of the departed. The celebration blends Aztec traditions with Catholic All Saints\' Day.',
    foods: [
      { name: 'Pan de Muerto', note: 'Sweet anise bread shaped with bone motifs, placed on the ofrenda' },
      { name: 'Mole Negro', note: 'Rich, complex sauce — a labor of love prepared for the occasion' },
      { name: 'Tamales', note: 'Steamed corn dough parcels, a staple offering for the spirits' },
      { name: 'Atole', note: 'Warm corn drink placed on altars to nourish returning souls' },
      { name: 'Sugar Skulls', note: 'Decorated calaveras made from sugar, both edible and decorative' },
    ],
  },
  {
    id: 'fest-posadas',
    imgId: 'fest-img-posadas-c3d4',
    name: 'Las Posadas',
    date: 'December 16–24',
    season: 'Winter',
    seasonColor: 'bg-red-100 text-red-700',
    accentColor: 'border-red-400',
    description:
      'Las Posadas reenacts Mary and Joseph\'s search for shelter in Bethlehem through nine nights of candlelit processions, songs, and piñata-breaking. Each night ends with a feast shared among neighbors and family. The food is warm, festive, and deeply communal.',
    foods: [
      { name: 'Ponche Navideño', note: 'Hot fruit punch with tejocotes, guavas, tamarind, and sugar cane' },
      { name: 'Tamales', note: 'Families gather for tamaladas — communal tamale-making sessions' },
      { name: 'Buñuelos', note: 'Crispy fried dough discs dusted with cinnamon sugar or piloncillo syrup' },
      { name: 'Bacalao a la Vizcaína', note: 'Salt cod stewed with tomatoes, olives, and capers — a Christmas Eve staple' },
      { name: 'Romeritos', note: 'Seepweed cooked in mole sauce with shrimp cakes — a colonial-era dish' },
    ],
  },
  {
    id: 'fest-reyes',
    imgId: 'fest-img-reyes-e5f6',
    name: 'Día de Reyes',
    date: 'January 6',
    season: 'Winter',
    seasonColor: 'bg-blue-100 text-blue-700',
    accentColor: 'border-blue-400',
    description:
      'Three Kings Day marks the end of the Christmas season and the arrival of the Magi bearing gifts for the Christ child. The centerpiece is the Rosca de Reyes — a ring-shaped sweet bread decorated with candied fruit. Hidden inside is a small plastic figurine of baby Jesus; whoever finds it must host a tamale party on February 2.',
    foods: [
      { name: 'Rosca de Reyes', note: 'Ring-shaped sweet bread with candied fruit, hiding a baby Jesus figurine' },
      { name: 'Atole', note: 'Warm corn drink served alongside the rosca' },
      { name: 'Hot Chocolate', note: 'Thick Mexican chocolate whisked with a molinillo until frothy' },
    ],
  },
  {
    id: 'fest-candelaria',
    imgId: 'fest-img-candelaria-g7h8',
    name: 'Día de la Candelaria',
    date: 'February 2',
    season: 'Winter',
    seasonColor: 'bg-yellow-100 text-yellow-700',
    accentColor: 'border-yellow-400',
    description:
      'Candlemas completes the Christmas cycle. Whoever found the baby Jesus figurine in the Rosca de Reyes on January 6 is obligated to host a tamale party for all the guests. This tradition makes tamales the undisputed star of February, with families gathering to eat dozens of varieties.',
    foods: [
      { name: 'Tamales (all varieties)', note: 'Red chile pork, green chile chicken, rajas, sweet, and more' },
      { name: 'Atole', note: 'The classic pairing — warm atole with tamales is a Mexican institution' },
      { name: 'Champurrado', note: 'Chocolate atole, especially popular with sweet tamales' },
    ],
  },
  {
    id: 'fest-semana-santa',
    imgId: 'fest-img-semana-santa-i9j0',
    name: 'Semana Santa',
    date: 'Holy Week (March–April)',
    season: 'Spring',
    seasonColor: 'bg-purple-100 text-purple-700',
    accentColor: 'border-purple-400',
    description:
      'Holy Week is one of the most important religious observances in Mexico. Catholic tradition calls for abstaining from meat on Fridays, which has given rise to a rich tradition of seafood and vegetarian dishes. Coastal towns come alive with ceviche, shrimp, and fish tacos, while inland regions prepare capirotada.',
    foods: [
      { name: 'Capirotada', note: 'A bread pudding made with piloncillo syrup, cheese, raisins, and peanuts' },
      { name: 'Ceviche', note: 'Fresh fish or shrimp cured in lime juice with tomato, onion, and chile' },
      { name: 'Romeritos con Camarones', note: 'Seepweed in mole sauce with dried shrimp cakes' },
      { name: 'Tacos de Pescado', note: 'Battered fish tacos with cabbage and crema — a Baja classic' },
      { name: 'Chiles Rellenos de Queso', note: 'Cheese-stuffed poblano chiles, a meatless main course' },
    ],
  },
  {
    id: 'fest-independencia',
    imgId: 'fest-img-independencia-k1l2',
    name: 'Independence Day',
    date: 'September 15–16',
    season: 'Autumn',
    seasonColor: 'bg-green-100 text-green-700',
    accentColor: 'border-green-400',
    description:
      'Mexico\'s Independence Day is celebrated with the Grito de Independencia at midnight on September 15, followed by fireworks, parades, and feasting. The food is patriotic — dishes featuring the green, white, and red of the Mexican flag take center stage. Chiles en Nogada, with its tricolor garnish, is the most iconic dish of the season.',
    foods: [
      { name: 'Chiles en Nogada', note: 'Stuffed poblano chiles with walnut cream and pomegranate — the patriotic dish' },
      { name: 'Pozole Rojo', note: 'Red hominy soup with pork, a festive crowd-pleaser' },
      { name: 'Tostadas', note: 'Crispy tortillas piled with beans, chicken, and fresh toppings' },
      { name: 'Elotes y Esquites', note: 'Grilled corn and corn cups — essential street food at any fiesta' },
      { name: 'Agua de Jamaica', note: 'Hibiscus water — red like the flag, refreshing in the September heat' },
    ],
  },
];

const Festivals = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        label="Food & Celebration"
        title="Festivals & Food"
        subtitle="In Mexico, every celebration has its own flavors. Food is not just served at festivals — it is the festival."
      />

      <div className="py-16 px-6 bg-[#FDF6EC]">
        <div className="max-w-5xl mx-auto space-y-12">
          {festivals.map((fest, i) => (
            <div
              key={fest.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 ${fest.accentColor} flex flex-col lg:flex-row`}
            >
              {/* Image — alternates left/right on large screens */}
              <div className={`relative lg:w-72 shrink-0 h-56 lg:h-auto bg-orange-50 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <img
                  id={fest.id}
                  alt={fest.name}
                  data-strk-img-id={fest.imgId}
                  data-strk-img={`[${fest.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${fest.seasonColor}`}>
                      {fest.date}
                    </span>
                  </div>
                  <h2
                    className="text-gray-900 text-2xl md:text-3xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {fest.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{fest.description}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-3">Traditional Foods</p>
                  <ul className="space-y-2">
                    {fest.foods.map((food) => (
                      <li key={food.name} className="flex items-start gap-2 text-sm">
                        <span className="text-orange-400 mt-0.5 shrink-0">▸</span>
                        <span>
                          <span className="font-semibold text-gray-800">{food.name}</span>
                          <span className="text-gray-500"> — {food.note}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Festivals;
