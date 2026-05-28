import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHeader from '@/components/PageHeader';

const eras = [
  {
    id: 'era-prehispanic',
    imgId: 'era-img-prehispanic-a1b2',
    period: 'Before 1521',
    label: 'Pre-Hispanic Era',
    title: 'The Sacred Trinity',
    color: 'bg-amber-600',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-400',
    tagColor: 'bg-amber-100 text-amber-800',
    description:
      'Long before European contact, the indigenous peoples of Mesoamerica had developed one of the world\'s most sophisticated food cultures. The Aztec, Maya, Zapotec, and dozens of other civilizations built their diets — and their cosmologies — around three sacred crops: corn (maíz), beans (frijoles), and squash (calabaza). Together, these formed the "Milpa" system, a companion planting method that sustained entire civilizations.',
    highlights: [
      'Corn was domesticated in Mexico over 9,000 years ago from a wild grass called teosinte.',
      'The Aztec capital Tenochtitlán had a market at Tlatelolco larger than any in contemporary Europe.',
      'Cacao was used as currency and as a sacred drink reserved for warriors and nobility.',
      'Chiles, tomatoes, avocados, vanilla, and chocolate are all native to Mexico.',
      'Tamales were carried by Aztec armies as portable rations — the original fast food.',
    ],
    keyFoods: ['Corn Tortillas', 'Tamales', 'Pozole', 'Cacao Drink', 'Chiles', 'Squash', 'Beans', 'Amaranth'],
  },
  {
    id: 'era-colonial',
    imgId: 'era-img-colonial-c3d4',
    period: '1521–1821',
    label: 'Colonial Period',
    title: 'The Great Fusion',
    color: 'bg-red-700',
    lightColor: 'bg-red-50',
    borderColor: 'border-red-400',
    tagColor: 'bg-red-100 text-red-800',
    description:
      'The Spanish conquest of 1521 brought a collision of two food worlds. Spanish colonizers introduced pork, beef, chicken, dairy, wheat, olive oil, sugar, and a host of spices. Indigenous cooks — particularly the nuns of colonial convents — became the architects of a new cuisine, blending European ingredients with native techniques and flavors. This period gave birth to mole, chiles en nogada, and the rich tradition of Mexican sweets.',
    highlights: [
      'Convent kitchens in Puebla and Oaxaca became the birthplace of Mexico\'s most complex dishes.',
      'Mole poblano is said to have been created by nuns at the Convent of Santa Rosa in Puebla.',
      'The introduction of pork fat (lard) transformed tortilla and tamale making.',
      'Sugar cane brought from Spain led to the creation of piloncillo, cajeta, and Mexican candy.',
      'African slaves brought to Mexico contributed ingredients like plantains, yams, and sesame seeds.',
    ],
    keyFoods: ['Mole Poblano', 'Chiles en Nogada', 'Churros', 'Cajeta', 'Buñuelos', 'Bacalao', 'Carnitas'],
  },
  {
    id: 'era-independence',
    imgId: 'era-img-independence-e5f6',
    period: '1821–1910',
    label: 'Post-Independence',
    title: 'A National Identity',
    color: 'bg-green-700',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-400',
    tagColor: 'bg-green-100 text-green-800',
    description:
      'After independence from Spain, Mexico began forging a national identity — and food was central to that project. Regional cuisines solidified and became sources of local pride. The French intervention under Emperor Maximilian (1864–1867) introduced French culinary techniques and ingredients, adding another layer to the already complex Mexican table. Street food culture flourished in the growing cities.',
    highlights: [
      'The first Mexican cookbooks were published, codifying regional recipes for the first time.',
      'French influence introduced baguette-style bread, which evolved into the bolillo and telera.',
      'The hacienda system shaped regional food production and the cuisines of Jalisco, Oaxaca, and Yucatán.',
      'Street food vendors (vendedores ambulantes) became a defining feature of Mexican urban life.',
      'Pulquerías became important social institutions in Mexico City and central Mexico.',
    ],
    keyFoods: ['Bolillo', 'Tortas', 'Enchiladas', 'Barbacoa', 'Carnitas', 'Aguas Frescas', 'Tacos de Canasta'],
  },
  {
    id: 'era-revolution',
    imgId: 'era-img-revolution-g7h8',
    period: '1910–1960',
    label: 'Revolution & Modernity',
    title: 'Food of the People',
    color: 'bg-orange-700',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-400',
    tagColor: 'bg-orange-100 text-orange-800',
    description:
      'The Mexican Revolution (1910–1920) disrupted the old social order and elevated the food of the poor and indigenous as a source of national pride. Artists like Diego Rivera and Frida Kahlo celebrated traditional Mexican food in their work. Migration to the United States created the first Mexican-American food communities, eventually giving rise to Tex-Mex cuisine.',
    highlights: [
      'Post-revolution nationalism elevated indigenous and mestizo food as symbols of Mexican identity.',
      'Frida Kahlo\'s kitchen in Coyoacán became a legendary gathering place for artists and intellectuals.',
      'Mexican workers migrating to the US brought their food traditions, planting the seeds of Tex-Mex.',
      'The taco al pastor was invented by Lebanese immigrants who brought shawarma techniques to Mexico City.',
      'Industrial corn tortilla production began, making tortillas accessible to all urban Mexicans.',
    ],
    keyFoods: ['Tacos al Pastor', 'Tortas Ahogadas', 'Pozole', 'Tamales', 'Chiles Rellenos', 'Sopa de Lima'],
  },
  {
    id: 'era-global',
    imgId: 'era-img-global-i9j0',
    period: '1960–Present',
    label: 'Global Recognition',
    title: 'A World Treasure',
    color: 'bg-purple-700',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-400',
    tagColor: 'bg-purple-100 text-purple-800',
    description:
      'In the late 20th century, Mexican cuisine began receiving the international recognition it deserved. Chefs like Diana Kennedy and Patricia Quintana documented and elevated traditional recipes. In 2010, UNESCO inscribed "Traditional Mexican cuisine — ancestral, ongoing community culture, the Michoacán paradigm" on its Intangible Cultural Heritage list — the first cuisine in the Americas to receive this honor. Today, Mexican food is one of the most popular cuisines in the world.',
    highlights: [
      'In 2010, UNESCO recognized Mexican cuisine as Intangible Cultural Heritage of Humanity.',
      'Mexico City has become one of the world\'s top culinary destinations, with multiple restaurants on the World\'s 50 Best list.',
      'The "New Mexican Cuisine" movement, led by chefs like Enrique Olvera, reinterprets traditional dishes with modern techniques.',
      'Mezcal and craft tequila have become global luxury spirits, driving interest in agave culture.',
      'Mexican street food — tacos, elotes, tlayudas — has spread to every major city on earth.',
    ],
    keyFoods: ['Tasting Menu Mole', 'Craft Mezcal', 'Heirloom Corn Tortillas', 'Modern Ceviche', 'Artisan Chocolate'],
  },
];

