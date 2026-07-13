import SectionLabel from '@/components/shared/SectionLabel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What does SSourcing China charge for sourcing services?',
    answer: 'We typically charge a transparent service fee based on the project scope, plus the cost of inspections or factory audits if required. We do not take hidden commissions from suppliers, so our recommendations stay objective.',
  },
  {
    question: 'How long does it take to receive a supplier shortlist?',
    answer: 'For most products, we return an initial shortlist with quotations within 3-5 business days after understanding your requirements. Complex industrial products may take a few days longer.',
  },
  {
    question: 'Can you help with product samples?',
    answer: 'Yes. We coordinate sample production, collect samples from suppliers, and arrange delivery to your address for evaluation.',
  },
  {
    question: 'Do you handle shipping and customs documents?',
    answer: 'We coordinate with freight forwarders, prepare commercial invoices, packing lists, and other export documents, and track shipments until delivery.',
  },
  {
    question: 'How do you verify factories?',
    answer: 'Our verification includes business license checks, factory visits, production line review, equipment inspection, and export experience confirmation. You receive a written report with photos.',
  },
  {
    question: 'Which countries do you work with?',
    answer: 'We support buyers in North America, Europe, Australia, the Middle East, Southeast Asia, and other regions. Our communication is in English.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg mb-3 px-4">
              <AccordionTrigger className="text-left text-slate-900 font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
