import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 text-center px-5 bg-cream min-h-[60vh]">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-4">404</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Page Not Found</h1>
      <p className="text-clay mb-8 max-w-md mx-auto">
        The page youre looking for doesnt exist. Return to discover our latest collection.
      </p>
      <Link
        to="/"
        className="inline-block bg-gold-600 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-700 transition-colors"
      >
        Back Home
      </Link>
    </div>
  );
}
