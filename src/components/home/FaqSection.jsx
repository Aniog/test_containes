import SectionHeader from "@/components/shared/SectionHeader.jsx";
import FaqAccordion from "@/components/shared/FaqAccordion.jsx";

const FAQS = [
  {
    question: "What is the minimum order quantity you support?",
    answer:
      "We support MOQs that match the supplier, typically from 100 to 1,000 units for most consumer goods. For very small trial runs, we use sample consolidation and small-batch workshops where available.",
  },
  {
    question: "How is your service fee structured?",
    answer:
      "Most engagements combine a one-time sourcing fee with a per-order handling fee, quoted in writing before we start. There are no commissions hidden in the supplier price. Sample inspections and extra QC visits are itemized.",
  },
  {
    question: "Can you sign an NDA before I share my product details?",
    answer:
      "Yes. We sign mutual NDAs as a standard step before reviewing designs, formulations, or supplier-specific information.",
  },
  {
    question: "Do you handle shipping and customs?",
    answer:
      "Yes. We can quote FOB, CIF, or DDP terms. We coordinate with your nominated forwarder or arrange one for you, and we prepare the standard export document set.",
  },
  {
    question: "How do you verify a factory?",
    answer:
      "We visit in person, check the business license, confirm production capacity and workforce, and ask for export references. The result is a written verification report, not just a verbal confirmation.",
  },
  {
    question: "What if a shipment arrives with quality issues?",
    answer:
      "Document the issue with photos and batch numbers within the agreed claim window. We work with the factory to reach a fix: replacement, credit, or rework, and we keep evidence from the pre-shipment inspection on file.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-brand-surface border-y border-brand-line">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="What buyers ask before they start"
              description="Short, practical answers. If your question is not here, send it with the inquiry and we will reply by email."
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={FAQS} defaultOpen={0} />
          </div>
        </div>
      </div>
    </section>
  );
}
