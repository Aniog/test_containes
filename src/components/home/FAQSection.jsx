import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our contact form. We will review your needs, identify suitable suppliers, and provide you with a sourcing plan and quote within 2-3 business days.',
  },
  {
    question: 'What types of products can you source?',
    answer: 'We source a wide range of products including electronics, textiles, machinery, home goods, packaging, automotive parts, and more. If it is manufactured in China, we can likely source it for you.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include verifying business licenses, checking production capacity, reviewing quality management systems, and assessing social compliance. We also check references and past client feedback.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer transparent pricing with no hidden fees. Our service fees are typically a percentage of the order value or a fixed fee per project. We provide a detailed quote before any work begins.',
  },
  {
    question: 'How do quality inspections work?',
    answer: 'We offer pre-production, during-production, and pre-shipment inspections. Our inspectors visit the factory, check products against your specifications, and provide detailed reports with photos before you approve shipment.',
  },
  {
    question: 'Can you handle shipping and customs?',
    answer: 'Yes. We coordinate the entire logistics process including factory pickup, freight forwarding, customs documentation, and delivery to your destination port or warehouse.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'Minimum order quantities depend on the product and the factory. We work with suppliers that accommodate various order sizes and can help you negotiate MOQs that fit your needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 1-2 weeks. Factory verification and sampling add another 2-4 weeks. Production timelines vary by product complexity, usually 4-8 weeks. We provide a detailed timeline for each project.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="faq-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Answers to common questions about sourcing from China.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-border bg-card shadow-sm">
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-foreground sm:text-base">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-5 pb-5 pt-3">
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
