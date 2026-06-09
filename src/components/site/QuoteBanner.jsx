import { Link } from 'react-router-dom'

const QuoteBanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-slate-100 shadow-sm md:px-12 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Get started</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Need a reliable sourcing partner in China?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                Send your product details, quantity, target market, and current sourcing stage. We will suggest the most practical next step.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteBanner
