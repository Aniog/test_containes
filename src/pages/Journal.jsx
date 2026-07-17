import { Link } from 'react-router-dom';

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto section-padding text-center">
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-gold mb-4">Journal</p>
        <h1 className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide">
          Stories & Inspiration
        </h1>
        <p className="mt-6 font-sans text-sm text-brand-muted leading-relaxed">
          Coming soon — styling guides, behind-the-scenes stories, and inspiration for wearing your Velmora pieces.
        </p>
        <Link to="/shop" className="inline-block mt-10 btn-outline text-xs">
          Shop the Collection
        </Link>
      </div>
    </div>
  );
}
