import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">This page is not available.</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Please return to the homepage or use the navigation to continue exploring SSourcing China.
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
