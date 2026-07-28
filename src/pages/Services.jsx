import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We locate and evaluate manufacturers that match your product requirements, quality standards, and commercial terms.',
      items: [
        'Product specification analysis and supplier matching',
        'Database and network-based supplier search',
        'Initial capability screening and shortlisting',
        'Request for quotation (RFQ) management',
        'Supplier comparison and recommendation reports',
      ],
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site assessments verify that potential suppliers can meet your quality, capacity, and compliance requirements.',
      items: [
        'Production capability evaluation',
        'Quality management system review',
        'Financial and operational stability checks',
        'Social compliance and environmental assessments',
        'Detailed audit reports with photos and findings',
      ],
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Independent quality verification at critical production stages reduces the risk of receiving non-conforming goods.',
      items: [
        'Pre-production sample verification',
        'During-production inspections',
        'Pre-shipment inspections (AQL sampling)',
        'Container loading supervision',
        'Laboratory testing coordination',
      ],
    },
    {
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of manufacturing schedules and quality helps identify and resolve issues before they impact delivery.',
      items: [
        'Production schedule tracking',
        'Regular factory visits and status reports',
        'Issue identification and escalation',
        'Corrective action coordination',
        'Progress documentation for your records',
      ],
    },
    {
      title: 'Shipping & Logistics Coordination',
      desc: 'We manage the movement of goods from factory to your destination, handling documentation and carrier arrangements.',
      items: [
        'Freight forwarder coordination',
        'Export documentation preparation',
        'Customs clearance support',
        'Shipping schedule management',
        'Delivery tracking and reporting',
      ],
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'For repeat orders, we maintain supplier relationships and quality standards over time.',
      items: [
        'Periodic supplier performance reviews',
        'Price and lead time negotiations',
        'Quality improvement programs',
        'New product development support',
        'Backup supplier identification',
      ],
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-brand-navy mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive support for every stage of sourcing from China. 
            Select the services that match your needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 border-l-4 border-brand-teal pl-6">
                  <h2 className="text-2xl font-semibold text-brand-navy mb-3">{service.title}</h2>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-brand-teal mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-5">
                  <img
                    data-strk-img-id={`services-img-${i}`}
                    data-strk-img={`[services-desc-${i}] [services-title-${i}] services sourcing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="rounded-lg border border-slate-200 w-full h-auto"
                  />
                  <p id={`services-desc-${i}`} className="sr-only">{service.desc}</p>
                  <h3 id={`services-title-${i}`} className="sr-only">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Service Package?</h2>
          <p className="text-slate-300 mb-6">We tailor our services to your specific requirements and order volume.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-navy hover:bg-slate-100">Discuss Your Needs</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
