import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-velmora-cream text-velmora-espresso px-4">
      <h1 className="font-serif text-5xl md:text-7xl mb-4">404</h1>
      <p className="text-velmora-stone mb-8 text-center">
        We could not find the page you were looking for.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-velmora-gold text-white text-sm uppercase tracking-[0.14em] hover:bg-velmora-gold-dark transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
