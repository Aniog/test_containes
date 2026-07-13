import { Link } from 'react-router-dom';

const categories = [
  {
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-img-e4f5g6',
    titleId: 'cat-earrings-title-e4f5g6',
    descId: 'cat-earrings-desc-e4f5g6',
    title: 'Earrings',
    desc: 'Gold earrings jewelry collection editorial flat lay',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-h7i8j9',
    titleId: 'cat-necklaces-title-h7i8j9',
    descId: 'cat-necklaces-desc-h7i8j9',
    title: 'Necklaces',
    desc: 'Gold necklace pendant jewelry collection editorial',
  },
  {
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-k1l2m3',
    titleId: 'cat-huggies-title-k1l2m3',
    descId: 'cat-huggies-desc-k1l2m3',
    title: 'Huggies',
    desc: 'Gold huggie hoop earrings jewelry close up editorial',
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-espresso">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.title}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3 className="font-serif font-medium text-3xl text-ivory uppercase tracking-widest">
                  {cat.label}
                </h3>
                <span className="mt-3 font-sans text-[10px] font-medium uppercase tracking-widest text-ivory/70 border-b border-ivory/40 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
