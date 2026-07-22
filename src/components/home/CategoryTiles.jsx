import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop',
    description: 'From delicate studs to statement drops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    description: 'Chains, pendants & layered looks',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
    description: 'Bold, comfortable everyday hoops',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-ultra-wide text-taupe mb-3 block">
            Explore
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-cream"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent transition-opacity duration-300 group-hover:bg-espresso/90" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-transform duration-300 group-hover:translate-y-0 translate-y-0">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-xs uppercase tracking-ultra-wide text-ivory">
                  Shop Now
                  <span className="ml-3 w-8 h-px bg-ivory transition-all duration-300 group-hover:w-12" />
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
