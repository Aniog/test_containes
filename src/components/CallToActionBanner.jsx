import { Link } from 'react-router-dom'

const CallToActionBanner = () => {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
            Ready to start
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get practical sourcing support from China, with clear next steps.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            Tell us what you need to source, what risks you want checked, and where you need support in the process.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </section>
  )
}

export default CallToActionBanner
