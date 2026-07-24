import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-4 text-center">
      <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-4">404</p>
      <h1 className="font-serif text-5xl md:text-6xl text-obsidian font-light mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-warm-gray font-sans mb-8 max-w-sm">
        The page you're looking for doesn't exist. Let's get you back to something beautiful.
      </p>
      <Link
        to="/"
        className="font-sans text-xs tracking-widest uppercase bg-champagne text-obsidian px-8 py-4 hover:bg-champagne-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
