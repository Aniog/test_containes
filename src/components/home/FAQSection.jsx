import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We maintain a database of over 500 pre-verified suppliers across China. For each new project, we source additional suppliers through industry networks, trade shows, and referrals. Every supplier goes through our verification process which includes on-site factory visits, license verification, financial background checks, and reference checks with previous clients.',
  },
  {
    question: 'What are your fees and how do you charge?',
    answer: 'We offer flexible pricing models depending on your needs. For most projects, we charge a transparent service fee that is agreed upon upfront — typically a percentage of the order value or a fixed project fee. There are no hidden costs. We also offer retainer arrangements for ongoing sourcing needs. Contact us for a customized quote.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'The timeline varies by project complexity. Supplier identification and verification typically takes 1-2 weeks. Sample development takes 1-3 weeks depending on the product. Production lead times vary from 2-8 weeks based on order size and complexity. We provide a detailed timeline with your quote so you can plan accordingly.',
  },
  {
    question: 'What quality control measures do you have?',
    answer: 'We conduct quality inspections at three critical stages: pre-production (raw materials and first samples), during production (in-line inspections), and pre-shipment (final random inspection). We follow AQL standards and provide detailed inspection reports with photos and videos. If issues are found, we work with the factory to resolve them before shipment.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics solutions including sea freight, air freight, and rail freight options. We handle all customs documentation, export declarations, and can arrange door-to-door delivery. We work with trusted logistics partners to ensure competitive rates and reliable service.',
  },
  {
    question: 'What if there are issues with my order?',
    answer: 'Our contracts include clear terms for quality standards, delivery timelines, and remedies for non-compliance. If issues arise, we work directly with the supplier to resolve them — whether that means rework, replacement, or compensation. We also help negotiate payment terms that protect your interests, such as milestone-based payments.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our China sourcing services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
