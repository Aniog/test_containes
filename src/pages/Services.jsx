import { Search, ShieldCheck, Eye, BarChart3, Truck, FileCheck, ClipboardList, Package, Globe } from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Evaluation',
    description: 'We research and identify qualified manufacturers based on your product requirements, target pricing, and volume needs. Each supplier is evaluated on production capacity, quality history, certifications, and export experience.',
    features: ['Industry-specific supplier database', 'Pricing comparison across 3-5 factories', 'Capacity and lead time assessment', 'Export history verification'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Audits & Verification',
    description: 'Our team visits factories in person to verify business legitimacy, assess production capabilities, review quality management systems, and check compliance with relevant standards and regulations.',
    features: ['On-site factory visits by our team', 'Business license and registration verification', 'Production line capability assessment', 'Quality management system review', 'Compliance and certification check', 'Detailed audit report with photos'],
  },
  {
    icon: Eye,
    title: 'Quality Inspection Services',
    description: 'We conduct inspections at multiple stages of production to ensure products meet your specifications. Inspections are performed according to AQL standards with detailed reporting.',
    features: ['Pre-production sample verification', 'During production (DUPRO) inspection', 'Pre-shipment inspection (PSI)', 'Container loading supervision', 'AQL-based sampling methodology', 'Photo-documented inspection reports'],
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    description: 'Throughout the production cycle, we track progress against agreed timelines, identify potential delays early, and work with factories to keep your orders on schedule.',
    features: ['Weekly production status reports', 'Milestone tracking and timeline management', 'Early warning on potential delays', 'On-site progress verification', 'Coordination with factory management'],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate international freight from factory to your door, including carrier selection, documentation, customs clearance, and tracking.',
    features: ['Sea freight (FCL and LCL)', 'Air freight for urgent orders', 'Rail freight to Europe', 'Customs documentation preparation', 'Freight cost optimization', 'Real-time shipment tracking'],
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    description: 'We arrange, review, and ship product samples, coordinating revisions with manufacturers until the sample meets your approval and production specifications.',
    features: ['Initial sample arrangement', 'Specification comparison and feedback', 'Revision coordination with factory', 'Final pre-production sample approval', 'Sample shipping and tracking'],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end sourcing solutions for businesses importing from China. Every service is designed to reduce risk, save time, and protect your investment.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:border-navy-100 transition-all"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-navy-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-500 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <SectionHeading
            badge="Our Approach"
            title="Every Engagement Follows a Structured Process"
            description="We use standardized procedures for every project, ensuring consistent quality and clear communication regardless of product type or order size."
          />
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: ClipboardList, label: 'Clear Scope', desc: 'Written agreements on deliverables, timelines, and costs before we start.' },
              { icon: Package, label: 'Regular Updates', desc: 'Weekly status reports and direct communication throughout the project.' },
              { icon: Globe, label: 'Global Standards', desc: 'AQL inspections, ISO-aligned processes, and internationally recognized reporting.' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center">
                <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <h4 className="text-base font-bold text-navy-500 mb-2">{label}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
