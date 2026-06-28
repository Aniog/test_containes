import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex min-h-[70svh] items-center px-4 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-sand bg-ivory p-10 text-center text-ink shadow-soft">
        <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Not found</p>
        <h1 className="mt-4 font-serif text-5xl">This piece has moved</h1>
        <p className="mt-4 text-base leading-7 text-ink/68">
          The page you’re looking for isn’t here, but the collection is still waiting.
        </p>
        <Link
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-medium text-ink transition hover:bg-gold-deep"
          to="/shop"
        >
          Return to Shop
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
