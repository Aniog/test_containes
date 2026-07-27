import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="bg-accent">
      <div className="container-main py-16 md:py-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Source from China?
            </h2>
            <p className="mt-3 text-slate-100">
              Tell us what you need. We will get back to you within 24 hours with a clear plan and a free quote.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@ssourcingchina.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +86 755 8888 8888
              </span>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-slate-100">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
