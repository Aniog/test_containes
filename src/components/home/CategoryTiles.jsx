import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
    count: 2
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    count: 1
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    count: 1
  }
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2824] mb-3">
            Shop by Category
          </h2>
          <p className="font-sans text-[#6B635A]">
            Find the perfect piece for every moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[#F5F1EB] opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A1714]/30 group-hover:bg-[#1A1714]/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#FAF8F5] mb-2">
                    {category.name}
                  </h3>
                  <span className="font-sans text-sm text-[#FAF8F5]/70 group-hover:text-[#FAF8F5] transition-colors">
                    {category.count} {category.count === 1 ? 'piece' : 'pieces'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}