import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a combination of online research, industry databases, trade show contacts, and on-site factory visits. Every supplier we recommend has been verified through business license checks, production capacity assessments, and quality system reviews.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our pricing depends on the scope of services you need. We offer transparent, project-based pricing with no hidden fees. Contact us with your requirements and we will provide a free quote within 24 hours.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes. We work with businesses of all sizes, from startups placing their first order to established companies managing ongoing production. We tailor our services to fit your budget and needs.',
  },
  {
    question: 'How do you handle quality control?',
    answer: 'We offer three levels of inspection: pre-production (checking materials and setup), during-production (monitoring the manufacturing process), and pre-shipment (final random sampling before goods leave the factory). Each inspection includes a detailed report with photos.',
  },
  {
    question: 'Can you help with shipping and customs?',
    answer: 'Yes. We coordinate with freight forwarders to arrange sea freight, air freight, or express shipping. We also prepare the necessary export documentation and can assist with customs clearance at your destination.',
  },
  {
    question: 'What if there is a problem with my order?',
    answer: 'If quality issues are found during inspection, we work with the supplier to resolve them before shipment. If problems arise after delivery, we help you communicate with the supplier and negotiate a fair resolution.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timelines vary by product and complexity. Supplier identification typically takes 1-2 weeks, sampling 2-4 weeks, and production 4-8 weeks depending on order size. We provide a clear timeline at the start of every project.',
  },
  {
    question: 'Do I need to visit China?',
    answer: 'No. Our team acts as your eyes and ears on the ground. We handle all supplier communication, factory visits, and inspections on your behalf. You can choose to visit if you wish, but it is not required.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Answers to the most common questions about sourcing from China.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
