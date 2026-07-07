import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 px-4 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">404</p>
        <h1 className="mt-4 font-serif-display text-5xl text-stone-950">Page not found</h1>
        <p className="mt-4 max-w-md text-base leading-7 text-stone-600">
          The page you are looking for is no longer here. Explore the latest Velmora collection instead.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full border border-stone-300 px-5 py-3 text-xs uppercase tracking-[0.3em] text-stone-900 transition hover:bg-stone-100"
        >
          Visit shop
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
