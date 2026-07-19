import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="pt-32 pb-32 bg-cream-100 min-h-[60vh]">
      <div className="container-wide text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl text-espresso-300">
          This page is between shoots.
        </h1>
        <p className="mt-4 text-muted max-w-md mx-auto">
          We couldn't find what you were looking for. Take a look at the
          latest collection instead.
        </p>
        <Link to="/shop" className="mt-8 inline-block btn-primary">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
