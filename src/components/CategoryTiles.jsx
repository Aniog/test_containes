import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    path: '/shop?category=Earrings'
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    path: '/shop?category=Necklaces'
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    path: '/shop?category=Huggies'
  }
];

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
          Shop by Category
        </h2>
        <div className="w-24 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden aspect-[4/5] bg-velmora-warm"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-widest uppercase mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {category.name}
                </h3>
                <div className="w-12 h-px bg-white mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}