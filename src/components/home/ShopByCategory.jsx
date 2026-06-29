import { Link } from 'react-router-dom';

const categories = [
  {
    label: 'Earrings',
    to: '/shop?category=earrings',
    query: 'gold earrings collection on display warm light luxury jewelry editorial',
  },
  {
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    query: 'gold necklace pendant collection on display warm light luxury jewelry',
  },
  {
    label: 'Huggies',
    to: '/shop?category=huggies',
    query: 'gold huggie hoop earrings collection on display warm light luxury',
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-velmora-bg-alt py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold-dark mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text-dark font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.to}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.label.toLowerCase()}`}
                data-strk-img={`[${cat.label.toLowerCase()}-label] ${cat.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-bg/30 group-hover:bg-velmora-bg/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span
                    id={`${cat.label.toLowerCase()}-label`}
                    className="font-serif text-3xl md:text-4xl text-velmora-text tracking-[0.1em] font-light"
                  >
                    {cat.label}
                  </span>
                  <div className="mt-2 w-8 h-px bg-velmora-gold mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
