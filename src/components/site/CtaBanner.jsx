import { Link } from 'react-router-dom'

import { companyDetails } from '@/content/siteContent'

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-brand-ink px-6 py-10 text-white shadow-card md:px-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Need a dependable sourcing team on the ground in China?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200">
                Send your product brief and we will recommend the most suitable sourcing support for your project.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-slate-100"
            >
              {companyDetails.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
