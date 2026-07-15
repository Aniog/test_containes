import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & hoops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Dome & intricate designs',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80',
  },
];

const ShopByCategory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-gold uppercase font-sans">
            Browse by Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mt-2">
            Shop Our Collection
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-white/70 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm text-gold group-hover:underline underline-offset-4">
                  Shop Now
                </span>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
