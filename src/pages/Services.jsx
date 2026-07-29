import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle, Truck, ClipboardList, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const fullServices = [
    {
      title: 'Product Sourcing & Procurement',
      desc: 'We identify and vet top-tier manufacturers that meet your specific quality and price requirements. Our team handles everything from sample consolidation to price negotiation.',
      features: ['Vendor selection', 'Price negotiation', 'Sample coordination', 'Contract management'],
      icon: Search,
      id: 'sourcing',
      imgId: 'svc-sourcing-img'
    },
    {
      title: 'Supplier Audit & Verification',
      desc: 'Don\'t risk your business on unverified suppliers. We perform on-site audits to verify factory legitimacy, production capabilities, and ethical standards.',
      features: ['Background checks', 'On-site inspections', 'Capacity assessment', 'Social compliance audit'],
      icon: ShieldCheck,
      id: 'audit',
      imgId: 'svc-audit-img'
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Ensure every product meets your standards. We provide comprehensive inspections at various stages of production to catch issues before they leave the factory.',
      features: ['Pre-production inspection', 'Dupro (During production)', 'Pre-shipment inspection (PSI)', 'Container loading check'],
      icon: CheckCircle,
      id: 'qc',
      imgId: 'svc-qc-img'
    },
    {
      title: 'Production Management',
      desc: 'Stay informed at every step. We monitor production timelines, resolve manufacturing hurdles, and provide weekly progress reports with photos and videos.',
      features: ['Timeline monitoring', 'Issue resolution', 'Regular status reports', 'Lab testing coordination'],
      icon: ClipboardList,
      id: 'production',
      imgId: 'svc-prod-img'
    },
    {
      title: 'Logistics & Shipping Support',
      desc: 'Streamline your shipping from China. We coordinate sea, air, and rail freight, handle customs documentation, and manage last-mile delivery to your warehouse.',
      features: ['Freight forwarding', 'Customs clearance', 'Consolidation services', 'Door-to-door delivery'],
      icon: Truck,
      id: 'logistics',
      imgId: 'svc-log-img'
    },
    {
      title: 'Custom Branding & Packaging',
      desc: 'Build your brand with professional packaging solutions. We help you source custom boxes, labels, and inserts that give your products a premium feel.',
      features: ['Box design sourcing', 'Language translation', 'Private label setup', 'Instruction manuals'],
      icon: TrendingUp,
      id: 'branding',
      imgId: 'svc-brand-img'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-width-container px-4 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-extrabold mb-6">Comprehensive Sourcing Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From initial product search to final delivery, we provide the expertise and boots-on-the-ground support you need to succeed in China.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="max-width-container px-4">
          <div className="flex flex-col gap-24">
            {fullServices.map((svc, index) => (
              <div key={svc.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <svc.icon size={32} />
                  </div>
                  <h2 id={`title-${svc.id}`} className="text-3xl font-extrabold text-slate-900">{svc.title}</h2>
                  <p id={`desc-${svc.id}`} className="text-lg text-slate-600 leading-relaxed uppercase shadow-sm border-l-4 border-secondary pl-4 font-semibold hidden">
                    {svc.title} specialized service
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">{svc.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {svc.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle className="text-secondary" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div 
                    className="absolute inset-0 bg-slate-200"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[title-${svc.id}] [services-page-title] China business process factory`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="1000"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="max-width-container px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-8">Ready to Optimize Your Supply Chain?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary px-10 py-4 text-lg font-bold">Request a Quote</button>
            <button className="bg-white text-primary border border-primary/20 hover:bg-slate-50 px-10 py-4 rounded-lg font-bold transition-all shadow-sm">Contact Our Experts</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
