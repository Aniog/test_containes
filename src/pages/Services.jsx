import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, BarChart3, FileText, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer, not just any manufacturer.',
    description: 'We research and shortlist suppliers that match your exact product specifications, quality standards, MOQ requirements, and budget. Our team evaluates manufacturer capabilities, export experience, and communication responsiveness before presenting options.',
    features: [
      'Product-specific supplier research',
      'MOQ and pricing comparison',
      'Initial supplier communication and screening',
      'Sample coordination and evaluation',
    ],
    imgId: 'service-sourcing-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you are doing business with before you place an order.',
    description: 'Our on-site team visits factories to verify business licenses, production capacity, equipment quality, and certifications. We check export history, review references, and assess whether the factory can reliably deliver what they promise.',
    features: [
      'Physical factory audit and inspection',
      'Business license and certification verification',
      'Production capacity assessment',
      'Reference checks and export history review',
    ],
    imgId: 'service-verification-b2c3d4',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch problems before they become expensive mistakes.',
    description: 'We provide inspection services at every critical stage — from raw material check to pre-shipment and container loading. All inspections follow internationally accepted AQL standards and include detailed photo reports.',
    features: [
      'Pre-production material inspection',
      'During-production (DUPRO) checks',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
    ],
    imgId: 'service-qc-c3d4e5',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed and in control throughout manufacturing.',
    description: 'We monitor production progress, verify milestones, and flag issues early. Our team acts as your local representative on the factory floor, ensuring timelines are met and quality standards are maintained.',
    features: [
      'Regular production status updates',
      'Milestone tracking and verification',
      'Issue identification and resolution',
      'On-time delivery coordination',
    ],
    imgId: 'service-production-d4e5f6',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'From factory floor to your warehouse, fully managed.',
    description: 'We coordinate freight booking, prepare customs documentation, and track shipments to ensure smooth delivery. Whether you need sea freight, air freight, or rail, we find the right balance of cost and speed.',
    features: [
      'Freight booking and rate negotiation',
      'Customs documentation preparation',
      'Shipment tracking and updates',
      'Door-to-door delivery coordination',
    ],
    imgId: 'service-shipping-e5f6g7',
  },
  {
    icon: BarChart3,
    title: 'Market Research',
    subtitle: 'Make informed decisions with local market intelligence.',
    description: 'Understand pricing trends, supplier landscapes, and product quality benchmarks before you commit. Our research helps you negotiate from a position of knowledge.',
    features: [
      'Supplier landscape analysis',
      'Price benchmarking and trends',
      'Competitive product comparison',
      'Regulatory and compliance overview',
    ],
    imgId: 'service-research-f6g7h8',
  },
];

export default function Services() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-surface border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Comprehensive sourcing support for buyers who want reliable suppliers, consistent quality, and hassle-free logistics from China.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 id={`service-${index}-title`} className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h2>
                  <p id={`service-${index}-subtitle`} className="text-secondary font-medium mb-4">{service.subtitle}</p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="rounded-xl overflow-hidden shadow-md border border-border">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-${index}-title] [service-${index}-subtitle]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional support */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Additional Support</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Beyond our core services, we provide ongoing assistance to make your China sourcing experience seamless.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Communication Bridge',
                desc: 'We handle all communication with suppliers in Chinese, translating requirements, feedback, and negotiations accurately.',
              },
              {
                icon: FileText,
                title: 'Contract Review',
                desc: 'We review purchase contracts, NNN agreements, and terms to protect your interests before you sign.',
              },
              {
                icon: BarChart3,
                title: 'Order Consolidation',
                desc: 'Buy from multiple suppliers? We consolidate shipments to reduce freight costs and simplify logistics.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-background rounded-xl p-8 border border-border text-center">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
