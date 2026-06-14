import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) you handle?',
    a: 'We handle everything from 100-unit trial orders to multi-container production runs. For very small orders, we focus on products and factories that accept low MOQs, or we consolidate multiple SKUs into a single production run.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We charge a service fee that is agreed in writing up front, based on the project scope. QC inspections are quoted per man-day. There are no hidden fees, and we share supplier quotations transparently with line items.',
  },
  {
    q: 'Can you protect my product design and brand?',
    a: 'Yes. We sign an NDA with you and with the factory. For private-label programs, the factory signs a non-disclosure and a quality agreement. We can also recommend IP registration steps in China where appropriate.',
  },
  {
    q: 'Do you only source from Shenzhen?',
    a: 'No. We work with vetted factories across Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian. Our team is based in Shenzhen, but we run inspections and audits wherever the right factory is located.',
  },
  {
    q: 'What if I already have a supplier in China?',
    a: 'We can step in for QC inspections, production follow-up, or shipping coordination only. We do not require a full sourcing engagement — you can use us for the parts of the process that are most useful to you.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Sampling usually takes 2–3 weeks. Production is typically 30–60 days depending on category and quantity, plus ocean transit (about 18–30 days to the US or EU). We will give you a written timeline before the project starts.',
  },
  {
    q: 'Can you ship to my country and handle customs?',
    a: 'Yes. We can ship FOB, CIF, or DDP. DDP covers sea or air freight, customs clearance, duties, and final delivery to your warehouse. We work with established freight forwarders in Shenzhen.',
  },
  {
    q: 'How do you verify a factory?',
    a: 'We check the business license, tax record, and export history. We then visit the production floor in person: production lines, equipment, warehouse, workforce, and references. You receive a written report with photos.',
  },
]

export default function FAQ() {
  const containerRef = useRef(null)
  const [openIdx, setOpenIdx] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-surface">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow">FAQ</div>
            <h2
              id="faq-headline"
              className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy"
            >
              Common questions from first-time buyers
            </h2>
            <p id="faq-sub" className="mt-4 text-ink-soft">
              If your question isn\'t answered here, send it in the inquiry form
              and we will reply within one business day.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-hairline aspect-[4/3] bg-white">
              <div
                className="w-full h-full"
                data-strk-bg-id="faq-bg-factory-3a82ce"
                data-strk-bg="[faq-headline] [faq-sub]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-hairline bg-white overflow-hidden">
              {faqs.map((f, idx) => {
                const open = openIdx === idx
                return (
                  <div
                    key={f.q}
                    className={cn(idx !== 0 && 'border-t border-hairline')}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? -1 : idx)}
                      className="w-full flex items-start justify-between gap-4 p-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-ink">{f.q}</span>
                      <span className="w-7 h-7 rounded-full bg-primary-soft text-primary flex items-center justify-center flex-shrink-0">
                        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 -mt-1 text-sm text-ink-soft leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
