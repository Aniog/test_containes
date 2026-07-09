import { Link } from 'react-router-dom';

const collections = [
  { id: 'spring-essentials', name: 'Spring Essentials', desc: 'Lightweight pieces for the new season.' },
  { id: 'evening-glow', name: 'Evening Glow', desc: 'Statement pieces for after-dark elegance.' },
  { id: 'everyday-gold', name: 'Everyday Gold', desc: 'Your daily rotation of demi-fine staples.' },
  { id: 'gift-edit', name: 'The Gift Edit', desc: 'Curated sets for someone special.' },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-32 pb-20">
      <div className="section-padding">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-ink text-center mb-4">
          Collections
        </h1>
        <p className="text-velmora-stone text-sm text-center mb-12 max-w-md mx-auto">
          Curated edits for every moment and mood
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={`/shop`}
              className="group relative aspect-[16/9] bg-velmora-sand/30 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-velmora-sand/40 flex items-center justify-center">
                <span className="text-velmora-stone/30 text-xs tracking-wider">
                  {col.name.toUpperCase()}
                </span>
              </div>
              <div className="absolute inset-0 bg-velmora-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl tracking-wide text-white mb-2">
                  {col.name}
                </h3>
                <p className="text-white/70 text-sm">{col.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}