import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 px-6 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Start with a clear brief</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Need a practical sourcing partner in China for your next product or supplier review?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
              Tell us what you need to source, verify, inspect, or ship, and we will review the scope with a practical next-step recommendation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
