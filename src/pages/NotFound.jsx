import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-bone min-h-screen pt-24 md:pt-28 pb-20 flex items-center justify-center">
      <div className="px-6 text-center max-w-lg">
        <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-4">
          Page Not Found
        </p>
        <h1 className="font-serif text-ink text-5xl md:text-7xl font-light leading-tight mb-6">
          A quiet
          <br />
          <span className="italic">404.</span>
        </h1>
        <p className="text-ink/75 text-base md:text-lg leading-relaxed mb-10">
          The page you're looking for has wandered off. Let's get you back.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-block bg-ink text-bone px-8 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold-deep transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink px-8 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-ink hover:text-bone transition-colors"
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
