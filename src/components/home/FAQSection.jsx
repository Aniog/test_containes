import { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'We charge a transparent service fee based on the project scope and order volume. For most projects, our fee is a percentage of the total order value, typically between 5-10%. We provide a detailed quote upfront so there are no surprises.',
  },
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'MOQ depends on the product and supplier. We work with suppliers who cater to both small test orders (as low as 100-500 units) and large production runs. We will always find the best option that matches your budget and volume needs.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'Every supplier undergoes a multi-step verification process: business license checks, on-site factory visits by our team, production capacity assessments, quality system audits, and reference checks with existing clients.',
  },
  {
    question: 'Can you source custom or OEM products?',
    answer: 'Yes. We specialize in custom manufacturing and OEM/ODM projects. Share your design, specifications, or samples, and we will find factories that can produce to your exact requirements, including custom packaging and branding.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting takes 3-5 business days. Sample production takes 7-15 days depending on complexity. Bulk production timelines vary by product, but typically range from 2-6 weeks. Shipping adds 2-5 weeks by sea or 5-10 days by air.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We offer end-to-end logistics including ocean freight, air freight, customs clearance, and door-to-door delivery. We work with trusted freight forwarders and can handle all documentation for import into your country.',
  },
  {
    question: 'What happens if there are quality issues?',
    answer: 'Our multi-stage QC process minimizes this risk. If issues are found during inspection, we work with the factory to fix them before shipping. If defects are discovered after delivery, we negotiate with the supplier on your behalf for replacement or refund.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve buyers worldwide, with clients in over 50 countries including the US, UK, Australia, Germany, Canada, UAE, and throughout Southeast Asia and Latin America.',
  },
]

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="border border-steel-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-brand-200">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-steel-50 transition-colors"
      >
        <span className="font-semibold text-brand-800 pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-steel-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 animate-fade-in">
          <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-steel-50">
      <div className="container-wide mx-auto">
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked Questions"
          subtitle="Get answers to the most common questions about sourcing from China with SSourcing."
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
