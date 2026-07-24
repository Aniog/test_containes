import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Statement pieces for every occasion',
    imgId: 'category-earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant chains and pendants',
    imgId: 'category-necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday luxury huggie earrings',
    imgId: 'category-huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Shop by Category
          </h2>
          <p className="mt-3 text-stone-500">
            Find your perfect piece
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative block"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[category-name-${category.id}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3
                    id={`category-name-${category.id}`}
                    className="font-serif text-3xl md:text-4xl font-light mb-2"
                  >
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
