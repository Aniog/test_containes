import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  MessageSquare, Search, Shield, Factory, CheckCircle, Truck,
  ArrowRight, Clock, FileCheck, Globe, Users, Phone, Mail
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1-2 days',
    description: 'Share your product requirements, target price, order quantity, and delivery timeline. We review your specifications and confirm feasibility within 24-48 hours.',
    details: [
      'Product specifications review',
      'Target price analysis',
      'Quantity and timeline assessment',
      'Preliminary feasibility report',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Sourcing',
    duration: '5-7 days',
    description: 'Our team identifies and evaluates potential suppliers from our verified network. We present you with shortlisted options including pricing, capabilities, and lead times.',
    details: [
      'Supplier identification from verified database',
      'Capability and capacity assessment',
      'Price comparison and negotiation',
      'Supplier shortlist presentation',
    ],
  },
  {
    step: '03',
    icon: Shield,
    title: 'Factory Verification',
    duration: '3-5 days',
    description: 'We conduct on-site audits of shortlisted suppliers, verifying their legitimacy, equipment, certifications, and production capabilities.',
    details: [
      'On-site factory visits',
      'Business license verification',
      'Equipment and facility inspection',
      'Certification validation',
      'Detailed audit report with photos',
    ],
  },
  {
    step: '04',
    icon: FileCheck,
    title: 'Sample & Approval',
    duration: '7-14 days',
    description: 'We coordinate product samples for your evaluation. You approve materials, quality, and specifications before moving to mass production.',
    details: [
      'Sample production coordination',
      'Quality and specification check',
      'Sample shipping and tracking',
      'Revision management if needed',
    ],
  },
  {
    step: '05',
    icon: Factory,
    title: 'Production Management',
    duration: 'Varies by product',
    description: 'Once you approve samples, we manage the entire production process with regular updates, milestone tracking, and proactive issue resolution.',
    details: [
      'Production schedule planning',
      'Raw material verification',
      'In-line quality checks',
      'Progress photo/video updates',
      'Delay identification and mitigation',
    ],
  },
  {
    step: '06',
    icon: CheckCircle,
    title: 'Quality Inspection',
    duration: '1-3 days',
    description: 'Before shipping, our QC team conducts thorough inspections using AQL standards to ensure products meet your specifications.',
    details: [
      'Pre-shipment final inspection',
      'AQL sampling and testing',
      'Function and safety testing',
      'Defect documentation',
      'Accept/rework decision support',
    ],
  },
  {
    step: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Varies by method',
    description: 'We handle all logistics including customs documentation, freight booking, container loading supervision, and door-to-door delivery coordination.',
    details: [
      'Freight rate comparison',
      'Customs documentation',
      'Container loading supervision',
      'Shipment tracking',
      'Delivery coordination',
    ],
  },
];

const timelineData = [
  { phase: 'Consultation', days: '1-2' },
  { phase: 'Sourcing', days: '5-7' },
  { phase: 'Verification', days: '3-5' },
  { phase: 'Sampling', days: '7-14' },
  { phase: 'Production', days: '15-60' },
  { phase: 'QC Inspection', days: '1-3' },
  { phase: 'Shipping', days: '15-45' },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-navy text-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              How We Work With You
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A clear, step-by-step process designed to make sourcing from China simple, transparent, and risk-free for international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={step.step} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
                {/* Timeline connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[2.5rem] top-[5rem] bottom-0 w-0.5 bg-slate-200" />
                )}
                
                <div className={`lg:pr-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl relative z-10">
                      {step.step}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <step.icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {step.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index % 2 === 0 && (
                  <div className="hidden lg:block lg:pl-12">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        data-strk-img-id={`process-step-${step.step}-img`}
                        data-strk-img={`[process-step-${step.step}-title] China sourcing process manufacturing`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="w-full h-auto object-cover"
                      />
                      <span id={`process-step-${step.step}-title`} className="hidden">{step.title}</span>
                    </div>
                  </div>
                )}

                <div className="pb-12 lg:pb-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Typical Project Timeline</h2>
            <p className="section-subheading">
              Timelines vary by product complexity and quantity. Here is a general overview of what to expect.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {timelineData.map((item) => (
                <div key={item.phase} className="text-center">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 mb-2">
                    <p className="text-2xl font-bold text-primary-600">{item.days}</p>
                    <p className="text-xs text-slate-500">days</p>
                  </div>
                  <p className="text-sm font-medium text-navy">{item.phase}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              * Production and shipping times vary significantly by product type and shipping method.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Why Our Process Works</h2>
            <p className="section-subheading">
              We have refined our process over 10+ years of sourcing experience to minimize risk and maximize value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Local Expertise',
                description: 'Our team is based in China with deep knowledge of manufacturing regions, supplier landscapes, and business practices.',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'You work with a dedicated sourcing specialist who manages your project from start to finish, ensuring continuity and accountability.',
              },
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Multiple verification and inspection checkpoints catch issues early, protecting your investment and brand reputation.',
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will walk you through the process step by step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+86-21-5555-0123" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
