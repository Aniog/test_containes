import { useStrkImages } from '@/hooks/useStrkImages';
import { StrkImg } from '@/components/ui/StrkImg';
import { CATEGORIES } from '@/data/products';

export function CategoriesSection() {
  const containerRef = useStrkImages();

  return (
    <section ref={containerRef} className="bg-velmora-cream px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-dark">
            Shop by Category
          </p>
          <h2 className="font-serif text-4xl font-light text-velmora-espresso md:text-5xl">
            Find Your Shine
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-champagne"
            >
              <StrkImg
                id={category.imageId}
                query={category.query}
                ratio={category.ratio}
                width={category.width}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-espresso/20 transition-colors duration-300 group-hover:bg-velmora-espresso/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <span id={`category-${category.id}-name`} className="sr-only">
                    {category.name}
                  </span>
                  <h3 className="font-serif text-3xl font-light md:text-4xl">
                    {category.name}
                  </h3>
                  <span className="mt-3 inline-block translate-y-2 opacity-0 font-display text-xs font-medium uppercase tracking-widest transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Shop Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
