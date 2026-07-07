import { Link } from 'react-router-dom';
import StrkImage from '@/components/ui/StrkImage';

const collections = [
  {
    id: 'demi-fine-gold',
    title: 'The Demi-Fine Gold Edit',
    subtitle: 'Everyday pieces in warm 18k gold plate',
    href: '/shop',
  },
  {
    id: 'gifts',
    title: 'Gifts for Her',
    subtitle: 'Curated sets and timeless singles',
    href: '/shop?category=sets',
  },
  {
    id: 'earrings',
    title: 'The Earring Shop',
    subtitle: 'Huggies, drops, and cuffs',
    href: '/shop?category=earrings',
  },
];

export default function Collections() {
  return (
    <div className="min-h-screen bg-cream pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Curated Edits
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
            Collections
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.href}
              className="group relative aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <StrkImage
                id={`collection-${collection.id}`}
                query={`[collection-subtitle-${collection.id}] [collection-title-${collection.id}]`}
                ratio="3x4"
                width={700}
                alt={collection.title}
                className="opacity-85 transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-ivory">
                <p
                  id={`collection-subtitle-${collection.id}`}
                  className="text-xs uppercase tracking-widest text-gold-light"
                >
                  {collection.subtitle}
                </p>
                <h2
                  id={`collection-title-${collection.id}`}
                  className="mt-2 font-serif text-2xl font-light"
                >
                  {collection.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
