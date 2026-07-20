import { Link } from 'react-router-dom';

export default function CategoryTiles({ categories }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide text-gold-600 uppercase mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            Find Your Style
          </h2>
          <div className="hairline-divider w-16 mx-auto mt-6" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-cream-200 tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                  {category.description}
                </p>
                <div className="mt-4 w-8 h-px bg-gold-400 transform transition-all duration-300 group-hover:w-16" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
