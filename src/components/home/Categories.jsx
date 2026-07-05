import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    gradient: 'from-cream-300 to-cream-200',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant chains and pendants',
    gradient: 'from-cream-200 to-cream-300',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday essentials that hug your ear',
    gradient: 'from-cream-300 to-cream-100',
  },
];

export default function Categories() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-sm tracking-ultra-wide uppercase text-gold-400 mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-700">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-charcoal-800/0 group-hover:bg-charcoal-800/30 transition-all duration-500" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-charcoal-700 group-hover:text-cream-50 transition-colors duration-300 mb-1">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-charcoal-500 group-hover:text-cream-200 transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
