import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    href: '/shop?category=earrings',
    image:
      'https://placehold.co/800x1000/2A2420/CBAF87?text=Earrings',
  },
  {
    name: 'Necklaces',
    href: '/shop?category=necklaces',
    image:
      'https://placehold.co/800x1000/1E1A17/CBAF87?text=Necklaces',
  },
  {
    name: 'Huggies',
    href: '/shop?category=huggies',
    image:
      'https://placehold.co/800x1000/2A2420/CBAF87?text=Huggies',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-ink/20 group-hover:bg-velmora-ink/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
