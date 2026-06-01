import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  { label: 'By Era', desc: 'From the 1900s to the 2050s', icon: '◎', color: '#a78bfa', filter: 'era' },
  { label: 'By Emotion', desc: 'Joy, grief, wonder, love and more', icon: '◈', color: '#2dd4bf', filter: 'emotion' },
  { label: 'By Life Event', desc: 'Birth, loss, migration, reunion', icon: '◇', color: '#f472b6', filter: 'life_event' },
  { label: 'By Region', desc: 'Every continent on Earth', icon: '◉', color: '#4a9eff', filter: 'region' },
];

export default function BrowseCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 px-4" style={{ background: '#050810' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#4a9eff' }}>
            Browse
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4" style={{ color: '#e8edf5' }}>
            Find Your Way Through Memory
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#8899b4' }}>
            Millions of memories, organized so you can find the ones that resonate with you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => navigate('/explore')}
              className="memory-card text-left rounded-xl p-6 border border-white/[0.07] group"
              style={{ background: '#0d1526' }}
            >
              <div
                className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </div>
              <h3
                className="font-cinzel text-lg font-semibold mb-1.5 group-hover:text-[#4a9eff] transition-colors"
                style={{ color: '#e8edf5' }}
              >
                {cat.label}
              </h3>
              <p className="text-sm" style={{ color: '#8899b4' }}>
                {cat.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
