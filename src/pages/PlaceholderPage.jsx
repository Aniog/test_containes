import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title, subtitle }) {
  return (
    <main className="pt-24 bg-cream-50 min-h-screen">
      <div className="max-w-[1400px] mx-auto section-padding py-20 text-center">
        <div className="divider-gold mx-auto mb-8" />
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-400 tracking-wide mb-4">
          {title}
        </h1>
        <p className="text-sm text-charcoal-50 max-w-md mx-auto mb-10">
          {subtitle || 'This page is coming soon. In the meantime, explore our collection.'}
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>
    </main>
  );
}
