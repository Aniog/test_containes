import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
  { name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f6a7b1a89c93?w=800&q=80' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/shop?category=${category.name}`}
            className="relative group overflow-hidden aspect-[4/5] bg-velmora-cream"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-widest">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
