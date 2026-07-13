import { Link } from 'react-router-dom';
import JewelryPlaceholder from '../ui/JewelryPlaceholder';

const categories = [
  {
    id: 'cat-earrings-7a2b3c',
    label: 'Earrings',
    slug: 'earrings',
    bg: '#2C2825',
    imgLabel: 'gold earrings collection editorial dark background',
    titleId: 'cat-earrings-title-7a2b3c',
    descId: 'cat-earrings-desc-7a2b3c',
    desc: 'From delicate studs to statement drops',
  },
  {
    id: 'cat-necklaces-8d4e5f',
    label: 'Necklaces',
    slug: 'necklaces',
    bg: '#F5F0E8',
    imgLabel: 'gold necklace collection editorial warm background',
    titleId: 'cat-necklaces-title-8d4e5f',
    descId: 'cat-necklaces-desc-8d4e5f',
    desc: 'Layered chains and pendant necklaces',
  },
  {
    id: 'cat-huggies-9g6h7i',
    label: 'Huggies',
    slug: 'huggies',
    bg: '#1A1714',
    imgLabel: 'gold huggie earrings collection editorial dark background',
    titleId: 'cat-huggies-title-9g6h7i',
    descId: 'cat-huggies-desc-9g6h7i',
    desc: 'Sculptural hoops that hug the lobe',
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden block"
            >
              <JewelryPlaceholder bg={cat.bg} label={cat.imgLabel} ratio="3x4" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory uppercase tracking-[0.15em] mb-2">
                    {cat.label}
                  </h3>
                  <p className="font-sans text-xs text-ivory-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                    {cat.desc}
                  </p>
                  <div className="w-8 h-px bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
