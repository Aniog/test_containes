import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-navy">
      <div className="container-page py-14 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-3 text-slate-300">
              Tell us about your product and target price. We will send a free sourcing quote with a transparent service fee — no commitment required.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
