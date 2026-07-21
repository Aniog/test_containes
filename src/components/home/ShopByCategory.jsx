import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    imgId: 'category-earrings-gold',
    query: 'gold earrings collection elegant display',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    imgId: 'category-necklaces-gold',
    query: 'gold necklace elegant display warm',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    imgId: 'category-huggies-gold',
    query: 'gold huggie earrings collection display',
    ratio: '4x3',
    width: '800',
  },
];

export default function ShopByCategory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Explore</p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wider mb-4">
          SHOP BY CATEGORY
        </h2>
        <div className="w-12 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.id === 'huggies' ? '/shop?category=earrings&subcategory=huggies' : `/shop?category=${cat.id}`}
            className="group relative aspect-[4/3] bg-velvet-200 overflow-hidden"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[cat-${cat.id}-label]`}
              data-strk-img-ratio={cat.ratio}
              data-strk-img-width={cat.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velvet-950/0 group-hover:bg-velvet-950/30 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-${cat.id}-label`}
                className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}