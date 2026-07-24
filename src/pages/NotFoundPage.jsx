import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <p className="font-serif text-7xl md:text-8xl text-ink">404</p>
      <h1 className="font-serif text-3xl text-ink mt-4">Page not found</h1>
      <p className="mt-3 text-stone max-w-sm">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link
        to="/"
        className="mt-8 px-10 py-4 bg-ink text-cream text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  )
}
