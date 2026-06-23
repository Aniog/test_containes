import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, Factory, ClipboardCheck, Ship, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    title: 'Supplier Sourcing',
    description: 'We find and vet the most suitable suppliers for your specific product requirements, focusing on quality, price, and reliability.',
    features: ['Price Negotiation', 'Sample Ordering', 'Supplier Assessment', 'Custom Branding Support'],
    icon: Search
  },
  {
    id: 'audit',
    title: 'Factory Audit',
    description: "Don't take their word for it. We visit factories to verify their production capabilities, quality systems, and social compliance.",
    features: ['ISO Standards Check', 'Technical Capability Audit', 'Social Compliance (BSCI)', 'Production Line Inspection'],
    icon: Factory
  },
  {
    id: 'qc',
    title: 'Quality Inspection',
    description: 'We inspect your goods at various stages to ensure they meet your quality standards before leaving the factory.',
    features: ['Pre-Shipment Inspection (PSI)', 'During Production Check (DUPRO)', 'Container Loading Supervision', 'Detailed Inspection Reports'],
    icon: ShieldCheck
  },
  {
    id: 'followup',
    title: 'Production Management',
    description: 'We act as your on-site office, monitoring your orders daily to ensure production stays on schedule and avoids problems.',
    features: ['Daily Production Tracking', 'Conflict Resolution', 'Timeline Management', 'Photo/Video Updates'],
    icon: ClipboardCheck
  },
  {
    id: 'logistics',
    title: 'Logistics & Shipping',
    description: 'We handle the complexities of international shipping so you can focus on selling your products.',
    features: ['Freight Forwarding (Sea/Air)', 'Customs Clearance', 'Consolidation Services', 'Door-to-Door Delivery'],
    icon: Ship
  },
  {
    id: 'consulting',
    title: 'Sourcing Consulting',
    description: 'Expert advice on navigating the Chinese market, product development, and supply chain optimization.',
    features: ['Market Research', 'IP Strategy', 'Product Development', 'Compliance Guidance'],
    icon: Headphones
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            End-to-end sourcing solutions tailored to your business needs. We bridge the gap between you and the best suppliers in China.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((svc) => (
              <div key={svc.id} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svc.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{svc.title}</h3>
                <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                  {svc.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {svc.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                data-strk-img-id="inspection-detail"
                data-strk-img="quality control inspection electronic product china factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/xml' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Rigorous Quality Control</h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                We believe that quality is the foundation of any successful B2B partnership. Our on-the-ground inspectors follow strict AQL (Acceptance Quality Limit) 2.5/4.0 standards to ensure every shipment meets your expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Functional Testing</h4>
                  <p className="text-sm text-slate-500 font-medium">Verifying all product features work as specified.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Visual Inspection</h4>
                  <p className="text-sm text-slate-500 font-medium">Checking for cosmetic defects and material flaws.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Packing & Labeling</h4>
                  <p className="text-sm text-slate-500 font-medium">Ensuring shipping marks and barcodes are correct.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Drop Tests</h4>
                  <p className="text-sm text-slate-500 font-medium">Ensuring packaging is sufficient for transport.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Need a Customized Solution?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            We understand that every business has unique requirements. Let's discuss a sourcing plan tailored to your volume and needs.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-10" asChild>
            <Link to="/contact">Request a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
