const categories = [
  {
    id: 'pulseras',
    name: 'Pulseras',
    count: '120+ diseños',
    emoji: '📿',
    color: 'from-rose-200 to-pink-300',
    hoverColor: 'hover:from-rose-300 hover:to-pink-400',
    decorEmojis: ['💎', '🌸', '✨'],
    href: '#pulseras',
  },
  {
    id: 'collares',
    name: 'Collares',
    count: '95+ diseños',
    emoji: '💎',
    color: 'from-purple-200 to-violet-300',
    hoverColor: 'hover:from-purple-300 hover:to-violet-400',
    decorEmojis: ['🔮', '⭐', '💜'],
    href: '#collares',
  },
  {
    id: 'pendientes',
    name: 'Pendientes',
    count: '80+ diseños',
    emoji: '✨',
    color: 'from-amber-200 to-yellow-300',
    hoverColor: 'hover:from-amber-300 hover:to-yellow-400',
    decorEmojis: ['🌟', '💛', '🌼'],
    href: '#pendientes',
  },
  {
    id: 'anillos',
    name: 'Anillos',
    count: '60+ diseños',
    emoji: '💍',
    color: 'from-teal-200 to-cyan-300',
    hoverColor: 'hover:from-teal-300 hover:to-cyan-400',
    decorEmojis: ['💠', '🩵', '🌊'],
    href: '#anillos',
  },
  {
    id: 'bolsos',
    name: 'Bolsos',
    count: '45+ diseños',
    emoji: '👜',
    color: 'from-orange-200 to-red-300',
    hoverColor: 'hover:from-orange-300 hover:to-red-400',
    decorEmojis: ['🎀', '🧡', '🌺'],
    href: '#bolsos',
  },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-rose-400 font-semibold tracking-widest uppercase text-sm mb-3">Explora</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Cada categoría es un mundo de creatividad. Encuentra el accesorio perfecto para cada ocasión.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <a
              key={cat.id}
              href={cat.href}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} ${cat.hoverColor} transition-all duration-300 card-hover cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative flex flex-col items-center justify-center p-4">
                {/* Decorative small emojis */}
                <div className="absolute top-3 left-3 text-lg opacity-60">{cat.decorEmojis[0]}</div>
                <div className="absolute top-3 right-3 text-lg opacity-60">{cat.decorEmojis[1]}</div>
                <div className="absolute bottom-12 right-4 text-lg opacity-60">{cat.decorEmojis[2]}</div>

                {/* Main emoji */}
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300 select-none">
                  {cat.emoji}
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="font-display font-bold text-gray-800 text-lg leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-xs mt-0.5">{cat.count}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
