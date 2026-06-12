import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Ready to source from China with confidence?',
  subtitle = 'Tell us your product. We\'ll come back with a shortlist of vetted factories.',
  primary = { label: 'Get a Free Sourcing Quote', to: '/contact' },
  secondary = { label: 'See our process', to: '/how-it-works' },
}) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-blue-600 px-6 py-12 text-center text-white md:px-12 md:py-16 lg:text-left">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
              <p className="mt-3 text-base text-blue-100 md:text-lg">{subtitle}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <Link
                to={primary.to}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/0 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
