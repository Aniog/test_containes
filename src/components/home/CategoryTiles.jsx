import { Link } from 'react-router-dom';
import { StockImage } from '@/components/ui/StockImage';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const categoryTiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings collection flatlay jewelry',
    imgId: 'cat-earrings-x1y2z3',
    href: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklaces collection flatlay jewelry',
    imgId: 'cat-necklaces-a4b5c6',
    href: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie earrings collection flatlay',
    imgId: 'cat-huggies-d7e8f9',
    href: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">Shop by Category</h2>
          <p className="text-sm text-muted-foreground tracking-wide">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat, index) => (
            <Link
              key={cat.id}
              to={cat.href}
              className={`group relative aspect-[4/5] bg-[#2a2520] overflow-hidden cursor-pointer reveal reveal-delay-${index + 1}`}
            >
              <StockImage
                imgId={cat.imgId}
                query={cat.query}
                ratio="4x5"
                width="600"
                alt={cat.label}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="product-name text-white text-xl md:text-2xl tracking-widest mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {cat.label}
                  </h3>
                  <span className="text-white/70 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-block border-b border-white/50 pb-0.5">
                    Explore
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
