import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FAQS } from '@/data/content'

const HomeFaq = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Questions buyers ask before working with us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Straight answers about fees, timelines, minimum orders, and how we protect
            your interests. Anything else — ask us directly.
          </p>
        </div>
        <div className="lg:col-span-3">
          <Accordion type="single" collapsible className="rounded-xl border border-slate-200 bg-white px-6 shadow-sm">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`} className={index === FAQS.length - 1 ? 'border-b-0' : ''}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
)

export default HomeFaq
