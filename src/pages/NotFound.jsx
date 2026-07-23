import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">404</p>
      <h1 className="mt-4 font-display text-5xl text-neutral-950 sm:text-6xl">
        This page slipped out of the jewelry box.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-stone-600">
        Head back to Velmora’s storefront to continue browsing demi-fine pieces.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-4 text-sm uppercase tracking-[0.28em] text-stone-50"
        to="/"
      >
        Return home
      </Link>
    </section>
  )
}

export default NotFound
