import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    href: '/shop?category=earrings',
    query: 'gold earrings collection elegant display warm',
    imgId: 'cat-earrings-img',
    titleId: 'cat-earrings-title',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    href: '/shop?category=necklaces',
    query: 'gold necklaces collection elegant display warm',
    imgId: 'cat-necklaces-img',
    titleId: 'cat-necklaces-title',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    href: '/shop?category=huggies',
    query: 'gold huggie earrings collection elegant display warm',
    imgId: 'cat-huggies-img',
    titleId: 'cat-huggies-title',
  },
];

export default function Categories() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="section-title text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] ${cat.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl text-white font-light mb-2"
                  >
                    {cat.name}
                  </h3>
                  <span className="inline-block text-white text-xs tracking-widest uppercase border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
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
