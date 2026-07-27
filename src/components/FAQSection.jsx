import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { cn } from '@/lib/utils'

export default function FAQSection({ faqs, title = 'Frequently Asked Questions', lead }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={title}
          lead={lead || 'Straight answers to the questions buyers ask us most. Something missing? Ask us directly.'}
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-xl border border-line bg-white">
          {faqs.map((faq) => {
            const open = openId === faq.id
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : faq.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-ink">{faq.q}</span>
                  <ChevronDown
                    className={cn('h-5 w-5 shrink-0 text-brand transition-transform', open && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
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
