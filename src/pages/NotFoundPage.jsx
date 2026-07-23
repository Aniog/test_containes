import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center pt-28 pb-20 text-center">
      <div className="max-w-xl rounded-[32px] border border-velmora-sand/70 bg-white/70 px-8 py-12 shadow-velmora">
        <p className="eyebrow-label mb-3">Page not found</p>
        <h1 className="text-5xl leading-none text-velmora-ink">The piece you are looking for has moved.</h1>
        <p className="mt-5 text-base leading-7 text-velmora-mocha">
          Return to the main collection and continue browsing Velmora favorites.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-velmora-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold-deep"
        >
          Back to shop
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
