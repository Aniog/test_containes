import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much do your sourcing services cost?',
    a: 'Our pricing is transparent and project-based. We charge a service fee that typically ranges from 5–10% of the order value, depending on product complexity, order volume, and services required. Larger orders and ongoing relationships benefit from reduced rates. We provide a clear quote upfront — no hidden fees.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you work with?',
    a: 'We work with both small and large buyers. For trial orders, we can typically negotiate lower MOQs with our supplier network. As a guideline, we recommend a minimum order value of $5,000 to make the sourcing process cost-effective, but we evaluate each inquiry individually.',
  },
  {
    q: 'How do you verify that a supplier is legitimate?',
    a: 'Our factory verification process includes: business license verification with government databases, on-site factory visits and audits, production equipment and capacity assessment, management system evaluation, reference checks with previous buyers, and export history verification. We provide a full audit report with photos.',
  },
  {
    q: 'Can you help with product design and development?',
    a: 'Yes. We have relationships with industrial design firms and factory engineering teams. We can assist with design for manufacturing (DFM), prototyping, tooling, and packaging design. We ensure your product is optimized for production efficiency while maintaining quality standards.',
  },
  {
    q: 'How do you handle quality control and inspections?',
    a: 'Our QC process follows international standards (AQL). We conduct: initial production checks at the start of manufacturing, in-process inspections during production (typically at 30–60% completion), and pre-shipment inspections before cargo leaves the factory. All inspections include detailed photo reports and measurement data.',
  },
  {
    q: 'What shipping methods do you offer?',
    a: 'We coordinate sea freight (FCL/LCL), air freight, rail freight (China-Europe Railway Express), and express courier (DHL, FedEx, UPS). We compare rates across multiple forwarders to find the optimal balance of speed and cost for your shipment. We also handle all customs documentation.',
  },
  {
    q: 'How do you protect my intellectual property?',
    a: 'IP protection is a priority. We use: NDA agreements with all suppliers, split production across multiple factories for sensitive components, mold ownership agreements registered in your name, and design registration assistance with Chinese authorities when needed.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: supplier identification and audit: 1–3 weeks, sampling: 2–4 weeks, production (depends on product): 2–8 weeks, quality inspection: 2–5 days, and shipping: 1–5 weeks depending on method. We provide a detailed project timeline at the start of each engagement.',
  },
]

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-navy-800 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
