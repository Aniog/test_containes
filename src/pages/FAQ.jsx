import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const faqs = [
  {
    category: 'About Case Mold Trading',
    items: [
      {
        q: 'What is Case Mold Trading?',
        a: 'Case Mold Trading is a mold sourcing and manufacturing support partner based in China. We help overseas buyers find the right mold factory, compare quotations, and follow up from tooling to delivery. We are not a factory and not a public marketplace — we work directly with buyers as a dedicated project partner.',
      },
      {
        q: 'Are you a factory?',
        a: 'No. We are a sourcing and support partner. We work with a network of qualified mold factories in China and match buyers with the most suitable factory for their specific project requirements.',
      },
      {
        q: 'What countries do you serve?',
        a: 'We work with buyers from any country. Our communication is in English, and we support international delivery to destinations worldwide.',
      },
    ],
  },
  {
    category: 'Submitting a Requirement',
    items: [
      {
        q: 'What information do I need to provide?',
        a: 'You can start with whatever you have — a 3D drawing, product photo, physical sample reference, or a written description. We will review your submission and ask follow-up questions if we need more details. You do not need a complete technical package to get started.',
      },
      {
        q: 'What file formats do you accept?',
        a: 'We accept most common formats including .STEP, .IGES, .STL, .DWG, .DXF, PDF, JPG, PNG, and more. If you have a different format, contact us and we will advise.',
      },
      {
        q: 'Is my drawing or design kept confidential?',
        a: 'Yes. We treat all technical files and design information with strict confidentiality. We do not share your drawings or project details with any party without your consent.',
      },
    ],
  },
  {
    category: 'Sourcing & Quotation',
    items: [
      {
        q: 'How do you select factories?',
        a: 'We verify factory capability, equipment, production capacity, and relevant project experience before recommending them. We do not recommend factories we have not assessed.',
      },
      {
        q: 'How many quotations will I receive?',
        a: 'We typically collect quotations from multiple factories and present a comparison so you can evaluate pricing, lead times, and factory profiles before making a decision.',
      },
      {
        q: 'How long does it take to receive quotations?',
        a: 'Quotation timelines vary depending on project complexity. For standard mold projects, we typically provide a comparison within 5–10 business days of receiving complete project information.',
      },
    ],
  },
  {
    category: 'Tooling, Sampling & Production',
    items: [
      {
        q: 'Do you follow up during tooling and sampling?',
        a: 'Yes. Once a factory is confirmed, we follow up on tooling progress, coordinate sample production, and keep you updated at each milestone. We also manage feedback and modification requests between you and the factory.',
      },
      {
        q: 'What happens if the sample does not meet my requirements?',
        a: 'We coordinate modification requests with the factory and follow up until the sample meets your specifications. Mass production does not begin until you have approved the sample.',
      },
      {
        q: 'Do you conduct quality inspection before shipment?',
        a: 'Yes. We conduct pre-shipment inspection to verify product quality before goods leave the factory. This is a standard part of our delivery support process.',
      },
    ],
  },
  {
    category: 'Delivery & Logistics',
    items: [
      {
        q: 'Do you handle international shipping?',
        a: 'We provide delivery coordination support, including pre-shipment inspection and shipping documentation. We work with freight forwarders to arrange international delivery to your destination country.',
      },
      {
        q: 'What shipping terms do you support?',
        a: 'We can support various shipping terms including EXW, FOB, CIF, and DDP depending on your requirements. Please discuss your preferred terms when submitting your inquiry.',
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E2E8F0] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-[#F7F9FC] transition-colors border-0"
      >
        <span className="text-[#1A2332] font-medium text-sm md:text-base">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-[#1B4F8A] flex-shrink-0" />
          : <ChevronDown className="w-5 h-5 text-[#4A5568] flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-[#4A5568] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Answers to common questions about our mold sourcing and manufacturing support services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12">
            {faqs.map(({ category, items }) => (
              <div key={category}>
                <h2 className="text-[#1A2332] font-bold text-xl mb-5 pb-3 border-b border-[#E2E8F0]">{category}</h2>
                <div className="flex flex-col gap-3">
                  {items.map(({ q, a }) => (
                    <FaqItem key={q} q={q} a={a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-12 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-[#1A2332] font-bold text-xl mb-3">Still Have Questions?</h3>
          <p className="text-[#4A5568] mb-6 max-w-xl mx-auto">
            Contact us directly and we'll be happy to answer any questions about your specific mold project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
