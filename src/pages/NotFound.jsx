import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink-500 sm:text-6xl">
        A little lost?
      </h1>
      <p className="mt-4 max-w-md font-serif text-[18px] text-ink-300">
        The page you were looking for has wandered off. Let's get you back to
        the collection.
      </p>
      <Link to="/shop" className="btn-primary mt-8">
        Shop the Collection
        <ArrowRight size={14} strokeWidth={1.5} />
      </Link>
    </div>
  )
}
