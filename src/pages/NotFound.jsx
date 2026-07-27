import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NotFound = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">404</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
      >
        <ArrowLeft className="h-4 w-4" /> Back to the homepage
      </Link>
    </div>
  </section>
)

export default NotFound
