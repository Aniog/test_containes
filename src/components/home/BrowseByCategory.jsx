import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

function CategorySection({ title, subtitle, items, filterKey, colorKey, iconKey, labelKey }) {
  return (
    <div>
      <h3 className="font-cinzel text-xl font-light text-starlight mb-2 tracking-wide">{title}</h3>
      <p className="text-sm text-mist mb-6">{subtitle}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/explore?${filterKey}=${item.id}`}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200"
            style={{
              borderColor: `${item[colorKey] || '#1a2d52'}60`,
              backgroundColor: `${item[colorKey] || '#1a2d52'}15`,
              color: item[colorKey] || '#94a3b8',
            }}
          >
            {iconKey && <span className="text-sm">{item[iconKey]}</span>}
            <span className="text-sm font-medium">{item[labelKey]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BrowseByCategory() {
  return (
    <section className="py-24 px-6 bg-cosmos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-nova-light uppercase mb-4">
            ◉ Browse the Archive
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-light text-starlight tracking-wide mb-4">
            Find Your Way Through Time
          </h2>
          <p className="text-mist max-w-xl mx-auto leading-relaxed">
            Navigate millions of memories by era, emotion, or life event. Every path leads somewhere profound.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <CategorySection
            title="By Era"
            subtitle="Journey through the ages of human civilization"
            items={ERAS}
            filterKey="era"
            colorKey="color"
            labelKey="label"
          />
          <CategorySection
            title="By Emotion"
            subtitle="Feel what others felt across centuries"
            items={EMOTIONS}
            filterKey="emotion"
            colorKey="color"
            iconKey="icon"
            labelKey="label"
          />
          <CategorySection
            title="By Life Event"
            subtitle="Shared moments that define every human life"
            items={LIFE_EVENTS}
            filterKey="event"
            colorKey="color"
            iconKey="icon"
            labelKey="label"
          />
        </div>
      </div>
    </section>
  );
}
