import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-32">
      <div className="surface-panel max-w-xl space-y-6 p-10 text-center">
        <p className="eyebrow text-amber-200">Page not found</p>
        <h1 className="font-display text-5xl text-stone-100 sm:text-6xl">
          This piece is no longer on display.
        </h1>
        <p className="text-base leading-7 text-stone-300">
          The page you were looking for may have moved, but the collection is
          still waiting for you.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="button-primary justify-center" to="/shop">
            Shop the collection
          </Link>
          <Link className="button-secondary justify-center" to="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
