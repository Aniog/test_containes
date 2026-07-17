import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="container-content py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">
        We can't find that page.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft md:text-base">
        The page you're looking for may have moved. Try the collection instead.
      </p>
      <Link
        to="/shop"
        className="mt-7 inline-flex items-center justify-center bg-gold px-8 py-4 cta-label text-ivory transition-colors hover:bg-gold-deep"
      >
        Shop the Collection
      </Link>
    </div>
  );
}

export default NotFound;
