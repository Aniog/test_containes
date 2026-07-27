import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Send, Search, Shield, ClipboardCheck, Factory, Truck,
  ArrowRight, CheckCircle, Clock, MessageCircle
} from 'lucide-react';

function HowItWorksHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white py-20 md:py-28">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>Transparent Process, Clear Results</span>
          </div>
          <h1 id="how-title" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            How Our Sourcing Process Works
          </h1>
          <p id="how-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            A clear, step-by-step process that keeps you informed and in control from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      step: '01',
      icon: Send,
      title: 'Submit Your Sourcing Request',
      description: 'Tell us what products you need. Share your specifications, target price, quantity, and timeline. The more details you provide, the better we can match you with the right suppliers.',
      details: [
        'Product specifications and requirements',
        'Target price range and order quantity',
        'Quality standards and certifications needed',
        'Preferred timeline and delivery date'
      ],
      time: 'Day 1'
    },
    {
      step: '02',
      icon: Search,
      title: 'Supplier Search & Matching',
      description: 'Our team searches through our network of verified factories and identifies the best matches for your product. We evaluate capabilities, pricing, and reliability.',
      details: [
        'Search across 500+ verified suppliers',
        'Evaluate production capabilities',
        'Compare pricing and minimum order quantities',
        'Shortlist 3-5 best-matched suppliers'
      ],
      time: 'Days 2-7'
    },
    {
      step: '03',
      icon: Shield,
      title: 'Supplier Verification',
      description: 'Before introducing any supplier, we conduct thorough verification including license checks, factory audits, and capability assessments.',
      details: [
        'Verify business licenses and certifications',
        'Conduct on-site factory audits',
        'Assess production capacity and equipment',
        'Provide detailed verification reports'
      ],
      time: 'Days 5-14'
    },
    {
      step: '04',
      icon: MessageCircle,
      title: 'Sampling & Negotiation',
      description: 'We collect samples from shortlisted suppliers, negotiate pricing and terms, and present you with options for your evaluation.',
      details: [
        'Request and collect samples',
        'Negotiate pricing and payment terms',
        'Provide sample comparison reports',
        'Ship samples to you for evaluation'
      ],
      time: 'Days 10-28'
    },
    {
      step: '05',
      icon: Factory,
      title: 'Production & Quality Control',
      description: 'Once you approve a supplier and place your order, we monitor production progress and conduct quality inspections at key stages.',
      details: [
        'Monitor production timeline',
        'Conduct during-production inspections',
        'Perform pre-shipment quality checks',
        'Provide detailed inspection reports'
      ],
      time: 'Weeks 3-10'
    },
    {
      step: '06',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We arrange freight forwarding, prepare all customs documentation, and coordinate delivery to your specified location.',
      details: [
        'Arrange sea, air, or express shipping',
        'Prepare customs documentation',
        'Consolidate multiple orders if needed',
        'Track shipment until delivery'
      ],
      time: 'Weeks 8-16'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Step-by-Step Sourcing Process</h2>
          <p className="section-subtitle mx-auto">
            From your first inquiry to final delivery, we handle every detail.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {steps.map((item, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Step Number & Icon */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="lg:hidden">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <span className="text-sm text-primary font-medium">{item.time}</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <div className="hidden lg:block mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <span className="text-sm text-primary font-medium">{item.time}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="lg:col-span-4">
                <div className="rounded-xl overflow-hidden shadow-lg bg-secondary aspect-[4/3] flex items-center justify-center">
                  <item.icon className="w-16 h-16 text-primary/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Typical Project Timeline</h2>
          <p className="section-subtitle mx-auto">
            Timelines vary by product complexity, but here is a general guide.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { phase: 'Supplier Search', duration: '1-2 weeks', desc: 'Finding and verifying suppliers' },
            { phase: 'Sampling', duration: '2-4 weeks', desc: 'Sample collection and approval' },
            { phase: 'Production', duration: '3-8 weeks', desc: 'Manufacturing and QC' },
            { phase: 'Shipping', duration: '2-6 weeks', desc: 'Freight and delivery' },
          ].map((item, index) => (
            <div key={index} className="card text-center">
              <div className="text-sm text-primary font-semibold mb-2">{item.phase}</div>
              <div className="text-2xl font-bold text-foreground mb-1">{item.duration}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksCTA() {
  return (
    <section className="section-padding bg-[#0A1628] text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Submit your requirements and we will get back to you within 24 hours with a detailed sourcing plan.
        </p>
        <Link to="/contact" className="btn-primary text-lg px-8 py-4">
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <ProcessTimeline />
      <HowItWorksCTA />
    </>
  );
}
