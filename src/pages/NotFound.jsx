import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-32">
      <div className="rounded-[2rem] border border-velmora-mist/20 bg-white/80 px-8 py-10 text-center shadow-soft">
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-mist">404</p>
        <h1 className="mt-3 font-display text-5xl text-velmora-ink">
          This page slipped away
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-velmora-rose">
          Return to the Velmora storefront to continue exploring the collection.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-parchment transition hover:bg-velmora-cacao"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
