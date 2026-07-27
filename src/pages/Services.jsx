import { Link } from 'react-router-dom';
import { 
  Shield, Factory, ClipboardCheck, Package, Truck, HeadphonesIcon,
  ArrowRight, CheckCircle, FileCheck, Users, BarChart, Handshake
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const Services = () => {
  const services = [
    {
      id: 'supplier-verification',
      icon: <Shield className="w-10 h-10" />,
      title: 'Supplier Verification',
      subtitle: 'Verify factories before you commit',
      description: 'We conduct thorough on-site verification of potential suppliers to ensure they are legitimate, capable, and reliable. Our verification process includes:',
      features: [
        'Business license verification',
        'Factory location and size confirmation',
        'Production capacity assessment',
        'Certification and compliance checks',
        'Financial stability evaluation',
        'Reference checks with past clients',
      ],
      deliverable: 'Detailed verification report with photos, findings, and recommendations within 48 hours of site visit.',
    },
    {
      id: 'factory-audits',
      icon: <Factory className="w-10 h-10" />,
      title: 'Factory Audits',
      subtitle: 'Comprehensive compliance assessments',
      description: 'Our factory audits go beyond basic verification to assess operational capabilities, compliance standards, and social responsibility:',
      features: [
        'ISO compliance verification',
        'Social compliance (SA8000, BSCI)',
        'Environmental compliance (ISO 14001)',
        'Equipment and machinery assessment',
        'Quality management systems review',
        'Employee working conditions evaluation',
      ],
      deliverable: 'Complete audit report with compliance scores, findings, and improvement recommendations.',
    },
    {
      id: 'quality-control',
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: 'Quality Control Inspection',
      subtitle: 'Ensure quality at every stage',
      description: 'Our professional QC team performs inspections at critical production stages to catch issues early:',
      features: [
        'Pre-production inspection (materials)',
        'During production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Loading supervision',
        'AQL-based sampling',
        'Detailed inspection reports with photos',
      ],
      deliverable: 'Comprehensive QC report with checklist results, defect photos, and pass/fail recommendations.',
    },
    {
      id: 'production-followup',
      icon: <Package className="w-10 h-10" />,
      title: 'Production Follow-up',
      subtitle: 'Monitor progress and quality',
      description: 'We stay on top of your production to ensure everything stays on schedule and meets quality standards:',
      features: [
        'Regular production status updates',
        'Quality monitoring during manufacturing',
        'Issue identification and resolution',
        'Timeline tracking and reporting',
        'Sample approval coordination',
        'Final production documentation',
      ],
      deliverable: 'Weekly progress reports with photos, status updates, and any issues requiring attention.',
    },
    {
      id: 'shipping',
      icon: <Truck className="w-10 h-10" />,
      title: 'Shipping & Logistics',
      subtitle: 'Seamless end-to-end delivery',
      description: 'We handle all aspects of shipping and logistics to ensure your products arrive safely and on time:',
      features: [
        'FCL and LCL ocean freight',
        'Air freight solutions',
        'Express courier (DHL, FedEx, UPS)',
        'Customs documentation',
        'Freight forwarding',
        'Cargo insurance coordination',
      ],
      deliverable: 'Complete shipping documentation, tracking updates, and delivery confirmation.',
    },
    {
      id: 'sample-management',
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: 'Sample Management',
      subtitle: 'Streamlined sample process',
      description: 'We manage the sample sourcing and approval process to help you make informed decisions:',
      features: [
        'Sample sourcing from multiple suppliers',
        'Sample shipping coordination',
        'Quality evaluation and reporting',
        'Modification requests handling',
        'Pre-production sample approval',
        'PP sample coordination',
      ],
      deliverable: 'Sample evaluation report with detailed photos, specifications, and recommendations.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Professional Team',
      description: 'Our team includes former quality managers, logistics experts, and sourcing professionals with 10+ years of experience.',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Detailed Reporting',
      description: 'Every service includes comprehensive documentation with photos, data, and clear recommendations.',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Data-Driven Approach',
      description: 'We use industry standards (AQL, ISO) and provide quantifiable metrics to help you make decisions.',
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Long-Term Partnership',
      description: 'We aim to build lasting relationships, not one-time transactions. Your success is our success.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-[#94a3b8]">
              Comprehensive China sourcing solutions designed to protect your investment and ensure quality from factory to doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center text-[#1e3a5f] mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-[#0f172a] mb-2">{service.title}</h2>
                  <p className="text-[#1e3a5f] font-medium mb-4">{service.subtitle}</p>
                  <p className="text-[#64748b] mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-[#475569]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-[#f8fafc] rounded-xl p-4 border-l-4 border-[#1e3a5f]">
                    <p className="text-sm text-[#64748b]">
                      <strong className="text-[#0f172a]">What you get:</strong> {service.deliverable}
                    </p>
                  </div>
                </div>
                
                <div className={`bg-gradient-to-br from-[#1e3a5f]/5 to-[#e2e8f0] rounded-2xl p-8 aspect-square flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="text-[#1e3a5f]/20">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Our Services?"
            subtitle="What sets us apart from other China sourcing agents"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-[#1e3a5f] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748b]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-[#94a3b8] mb-6">
              Our service fees are transparent with no hidden costs. Pricing varies based on the scope of services, order value, and project complexity. We provide detailed quotes before any work begins.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Supplier verification: From $200 per factory</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Quality inspections: From $250 per visit</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Sourcing coordination: 3-5% of order value</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Shipping: Based on freight rates and volume</span>
              </li>
            </ul>
            <p className="text-sm text-[#94a3b8]">
              Contact us for a personalized quote based on your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Tell us about your sourcing needs and we'll provide a free consultation and quote."
        buttonText="Request a Quote"
        buttonLink="/contact"
        features={[
          'Free consultation',
          'No commitment required',
          'Detailed cost estimates',
        ]}
      />
    </div>
  );
};

export default Services;
