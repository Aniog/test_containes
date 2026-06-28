import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="flex min-h-[60vh] items-center bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          The page you requested is not available.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          You can return to the homepage or continue to the contact page to request sourcing support.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            <span className="text-white">Back to Home</span>
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
