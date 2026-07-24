import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    count: 2,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 1,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    count: 1,
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-ivory">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-overline text-gold mb-3">Explore</p>
          <h2 className="heading-2 text-charcoal">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collections?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-md overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-[0.15em] mb-2 transform transition-transform duration-300 group-hover:translate-y-0">
                  {category.name}
                </h3>
                <p className="text-white/70 text-caption">
                  {category.count} {category.count === 1 ? 'Piece' : 'Pieces'}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-gold/50" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
