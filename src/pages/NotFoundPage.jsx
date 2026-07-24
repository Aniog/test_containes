import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-velmora-porcelain px-4 py-24 text-center text-velmora-espresso">
      <div className="max-w-xl">
        <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Velmora</p>
        <h1 className="mt-4 font-serif text-6xl text-velmora-espresso">This page slipped from the jewelry box.</h1>
        <p className="mt-5 text-base leading-8 text-velmora-cocoa">Return to the storefront to continue exploring demi-fine gold pieces.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-velmora-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-softgold"
        >
          Back home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
