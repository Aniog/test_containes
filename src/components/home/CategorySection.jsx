import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    description: 'Studs, drops & ear cuffs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    description: 'Pendants & chains',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    description: 'Chunky & delicate hoops',
  },
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-ultra-wide uppercase text-gold">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2 transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="text-sm text-ivory/70 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {category.description}
                </p>
                <span className="mt-4 text-xs tracking-ultra-wide uppercase text-ivory border border-ivory/50 px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
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

export default CategorySection;
