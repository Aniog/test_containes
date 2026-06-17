import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const NotFound = () => {
  return (
    <section className="bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-32 md:py-40 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-6">404</p>
        <h1 className="font-serif font-light text-5xl md:text-6xl tracking-tight text-neutral-950">
          Page not found.
        </h1>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          The page you&rsquo;re looking for has been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 bg-neutral-950 text-neutral-50 px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition"
        >
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default NotFound
