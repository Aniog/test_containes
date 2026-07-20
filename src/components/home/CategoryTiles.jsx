import { Link } from 'react-router-dom';

const placeholders = {
  Earrings: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D4C9B8"/><stop offset="100%" stop-color="#B8A88A"/></linearGradient></defs><rect fill="url(#g)" width="400" height="500"/></svg>'),
  Necklaces: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C9BFB1"/><stop offset="100%" stop-color="#A89880"/></linearGradient></defs><rect fill="url(#g)" width="400" height="500"/></svg>'),
  Huggies: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#DDD5C5"/><stop offset="100%" stop-color="#C4B599"/></linearGradient></defs><rect fill="url(#g)" width="400" height="500"/></svg>'),
};

const categories = [
  { name: 'Earrings', query: 'Earrings', image: placeholders.Earrings },
  { name: 'Necklaces', query: 'Necklaces', image: placeholders.Necklaces },
  { name: 'Huggies', query: 'Huggies', image: placeholders.Huggies },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-subhead mb-3">Shop By</p>
          <h2 className="section-heading">Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.query}`}
              className="group relative aspect-[4/5] bg-velmora-sand/30 overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect fill="%23E8E0D5" width="400" height="500"/></svg>';
                }}
              />
              <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transform transition-transform duration-500">
                  {cat.name}
                </span>
              </div>
              <span className="absolute bottom-5 left-5 font-serif text-xl tracking-[0.12em] text-white md:group-hover:opacity-0 transition-opacity duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
