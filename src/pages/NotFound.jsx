import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 pt-24 bg-ivory">
      <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">404</p>
      <h1 className="font-serif text-5xl md:text-6xl text-ink">Page not found</h1>
      <p className="mt-4 text-sm text-stone max-w-sm">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-gold text-white text-[11px] uppercase tracking-widest2 font-medium px-9 py-4 hover:bg-gold-deep transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
