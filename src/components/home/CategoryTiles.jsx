import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    imgId: 'cat-earrings-a1b2c3',
    descId: 'cat-earrings-desc',
    titleId: 'cat-earrings-title',
  },
  {
    name: 'Necklaces',
    imgId: 'cat-necklaces-d4e5f6',
    descId: 'cat-necklaces-desc',
    titleId: 'cat-necklaces-title',
  },
  {
    name: 'Huggies',
    imgId: 'cat-huggies-g7h8i9',
    descId: 'cat-huggies-desc',
    titleId: 'cat-huggies-title',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-24 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-2 text-[#1A1A1A] tracking-wide">
          Shop by Category
        </h2>
        <p className="text-sm text-[#6B6560] text-center mb-10 md:mb-14 font-light">
          Find the perfect piece for every moment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4/5] bg-ivory-alt"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p
                id={cat.titleId}
                className="absolute bottom-6 left-6 font-serif text-2xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
              >
                {cat.name}
              </p>
              <span id={cat.descId} className="hidden">Luxury gold {cat.name.toLowerCase()}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
