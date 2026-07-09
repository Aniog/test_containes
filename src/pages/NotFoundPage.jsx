import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-stone-100 px-4 pt-28 text-center sm:px-6 lg:px-8">
      <div className="max-w-xl rounded-[2rem] border border-stone-200 bg-stone-50 p-10 shadow-xl shadow-stone-900/5">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-600">404</p>
        <h1 className="mt-4 font-display text-5xl text-stone-950">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          The page you were looking for has drifted out of the collection.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-50 transition hover:bg-amber-400 hover:text-stone-950"
        >
          Return Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
