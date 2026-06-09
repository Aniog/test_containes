import CTAButton from '@/components/site/CTAButton'

const metrics = [
  'Supplier search and shortlisting',
  'Factory verification and on-site checks',
  'QC, production follow-up, and shipment coordination',
]

const HeroSection = () => {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1.1fr)_30rem] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            SSourcing China
          </p>
          <h1
            className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl"
            id="home-hero-title">
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-xl"
            id="home-hero-description">
            We help overseas buyers find suitable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping from
            China with clear communication and practical execution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton arrow to="/contact">
              Get a Free Sourcing Quote
            </CTAButton>
            <CTAButton to="/services" variant="secondary">
              View Services
            </CTAButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
                key={metric}>
                {metric}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              alt="Factory quality inspection in China"
              className="h-72 w-full object-cover"
              data-strk-img-id="home-hero-main-3f2a1d"
              data-strk-img="[home-hero-description] [home-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                alt="Supplier verification and factory meeting"
                className="h-40 w-full object-cover"
                data-strk-img-id="home-hero-secondary-791ba0"
                data-strk-img="[home-hero-title] [home-hero-description]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Practical support
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight">
                Built for importers, distributors, brands, and procurement teams.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The focus is simple: reduce sourcing risk, improve visibility,
                and help you move forward with more confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
