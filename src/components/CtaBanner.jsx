import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner({ title, subtitle, buttonText = 'Get a Free Sourcing Quote', buttonLink = '/contact' }) {
  return (
    <section className="bg-brand">
      <div className="section-container py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="text-lg md:text-xl text-blue-100 mt-4 leading-relaxed">{subtitle}</p>}
          <div className="mt-8">
            <Link to={buttonLink} className="inline-flex items-center gap-2 bg-white text-brand hover:bg-blue-50 font-bold rounded-lg px-8 py-4 transition-colors">
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
