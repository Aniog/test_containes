import { Link } from "react-router-dom";

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20 bg-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">
          The Journal
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">
          Stories from the Studio
        </h1>
        <p className="mt-6 text-ink/75 leading-relaxed">
          Styling notes, care guides, and the craft behind every piece. Our
          journal is coming soon — in the meantime, explore the collection.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep transition-colors"
        >
          Shop the Collection →
        </Link>
      </div>
    </div>
  );
}
