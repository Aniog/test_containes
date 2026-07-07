import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & hoops',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants & chains',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable & bold',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 mb-4">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-espresso-900/20 to-transparent transition-opacity group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-serif text-2xl text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  {category.description}
                </p>
                <span className="px-6 py-2 border border-white text-white text-xs uppercase tracking-wider opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
