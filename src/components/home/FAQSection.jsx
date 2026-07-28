import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'How does SSourcing China charge for its services?',
    a: 'We offer flexible pricing models. For supplier matching and verification, we typically charge a fixed project fee. For ongoing sourcing with production management, we work on a small percentage (3-5%) of order value. No hidden fees—everything is agreed upfront.',
  },
  {
    q: 'Do I need to travel to China to work with you?',
    a: 'No. Our team is your boots on the ground. We handle factory visits, negotiations, QC inspections, and shipping coordination. We send weekly reports with photos and videos so you stay informed without traveling.',
  },
  {
    q: 'How do you protect my product design and intellectual property?',
    a: 'We sign NNN agreements (Non-Use, Non-Disclosure, Non-Circumvention) with all parties. We also help structure contracts with clear IP ownership clauses and can arrange manufacturing agreements registered under Chinese law.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you can handle?',
    a: 'There is no fixed minimum. We work with factories across the spectrum—from small workshops willing to do 100-unit runs to large manufacturers with 10,000+ MOQs. We will find factories that match your volume needs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification and verification typically takes 1-2 weeks. Sampling and negotiation adds 2-3 weeks. Production timelines depend on your product complexity and order volume, but we manage the schedule end-to-end.',
  },
  {
    q: 'What if the products arrive with defects?',
    a: 'Our pre-shipment QC inspections catch the vast majority of issues before goods leave the factory. If defects slip through, we work with our insurance partner and negotiate compensation. We also structure contracts with clear quality clauses and penalty terms.',
  },
  {
    q: 'Which regions in China do you cover?',
    a: 'We have team members based in Guangzhou, Shenzhen, Yiwu, Ningbo, and Qingdao. We cover all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong provinces.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-steel-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-steel-500 leading-relaxed">
            Quick answers to common questions. If you have more, just ask.
          </p>
        </div>
        <div className="mt-14 max-w-3xl mx-auto divide-y divide-steel-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => toggle(idx)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="text-base font-semibold text-steel-900">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-steel-400 shrink-0 transition-transform duration-200',
                    openIndex === idx && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-200 ease-in-out',
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-steel-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
