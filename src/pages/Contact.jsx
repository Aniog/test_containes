import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import InquiryForm from '@/components/common/InquiryForm.jsx?ssourcing=20260728'

const Contact = () => (
  <section className="bg-slate-50 py-16 text-slate-950 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Contact</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Get a Free Sourcing Quote</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          Send your product brief, supplier link, inspection need, or shipping coordination question. We will review the details and suggest the most practical next step.
        </p>
        <div className="mt-8 space-y-4">
          {[
            { icon: Mail, title: 'Email', text: 'inquiries@ssourcingchina.com' },
            { icon: Phone, title: 'Callback', text: 'Request a call through the form' },
            { icon: MapPin, title: 'Location', text: 'China-based sourcing support' },
            { icon: MessageSquare, title: 'Response details', text: 'Include specifications, quantity, target market, and timeline' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <InquiryForm />
    </div>
  </section>
)

export default Contact
