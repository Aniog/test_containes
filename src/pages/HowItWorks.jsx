import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, Clock, FileText, Search, Factory, Package, Truck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, quantity, target price, destination, and any compliance or certification needs. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications', 'Target unit price and MOQ', 'Destination country and delivery timeline', 'Certification requirements (CE, FCC, etc.)'],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified manufacturer database and conducts targeted research to identify 3–5 suppliers that match your requirements. We evaluate pricing, MOQ, lead time, and export experience.',
    details: ['Database and market research', 'Supplier capability assessment', 'Price and MOQ comparison', 'Shortlist report delivered within 5–10 days'],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before recommending any supplier, we conduct an on-site factory audit. We verify business registration, production capacity, equipment, workforce, and certifications. You receive a detailed audit report with photos.',
    details: ['Business license and registration check', 'On-site production capacity audit', 'Certification and compliance verification', 'Audit report with photos and findings'],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Development & Approval',
    desc: 'Once you select a supplier, we coordinate sample production and delivery. We inspect samples against your specifications before shipping them to you. Revisions are managed directly with the factory.',
    details: ['Sample request coordination', 'Pre-shipment sample inspection', 'Revision management with factory', 'Sample approval confirmation'],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: CheckCircle,
    title: 'Production Monitoring & QC',
    desc: 'During production, we conduct regular on-site visits and provide progress updates. Before shipment, our QC inspectors perform a pre-shipment inspection using AQL sampling standards and your product checklist.',
    details: ['Production schedule monitoring', 'During-production inspection (DUPRO)', 'Pre-shipment inspection (PSI)', 'Detailed QC report with photos'],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'After QC approval, we coordinate with freight forwarders for sea, air, or express shipping. We handle export documentation, customs declarations, and provide shipment tracking until goods arrive at your destination.',
    details: ['Freight forwarder coordination', 'Export documentation preparation', 'Customs clearance support', 'Shipment tracking to destination'],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How We Source for You</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from inquiry to delivery. We handle the complexity of China sourcing so you can focus on your business.
            </p>
            <div className="flex items-center gap-2 mt-6 text-blue-100 text-sm">
              <Clock className="w-4 h-4 text-gold" />
              <span>Typical timeline: 4–8 weeks from inquiry to first shipment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map(({ num, icon: Icon, title, desc, details, imgId, titleId, descId }, idx) => (
              <div key={num} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">{num}</span>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-primary mb-3">{title}</h2>
                  <p id={descId} className="text-muted leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {details.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm text-darktext">
                        <CheckCircle className="w-4 h-4 text-success shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-sm ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-red-100 mb-8">Submit your inquiry and we'll respond within 24 hours with a free assessment.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
