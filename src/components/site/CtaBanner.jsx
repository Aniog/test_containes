import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { buttonClassName } from '@/components/ui/Button'

export default function CtaBanner() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-blue-700 px-6 py-10 text-white shadow-lg md:px-10 md:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Ready to discuss your sourcing project?
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Share your requirements and get a practical sourcing response.
              </h2>
              <p className="text-base leading-7 text-blue-50 md:text-lg">
                Tell us what product you need, what stage you are at, and what support you want from supplier search to shipping coordination.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              <Link
                to="/contact"
                className={buttonClassName({
                  variant: 'secondary',
                  size: 'lg',
                  className:
                    'border-white bg-white text-blue-700 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-800',
                })}
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-blue-100">
                Suitable for brands, importers, wholesalers, and procurement teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
