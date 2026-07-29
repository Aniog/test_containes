import { Mail, MapPin, MessageSquare } from 'lucide-react'
import InquiryForm from '../InquiryForm'

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-sourcing-cloud py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="lg:pt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sourcing-blue">Get a Free Sourcing Quote</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sourcing-navy md:text-4xl">
            Tell us what you need to source from China
          </h2>
          <p className="mt-4 text-lg leading-8 text-sourcing-muted">
            Share your product requirements and sourcing goals. We will review the details and suggest practical next steps for supplier search, verification, QC, or shipping coordination.
          </p>
          <div className="mt-8 space-y-4 text-sourcing-ink">
            <div className="flex gap-3"><MapPin className="h-6 w-6 text-sourcing-blue" /><span>China-based sourcing support for global buyers</span></div>
            <div className="flex gap-3"><Mail className="h-6 w-6 text-sourcing-blue" /><span>Business inquiry response with practical questions and next steps</span></div>
            <div className="flex gap-3"><MessageSquare className="h-6 w-6 text-sourcing-blue" /><span>Clear English communication throughout the sourcing process</span></div>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}
