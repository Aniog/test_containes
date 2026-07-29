import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, Search, FileText, Factory, ClipboardCheck, Truck } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — category, specifications, target quantity, budget, and any specific certifications or standards needed. The more detail you provide, the faster we can help.',
    details: [
      'Product name, category, and detailed specifications',
      'Target quantity and annual volume estimate',
      'Target unit price or budget range',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Preferred shipping method and destination',
    ],
    duration: 'Day 1',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify the best-fit manufacturers. We evaluate each supplier on production capability, quality track record, pricing, and reliability.',
    details: [
      'Search across 500+ verified suppliers in our network',
      'Fresh market research for specialized products',
      'Evaluation of production capacity and MOQ',
      'Review of trade history and client references',
      'Shortlist of 3–5 qualified suppliers with comparison report',
    ],
    duration: 'Days 2–7',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Supplier Comparison Report',
    desc: 'You receive a detailed report comparing shortlisted suppliers on key criteria: pricing, MOQ, lead time, certifications, and our assessment. We recommend the best option and explain our reasoning clearly.',
    details: [
      'Side-by-side supplier comparison table',
      'Pricing and MOQ breakdown',
      'Lead time and production capacity',
      'Certification and compliance status',
      'Our recommendation with rationale',
    ],
    duration: 'Day 7–8',
  },
  {
    num: '04',
    icon: Factory,
    title: 'Factory Audit & Sample Procurement',
    desc: 'Once you select a supplier, we conduct an on-site factory audit to verify their capabilities and arrange product samples for your review. You approve the sample before any bulk order is placed.',
    details: [
      'On-site factory visit and audit',
      'Verification of business license and certifications',
      'Production capacity and equipment check',
      'Sample procurement and express shipping to you',
      'Detailed audit report with photos',
    ],
    duration: 'Days 8–18',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Follow-up',
    desc: 'After sample approval, we assist with order placement and monitor production throughout the manufacturing process. We send weekly updates and flag any issues immediately.',
    details: [
      'Order placement and contract review assistance',
      'Weekly production progress reports',
      'Regular factory visits during production',
      'Early identification of delays or quality issues',
      'Direct escalation to factory management when needed',
    ],
    duration: 'Production period',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Inspection & Shipping',
    desc: 'Before goods leave the factory, our inspector conducts a pre-shipment inspection following AQL standards. Once approved, we coordinate shipping with our freight forwarder partners and send you tracking details.',
    details: [
      'Pre-shipment inspection (AQL standard)',
      'Inspection report within 24 hours',
      'Freight forwarder coordination',
      'Sea, air, or express shipping options',
      'Shipment tracking and documentation',
    ],
    duration: 'Final week',
  },
];

const faqs = [
  { q: 'Do I need to travel to China?', a: 'No. We handle everything on the ground in China on your behalf. You communicate with us remotely and we act as your local representative.' },
  { q: 'What if I am not happy with the shortlisted suppliers?', a: 'We will continue searching until we find options that meet your requirements. Your satisfaction with the supplier selection is essential before we proceed.' },
  { q: 'How do you handle payment to suppliers?', a: 'We do not handle payments between you and the supplier. We facilitate introductions and negotiations, but payment terms are agreed directly between you and the factory.' },
  { q: 'Can you help with product customization?', a: 'Yes. We regularly assist buyers with OEM and ODM projects — custom designs, private labeling, and packaging customization.' },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-red/20 text-red-300 mb-6">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to reduce risk and deliver results for global buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 mt-3" />}
                </div>
                <div className="pb-12 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon size={18} className="text-brand-blue" />
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{step.duration}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Questions" title="Process FAQs" />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-100 rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-navy-900 hover:text-brand-blue transition-colors">
                  {faq.q}
                  <ArrowRight size={16} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Sourcing Project?"
        subtitle="Submit your inquiry and we will get back to you within 24 hours with a free assessment."
      />
    </div>
  );
}
