import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTASection = ({ title, description, dark = false }) => {
  const sectionClass = dark
    ? 'bg-slate-950 text-white'
    : 'rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm'

  const descriptionClass = dark ? 'text-slate-300' : 'text-slate-600'
  const buttonClass = dark
    ? 'bg-white text-slate-900 hover:bg-slate-100'
    : 'bg-sky-700 text-white hover:bg-sky-800'

  return (
    <section className={dark ? 'py-16 md:py-24' : ''}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`${sectionClass} px-6 py-10 md:px-10 md:py-12`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
              <p className={`mt-4 text-base leading-7 ${descriptionClass}`}>
                {description}
              </p>
            </div>
            <div>
              <Link
                to="/contact#inquiry-form"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${buttonClass}`}
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
