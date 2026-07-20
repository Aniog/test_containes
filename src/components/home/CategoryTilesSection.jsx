import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

const tiles = [
  { id: 'earrings', label: 'Earrings', href: '/shop?category=earrings' },
  { id: 'necklaces', label: 'Necklaces', href: '/shop?category=necklaces' },
  { id: 'huggies', label: 'Huggies', href: '/shop?category=huggies' },
];

export function CategoryTilesSection() {
  const sectionId = 'category-tiles';
  const ref = useImageLoader([]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-extra-wide text-muted mb-3">Shop By</p>
          <h2
            id={`${sectionId}-title`}
            className="font-serif text-3xl md:text-5xl font-light text-foreground"
          >
            Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              aria-label={tile.label}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cream"
            >
              <img
                data-strk-img-id={`category-${tile.id}`}
                data-strk-img={`[${tile.id}-label] [${sectionId}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`${tile.id}-label`}
                    className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                  >
                    {tile.label}
                  </h3>
                  <div className="mt-3 mx-auto w-8 h-px bg-white/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
