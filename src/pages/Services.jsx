import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import CTAButton from '../components/shared/CTAButton.jsx';

const services = [
  {
    id: 'supplier-sourcing',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
    imgId: 'svc-img-sourcing-a1b2',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer, not just any manufacturer.',
    desc: 'We research and shortlist Chinese manufacturers that match your product specifications, quality requirements, MOQ, and target price. Our database includes verified suppliers across all major manufacturing hubs in China.',
    points: [
      'Product specification analysis',
      'Supplier database search + trade show contacts',
      'Initial supplier screening and shortlisting',
      'Comparative quotation report',
      'Sample coordination',
    ],
  },
  {
    id: 'factory-verification',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
    imgId: 'svc-img-factory-c3d4',
    icon: Factory,
    title: 'Factory Verification',
    tagline: 'Know who you\'re buying from before you pay.',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, equipment, workforce, and certifications. We provide a detailed audit report so you can make an informed decision.',
    points: [
      'Business license and registration check',
      'On-site production capacity assessment',
      'Equipment and facility inspection',
      'Workforce and management interview',
      'Certification verification (ISO, CE, etc.)',
    ],
  },
  {
    id: 'quality-inspection',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
    imgId: 'svc-img-qc-e5f6',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they leave China.',
    desc: 'Our local QC inspectors conduct pre-shipment and in-line inspections based on your product specifications and AQL standards. You receive a detailed inspection report with photos before goods are shipped.',
    points: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling and defect classification',
      'Photo and video documentation',
      'Pass/fail recommendation report',
    ],
  },
  {
    id: 'production-followup',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
    imgId: 'svc-img-prod-g7h8',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    tagline: 'Stay informed at every stage of production.',
    desc: 'We act as your eyes and ears on the ground, monitoring production progress from raw material procurement to finished goods. Regular updates keep you informed and allow early intervention if issues arise.',
    points: [
      'Production schedule tracking',
      'Raw material and component checks',
      'Weekly progress reports',
      'Issue escalation and resolution',
      'Pre-shipment readiness confirmation',
    ],
  },
  {
    id: 'shipping-coordination',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
    imgId: 'svc-img-ship-i9j0',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your warehouse.',
    desc: 'We coordinate with trusted freight forwarders to arrange sea freight, air freight, or express courier shipments. We handle export documentation, customs clearance support, and keep you updated on shipment status.',
    points: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
  },
  {
    id: 'private-label',
    titleId: 'svc-title-oem',
    descId: 'svc-desc-oem',
    imgId: 'svc-img-oem-k1l2',
    icon: Package,
    title: 'Private Label & OEM',
    tagline: 'Build your brand with Chinese manufacturing.',
    desc: 'We help you develop custom-branded products with Chinese manufacturers, from initial design and prototyping to bulk production and delivery. Ideal for brands looking to launch or expand their product range.',
    points: [
      'Product design and specification development',
      'OEM/ODM factory matching',
      'Prototype and sample management',
      'Packaging and labeling coordination',
      'Full production and QC management',
    ],
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#e88a80' }}>
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Sourcing Services</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            A complete range of services to help you source from China safely, efficiently, and at the right price.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#fef2f2' }}>
                      <Icon className="w-6 h-6" style={{ color: '#c0392b' }} />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1a2e4a' }}>{svc.title}</h2>
                    <p className="text-base font-medium mb-4" style={{ color: '#c0392b' }}>{svc.tagline}</p>
                    <p id={svc.descId} className="text-base leading-relaxed mb-6" style={{ color: '#4a5568' }}>{svc.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                          <span className="text-sm" style={{ color: '#4a5568' }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-2 font-semibold no-underline hover:gap-3 transition-all" style={{ color: '#2980b9' }}>
                      Enquire about this service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#c0392b' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Tell us about your sourcing challenge and we'll recommend the right approach.
          </p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Services;
