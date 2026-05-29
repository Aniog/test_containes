import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, BarChart2, Users, Star } from 'lucide-react';

const categories = ['All', 'Hiking', 'Climbing', 'Skiing', 'Photography', 'Wildlife'];

const activities = [
  {
    id: 'act-trekking',
    title: 'High-Altitude Trekking',
    category: 'Hiking',
    duration: '7–21 days',
    difficulty: 'Moderate–Hard',
    groupSize: '2–12',
    rating: 4.9,
    desc: 'Multi-day treks through remote mountain valleys, crossing high passes and camping under star-filled skies.',
    imgId: 'act-trekking-img-a1b2',
  },
  {
    id: 'act-rock-climbing',
    title: 'Rock Climbing',
    category: 'Climbing',
    duration: '1–5 days',
    difficulty: 'Moderate–Expert',
    groupSize: '2–6',
    rating: 4.8,
    desc: 'Scale granite faces and limestone cliffs with certified guides in some of the world\'s most dramatic settings.',
    imgId: 'act-rock-climbing-img-b2c3',
  },
  {
    id: 'act-ski-touring',
    title: 'Ski Touring',
    category: 'Skiing',
    duration: '3–10 days',
    difficulty: 'Advanced',
    groupSize: '4–8',
    rating: 4.7,
    desc: 'Earn your turns on pristine backcountry slopes, exploring terrain far beyond the resort boundaries.',
    imgId: 'act-ski-touring-img-c3d4',
  },
  {
    id: 'act-ice-climbing',
    title: 'Ice Climbing',
    category: 'Climbing',
    duration: '1–3 days',
    difficulty: 'Advanced–Expert',
    groupSize: '2–4',
    rating: 4.9,
    desc: 'Ascend frozen waterfalls and glacial seracs with crampons and ice axes in a thrilling vertical world.',
    imgId: 'act-ice-climbing-img-d4e5',
  },
  {
    id: 'act-photography',
    title: 'Mountain Photography',
    category: 'Photography',
    duration: '3–7 days',
    difficulty: 'Easy–Moderate',
    groupSize: '4–10',
    rating: 4.8,
    desc: 'Capture golden-hour alpenglow, dramatic ridgelines, and wildlife with expert photographer guides.',
    imgId: 'act-photography-img-e5f6',
  },
  {
    id: 'act-wildlife',
    title: 'Alpine Wildlife Watching',
    category: 'Wildlife',
    duration: '2–5 days',
    difficulty: 'Easy–Moderate',
    groupSize: '4–8',
    rating: 4.6,
    desc: 'Spot snow leopards, ibex, golden eagles, and other rare alpine species in their natural habitat.',
    imgId: 'act-wildlife-img-f6g7',
  },
  {
    id: 'act-via-ferrata',
    title: 'Via Ferrata',
    category: 'Climbing',
    duration: '1–2 days',
    difficulty: 'Moderate',
    groupSize: '2–8',
    rating: 4.7,
    desc: 'Follow iron-rung routes bolted into cliff faces — the perfect bridge between hiking and technical climbing.',
    imgId: 'act-via-ferrata-img-g7h8',
  },
  {
    id: 'act-snowshoeing',
    title: 'Snowshoeing',
    category: 'Hiking',
    duration: '1–3 days',
    difficulty: 'Easy',
    groupSize: '2–15',
    rating: 4.5,
    desc: 'Explore winter mountain landscapes on snowshoes — accessible to all fitness levels and ages.',
    imgId: 'act-snowshoeing-img-h8i9',
  },
  {
    id: 'act-freeride',
    title: 'Freeride Skiing',
    category: 'Skiing',
    duration: '3–7 days',
    difficulty: 'Expert',
    groupSize: '2–6',
    rating: 4.9,
    desc: 'Charge untracked powder lines and steep couloirs with professional freeride guides.',
    imgId: 'act-freeride-img-i9j0',
  },
];

const difficultyColor = {
  Easy: 'text-green-700 bg-green-50',
  'Easy–Moderate': 'text-green-700 bg-green-50',
  Moderate: 'text-amber-700 bg-amber-50',
  'Moderate–Hard': 'text-amber-700 bg-amber-50',
  'Moderate–Expert': 'text-orange-700 bg-orange-50',
  Advanced: 'text-orange-700 bg-orange-50',
  'Advanced–Expert': 'text-red-700 bg-red-50',
  Expert: 'text-red-700 bg-red-50',
};

const Activities = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const filtered = activeCategory === 'All'
    ? activities
    : activities.filter((a) => a.category === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="act-hero-bg-j0k1"
          data-strk-bg="[act-hero-subtitle] [act-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/65" />
        <div className="relative z-10 text-center px-4">
          <p id="act-hero-subtitle" className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3">
            Adventure Awaits
          </p>
          <h1 id="act-hero-title" className="font-playfair font-bold text-4xl md:text-6xl text-white">
            Mountain Activities
          </h1>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="bg-snow py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-peak text-white shadow-md'
                    : 'bg-white text-stone border border-glacier hover:border-alpine hover:text-peak'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    alt={act.title}
                    data-strk-img-id={act.imgId}
                    data-strk-img={`[${act.id}-desc] [${act.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-peak/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {act.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 id={`${act.id}-title`} className="font-playfair font-bold text-lg text-peak leading-tight">
                      {act.title}
                    </h3>
                    <span className="flex items-center gap-1 text-amber-peak text-sm font-semibold ml-2 shrink-0">
                      <Star className="w-4 h-4 fill-amber-peak" /> {act.rating}
                    </span>
                  </div>
                  <p id={`${act.id}-desc`} className="text-stone text-sm leading-relaxed mb-4">
                    {act.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-stone">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-alpine" /> {act.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-alpine" /> {act.groupSize} people
                    </span>
                    <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full font-medium ${difficultyColor[act.difficulty] || 'text-stone bg-gray-50'}`}>
                      <BarChart2 className="w-3.5 h-3.5" /> {act.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
