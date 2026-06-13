import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PageHero = ({ eyebrow, title, description, primaryLink = '/contact', primaryLabel = 'Get a Free Sourcing Quote', secondaryLink = '/services', secondaryLabel = 'View Services' }) => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            {eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to={primaryLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={secondaryLink}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-4 text-sm text-slate-600">
            <div className="rounded-3xl bg-slate-900 p-5 text-white">
              <p className="text-sm font-medium text-blue-100">What overseas buyers usually need</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                <li>Supplier screening and capability checks</li>
                <li>Factory verification before placing orders</li>
                <li>Inspection, production follow-up, and shipping coordination</li>
              </ul>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-emerald-700">Practical support</p>
                <p className="mt-2 leading-6 text-slate-700">Clear updates, issue follow-up, and sourcing coordination on the ground in China.</p>
              </div>
              <div className="rounded-3xl bg-amber-50 p-5">
                <p className="text-sm font-semibold text-amber-700">Focused on risk control</p>
                <p className="mt-2 leading-6 text-slate-700">Verification, QC, and production visibility to help buyers avoid costly surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