const History = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        label="Thousands of Years in the Making"
        title="History of Mexican Food"
        subtitle="From ancient Mesoamerican civilizations to UNESCO recognition — the story of one of the world's great cuisines."
      />

      {/* UNESCO Banner */}
      <div className="bg-[#C0392B] py-8 px-6 text-center">
        <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1">UNESCO Intangible Cultural Heritage</p>
        <p className="text-red-200 text-base max-w-2xl mx-auto">
          In 2010, Mexican cuisine became the first in the Americas to be recognized by UNESCO — honoring thousands of years of culinary tradition.
        </p>
      </div>

      {/* Timeline */}
      <div className="py-16 px-6 bg-[#FDF6EC]">
        <div className="max-w-5xl mx-auto">
          {/* Vertical timeline line (desktop) */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-16">
              {eras.map((era, i) => (
                <div key={era.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${era.color} ring-4 ring-white shadow-md z-10 top-8`} />

                  <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
                    {/* Image side */}
                    <div className="lg:w-5/12">
                      <div className={`rounded-2xl overflow-hidden shadow-lg border-t-4 ${era.borderColor}`}>
                        <div className="relative h-56 bg-orange-50">
                          <img
                            id={era.id}
                            alt={era.label}
                            data-strk-img-id={era.imgId}
                            data-strk-img={`[${era.id}]`}
                            data-strk-img-ratio="16x9"
                            data-strk-img-width="700"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${era.tagColor}`}>
                              {era.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for timeline dot */}
                    <div className="hidden lg:block lg:w-2/12" />

                    {/* Content side */}
                    <div className="lg:w-5/12">
                      <p className="text-orange-500 text-xs uppercase tracking-widest font-semibold mb-1">{era.label}</p>
                      <h2
                        className="text-gray-900 text-2xl md:text-3xl font-bold mb-3"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {era.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{era.description}</p>

                      <div className="mb-5">
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Key Moments</p>
                        <ul className="space-y-1.5">
                          {era.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-orange-400 shrink-0 mt-0.5">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Signature Foods</p>
                        <div className="flex flex-wrap gap-2">
                          {era.keyFoods.map((food) => (
                            <span
                              key={food}
                              className={`text-xs px-3 py-1 rounded-full font-medium ${era.tagColor}`}
                            >
                              {food}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
