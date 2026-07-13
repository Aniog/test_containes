import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const categoryBgs = [
  'linear-gradient(145deg, #F2EDE4 0%, #E8D5A3 50%, #C9A96E 100%)',
  'linear-gradient(145deg, #2C2018 0%, #3D2E1A 50%, #1A1614 100%)',
  'linear-gradient(145deg, #E8D5A3 0%, #C9A96E 50%, #A07840 100%)',
];

const categoryIcons = ['◇', '◈', '◆'];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-velmora-obsidian font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/4]"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: categoryBgs[i] }}
              >
                {/* Decorative elements */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 50% 40% at 50% 40%, rgba(201,169,110,0.15) 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Hidden text for image queries */}
              <span id={cat.titleId} className="sr-only">{cat.name}</span>
              <span id={cat.descId} className="sr-only">{cat.description}</span>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`font-cormorant text-6xl lg:text-7xl transition-all duration-500 group-hover:scale-110 ${
                    i === 1 ? 'text-velmora-gold/60' : 'text-velmora-obsidian/20'
                  }`}
                >
                  {categoryIcons[i]}
                </span>
              </div>

              {/* Label overlay — visible on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                <div
                  className={`text-center transition-all duration-300 ${
                    'translate-y-0 opacity-100'
                  }`}
                >
                  <h3
                    className={`font-cormorant text-2xl lg:text-3xl uppercase tracking-widest font-medium ${
                      i === 1 ? 'text-velmora-ivory' : 'text-velmora-obsidian'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className={`font-manrope text-xs uppercase tracking-widest mt-1 ${
                      i === 1 ? 'text-velmora-ivory/60' : 'text-velmora-stone'
                    }`}
                  >
                    {cat.description}
                  </p>
                  <div
                    className={`w-8 h-px mx-auto mt-3 transition-all duration-300 group-hover:w-16 ${
                      i === 1 ? 'bg-velmora-gold' : 'bg-velmora-gold'
                    }`}
                  />
                </div>
              </div>

              {/* Hover tint */}
              <div className="absolute inset-0 bg-velmora-obsidian/0 group-hover:bg-velmora-obsidian/15 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
