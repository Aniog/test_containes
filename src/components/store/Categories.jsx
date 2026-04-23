const categories = [
  {
    id: 'pulseras',
    name: 'Pulseras',
    count: '120+ diseños',
    emoji: '📿',
    color: 'from-rose-100 to-pink-200',
    hoverColor: 'hover:from-rose-200 hover:to-pink-300',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    href: '#pulseras',
  },
  {
    id: 'collares',
    name: 'Collares',
    count: '95+ diseños',
    emoji: '💎',
    color: 'from-purple-100 to-violet-200',
    hoverColor: 'hover:from-purple-200 hover:to-violet-300',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    href: '#collares',
  },
  {
    id: 'pendientes',
    name: 'Pendientes',
    count: '80+ diseños',
    emoji: '✨',
    color: 'from-amber-100 to-yellow-200',
    hoverColor: 'hover:from-amber-200 hover:to-yellow-300',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    href: '#pendientes',
  },
  {
    id: 'anillos',
    name: 'Anillos',
    count: '60+ diseños',
    emoji: '💍',
    color: 'from-teal-100 to-cyan-200',
    hoverColor: 'hover:from-teal-200 hover:to-cyan-300',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    href: '#anillos',
  },
  {
    id: 'bolsos',
    name: 'Bolsos',
    count: '45+ diseños',
    emoji: '👜',
    color: 'from-orange-100 to-red-200',
    hoverColor: 'hover:from-orange-200 hover:to-red-300',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
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
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Emoji */}
                <div className="absolute top-3 right-3 text-2xl bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  {cat.emoji}
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display font-bold text-white text-lg leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-0.5">{cat.count}</p>
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
