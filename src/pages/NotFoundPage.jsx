import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
          Page not found
        </p>
        <h1 className="mt-6 font-display text-5xl text-velmora-ink sm:text-6xl">
          A treasured page seems to have slipped away.
        </h1>
        <p className="mt-6 text-base leading-7 text-velmora-smoke">
          Return to the storefront to continue exploring Velmora’s demi-fine favorites.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center border border-velmora-gold bg-velmora-gold px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ink transition duration-300 hover:bg-velmora-bronze hover:text-velmora-ivory"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
