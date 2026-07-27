import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and qualify manufacturers that match your product specifications, volume requirements, and quality standards.',
      details: [
        'Product specification analysis',
        'Supplier database search and outreach',
        'Capability and capacity assessment',
        'Initial price and lead time comparison',
        'Shortlist of 3-5 qualified options',
      ],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to confirm supplier legitimacy, production capabilities, and compliance with international standards.',
      details: [
        'Business registration and license verification',
        'Production facility inspection',
        'Equipment and capacity assessment',
        'Quality management system review',
        'Social compliance and working conditions',
      ],
    },
    {
      title: 'Quality Inspection',
      desc: 'Independent inspection services to verify product quality before shipment and reduce the risk of receiving defective goods.',
      details: [
        'Pre-production inspection',
        'During production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Detailed inspection reports with photos',
      ],
    },
    {
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of your orders to ensure production stays on schedule and meets agreed specifications.',
      details: [
        'Production schedule tracking',
        'Milestone progress reports',
        'Issue identification and escalation',
        'Sample coordination and approval',
        'Communication with factory management',
      ],
    },
    {
      title: 'Shipping Coordination',
      desc: 'End-to-end logistics support including freight booking, documentation, and customs clearance assistance.',
      details: [
        'Freight rate comparison and booking',
        'Export documentation preparation',
        'Customs clearance coordination',
        'Shipping schedule monitoring',
        'Delivery coordination at destination',
      ],
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Our Services</h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl">
            Comprehensive support for sourcing from China. Each service can be engaged individually or as part of a full project.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-4">{service.title}</h2>
                <p className="text-lg text-[#475569] mb-6">{service.desc}</p>
                <Button asChild variant="accent">
                  <Link to="/contact">Request a Quote for This Service</Link>
                </Button>
              </div>
              <div className="bg-[#f8fafc] rounded-lg p-8">
                <h3 className="font-semibold mb-4 text-sm tracking-widest text-[#64748b]">WHAT'S INCLUDED</h3>
                <ul className="space-y-3">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-sm">
                      <span className="text-[#C5A46E] mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Scope?</h2>
          <p className="text-[#475569] mb-6">We can tailor our services to your specific requirements. Contact us to discuss your project.</p>
          <Button asChild variant="primary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
