import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection only, or full-service management. We offer transparent, project-based pricing with no hidden fees. Contact us for a free quote tailored to your needs.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages, from startups placing their first order to established importers managing multiple SKUs. Minimum order requirements depend on the supplier, not on us.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We verify business licenses, export licenses, certifications (ISO, CE, etc.), and conduct on-site audits to assess production capacity, workforce, and quality management systems.',
  },
  {
    q: 'Can you help with custom product development or OEM?',
    a: 'Yes. We support private label and OEM projects, including product design input, material sourcing, sample development, and production management.',
  },
  {
    q: 'What happens if there is a quality problem after shipment?',
    a: 'We document all inspections thoroughly. If issues arise post-shipment, we work with you and the supplier to resolve them — whether through replacement, credit, or rework. Our goal is to prevent problems before they happen.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate across all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian. Our network covers both coastal and inland manufacturing regions.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-brand-blue-light transition-colors duration-150"
        onClick={() => setOpen(!open)}
      >
        <span className="text-brand-navy font-semibold text-sm md:text-base pr-4">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
          : <ChevronDown className="w-5 h-5 text-brand-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-brand-muted text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-brand-gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Common questions from buyers considering China sourcing for the first time or switching agents.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
