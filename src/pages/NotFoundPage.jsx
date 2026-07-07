import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-3">
        404
      </p>
      <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted max-w-md mx-auto">
        The page you were looking for has wandered off. Let's get you back.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-ink text-ivory text-[12px] uppercase tracking-editorial px-8 py-4 hover:bg-champagne transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}
