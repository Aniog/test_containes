import React from 'react';
import { 
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Users, 
  FileText, Award, BarChart3 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = ({ onQuoteClick }) => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Shortlisting',
      description: 'We research manufacturers that match your product specifications, quality standards, production volume, and commercial requirements.',
      details: [
        'Access to established supplier database across major industrial regions',
        'Custom search based on your technical and commercial criteria',
        'Initial screening for export experience, capacity, and compliance',
        'Shortlist with comparison of capabilities, pricing, and lead times',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification & Due Diligence',
      description: 'On-site visits to confirm that a supplier is legitimate, capable, and suitable for your order before you invest time or money.',
      details: [
        'Business license, export records, and ownership verification',
        'Production facility tour and equipment assessment',
        'Quality management system review',
        'Financial stability indicators and order book evaluation',
        'Detailed written report with photos and findings',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection Services',
      description: 'Independent inspections at key production stages to catch issues before they become expensive problems.',
      details: [
        'Pre-production inspection (materials, components, first articles)',
        'In-line / during production inspection',
        'Final random inspection using AQL standards',
        'Photo and video documentation of findings',
        'Coordination of third-party laboratory testing when required',
      ],
    },
    {
      icon: Factory,
      title: 'Production Monitoring & Follow-up',
      description: 'Regular communication with the factory to track progress, surface issues early, and keep your order moving.',
      details: [
        'Production schedule review and milestone tracking',
        'Weekly status reports with photos',
        'Proactive escalation of delays or quality concerns',
        'Coordination of corrective actions when needed',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Export Coordination',
      description: 'We help arrange transportation, documentation, and compliance so goods move smoothly from factory to destination.',
      details: [
        'Freight forwarder selection and booking support',
        'Export documentation preparation assistance',
        'Customs and compliance guidance',
        'Container loading supervision (optional)',
        'Coordination of door-to-door or port-to-port shipments',
      ],
    },
    {
      icon: Users,
      title: 'Ongoing Supplier Management',
      description: 'Support for repeat orders, quality consistency, and long-term supplier performance.',
      details: [
        'Reorder management and price negotiation support',
        'Supplier performance reviews after each order',
        'Help resolving post-delivery issues',
        'Introduction of alternative suppliers when appropriate',
      ],
    },
  ];

  const additionalServices = [
    { icon: FileText, title: 'Product Specification Development', desc: 'Help translating your requirements into clear technical specifications that factories can quote accurately.' },
    { icon: Award, title: 'Compliance & Certification Support', desc: 'Guidance on CE, FCC, RoHS, REACH, and other market-specific requirements. Coordination of testing when needed.' },
    { icon: BarChart3, title: 'Cost Analysis & Negotiation Support', desc: 'Breakdown of cost drivers and assistance preparing for price discussions with suppliers.' },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">OUR SERVICES</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">Comprehensive China Sourcing Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide practical, end-to-end support for overseas buyers who need reliable suppliers, verified factories, and controlled production in China.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-slate-900">Additional Support Services</h2>
            <p className="text-slate-600 mt-2">We can also assist with related activities that often arise during sourcing projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-7">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-slate-700" />
                </div>
                <div className="font-semibold text-lg text-slate-900 mb-2">{item.title}</div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">How We Work With You</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          You can engage us for a single service (such as a one-time factory verification) or for full project support from supplier search through delivery. We adapt our involvement to your internal capabilities and risk tolerance.
        </p>
        <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-full mb-8">
          Flexible engagement • Transparent fees • Clear deliverables at each stage
        </div>
        
        {onQuoteClick && (
          <div>
            <button
              onClick={onQuoteClick}
              className="px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors text-base"
            >
              Get a Free Sourcing Quote
            </button>
            <p className="mt-3 text-xs text-slate-500">No upfront payment required to begin supplier identification.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
