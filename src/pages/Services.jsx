import { useStrkImages } from "@/hooks/useStrkImages";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";
import QuoteForm from "@/components/shared/QuoteForm";
import {
  Search,
  Factory,
  ClipboardCheck,
  PackageCheck,
  Ship,
  FileText,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify manufacturers through trade shows, supplier databases, factory visits, and our established network. You receive a shortlist matched to your product specs, target price, and order volume.",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    description:
      "Our team verifies business licenses, production capacity, equipment, quality systems, and export experience. We provide written reports, photos, and video evidence so you can make informed decisions.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control & Inspections",
    description:
      "We offer pre-production, during-production, and pre-shipment inspections based on ANSI/ASQ sampling standards. Defects are documented with photos and corrective actions are tracked.",
  },
  {
    icon: PackageCheck,
    title: "Production Monitoring",
    description:
      "From sample approval to final packing, we follow your order with regular updates, milestone checks, and on-site visits when needed to keep production on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "We coordinate with freight forwarders, book cargo, prepare export documents, and communicate with customs brokers to help your goods move smoothly from factory to warehouse.",
  },
  {
    icon: FileText,
    title: "Contract & Negotiation Support",
    description:
      "We help clarify payment terms, delivery conditions, quality clauses, and penalties. Our goal is to create clear, enforceable agreements that reduce disputes.",
  },
  {
    icon: MessageCircle,
    title: "Bilingual Communication",
    description:
      "Our bilingual project managers bridge language and time-zone gaps, ensuring your requirements are understood and followed by suppliers.",
  },
  {
    icon: BarChart3,
    title: "Supplier Benchmarking",
    description:
      "We compare multiple suppliers across price, quality, lead time, and capability so you can choose the best-fit partner for your business.",
  },
];

export default function Services() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Services"
        title="Full-service China sourcing support"
        description="Every service is designed to reduce risk, improve quality, and save time when buying from China."
        queryId="services"
        query="[services-header-desc] [services-header-title]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What we offer"
            description="Choose the services you need or let us manage the entire sourcing process end to end."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 rounded-xl border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Flexible Engagement"
                title="Service packages built around your needs"
                description="Whether you need a one-time supplier audit or ongoing order management, we adapt our scope to match your business stage and budget."
              />
              <div className="space-y-4 mt-8">
                {[
                  "One-time supplier verification",
                  "Project-based sourcing and QC",
                  "Monthly retainer for ongoing sourcing support",
                  "End-to-end order management from quote to delivery",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <StockImage
                id="services-engagement-img-4d7c1a"
                query="[services-engagement-desc] [services-engagement-title]"
                ratio="4x3"
                width="800"
                alt="Sourcing service packages"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
