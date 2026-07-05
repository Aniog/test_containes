import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="pt-16 md:pt-20 min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-serif text-7xl md:text-8xl text-gold">404</p>
        <h1 className="font-serif text-3xl md:text-4xl mt-4">Page Not Found</h1>
        <p className="mt-4 text-stone">This page seems to have slipped off the chain.</p>
        <Link
          to="/"
          className="inline-block mt-8 bg-gold text-cream px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] hover:bg-gold-deep transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
