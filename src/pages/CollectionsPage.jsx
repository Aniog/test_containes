import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'everyday',
    name: 'Everyday Essentials',
    desc: 'Effortless pieces designed for daily wear — from the office to after-hours.',
    count: 5,
    slug: 'everyday',
  },
  {
    id: 'statement',
    name: 'Statement Edit',
    desc: 'Bold, eye-catching designs for when you want to make an impression.',
    count: 3,
    slug: 'statement',
  },
  {
    id: 'gifting',
    name: 'The Gift Edit',
    desc: 'Beautifully packaged sets and standout pieces, perfect for gifting.',
    count: 2,
    slug: 'gifting',
  },
];

export default function CollectionsPage() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav className="flex items-center gap-2 text-xs text-velmora-muted mb-8">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">Collections</span>
        </nav>

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">
            Curated
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
            Our Collections
          </h1>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to="/shop"
              className="group relative aspect-[3/4] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-velmora-sand via-velmora-warm to-velmora-taupe/30" />
              <div className="absolute inset-0 bg-velmora-charcoal/10 group-hover:bg-velmora-charcoal/30 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-4xl text-velmora-gold/30 mb-4">✦</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal mb-3 group-hover:text-velmora-gold transition-colors">
                  {col.name}
                </h2>
                <p className="text-sm text-velmora-muted leading-relaxed mb-4 max-w-xs">
                  {col.desc}
                </p>
                <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 group-hover:text-velmora-gold group-hover:border-velmora-gold transition-colors">
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
