import { Mail, MapPin, MessageSquare } from 'lucide-react'
import PageIntro from '../components/common/PageIntro'
import InquiryForm from '../components/sections/InquiryForm'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Request a sourcing quote" text="Send your product brief and commercial requirements. SSourcing China will review the details and suggest practical next steps for sourcing, verification, inspection, follow-up, or shipping coordination." cta={false} />
      <section className="bg-slate-100 py-16 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold text-white">What to include</h2>
            <p className="mt-4 text-sm leading-7 text-white/78">The more specific your brief, the more accurate the supplier search and project review can be.</p>
            <div className="mt-8 space-y-5">
              {[
                [MessageSquare, 'Product details', 'Specifications, reference photos, materials, size, standards, and packaging.'],
                [MapPin, 'Destination', 'Target country, port, warehouse, or FBA requirements.'],
                [Mail, 'Commercial context', 'Quantity, budget range, timeline, and current supplier issues if any.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <Icon className="h-6 w-6 flex-none text-amber-500" />
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/75">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <InquiryForm sourcePage="contact" />
        </div>
      </section>
    </>
  )
}
