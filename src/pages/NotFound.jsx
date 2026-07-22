import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-5 bg-ivory px-5 pt-32 text-center">
      <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
        404
      </span>
      <h1 className="font-serif text-5xl font-light text-espresso md:text-6xl">
        Lost in the edit
      </h1>
      <p className="max-w-md text-[15px] leading-relaxed text-espresso-soft">
        We can't find the page you were looking for. Return to the collection
        and find something new.
      </p>
      <Link
        to="/shop"
        className="mt-3 inline-flex items-center gap-2 bg-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors hover:bg-espresso-soft"
      >
        Back to Shop
      </Link>
    </section>
  );
}
