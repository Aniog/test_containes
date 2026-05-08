import { useState } from 'react';
import { Search, MapPin, Ruler, Weight } from 'lucide-react';

const breeds = [
  {
    name: 'Arabian',
    origin: 'Arabian Peninsula',
    height: '14.1–15.1 hands',
    weight: '800–1,000 lbs',
    type: 'Light',
    color: 'Bay, Gray, Chestnut, Black',
    emoji: '🐎',
    bg: 'from-amber-50 to-orange-50',
    accent: 'bg-amber-100 text-amber-800',
    description:
      'One of the oldest and most recognizable horse breeds in the world. Known for their distinctive dished face, high tail carriage, and incredible endurance. Arabians are intelligent, spirited, and form deep bonds with their owners.',
    traits: ['Endurance', 'Intelligence', 'Spirited', 'Loyal'],
    uses: ['Endurance Racing', 'Show', 'Trail Riding'],
  },
  {
    name: 'Thoroughbred',
    origin: 'England',
    height: '15.2–17 hands',
    weight: '1,000–1,200 lbs',
    type: 'Light',
    color: 'Bay, Chestnut, Gray, Black',
    emoji: '🏇',
    bg: 'from-red-50 to-rose-50',
    accent: 'bg-red-100 text-red-800',
    description:
      'The ultimate racing horse, bred for speed and agility. Thoroughbreds are hot-blooded horses known for their athleticism and competitive spirit. They dominate horse racing worldwide and are also used in show jumping and eventing.',
    traits: ['Speed', 'Agility', 'Competitive', 'Athletic'],
    uses: ['Racing', 'Show Jumping', 'Eventing'],
  },
  {
    name: 'Quarter Horse',
    origin: 'United States',
    height: '14.3–16 hands',
    weight: '950–1,200 lbs',
    type: 'Light',
    color: 'Sorrel, Bay, Black, Palomino',
    emoji: '🤠',
    bg: 'from-yellow-50 to-amber-50',
    accent: 'bg-yellow-100 text-yellow-800',
    description:
      'America\'s most popular horse breed! Named for their ability to outrun other breeds in quarter-mile races. Quarter Horses are versatile, calm, and excel in western riding disciplines. They are the backbone of the American ranching tradition.',
    traits: ['Versatile', 'Calm', 'Powerful', 'Quick'],
    uses: ['Ranch Work', 'Rodeo', 'Trail Riding', 'Racing'],
  },
  {
    name: 'Friesian',
    origin: 'Netherlands',
    height: '15–17 hands',
    weight: '1,200–1,400 lbs',
    type: 'Draft/Light',
    color: 'Black',
    emoji: '🖤',
    bg: 'from-gray-50 to-slate-50',
    accent: 'bg-gray-200 text-gray-800',
    description:
      'One of the most beautiful horse breeds in the world, the Friesian is always black with a flowing mane and tail. Originating from the Netherlands, they were used as war horses in the Middle Ages. Today they excel in dressage and driving.',
    traits: ['Elegant', 'Powerful', 'Gentle', 'Willing'],
    uses: ['Dressage', 'Driving', 'Film & TV', 'Show'],
  },
  {
    name: 'Clydesdale',
    origin: 'Scotland',
    height: '16–18 hands',
    weight: '1,800–2,200 lbs',
    type: 'Draft',
    color: 'Bay, Brown, Black, Roan',
    emoji: '💪',
    bg: 'from-brown-50 to-stone-50',
    accent: 'bg-stone-200 text-stone-800',
    description:
      'A gentle giant from Scotland, the Clydesdale is famous for its feathered legs and massive size. Despite their imposing stature, they are known as "gentle giants" with a calm and friendly temperament. Famous as the Budweiser horses.',
    traits: ['Gentle', 'Strong', 'Calm', 'Friendly'],
    uses: ['Farm Work', 'Parades', 'Logging', 'Show'],
  },
  {
    name: 'Appaloosa',
    origin: 'United States (Nez Perce)',
    height: '14.2–16 hands',
    weight: '950–1,175 lbs',
    type: 'Light',
    color: 'Spotted patterns',
    emoji: '🎨',
    bg: 'from-purple-50 to-violet-50',
    accent: 'bg-purple-100 text-purple-800',
    description:
      'Famous for their striking spotted coat patterns, Appaloosas were developed by the Nez Perce people of the Pacific Northwest. Each horse has a unique pattern — no two are alike! They are hardy, versatile, and have excellent stamina.',
    traits: ['Hardy', 'Versatile', 'Unique', 'Stamina'],
    uses: ['Trail Riding', 'Ranch Work', 'Show', 'Racing'],
  },
  {
    name: 'Mustang',
    origin: 'North America (Feral)',
    height: '13.2–15 hands',
    weight: '700–900 lbs',
    type: 'Light',
    color: 'All colors',
    emoji: '🌵',
    bg: 'from-orange-50 to-red-50',
    accent: 'bg-orange-100 text-orange-800',
    description:
      'The iconic wild horse of the American West, descended from horses brought by Spanish explorers. Mustangs are symbols of freedom and resilience. They are tough, sure-footed, and highly adaptable. Many are adopted and trained as riding horses.',
    traits: ['Wild', 'Resilient', 'Sure-footed', 'Tough'],
    uses: ['Trail Riding', 'Endurance', 'Ranch Work'],
  },
  {
    name: 'Andalusian',
    origin: 'Spain',
    height: '15–16.2 hands',
    weight: '900–1,100 lbs',
    type: 'Light',
    color: 'Gray, Bay, Black',
    emoji: '💃',
    bg: 'from-pink-50 to-rose-50',
    accent: 'bg-pink-100 text-pink-800',
    description:
      'The "Horse of Kings," the Andalusian has been prized by royalty for centuries. Known for their elegant movement, arched neck, and flowing mane, they excel in classical dressage. They are intelligent, sensitive, and highly trainable.',
    traits: ['Elegant', 'Intelligent', 'Sensitive', 'Trainable'],
    uses: ['Dressage', 'Bullfighting', 'Show', 'Film'],
  },
  {
    name: 'Shetland Pony',
    origin: 'Shetland Islands, Scotland',
    height: 'Up to 10.2 hands',
    weight: '400–450 lbs',
    type: 'Pony',
    color: 'All colors',
    emoji: '🐴',
    bg: 'from-green-50 to-teal-50',
    accent: 'bg-green-100 text-green-800',
    description:
      'Don\'t let their small size fool you — Shetland Ponies are incredibly strong for their size and were historically used to haul coal in mines. They are known for their thick double coat, full mane, and feisty personality. Perfect for children learning to ride.',
    traits: ['Strong', 'Hardy', 'Feisty', 'Intelligent'],
    uses: ['Children\'s Riding', 'Driving', 'Therapy', 'Show'],
  },
  {
    name: 'Lipizzaner',
    origin: 'Austria/Slovenia',
    height: '14.2–15.2 hands',
    weight: '1,000–1,300 lbs',
    type: 'Light',
    color: 'Gray (born dark)',
    emoji: '⚪',
    bg: 'from-blue-50 to-indigo-50',
    accent: 'bg-blue-100 text-blue-800',
    description:
      'Famous for the Spanish Riding School in Vienna, Lipizzaners are masters of classical dressage and the "airs above the ground." They are born dark and turn white with age. Known for their intelligence, strength, and ability to perform complex movements.',
    traits: ['Intelligent', 'Athletic', 'Elegant', 'Long-lived'],
    uses: ['Classical Dressage', 'Performance', 'Show'],
  },
  {
    name: 'Paint Horse',
    origin: 'United States',
    height: '14.2–16 hands',
    weight: '950–1,200 lbs',
    type: 'Light',
    color: 'Tobiano, Overo, Tovero patterns',
    emoji: '🎭',
    bg: 'from-teal-50 to-cyan-50',
    accent: 'bg-teal-100 text-teal-800',
    description:
      'Paint Horses combine the athletic ability of a Quarter Horse with a colorful coat pattern. They come in three patterns: tobiano, overo, and tovero. Known for their calm temperament and versatility, they are popular in western disciplines.',
    traits: ['Calm', 'Versatile', 'Athletic', 'Colorful'],
    uses: ['Western Riding', 'Trail', 'Ranch Work', 'Show'],
  },
  {
    name: 'Icelandic Horse',
    origin: 'Iceland',
    height: '13–14 hands',
    weight: '730–840 lbs',
    type: 'Pony/Light',
    color: 'All colors',
    emoji: '❄️',
    bg: 'from-sky-50 to-blue-50',
    accent: 'bg-sky-100 text-sky-800',
    description:
      'A unique breed that has remained pure for over 1,000 years due to Iceland\'s isolation. Icelandic Horses have five gaits — including the unique "tölt" — a smooth, four-beat gait that is incredibly comfortable to ride. They are hardy, friendly, and long-lived.',
    traits: ['Hardy', 'Friendly', 'Unique Gaits', 'Long-lived'],
    uses: ['Trail Riding', 'Trekking', 'Racing', 'Show'],
  },
];

