import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    imgId: 'cat-tile-earrings-9a2b',
    descId: 'cat-tile-earrings-desc',
    link: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    imgId: 'cat-tile-necklaces-3c4d',
    descId: 'cat-tile-necklaces-desc',
    link: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    imgId: 'cat-tile-huggies-5e6f',
    descId: 'cat-tile-huggies-desc',
    link: '/shop?category=Huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle mt-3">Discover your signature piece</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.link} className="group block relative overflow-hidden">
            <div className="aspect-[4/5] bg-velmora-sand relative overflow-hidden">
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] velvet-gold-jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-velmora-deep/20 group-hover:bg-velmora-deep/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={cat.descId}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wider"
                >
                  {cat.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
