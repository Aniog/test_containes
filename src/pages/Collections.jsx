import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';

const COLLECTIONS = [
  {
    name: 'The Everyday Edit',
    desc: 'Huggies, studs and fine chains — the quiet workhorses of a jewelry box.',
    to: '/shop?category=Huggies',
    query: 'minimal flat lay of everyday gold huggie earrings and fine chain necklace on warm ivory linen, editorial',
  },
  {
    name: 'Evening Light',
    desc: 'Crystal-kissed drops and filigree that catch candlelight beautifully.',
    to: '/shop?category=Earrings',
    query: 'elegant gold drop earrings with crystals on dark silk fabric, warm evening light, editorial luxury',
  },
  {
    name: 'The Gift Atelier',
    desc: 'Boxed, ribboned and ready — heirloom-feeling sets for the ones you love.',
    to: '/shop?category=Sets',
    query: 'luxurious linen jewelry gift box with gold earring and necklace set, hand-tied ribbon, warm tones',
  },
  {
    name: 'Layering Library',
    desc: 'Necklaces in graduated lengths, made to stack without tangling.',
    to: '/shop?category=Necklaces',
    query: 'layered delicate gold necklaces draped over warm stone pedestal, editorial jewelry photography',
  },
];

export default function Collections() {
  return (
    <div className="pt-16 md:pt-[72px]">
      <div className="border-b border-linen bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-10 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">Curated for You</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-espresso md:text-5xl">Collections</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-mink">
            Small, intentional edits — each piece chosen to be worn together, or entirely alone.
          </p>
        </div>
      </div>

      <ImageScope className="mx-auto grid max-w-7xl gap-4 px-5 py-14 md:grid-cols-2 md:gap-6 md:px-10 md:py-20">
        {COLLECTIONS.map((c, i) => (
          <Link
            key={c.name}
            to={c.to}
            className="group relative block overflow-hidden bg-espresso animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <StrkImg
              imgId={`collection-${i}`}
              query={c.query}
              ratio="3x2"
              width={1000}
              alt={c.name}
              className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-75"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <h2 className="font-serif text-2xl uppercase tracking-[0.16em] text-ivory md:text-3xl">
                {c.name}
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/80">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-luxe text-bronze-light transition-all duration-300 group-hover:gap-3">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </ImageScope>
    </div>
  );
}
