import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From studs to statement drops',
    gradient: 'from-amber-900/80 to-amber-800/60',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer-worthy chains & pendants',
    gradient: 'from-stone-900/80 to-stone-800/60',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless everyday hoops',
    gradient: 'from-neutral-900/80 to-neutral-800/60',
  },
];

export default function Categories() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">Explore</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/4] rounded-sm overflow-hidden"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal via-velmora-charcoal/90 to-velmora-gold/20" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-velmora-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border border-velmora-gold/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border border-velmora-gold/10 group-hover:scale-125 transition-transform duration-700 delay-100" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-2">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-white/60 tracking-ultra-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {cat.description}
                </p>
                <div className="w-8 h-px bg-velmora-gold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
