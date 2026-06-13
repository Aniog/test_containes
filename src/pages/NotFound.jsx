import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center md:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">
        The page you are looking for is not available.
      </h1>
      <p className="mt-6 text-base leading-7 text-slate-600">
        Please return to the homepage or use the contact page if you want to discuss a sourcing requirement.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
      >
        Back to Home
      </Link>
    </main>
  )
}

export default NotFound
