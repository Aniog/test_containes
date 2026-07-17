import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream pt-32 pb-20">
      <div className="text-center px-5">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Lost in the studio.</h1>
        <p className="mt-4 text-base text-ink-soft max-w-md mx-auto">
          The piece you're looking for is either hidden away in our atelier or has already found a new home.
        </p>
        <Link to="/shop" className="mt-8 btn-primary btn-gold">
          Back to the Collection
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
