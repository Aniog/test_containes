import Button from '@/components/ui/Button'
import { company } from '@/data/site'

export default function CtaBand() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="max-w-2xl text-3xl md:text-4xl font-bold tracking-tight text-white">
            Ready to source from China with confidence?
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">
            Tell us about your product and target. We will return a transparent
            quotation with verified suppliers, usually within 1 business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button to="/contact" size="lg">
              Get a Free Sourcing Quote
            </Button>
            <Button href={`mailto:${company.email}`} variant="ghostLight" size="lg">
              Email Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
