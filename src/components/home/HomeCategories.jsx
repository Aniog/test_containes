import { Link } from 'react-router-dom';

const HomeCategories = () => {
  const categories = [
    { name: 'Earrings', query: 'gold earring collection editorial minimalist' },
    { name: 'Necklaces', query: 'gold necklace collection aesthetic editorial' },
    { name: 'Huggies', query: 'gold huggie earring close up editorial' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to="/shop" 
            className="group relative aspect-square md:aspect-[3/4] overflow-hidden bg-velmora-stone"
          >
            <img
              data-strk-img-id={`cat-${cat.name.toLowerCase()}`}
              data-strk-img={`[cat-label-${cat.name}] ${cat.query}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
              <span id={`cat-label-${cat.name}`} className="text-white text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase transition-all duration-500 transform group-hover:scale-110">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;