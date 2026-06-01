import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

const CategorySection = ({ title, subtitle, icon, items, colorKey, linkBase }) => (
  <div className="bg-nebula border border-stardust/50 rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">{icon}</span>
      <h3 className="font-cinzel font-semibold text-starlight text-xl">{title}</h3>
    </div>
    <p className="text-mist text-sm mb-6">{subtitle}</p>
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <Link
          key={item.id}
          to={`/explore?${linkBase}=${item.id}`}
          className="px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 hover:scale-105"
          style={{
            color: item.color || '#8899cc',
            borderColor: `${item.color || '#8899cc'}40`,
            backgroundColor: `${item.color || '#8899cc'}10`,
          }}
        >
          {item.icon && <span className="mr-1">{item.icon}</span>}
          {item.label}
          {item.range && <span className="ml-1 opacity-60">· {item.range}</span>}
        </Link>
      ))}
    </div>
  </div>
);

const ExploreCategories = () => (
  <section className="py-24 px-6 bg-void relative">
    <div className="absolute inset-0 memory-gradient pointer-events-none" />

    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <div className="text-memory text-xs font-mono tracking-widest uppercase mb-4">
          ✧ Navigate the Archive
        </div>
        <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-starlight mb-4">
          Find Your Way Through Time
        </h2>
        <p className="text-mist max-w-2xl mx-auto">
          Explore humanity's memories by era, emotion, or life event.
          Every path leads to a different constellation of human experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CategorySection
          title="By Era"
          subtitle="Journey through the ages of human civilization"
          icon="⟳"
          items={ERAS}
          colorKey="color"
          linkBase="era"
        />
        <CategorySection
          title="By Emotion"
          subtitle="Feel what others have felt across centuries"
          icon="◈"
          items={EMOTIONS}
          colorKey="color"
          linkBase="emotion"
        />
        <CategorySection
          title="By Life Event"
          subtitle="Find memories that mirror your own story"
          icon="✦"
          items={LIFE_EVENTS}
          colorKey="color"
          linkBase="event"
        />
      </div>
    </div>
  </section>
);

export default ExploreCategories;
