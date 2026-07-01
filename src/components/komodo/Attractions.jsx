import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Star } from 'lucide-react';

const attractions = [
  {
    id: 'komodo-dragon',
    titleId: 'attr-title-komodo-dragon',
    descId: 'attr-desc-komodo-dragon',
    imgId: 'attr-img-komodo-dragon-d7e8f9',
    title: 'Komodo Dragons',
    desc: 'Encounter the world\'s largest living lizard in its natural habitat. These ancient reptiles can grow up to 3 meters long and are found only on a handful of Indonesian islands.',
    duration: '2–3 hours',
    rating: '5.0',
    tag: 'Must See',
    tagColor: 'bg-coral/10 text-coral',
  },
  {
    id: 'pink-beach',
    titleId: 'attr-title-pink-beach',
    descId: 'attr-desc-pink-beach',
    imgId: 'attr-img-pink-beach-g1h2i3',
    title: 'Pink Beach',
    desc: 'One of only seven pink sand beaches in the world, Pink Beach gets its rosy hue from red coral fragments mixed with white sand. Snorkel in the crystal-clear waters teeming with marine life.',
    duration: 'Half day',
    rating: '4.9',
    tag: 'Iconic',
    tagColor: 'bg-ocean/10 text-ocean',
  },
  {
    id: 'padar-island',
    titleId: 'attr-title-padar-island',
    descId: 'attr-desc-padar-island',
    imgId: 'attr-img-padar-island-j4k5l6',
    title: 'Padar Island',
    desc: 'Hike to the summit of Padar Island for one of the most breathtaking panoramic views in all of Indonesia — three bays with differently colored sands spread out below you.',
    duration: '1–2 hours hike',
    rating: '4.8',
    tag: 'Scenic',
    tagColor: 'bg-jungle/10 text-jungle',
  },
  {
    id: 'diving-snorkeling',
    titleId: 'attr-title-diving-snorkeling',
    descId: 'attr-desc-diving-snorkeling',
    imgId: 'attr-img-diving-snorkeling-m7n8o9',
    title: 'Diving & Snorkeling',
    desc: 'Komodo\'s waters are among the richest in the world. Dive with manta rays at Manta Point, explore vibrant coral gardens, and swim alongside sea turtles in the warm Flores Sea.',
    duration: 'Full day',
    rating: '5.0',
    tag: 'Adventure',
    tagColor: 'bg-coral/10 text-coral',
  },
  {
    id: 'rinca-island',
    titleId: 'attr-title-rinca-island',
    descId: 'attr-desc-rinca-island',
    imgId: 'attr-img-rinca-island-p1q2r3',
    title: 'Rinca Island',
    desc: 'A quieter alternative to Komodo Island, Rinca offers excellent dragon sightings with fewer crowds. The savanna landscape and mangrove forests create a dramatic backdrop.',
    duration: '3–4 hours',
    rating: '4.7',
    tag: 'Wildlife',
    tagColor: 'bg-jungle/10 text-jungle',
  },
  {
    id: 'labuan-bajo',
    titleId: 'attr-title-labuan-bajo',
    descId: 'attr-desc-labuan-bajo',
    imgId: 'attr-img-labuan-bajo-s4t5u6',
    title: 'Labuan Bajo',
    desc: 'The gateway town to Komodo, Labuan Bajo has transformed into a vibrant hub with excellent restaurants, sunset viewpoints, and a lively harbor where liveaboard boats depart daily.',
    duration: 'Overnight stay',
    rating: '4.6',
    tag: 'Base Camp',
    tagColor: 'bg-ocean/10 text-ocean',
  },
];

const AttractionCard = ({ attraction }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="relative aspect-[3/2] overflow-hidden">
      <img
        alt={attraction.title}
        data-strk-img-id={attraction.imgId}
        data-strk-img={`[${attraction.descId}] [${attraction.titleId}]`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover"
      />
      <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${attraction.tagColor}`}>
        {attraction.tag}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 id={attraction.titleId} className="font-serif font-bold text-xl text-stone mb-2">
        {attraction.title}
      </h3>
      <p id={attraction.descId} className="text-stone/70 text-sm leading-relaxed flex-1 mb-4">
        {attraction.desc}
      </p>
      <div className="flex items-center justify-between text-xs text-stone/60 border-t border-sand pt-3">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {attraction.duration}
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-coral text-coral" />
          <span className="font-semibold text-stone">{attraction.rating}</span>
        </span>
      </div>
    </div>
  </div>
);

const Attractions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="attractions" ref={containerRef} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-coral text-sm font-semibold tracking-widest uppercase">Top Experiences</span>
          <h2 id="attractions-title" className="font-serif font-bold text-3xl md:text-5xl text-ocean mt-3 mb-5">
            What to See & Do
          </h2>
          <p className="text-stone/70 text-lg max-w-xl mx-auto">
            From ancient dragons to pristine coral reefs, Komodo offers adventures that will stay with you forever.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
