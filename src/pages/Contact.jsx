import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import InquiryForm from '../components/common/InquiryForm.jsx'
import PageHero from '../components/common/PageHero.jsx'

const Contact = () => (
  <main className="bg-slate-50 text-slate-950">
    <PageHero
      eyebrow="Contact"
      title="Get a Free Sourcing Quote"
      description="Send your product requirements and sourcing goals. SSourcing China will review the details and respond with practical next steps for supplier search, factory verification, QC, production follow-up, or shipping coordination."
    />

    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Before you submit</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The more specific your brief is, the easier it is to evaluate whether we can help and which sourcing path makes sense.
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-slate-700">
              {['Product specifications, drawings, photos, or reference links', 'Estimated quantity, target market, and required certifications', 'Target timeline, preferred shipping method, and current supplier concerns'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold text-white">Based in China</p>
                <p className="mt-1 text-sm text-slate-300">Local supplier communication and factory coordination</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold text-white">Inquiry response</p>
                <p className="mt-1 text-sm text-slate-300">We review product fit, required support, and next steps</p>
              </div>
            </div>
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  </main>
)

export default Contact
