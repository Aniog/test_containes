import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHeader from '@/components/PageHeader';

const regions = [
  {
    id: 'reg-oaxaca',
    imgId: 'reg-img-oaxaca-q1r2',
    name: 'Oaxaca',
    label: 'The Land of Seven Moles',
    highlights: ['Mole Negro', 'Tlayudas', 'Mezcal', 'Chapulines'],
    description:
      'Oaxaca is considered the culinary heart of Mexico. Its cuisine is deeply rooted in Zapotec and Mixtec traditions, featuring seven distinct mole sauces, smoky mezcal, and the famous Oaxacan string cheese (quesillo). The open-air markets of Oaxaca City are a feast for the senses.',
  },
  {
    id: 'reg-yucatan',
    imgId: 'reg-img-yucatan-s3t4',
    name: 'Yucatán',
    label: 'Mayan Flavors',
    highlights: ['Cochinita Pibil', 'Sopa de Lima', 'Habanero Salsa', 'Papadzules'],
    description:
      'The Yucatán Peninsula carries a strong Mayan culinary identity. Achiote paste, sour orange, and habanero chiles define the flavor profile. Cochinita pibil — pork slow-roasted underground — is the region\'s most iconic dish, while sopa de lima offers a bright, citrusy comfort.',
  },
  {
    id: 'reg-veracruz',
    imgId: 'reg-img-veracruz-u5v6',
    name: 'Veracruz',
    label: 'Coastal Richness',
    highlights: ['Huachinango a la Veracruzana', 'Caldo de Mariscos', 'Totonacs Vanilla', 'Café de Olla'],
    description:
      'Veracruz sits on the Gulf Coast and blends indigenous, Spanish, and Afro-Caribbean influences. Seafood is central — red snapper in tomato-olive sauce is the signature dish. The region also gave the world vanilla, first cultivated by the Totonac people.',
  },
  {
    id: 'reg-jalisco',
    imgId: 'reg-img-jalisco-w7x8',
    name: 'Jalisco',
    label: 'Birthplace of Tequila & Mariachi',
    highlights: ['Birria', 'Torta Ahogada', 'Tequila', 'Pozole Rojo'],
    description:
      'Jalisco is home to tequila, mariachi, and some of Mexico\'s most beloved comfort food. Birria — a deeply spiced goat or beef stew — originated here and has become a global phenomenon. The torta ahogada, a pork sandwich drowned in spicy tomato sauce, is a Guadalajara staple.',
  },
  {
    id: 'reg-puebla',
    imgId: 'reg-img-puebla-y9z0',
    name: 'Puebla',
    label: 'Birthplace of Mole Poblano',
    highlights: ['Mole Poblano', 'Chiles en Nogada', 'Cemitas', 'Chalupas'],
    description:
      'Puebla is where mole poblano was born — legend says nuns at the Convent of Santa Rosa created it for a visiting archbishop. The city\'s cuisine blends indigenous and Spanish colonial influences, producing dishes of extraordinary complexity like chiles en nogada, Mexico\'s most patriotic plate.',
  },
  {
    id: 'reg-mexico-city',
    imgId: 'reg-img-cdmx-b1c2',
    name: 'Mexico City',
    label: 'The Street Food Capital',
    highlights: ['Tacos de Canasta', 'Tamales', 'Tlacoyos', 'Esquites'],
    description:
      'Mexico City is a melting pot of every regional cuisine in the country, plus a vibrant street food culture all its own. From tacos de canasta at dawn to late-night tamales, the capital never stops eating. The city\'s markets — like La Merced and Mercado de Jamaica — are legendary.',
  },
  {
    id: 'reg-baja',
    imgId: 'reg-img-baja-d3e4',
    name: 'Baja California',
    label: 'Pacific Coast Cuisine',
    highlights: ['Fish Tacos', 'Baja Lobster', 'Craft Beer', 'Valle de Guadalupe Wine'],
    description:
      'Baja California stretches along the Pacific coast and has developed a unique cuisine blending Mexican tradition with Mediterranean and Asian influences. The fish taco was born here — battered, fried, and topped with cabbage and crema. The Valle de Guadalupe wine region has become world-renowned.',
  },
  {
    id: 'reg-chiapas',
    imgId: 'reg-img-chiapas-f5g6',
    name: 'Chiapas',
    label: 'Ancient Mayan Roots',
    highlights: ['Cochito Horneado', 'Tasajo', 'Tascalate', 'Chipilín Tamales'],
    description:
      'Chiapas borders Guatemala and retains some of the most ancient culinary traditions in Mexico. Corn, beans, and chiles remain central, prepared in ways unchanged for centuries. Tascalate — a cold drink of toasted corn, cacao, and achiote — is a pre-Hispanic beverage still enjoyed today.',
  },
];

const Regions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        label="Across the Country"
        title="Regional Flavors"
        subtitle="Mexico's 32 states each carry a distinct culinary identity shaped by geography, history, and indigenous heritage."
      />

      {/* Regions Grid */}
      <div className="py-16 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative md:w-48 shrink-0 h-52 md:h-auto bg-amber-100">
                <img
                  id={region.id}
                  alt={region.name}
                  data-strk-img-id={region.imgId}
                  data-strk-img={`[${region.id}] [regions-page-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 md:hidden">
                  <p className="text-orange-300 text-xs uppercase tracking-widest font-semibold">{region.label}</p>
                  <h2 className="text-white text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {region.name}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <p className="text-orange-500 text-xs uppercase tracking-widest font-semibold mb-1 hidden md:block">
                    {region.label}
                  </p>
                  <h2
                    className="text-gray-900 text-2xl font-bold mb-3 hidden md:block"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {region.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{region.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full border border-orange-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regions;
