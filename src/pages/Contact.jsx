import { Clock, Mail, MapPin, MessageSquare } from 'lucide-react'
import InquiryForm from '../components/forms/InquiryForm'
import FAQSection from '../components/site/FAQSection'
import PageHero from '../components/site/PageHero'

const Contact = () => (
  <main className="bg-white text-slate-900">
    <PageHero
      eyebrow="Contact"
      title="Send your sourcing inquiry"
      description="Tell SSourcing China what you need to source, verify, inspect, follow up, or ship. A clear brief helps us respond with useful next steps."
    />
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8">
        <aside className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">How we can help</h2>
          <div className="mt-6 space-y-5">
            <div className="flex gap-4">
              <PackageIcon />
              <div>
                <h3 className="font-semibold text-slate-950">Sourcing brief review</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Share product details, photos, quantity, target market, and timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 flex-none text-teal-700" />
              <div>
                <h3 className="font-semibold text-slate-950">China-based follow-up</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Supplier communication, factory checks, QC, and shipping coordination.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-6 w-6 flex-none text-teal-700" />
              <div>
                <h3 className="font-semibold text-slate-950">Clear next steps</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">We will review your inquiry and suggest a practical sourcing approach.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 h-6 w-6 flex-none text-teal-700" />
              <div>
                <h3 className="font-semibold text-slate-950">Professional English communication</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Useful for overseas buyers coordinating suppliers across time zones.</p>
              </div>
            </div>
          </div>
        </aside>
        <InquiryForm />
      </div>
    </section>
    <FAQSection />
  </main>
)

const PackageIcon = () => <MessageSquare className="mt-1 h-6 w-6 flex-none text-teal-700" />

export default Contact
