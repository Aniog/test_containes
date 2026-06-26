import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner({
  title = 'Ready to source from China with confidence?',
  description = 'Tell us what you need. We will reply with a clear sourcing plan and a free quote within 24 hours.',
  buttonText = 'Get a Free Sourcing Quote',
}) {
  return (
    <section className="bg-brand-800 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-800 font-semibold hover:bg-blue-50 transition"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
