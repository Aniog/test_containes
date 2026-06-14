import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer project-based pricing for one-time sourcing assignments and monthly retainers for ongoing partnerships. Contact us for a tailored quote based on your needs.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands managing multiple product lines. We adapt our service to your volume and budget.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits that include verifying business licenses, export certifications, production capacity, equipment, and working conditions. We provide a written audit report with photos.',
  },
  {
    q: 'Can you help with product development and customization?',
    a: 'Yes. We can assist with OEM and ODM projects, including connecting you with factories that offer custom design, private labeling, and packaging solutions.',
  },
  {
    q: 'What happens if the quality does not meet our standards?',
    a: 'We document all quality issues with photos and reports and negotiate with the factory for rework, replacement, or compensation on your behalf. Our goal is to catch problems before goods are shipped.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate with freight forwarders and prepare all necessary export documentation. We do not act as a licensed customs broker, but we work closely with your chosen forwarder to ensure smooth clearance.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: supplier research takes 5–10 business days, factory audit 3–5 days, sample production 2–4 weeks, and mass production 4–12 weeks depending on the product. We provide a project timeline at the start.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-brand-navy font-medium pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-red flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-slate flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-brand-slate text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomeFaq() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers considering China sourcing."
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
