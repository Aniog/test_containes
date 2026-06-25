import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const faqs = [
  {
    q: 'How do you charge for your sourcing service?',
    a: 'Our standard model is a transparent service fee, agreed in writing before any work begins. For larger or recurring orders, we also offer a commission-based fee. Either way, you always see the supplier’s real quotation and we do not hide any markup inside the product price.',
  },
  {
    q: 'Do you have a minimum order quantity?',
    a: 'We do not enforce a fixed MOQ, but most factories do. We are most effective on orders from around USD 2,000 and up. For smaller test orders or Amazon FBA launches, we can still help where MOQs are reasonable.',
  },
  {
    q: 'Can I visit the factories you recommend?',
    a: 'Yes. We can arrange factory visits and even act as your interpreter on-site. If you cannot travel, we can also do video calls and live walkthroughs of production lines.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Supplier shortlist usually takes 5–10 business days. Samples take 1–3 weeks. Production lead time depends on the product and quantity but is typically 30–60 days. We give you a realistic schedule before you commit.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We use the standard AQL methodology. Depending on the project, we run during-production inspections, pre-shipment inspections and container-loading checks. Every inspection comes with a detailed report including photos.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We work with established freight forwarders for FOB, CIF and DDP shipments by sea or air. We can also coordinate consolidation, customs documentation and door-to-door delivery.',
  },
  {
    q: 'Will my product idea or design be protected?',
    a: 'For OEM and private-label projects we sign NDAs with both you and the supplier. We also segment information across suppliers when needed and only share what is necessary to produce your product.',
  },
  {
    q: 'In which industries do you have the most experience?',
    a: 'Consumer electronics, home and kitchen, apparel and textiles, promotional gifts, beauty and personal care, industrial hardware, sports and outdoor, and furniture. If your category is not listed, please contact us — we will tell you honestly whether we are a good fit.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Clear answers on pricing, MOQs, quality control and what to expect when working with a China sourcing agent."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[#0B2545] md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 flex-none text-slate-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
