import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-slate-800 bg-slate-900 px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Start with a clear brief
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Need a practical sourcing partner in China?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Tell us what you need to source, verify, inspect, or ship. We will review your
            request and help you decide the most suitable support.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Get a Free Sourcing Quote
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
