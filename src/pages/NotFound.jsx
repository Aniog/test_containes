import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-bone pt-28 pb-16 text-center">
      <div className="mx-auto max-w-md px-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
          404
        </p>
        <h1 className="mt-3 font-serif text-5xl font-light tracking-tight text-espresso sm:text-6xl">
          A quiet dead end.
        </h1>
        <p className="mt-5 text-sm text-mink">
          We can't find the page you're looking for. Try the collection
          instead.
        </p>
        <Link
          to="/shop"
          className="group mt-8 inline-flex items-center gap-2 border border-espresso px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso transition-colors duration-300 hover:bg-espresso hover:text-bone"
        >
          Shop the Collection
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </div>
  );
}
