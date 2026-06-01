import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LOCATIONS, LIFE_EVENTS } from '../../data/memories';

const categories = [
  {
    title: 'Browse by Era',
    description: 'Journey through 12,000 years of human civilization',
    path: '/explore?filter=era',
    items: ERAS.slice(0, 4),
    labelKey: 'label',
    colorKey: 'color',
    iconKey: 'icon',
  },
  {
    title: 'Browse by Emotion',
    description: 'Find memories that resonate with what you feel',
    path: '/explore?filter=emotion',
    items: EMOTIONS.slice(0, 4),
    labelKey: 'label',
    colorKey: 'color',
    iconKey: 'icon',
  },
  {
    title: 'Browse by Location',
    description: 'Explore memories from every corner of the Earth',
    path: '/explore?filter=location',
    items: LOCATIONS.slice(0, 4),
    labelKey: 'label',
    colorKey: 'color',
    iconKey: null,
  },
  {
    title: 'Browse by Life Event',
    description: 'Discover the universal moments that define us',
    path: '/explore?filter=lifeEvent',
    items: LIFE_EVENTS.slice(0, 4),
    labelKey: 'label',
    colorKey: 'color',
    iconKey: 'icon',
  },
];

export default function BrowseCategories() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-space-black to-space-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Navigate the Archive
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Four pathways into humanity's collective memory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.path}
              className="group block bg-space-navy border border-slate-700/50 rounded-2xl p-6 hover:border-nebula-blue/40 hover:shadow-[0_0_30px_rgba(79,142,247,0.08)] transition-all duration-300"
            >
              <h3 className="font-cinzel text-xl font-semibold text-white mb-1 group-hover:text-nebula-blue transition-colors">
                {cat.title}
              </h3>
              <p className="text-slate-400 text-sm mb-5">{cat.description}</p>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{
                      color: item[cat.colorKey],
                      borderColor: item[cat.colorKey] + '40',
                      backgroundColor: item[cat.colorKey] + '15',
                    }}
                  >
                    {cat.iconKey && item[cat.iconKey] && (
                      <span>{item[cat.iconKey]}</span>
                    )}
                    {item[cat.labelKey]}
                  </span>
                ))}
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs text-slate-500 border border-slate-700">
                  + more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
