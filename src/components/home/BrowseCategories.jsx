import { Link } from 'react-router-dom';

const CATEGORIES = [
  { label: 'By Era', items: ['Ancient', 'Medieval', 'Industrial', 'Modern', 'Digital', 'Near Future'], color: 'text-[#7dd3fc]', border: 'border-[#7dd3fc]/20', bg: 'bg-[#7dd3fc]/5', param: 'era' },
  { label: 'By Emotion', items: ['Joy', 'Grief', 'Wonder', 'Love', 'Nostalgia', 'Hope', 'Longing', 'Pride'], color: 'text-[#c084fc]', border: 'border-[#c084fc]/20', bg: 'bg-[#c084fc]/5', param: 'emotion' },
  { label: 'By Life Event', items: ['Birth', 'First Love', 'Marriage', 'Loss', 'Migration', 'Discovery', 'Farewell', 'Reunion'], color: 'text-[#fb923c]', border: 'border-[#fb923c]/20', bg: 'bg-[#fb923c]/5', param: 'life_event' },
];

export default function BrowseCategories() {
  return (
    <section className="bg-[#080d1a] py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[#e8c97a] text-xs font-semibold uppercase tracking-widest mb-3">
            ✦ Browse the Archive
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
            Find Your Way Through Time
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Explore millions of memories organized by the dimensions of human experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={`rounded-xl border ${cat.border} ${cat.bg} p-6`}>
              <h3 className={`text-sm font-semibold uppercase tracking-widest mb-5 ${cat.color}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Link
                    key={item}
                    to={`/explore?${cat.param}=${encodeURIComponent(item)}`}
                    className={`px-3 py-1.5 rounded-full text-xs border ${cat.border} ${cat.color} hover:bg-current/10 transition-colors duration-150`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
