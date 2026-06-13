import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta.js'

const NotFound = () => {
  usePageMeta('Page Not Found | SSourcing China', 'The requested page could not be found on SSourcing China.')

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Page not found
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
          Please return to the homepage or contact us if you are looking for sourcing support in China.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
