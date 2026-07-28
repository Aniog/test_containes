import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-3 days',
      desc: 'We discuss your product requirements, target pricing, quality expectations, order volumes, and timeline. This helps us understand what success looks like for your project.',
      details: [
        'Product specifications and technical requirements',
        'Quality standards and certifications needed',
        'Target price range and volume expectations',
        'Delivery timeline and destination',
        'Any special compliance or packaging needs',
      ],
    },
    {
      number: '02',
      title: 'Supplier Research & Shortlisting',
      duration: '1-3 weeks',
      desc: 'Using our supplier database and industry networks, we identify manufacturers capable of meeting your requirements. We conduct initial screening before presenting options.',
      details: [
        'Database and trade show supplier identification',
        'Capability and capacity pre-screening',
        'Preliminary pricing and lead time checks',
        'Shortlist of 3-6 qualified candidates',
        'Comparison report with pros and cons',
      ],
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '1-2 weeks',
      desc: 'We conduct on-site audits of shortlisted factories to verify their capabilities, quality systems, and business legitimacy before you commit to samples or orders.',
      details: [
        'Production equipment and capacity assessment',
        'Quality control process review',
        'Staffing and management evaluation',
        'Financial and legal verification',
        'Detailed audit report with photos',
      ],
    },
    {
      number: '04',
      title: 'Sampling & Approval',
      duration: '2-6 weeks',
      desc: 'We coordinate sample production and evaluation. This stage confirms that the supplier can meet your quality standards before moving to production.',
      details: [
        'Sample order placement and tracking',
        'Sample inspection and testing coordination',
        'Feedback collection and communication',
        'Specification refinement if needed',
        'Final supplier selection and approval',
      ],
    },
    {
      number: '05',
      title: 'Production & Quality Control',
      duration: '4-12 weeks',
      desc: 'Once production begins, we monitor progress and conduct inspections at key stages to catch issues early and ensure the final product meets specifications.',
      details: [
        'Production schedule confirmation and monitoring',
        'Pre-production sample verification',
        'In-process quality checks',
        'Pre-shipment inspection (AQL sampling)',
        'Issue resolution and corrective actions',
      ],
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      duration: '2-6 weeks',
      desc: 'We coordinate logistics from factory to your destination, managing documentation and carrier arrangements to ensure smooth customs clearance and on-time delivery.',
      details: [
        'Freight booking and carrier selection',
        'Export documentation preparation',
        'Container loading supervision',
        'Customs clearance support',
        'Delivery tracking and final reporting',
      ],
    },
  ];

  const communication = [
    { title: 'Weekly Status Reports', desc: 'Written updates on progress, issues, and upcoming milestones.' },
    { title: 'Photo & Video Documentation', desc: 'Regular visual updates from the factory floor.' },
    { title: 'Direct Communication', desc: 'We facilitate direct contact with suppliers when appropriate.' },
    { title: 'Dedicated Project Contact', desc: 'One point of contact who knows your project details.' },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-brand-navy mb-4">How It Works</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A structured, transparent process that keeps you informed and in control at every stage.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <div className="sticky top-24">
                    <div className="text-brand-teal font-mono text-4xl font-semibold mb-2">{step.number}</div>
                    <h2 className="text-xl font-semibold text-brand-navy mb-1">{step.title}</h2>
                    <div className="text-sm text-brand-teal font-medium">{step.duration}</div>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <p id={`how-step-${i}-desc`} className="text-slate-600 mb-4">{step.desc}</p>
                  <div className="mb-4">
                    <img
                      data-strk-img-id={`how-step-${i}-img`}
                      data-strk-img={`[how-step-${i}-desc] [how-step-${i}-title] sourcing process`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="rounded-lg border border-slate-200 w-full h-auto"
                    />
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700">
                        <span className="text-brand-teal mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-brand-navy mb-8 text-center">Communication & Reporting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {communication.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">Typical Project Timeline</h2>
          <p className="text-slate-600 mb-8">
            From initial inquiry to first delivery, most projects take 10-20 weeks depending on product complexity and order size.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"><Button>Get a Timeline Estimate</Button></Link>
            <Link to="/case-studies"><Button variant="outline">See Example Projects</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
