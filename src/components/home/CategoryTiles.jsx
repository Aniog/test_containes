import { Link } from 'react-router-dom';

function CategoryTiles() {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      count: 2
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      count: 1
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      count: 1
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-text-light tracking-widest uppercase">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-light/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.count} {category.count === 1 ? 'piece' : 'pieces'}
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

export default CategoryTiles;