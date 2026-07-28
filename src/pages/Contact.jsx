import { CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/site/InquiryForm'
import { contactDetails } from '@/siteData'

const inquiryChecklist = [
  'Product name or category and key specifications',
  'Estimated quantity, MOQ expectations, and target price range',
  'Quality, packaging, labeling, or compliance requirements',
  'Target market, timing, and any current supplier concerns',
]

function Contact() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Start your sourcing inquiry with SSourcing China
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
              Share your product brief, quantity, timeline, and any supplier or quality concerns. We will review the request and outline a practical next step.
            </p>
            <div className="mt-8 rounded-[2rem] border border-sky-200 bg-sky-50 p-6 text-slate-700">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Best fit for</p>
              <p className="mt-3 text-base leading-7">
                Buyers who need supplier sourcing, factory verification, quality control support, production follow-up, or shipping coordination from China.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">What to include in your inquiry</p>
            <div className="mt-6 space-y-4">
              {inquiryChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-sky-300" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">Typical needs</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  New supplier search, current supplier verification, pre-shipment inspection, or production follow-up support.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">Working style</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Clear communication, practical reporting, and sourcing support built around real purchasing decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Contact details</p>
            <div className="mt-6 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  )
}

export default Contact
