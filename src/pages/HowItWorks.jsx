import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our inquiry form or contact us directly with details about the products you want to source, target specifications, quantity, and timeline.',
      items: ['Product description and specifications', 'Target price range', 'Order quantity', 'Required certifications', 'Delivery destination'],
    },
    {
      number: '02',
      title: 'Requirement Review & Proposal',
      desc: 'Our team reviews your requirements and provides a project proposal including estimated timeline, scope of work, and transparent pricing.',
      items: ['Feasibility assessment', 'Recommended approach', 'Timeline estimate', 'Fixed project fee quote'],
    },
    {
      number: '03',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and industry networks to identify manufacturers capable of meeting your requirements.',
      items: ['Database and trade show research', 'Direct factory outreach', 'Initial capability screening', 'Preliminary pricing comparison'],
    },
    {
      number: '04',
      title: 'Shortlist & Verification',
      desc: 'We present a shortlist of qualified suppliers and conduct on-site factory audits to verify legitimacy and capabilities.',
      items: ['Detailed supplier profiles', 'On-site factory audit', 'Sample coordination', 'Reference checks'],
    },
    {
      number: '05',
      title: 'Sample Approval',
      desc: 'We coordinate sample production and delivery for your review and approval before moving to mass production.',
      items: ['Sample order placement', 'Quality review support', 'Specification refinement', 'Final supplier selection'],
    },
    {
      number: '06',
      title: 'Production & Quality Control',
      desc: 'We oversee production, conduct inspections at key stages, and provide regular progress reports.',
      items: ['Production schedule monitoring', 'In-process inspections', 'Quality issue resolution', 'Photo and video updates'],
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      desc: 'We coordinate logistics, prepare export documentation, and support customs clearance until goods reach your destination.',
      items: ['Freight booking', 'Export documentation', 'Customs coordination', 'Final delivery tracking'],
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How It Works</h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl">
            A structured, transparent process designed to reduce risk and deliver reliable sourcing outcomes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="grid md:grid-cols-12 gap-8 items-start border-b border-[#e2e8f0] pb-12 last:border-0 last:pb-0">
                <div className="md:col-span-2">
                  <div className="text-[#C5A46E] text-4xl font-semibold">{step.number}</div>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#475569] leading-relaxed">{step.desc}</p>
                </div>
                <div className="md:col-span-5">
                  <ul className="space-y-2 text-sm">
                    {step.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-2 text-[#475569]">
                        <span className="text-[#C5A46E]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Typical Project Timeline</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
            <Card>
              <CardContent className="pt-6">
                <CardTitle className="text-base mb-2">Supplier Shortlisting</CardTitle>
                <p className="text-sm text-[#475569]">2-3 weeks from requirement submission to shortlist presentation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CardTitle className="text-base mb-2">Verification & Sampling</CardTitle>
                <p className="text-sm text-[#475569]">3-5 weeks including factory audits and sample production.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CardTitle className="text-base mb-2">Production & Delivery</CardTitle>
                <p className="text-sm text-[#475569]">Varies by product. Typically 4-12 weeks from order confirmation.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10">
            <Button asChild variant="accent">
              <Link to="/contact">Start Your Sourcing Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
