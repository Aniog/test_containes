import QuoteForm from '@/components/shared/QuoteForm'
import SectionLabel from '@/components/shared/SectionLabel'

export default function InquirySection() {
  return (
    <section id="quote" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionLabel>Start Your Project</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Tell us what you are looking for. Our team will review your inquiry and respond with next steps, usually within 24 hours.
            </p>
            <ul className="mt-8 space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                No commitment required
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Tailored supplier recommendations
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Clear timeline and service options
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
