import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-espresso px-4">
      <h1 className="font-serif text-5xl mb-4">404</h1>
      <p className="text-taupe mb-8">This page could not be found.</p>
      <Link
        to="/"
        className="bg-espresso text-cream px-8 py-3 text-xs uppercase tracking-extra-wide hover:bg-gold transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
