import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShieldCheck, ClipboardCheck, Truck, Users, Award,
  FileText, Camera, Calendar, Package, MessageSquare, Globe
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify manufacturers that match your product specifications, quality standards, and production volume requirements.',
      details: [
        'Product specification analysis and supplier matching',
        'Database and network-based supplier identification',
        'Initial capability and export experience screening',
        'Preliminary pricing and MOQ assessment',
        'Supplier comparison reports with pros/cons',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification & Audits',
      description: 'On-site verification to confirm a supplier is legitimate, has the claimed capabilities, and meets basic compliance standards.',
      details: [
        'Business license and registration verification',
        'Physical factory visit and capacity assessment',
        'Equipment and production process review',
        'Quality management system evaluation',
        'Written audit report with photos and findings',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection Services',
      description: 'Independent inspection of products at key production stages to verify conformance before goods are shipped.',
      details: [
        'Pre-shipment inspection (AQL sampling)',
        'During production inspection',
        'Initial production check',
        'Container loading supervision',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Calendar,
      title: 'Production Follow-up',
      description: 'Ongoing monitoring of order progress to identify delays early and coordinate corrective actions with the factory.',
      details: [
        'Production schedule tracking',
        'Regular status updates to you',
        'Issue identification and escalation',
        'Sample approval coordination',
        'Timeline risk assessment',
      ],
    },
    {
      icon: Users,
      title: 'Order Coordination',
      description: 'We manage day-to-day communication and documentation between you and your suppliers to keep orders moving.',
      details: [
        'Purchase order review and confirmation',
        'Contract and agreement support',
        'Payment milestone coordination',
        'Technical clarification and communication',
        'Change order management',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics Support',
      description: 'We assist with freight coordination, export documentation, and delivery timeline management.',
      details: [
        'Freight forwarder coordination',
        'Export documentation preparation support',
        'Shipping schedule tracking',
        'Customs documentation guidance',
        'Delivery confirmation and issue resolution',
      ],
    },
  ];

  const addons = [
    { icon: FileText, title: 'Product Specification Development', desc: 'Help translating your requirements into clear technical specifications for factories.' },
    { icon: Camera, title: 'Sample Photography & Documentation', desc: 'Professional photos and measurements of approved samples for your records.' },
    { icon: Package, title: 'Packaging & Labeling Coordination', desc: 'Guidance on retail packaging, barcodes, and compliance labeling requirements.' },
    { icon: Globe, title: 'Market-Specific Compliance Support', desc: 'Documentation support for CE, FCC, CPSIA, REACH, and other market requirements.' },
    { icon: MessageSquare, title: 'Supplier Negotiation Support', desc: 'Assistance with pricing discussions, payment terms, and contract negotiation.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">OUR SERVICES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Sourcing and Quality Management Services</h1>
            <p className="text-lg text-slate-600">
              We provide the operational support overseas buyers need to source from China with greater confidence and fewer surprises.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-1">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Add-on Services */}
      <div className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="OPTIONAL ADD-ONS" 
            title="Additional Support Services" 
            description="These services can be added to any engagement based on your specific needs."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <addon.icon className="w-6 h-6 text-slate-600 mb-4" />
                <div className="font-semibold mb-2">{addon.title}</div>
                <p className="text-sm text-slate-600">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Models */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeading 
          eyebrow="HOW WE ENGAGE" 
          title="Flexible Engagement Models" 
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Project-Based', desc: 'One-time sourcing or verification projects with a defined scope and deliverable. Ideal for new product launches or supplier diversification.' },
            { title: 'Retainer', desc: 'Ongoing management of one or more suppliers with regular inspections, production follow-up, and order coordination.' },
            { title: 'Hybrid', desc: 'Start with a sourcing project, then transition to retainer for repeat orders. Most common model for growing importers.' },
          ].map((model, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-7">
              <div className="font-semibold text-lg mb-3">{model.title}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Need a custom scope?</h2>
          <p className="text-slate-400 mb-6">Tell us about your sourcing project and we will propose an appropriate service package.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100">Request a Quote</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
