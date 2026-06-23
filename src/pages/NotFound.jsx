import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-20 text-slate-900">
    <div className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Page not found</p>
      <h1 className="mt-4 text-4xl font-bold text-slate-950">This page is not available</h1>
      <p className="mt-4 text-slate-700">Return to the homepage or send your sourcing inquiry through the contact page.</p>
      <Link className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-950" to="/">
        Back to homepage
      </Link>
    </div>
  </main>
)

export default NotFound
