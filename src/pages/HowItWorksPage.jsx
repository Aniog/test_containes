import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Search, Building2, ClipboardCheck, Ship, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need. Share product details, specifications, target quantity, budget range, and your timeline. The more information you provide, the more accurate our quote will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality requirements and standards',
      'Preferred timeline and delivery date',
      'Any existing supplier information',
    ],
    tip: 'Include photos, drawings, or reference products if available.',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Receive Your Sourcing Quote',
    description: 'Within 24-48 hours, we analyze your requirements and provide a detailed sourcing plan including estimated costs, timeline, and recommended approach.',
    details: [
      'Transparent cost breakdown',
      'Recommended sourcing strategy',
      'Estimated timeline for each phase',
      'Service fee structure',
      'No obligation to proceed',
    ],
    tip: 'Our quotes are free and come with no commitment.',
  },
  {
    step: 3,
    icon: Search,
    title: 'Supplier Identification & Matching',
    description: 'We search our verified supplier network and identify manufacturers that match your product requirements, quality standards, and production capacity needs.',
    details: [
      'Database search across 500+ verified suppliers',
      'Capability and capacity matching',
      'Initial price comparison',
      'Supplier shortlisting (typically 3-5 options)',
      'Detailed supplier profiles provided',
    ],
    tip: 'We only recommend suppliers we have personally verified.',
  },
  {
    step: 4,
    icon: Building2,
    title: 'Factory Verification & Sampling',
    description: 'Our team visits shortlisted factories to verify legitimacy, production capacity, quality systems, and working conditions. We also coordinate sample production for your approval.',
    details: [
      'On-site factory audit',
      'Business license verification',
      'Production line inspection',
      'Quality management review',
      'Sample coordination and shipping',
    ],
    tip: 'Factory audits typically take 3-5 business days.',
  },
  {
    step: 5,
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    description: 'Once you approve a supplier and samples, we monitor production progress and conduct quality inspections at key stages to ensure everything meets your specifications.',
    details: [
      'Production schedule monitoring',
      'Pre-production inspection',
      'During-production checks',
      'Pre-shipment inspection',
      'Detailed inspection reports with photos',
    ],
    tip: 'We catch issues before they become costly problems.',
  },
  {
    step: 6,
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics from factory pickup to your warehouse, including export documentation, customs clearance, and freight forwarding.',
    details: [
      'Freight forwarding (sea, air, express)',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
    ],
    tip: 'We work with reliable freight partners for competitive rates.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Sourcing Process Works</h1>
            <p className="text-lg text-slate-300 mb-8">
              A clear, step-by-step approach from your initial inquiry to final delivery. We make sourcing from China simple and transparent.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Start Your Sourcing Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{step.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-800">{step.tip}</span>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className="bg-secondary/50 rounded-xl p-8 text-center">
                    <step.icon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <div className="text-6xl font-bold text-primary/10">{step.step}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Typical Timeline</h2>
            <p className="section-subtitle">How long does the sourcing process take?</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">1-2 Days</h3>
              <p className="text-sm text-muted-foreground">Quote & sourcing plan</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Search className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">1-2 Weeks</h3>
              <p className="text-sm text-muted-foreground">Supplier matching</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">1-2 Weeks</h3>
              <p className="text-sm text-muted-foreground">Factory audit & sampling</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Ship className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">2-6 Weeks</h3>
              <p className="text-sm text-muted-foreground">Production & shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Submit your sourcing request today and receive a free quote within 24 hours.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
