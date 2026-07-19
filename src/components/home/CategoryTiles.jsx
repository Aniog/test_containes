import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    desc: 'Studs, drops & huggies',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    desc: 'Pendants & chains',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    desc: 'Everyday gold hoops',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs text-gold tracking-widest uppercase mb-3 font-sans">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-[#D4B87A]/20 via-[#E8E2D9] to-[#B8965E]/15"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                    <span className="text-gold-deep font-serif text-2xl">V</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-serif text-xl sm:text-2xl tracking-wider text-white uppercase mb-1">
                  {tile.name}
                </h3>
                <p className="text-gold-light text-xs tracking-wide">
                  {tile.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}