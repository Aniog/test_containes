import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Search, Building2, FlaskConical, Settings, Ship, ArrowRight, CheckCircle, Clock, FileText, DollarSign } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: '1. Share Your Requirements',
    desc: 'Fill out our inquiry form or schedule a call. Tell us about your product, target price, quantity, quality standards, and any certifications you need. The more detail you provide, the faster we can find the right suppliers.',
    duration: 'Day 1-2',
    imgId: 'howitworks-1-3a4b5c',
  },
  {
    number: '02',
    icon: Search,
    title: '2. Supplier Shortlisting',
    desc: 'We search our verified supplier database and leverage our network to identify manufacturers that match your requirements. We evaluate each candidate against your criteria and present you with a shortlist of 3-5 qualified suppliers.',
    duration: 'Day 3-7',
    imgId: 'howitworks-2-4b5c6d',
  },
  {
    number: '03',
    icon: Building2,
    title: '3. Factory Audit & Verification',
    desc: 'Our team visits shortlisted factories in person to verify production capacity, quality management systems, certifications, and working conditions. You receive detailed audit reports with photos and recommendations.',
    duration: 'Day 8-14',
    imgId: 'howitworks-3-5c6d7e',
  },
  {
    number: '04',
    icon: FlaskConical,
    title: '4. Samples & Negotiation',
    desc: 'We coordinate sample production and shipping to you. Once samples are approved, we negotiate pricing, payment terms, lead times, and contract terms on your behalf to secure the best deal.',
    duration: 'Day 15-30',
    imgId: 'howitworks-4-6d7e8f',
  },
  {
    number: '05',
    icon: Settings,
    title: '5. Production & QC Monitoring',
    desc: 'Once production begins, we monitor timelines, inspect raw materials, and conduct during-production and pre-shipment inspections. You receive regular updates with photos and quality reports.',
    duration: 'Day 31-60+',
    imgId: 'howitworks-5-7e8f9a',
  },
  {
    number: '06',
    icon: Ship,
    title: '6. Shipping & Delivery',
    desc: 'We handle all logistics including freight booking, export documentation, customs clearance, and door-to-door delivery. We track your shipment until it arrives safely at your destination.',
    duration: 'Day 60-75',
    imgId: 'howitworks-6-8f9a1b',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A structured, transparent process designed to minimize risk and maximize results. From briefing to delivery, we are with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 md:gap-10">
                {/* Timeline line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-primary/10" />
                )}
                {/* Step number circle */}
                <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-primary text-white items-center justify-center text-lg font-bold relative z-10">
                  {step.number}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <span className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                      <step.icon className="w-8 h-8 text-primary mb-3 md:hidden" />
                      <h2 className="text-2xl font-bold text-primary mb-3">{step.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="w-full md:w-56 shrink-0">
                      <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          data-strk-img-id={step.imgId}
                          data-strk-img={`[step-title-${idx}]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span id={`step-title-${idx}`} className="hidden">{step.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Typical Timeline</h2>
            <p className="text-gray-600">End-to-end sourcing typically takes 8-12 weeks depending on product complexity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-lg border border-gray-100">
                <div className="text-2xl font-bold text-accent mb-1">{step.number}</div>
                <div className="text-xs text-gray-500 mb-1">{step.duration}</div>
                <div className="text-sm font-medium text-primary">{step.title.replace(/^\d+\.\s*/, '')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">Share your requirements and we will provide a detailed plan within 24 hours.</p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}