const types = ['All', 'Light', 'Draft', 'Draft/Light', 'Pony', 'Pony/Light'];

export default function Breeds() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = breeds.filter((b) => {
    const matchSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.origin.toLowerCase().includes(search.toLowerCase());
    const matchType = filter === 'All' || b.type === filter;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20">
      {/* Header */}
      <div
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #2c1810 0%, #6b3d1e 100%)' }}
      >
        <div className="text-5xl mb-4">🐎</div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Horse Breeds
        </h1>
        <p
          className="text-amber-100/80 text-lg max-w-xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore {breeds.length} magnificent horse breeds from around the world
        </p>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b]" size={18} />
            <input
              type="text"
              placeholder="Search breeds or origins..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-200 bg-white text-[#2c1810] placeholder-[#a08060] focus:outline-none focus:ring-2 focus:ring-amber-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === t
                    ? 'bg-[#2c1810] text-white'
                    : 'bg-white border border-amber-200 text-[#6b4c3b] hover:bg-amber-50'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p
          className="text-sm text-[#6b4c3b] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Showing {filtered.length} of {breeds.length} breeds
        </p>

        {/* Breed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((breed) => (
            <div
              key={breed.name}
              onClick={() => setSelected(breed)}
              className={`bg-gradient-to-br ${breed.bg} border border-amber-100 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{breed.emoji}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${breed.accent}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {breed.type}
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#2c1810] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {breed.name}
              </h3>
              <div
                className="flex items-center gap-1 text-sm text-[#6b4c3b] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MapPin size={13} />
                {breed.origin}
              </div>
              <p
                className="text-sm text-[#4a2c1a] leading-relaxed line-clamp-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {breed.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-4">
                {breed.traits.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/60 text-[#4a2c1a] px-2 py-1 rounded-full border border-white/80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className={`bg-gradient-to-br ${selected.bg} rounded-3xl max-w-lg w-full p-8 shadow-2xl relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-[#6b4c3b] hover:text-[#2c1810] text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 transition"
            >
              ×
            </button>
            <div className="text-5xl mb-4">{selected.emoji}</div>
            <h2
              className="text-3xl font-bold text-[#2c1810] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {selected.name}
            </h2>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${selected.accent}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {selected.type}
            </span>
            <p
              className="text-[#4a2c1a] leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {selected.description}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: <MapPin size={14} />, label: 'Origin', value: selected.origin },
                { icon: <Ruler size={14} />, label: 'Height', value: selected.height },
                { icon: <Weight size={14} />, label: 'Weight', value: selected.weight },
                { icon: '🎨', label: 'Colors', value: selected.color },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-white/50 rounded-xl p-3">
                  <div
                    className="flex items-center gap-1 text-xs text-[#6b4c3b] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {icon} {label}
                  </div>
                  <div
                    className="text-sm font-semibold text-[#2c1810]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p
                className="text-xs font-semibold text-[#6b4c3b] mb-2 uppercase tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Common Uses
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.uses.map((u) => (
                  <span
                    key={u}
                    className="text-sm bg-[#2c1810] text-amber-100 px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
