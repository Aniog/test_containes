import { Link } from 'react-router-dom';

export default function ShopByCategory() {
  const categories = [
    {
      id: 'cat-earrings',
      name: 'EARRINGS',
      path: '/shop?category=earrings',
      imgQuery: 'elegant gold earrings display still life editorial'
    },
    {
      id: 'cat-necklaces',
      name: 'NECKLACES',
      path: '/shop?category=necklaces',
      imgQuery: 'layered gold necklaces display still life editorial'
    },
    {
      id: 'cat-huggies',
      name: 'HUGGIES',
      path: '/shop?category=huggies',
      imgQuery: 'gold huggie earrings display still life editorial'
    }
  ];

  return (
    <section className="py-20 bg-velmora-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.path}
              className="group relative block aspect-square overflow-hidden bg-velmora-border/20"
            >
              {/* Image */}
              <img
                data-strk-img-id={`img-${cat.id}`}
                data-strk-img={cat.imgQuery}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Shop ${cat.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Title Reveal */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-2xl tracking-[0.2em] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
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