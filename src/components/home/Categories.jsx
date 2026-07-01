import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', label: 'shop earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces', label: 'shop necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies', label: 'shop huggies' },
  ];

  return (
    <section className="py-24 bg-velmora-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.path}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img 
                data-strk-img-id={`cat-img-${idx}`}
                data-strk-img={`aesthetic gold ${cat.name} jewelry close up on nude background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-serif tracking-widest">{cat.name}</h3>
                <span className="mt-4 uppercase tracking-[0.3em] text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
