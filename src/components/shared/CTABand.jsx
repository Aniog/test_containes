import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTABand = ({
  title = 'Ready to source from China with confidence?',
  text = 'Tell us about your product and get a free, no-obligation sourcing quote within one working day.',
}) => (
  <section className="bg-slate-900">
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">{text}</p>
      </div>
      <Link
        to="/contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-md bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
)

export default CTABand
