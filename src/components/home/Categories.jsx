import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
    href: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    href: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop',
    href: '/shop?category=huggies',
  },
];

export default function Categories() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-label text-gold-500 mb-4">Explore</p>
          <h2 className="heading-section text-charcoal-800">Shop by Category</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/50 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-cream-50 tracking-wider uppercase mb-2">
                    {category.name}
                  </h3>
                  <span className="text-xs text-cream-200 tracking-ultra-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
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
