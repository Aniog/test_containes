import { useState } from 'react'
import { MapPin, Thermometer, CloudRain, Trees } from 'lucide-react'

const forests = [
  {
    id: 1,
    name: 'Amazon Rainforest',
    region: 'South America',
    type: 'Tropical',
    area: '5.5 million km²',
    temp: '25–28°C',
    rainfall: '2,000–3,000 mm/yr',
    species: '40,000+ plant species',
    desc: 'The world\'s largest tropical rainforest, home to an estimated 10% of all species on Earth. Its dense canopy and vast river systems create one of the most biodiverse ecosystems ever known.',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    color: 'from-emerald-900',
  },
  {
    id: 2,
    name: 'Black Forest',
    region: 'Germany, Europe',
    type: 'Temperate',
    area: '6,009 km²',
    temp: '5–15°C',
    rainfall: '1,000–1,800 mm/yr',
    species: '1,000+ plant species',
    desc: 'A dense, mountainous forest in southwestern Germany, famous for its dark fir and spruce trees, folklore, and picturesque valleys. A landscape that inspired fairy tales.',
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
    color: 'from-slate-900',
  },
  {
    id: 3,
    name: 'Daintree Rainforest',
    region: 'Queensland, Australia',
    type: 'Tropical',
    area: '1,200 km²',
    temp: '20–30°C',
    rainfall: '2,000–8,000 mm/yr',
    species: '3,000+ plant species',
    desc: 'One of the oldest rainforests on Earth at over 135 million years old. Where the rainforest meets the Great Barrier Reef, creating a unique dual World Heritage site.',
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
    color: 'from-teal-900',
  },
  {
    id: 4,
    name: 'Tongass National Forest',
    region: 'Alaska, USA',
    type: 'Temperate Rainforest',
    area: '68,000 km²',
    temp: '2–12°C',
    rainfall: '1,500–4,000 mm/yr',
    species: '400+ wildlife species',
    desc: 'The largest national forest in the United States, a vast temperate rainforest of Sitka spruce, western hemlock, and red cedar draped in moss and mist.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    color: 'from-blue-900',
  },
  {
    id: 5,
    name: 'Białowieża Forest',
    region: 'Poland & Belarus',
    type: 'Primeval',
    area: '3,085 km²',
    temp: '3–18°C',
    rainfall: '600–700 mm/yr',
    species: '12,000+ animal species',
    desc: 'One of the last and largest remaining parts of the immense primeval forest that once stretched across the European Plain. Home to the European bison.',
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    color: 'from-amber-900',
  },
  {
    id: 6,
    name: 'Borneo Rainforest',
    region: 'Southeast Asia',
    type: 'Tropical',
    area: '743,330 km²',
    temp: '24–32°C',
    rainfall: '2,500–5,000 mm/yr',
    species: '15,000+ plant species',
    desc: 'One of the most biodiverse places on Earth, home to orangutans, pygmy elephants, and clouded leopards. An ancient forest under severe threat from deforestation.',
    img: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80',
    color: 'from-green-900',
  },
]

const types = ['All', 'Tropical', 'Temperate', 'Temperate Rainforest', 'Primeval']

export default function Explore() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? forests : forests.filter(f => f.type === filter)

  return (
    <div className="bg-[#0a1a0b] text-green-50 min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=80"
          alt="Forest canopy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0b]/80 to-[#0a1a0b]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Around the world
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Explore Forests
          </h1>
          <p className="text-green-300/70 text-lg">
            Journey through six of the world's most remarkable forests — each a world unto itself.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === t
                  ? 'bg-green-600 border-green-500 text-white'
                  : 'border-green-800/50 text-green-300/70 hover:border-green-600 hover:text-green-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(forest => (
            <div
              key={forest.id}
              onClick={() => setSelected(forest)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-green-800/30 hover:border-green-500/50 transition-all bg-green-950/30"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={forest.img}
                  alt={forest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${forest.color} via-transparent opacity-60`} />
                <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-green-300 text-xs font-semibold px-3 py-1 rounded-full border border-green-700/40">
                  {forest.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{forest.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-green-400/70 text-xs mb-3">
                  <MapPin className="w-3 h-3" />
                  {forest.region}
                </div>
                <p className="text-green-300/60 text-sm leading-relaxed line-clamp-3">{forest.desc}</p>
                <button className="mt-4 text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0f2210] border border-green-700/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2210] via-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">{selected.type}</span>
              <h2 className="text-2xl font-bold text-white mt-1 mb-1">{selected.name}</h2>
              <div className="flex items-center gap-1 text-green-400/70 text-sm mb-4">
                <MapPin className="w-4 h-4" /> {selected.region}
              </div>
              <p className="text-green-200/80 text-sm leading-relaxed mb-6">{selected.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Trees className="w-4 h-4 text-green-400" />, label: 'Area', val: selected.area },
                  { icon: <Thermometer className="w-4 h-4 text-orange-400" />, label: 'Temperature', val: selected.temp },
                  { icon: <CloudRain className="w-4 h-4 text-blue-400" />, label: 'Rainfall', val: selected.rainfall },
                  { icon: <Trees className="w-4 h-4 text-emerald-400" />, label: 'Biodiversity', val: selected.species },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="bg-green-900/30 rounded-xl p-4 flex items-start gap-3">
                    {icon}
                    <div>
                      <div className="text-green-400/60 text-xs">{label}</div>
                      <div className="text-white text-sm font-semibold">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
