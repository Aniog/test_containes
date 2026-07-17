import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'essentials',
    name: 'The Essentials',
    description: 'Everyday gold pieces designed for the modern woman.',
    tone: 'from-espresso-100 via-espresso-50 to-gold-600',
  },
  {
    id: 'crystal-atelier',
    name: 'Crystal Atelier',
    description: 'Crystal-accented designs for moments that sparkle.',
    tone: 'from-espresso-200 via-gold-600 to-espresso-100',
  },
  {
    id: 'gift-edit',
    name: 'The Gift Edit',
    description: 'Curated sets and pieces ready for giving.',
    tone: 'from-gold-600 via-espresso-100 to-espresso-50',
  },
];

export default function CollectionsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl tracking-widest uppercase text-espresso">
            Collections
          </h1>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
          <p className="mt-5 text-warm text-sm max-w-md mx-auto">
            Explore our curated edits — each collection tells a different story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={`/shop`}
              className="group block"
            >
              <div className={`aspect-[3/4] bg-gradient-to-br ${col.tone} flex items-center justify-center overflow-hidden`}>
                <div className="text-center opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                  <span className="text-cream/50 text-8xl font-serif">✦</span>
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-serif text-xl tracking-widest uppercase text-espresso group-hover:text-gold-500 transition-colors">
                  {col.name}
                </h3>
                <p className="text-sm text-warm mt-2">{col.description}</p>
                <span className="mt-3 inline-block text-xs uppercase tracking-super text-gold border-b border-gold pb-0.5">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
