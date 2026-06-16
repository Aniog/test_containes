import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Which ARTITECT machine is right for my workshop?',
    a: 'It depends on three questions: the longest sheet you need to fold, the thickest material, and your batch size. Send us those answers via the quote form and we will recommend the right AM-series model within one business day.',
  },
  {
    q: 'Do you offer on-site installation and training?',
    a: 'Yes. Every machine ships with optional on-site commissioning. Our engineers will unpack, level, calibrate, and train your operators over three to five days — including sample-part sign-off.',
  },
  {
    q: 'What is the warranty and service coverage?',
    a: 'All ARTITECT machines carry a two-year parts-and-labour warranty. We also offer a lifetime remote-diagnostics connection so our service team can see, log, and resolve most faults without flying out.',
  },
  {
    q: 'Can the machine fold stainless steel and aluminium as well as mild steel?',
    a: 'Yes. Our universal tool holders and adaptive crowning system are tuned for mild steel, galvanised, stainless, aluminium, and copper. No re-rigging between materials.',
  },
  {
    q: 'What payment and shipping terms do you accept?',
    a: 'We work with T/T, L/C, and staged milestone payments for large orders. We ship FOB Shanghai or CIF/DDP to most major ports — our logistics partners handle customs clearance end to end.',
  },
  {
    q: 'How long does production and delivery take?',
    a: 'Standard machines ship within 6–8 weeks from order. Custom configurations typically take 10–12 weeks. We provide weekly progress photos so you always know where your machine is.',
  },
]

const FaqSection = () => {
  const [open, setOpen] = useState(0)
  const headlineRef = useReveal()
  const listRef = useReveal()

  return (
    <section id="faq" className="bg-bone py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div ref={headlineRef} className="reveal lg:col-span-4">
            <Eyebrow>Frequently Asked</Eyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">
              Quick answers,<br />
              <span className="italic text-copper-deep">honest detail.</span>
            </h2>
            <p className="mt-6 text-slate text-base md:text-lg max-w-prose">
              Can't find what you're looking for? Send us a note via the quote form and an
              engineer will reply within one business day.
            </p>
          </div>

          <div ref={listRef} className="reveal lg:col-span-8">
            <ul className="divide-y divide-line border-t border-b border-line">
              {FAQS.map((faq, i) => {
                const isOpen = open === i
                return (
                  <li key={faq.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 text-left py-6 group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          'font-display text-lg md:text-xl transition-colors',
                          isOpen ? 'text-copper-deep' : 'text-ink group-hover:text-copper'
                        )}
                      >
                        {faq.q}
                      </span>
                      <span className="shrink-0 mt-1 h-7 w-7 border border-line-strong flex items-center justify-center text-copper">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate text-[15px] md:text-base leading-relaxed max-w-prose">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
