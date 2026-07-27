import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand({
  title = 'Ready to source from China with confidence?',
  text = 'Send us your product brief and receive a clear sourcing plan and fee proposal within one business day.',
}) {
  return (
    <section className="bg-primary-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-primary-100">{text}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
          >
            Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
