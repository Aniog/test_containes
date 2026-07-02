import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Frame your face',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Drape in gold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Close to the heart',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">Explore</p>
          <h2 className="font-serif text-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-obsidian-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  id={`category-${cat.id}-tagline`}
                  className="text-[11px] tracking-widest-xl uppercase text-gold-400 mb-1"
                >
                  {cat.tagline}
                </p>
                <h3
                  id={`category-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-cream-50 group-hover:text-gold-300 transition-colors duration-300"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
