import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, Zap, Truck, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    imgId: 'svc-img-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    tagline: 'Find the right manufacturer, not just any manufacturer.',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, MOQ, target price, and quality requirements. Our sourcing process draws on an established network of factories across key manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    includes: [
      'Product specification analysis',
      'Manufacturer database research',
      'Supplier shortlisting (3–5 candidates)',
      'Initial supplier communication',
      'Pricing and MOQ comparison report',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    imgId: 'svc-img-factory-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    tagline: 'Know exactly who you are buying from.',
    desc: 'Before you commit to an order, we conduct an on-site factory audit to verify the supplier\'s legitimacy, production capacity, equipment, certifications, and working conditions. This protects you from fraud and ensures the factory can actually deliver what they promise.',
    includes: [
      'Business license and registration check',
      'On-site facility inspection',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    imgId: 'svc-img-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    tagline: 'Catch problems before they reach your warehouse.',
    desc: 'Our quality inspectors conduct checks at critical stages of production to ensure your goods meet agreed specifications. We follow internationally recognized inspection standards (AQL) and provide detailed reports with photos and findings.',
    includes: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling methodology',
      'Detailed inspection report within 24 hours',
    ],
  },
  {
    id: 'production-followup',
    icon: Zap,
    title: 'Production Follow-up',
    imgId: 'svc-img-production-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    tagline: 'Stay informed without being on the factory floor.',
    desc: 'We act as your on-the-ground representative during production, providing regular updates, resolving issues with the factory, and ensuring your order stays on schedule. This is especially valuable for large or complex orders.',
    includes: [
      'Weekly production status updates',
      'On-site factory visits during production',
      'Issue escalation and resolution',
      'Timeline monitoring and alerts',
      'Photo and video documentation',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    imgId: 'svc-img-shipping-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    tagline: 'From factory gate to your door.',
    desc: 'We coordinate with freight forwarders, prepare and review export documentation, and track your shipment from China to your destination. We work with both sea freight (FCL/LCL) and air freight, and can advise on the most cost-effective option for your order.',
    includes: [
      'Freight forwarder coordination',
      'Export documentation review',
      'Sea freight (FCL/LCL) and air freight',
      'Shipment tracking and updates',
      'Customs clearance guidance',
    ],
  },
  {
    id: 'supplier-communication',
    icon: MessageSquare,
    title: 'Supplier Communication',
    imgId: 'svc-img-comms-p7q8r9',
    titleId: 'svc-comms-title',
    descId: 'svc-comms-desc',
    tagline: 'No more lost in translation.',
    desc: 'Language and cultural barriers are a major source of costly mistakes in China sourcing. Our bilingual team handles all communication with suppliers on your behalf — from initial negotiations to resolving disputes — ensuring your requirements are understood and met.',
    includes: [
      'Bilingual (English/Chinese) communication',
      'Price and terms negotiation',
      'Technical specification translation',
      'Dispute resolution support',
      'Regular communication summaries',
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-red-300 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Service China Sourcing Solutions
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed mb-8">
              We cover every stage of the sourcing process — from finding the right supplier to delivering goods to your warehouse. Choose the services you need, or let us manage the entire process.
            </p>
            <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
              Get a Free Sourcing Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-2">{svc.title}</h2>
                    <p className="text-accent font-medium mb-4">{svc.tagline}</p>
                    <p id={svc.descId} className="text-text-muted leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-dark">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <CTAButton to="/contact" variant="outline">Enquire About This Service</CTAButton>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-gray-100 h-72 lg:h-96 ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-red-100 text-lg mb-8">Tell us about your project and we'll recommend the right approach.</p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
