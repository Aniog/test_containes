const worlds = [
  {
    id: 1,
    title: 'The Cell Universe',
    subtitle: 'Biology',
    description:
      'Every living organism is built from cells — the fundamental units of life. Inside each cell lies a universe of organelles, proteins, and chemical reactions that sustain existence.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=85&fit=crop',
    color: 'from-violet-900/60',
    stat1: { value: '37T', label: 'Cells in the human body' },
    stat2: { value: '0.01mm', label: 'Average cell diameter' },
  },
  {
    id: 2,
    title: 'Crystal Kingdoms',
    subtitle: 'Chemistry',
    description:
      'Under polarized light, ordinary minerals transform into breathtaking kaleidoscopes of color. Each crystal lattice tells the story of millions of years of geological pressure.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=85&fit=crop',
    color: 'from-cyan-900/60',
    stat1: { value: '230', label: 'Crystal space groups' },
    stat2: { value: '1nm', label: 'Smallest crystal unit' },
  },
  {
    id: 3,
    title: 'Pollen Worlds',
    subtitle: 'Botany',
    description:
      'Pollen grains are nature\'s most intricate sculptures. Each species produces a uniquely shaped grain, a microscopic fingerprint that has persisted for hundreds of millions of years.',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=85&fit=crop',
    color: 'from-amber-900/60',
    stat1: { value: '400K', label: 'Flowering plant species' },
    stat2: { value: '10μm', label: 'Typical pollen size' },
  },
];

export default function Worlds() {
  return (
    <section id="worlds" className="py-24 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Realms of the Small
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Microscopic Worlds
          </h2>
          <p
            className="text-white/60 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Dive into distinct realms, each with its own rules, beauty, and wonder.
          </p>
        </div>

        {/* World cards */}
        <div className="flex flex-col gap-16">
          {worlds.map((world, i) => (
            <div
              key={world.id}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-3xl aspect-[4/3] group">
                <img
                  src={world.image}
                  alt={world.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${world.color} to-transparent`} />
                <div className="absolute bottom-6 left-6 right-6 flex gap-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 flex-1 text-center">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {world.stat1.value}
                    </div>
                    <div className="text-xs text-white/60 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {world.stat1.label}
                    </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 flex-1 text-center">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {world.stat2.value}
                    </div>
                    <div className="text-xs text-white/60 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {world.stat2.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 px-0 md:px-8">
                <span
                  className="text-violet-400 text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {world.subtitle}
                </span>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {world.title}
                </h3>
                <p
                  className="text-white/65 text-lg leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {world.description}
                </p>
                <a
                  href="#science"
                  className="inline-flex items-center gap-2 mt-8 text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
