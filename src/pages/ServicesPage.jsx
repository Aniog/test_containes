import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Timer, Ship, ArrowRight, CheckCircle, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers that match your product requirements, quality standards, and budget. Our extensive network covers all major manufacturing regions in China.',
    features: [
      'Product-specific supplier matching',
      'Initial capability assessment',
      'Price negotiation support',
      'Sample coordination',
      'Supplier shortlisting with detailed reports',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Our team conducts thorough on-site audits to verify that suppliers are legitimate, capable, and compliant. We check everything from business licenses to production lines.',
    features: [
      'Business license verification',
      'On-site factory audit',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance check',
      'Detailed audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Multi-stage quality inspections ensure your products meet specifications before they leave the factory. We provide detailed reports with photos and measurements.',
    features: [
      'Pre-production inspection',
      'During-production checks',
      'Pre-shipment inspection',
      'Container loading supervision',
      'Detailed photo and measurement reports',
      'Defect classification and analysis',
    ],
  },
  {
    icon: Timer,
    title: 'Production Follow-up',
    description: 'Stay informed about your order progress with regular updates from our team. We monitor production timelines and alert you to any potential delays.',
    features: [
      'Production schedule monitoring',
      'Weekly progress updates',
      'Timeline risk alerts',
      'Material procurement tracking',
      'Milestone verification',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory pickup to your warehouse. We handle documentation, customs, and freight forwarding.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Export documentation',
      'Customs clearance support',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
      'Delivery coordination',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate sample requests, evaluate quality, and ship samples to you for approval before mass production begins.',
    features: [
      'Sample request coordination',
      'Quality evaluation',
      'Sample shipping arrangement',
      'Feedback communication with factory',
      'Revision management',
    ],
  },
];

const processSteps = [
  { step: 1, title: 'Submit Requirements', desc: 'Share your product details, quantity, and timeline.' },
  { step: 2, title: 'Receive Quote', desc: 'Get a transparent sourcing plan with all costs.' },
  { step: 3, title: 'Supplier Matching', desc: 'We find and verify the best manufacturers.' },
  { step: 4, title: 'Quality Control', desc: 'Inspections at every production stage.' },
  { step: 5, title: 'Ship & Deliver', desc: 'Coordinated logistics to your destination.' },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 mb-8">
              Comprehensive sourcing solutions to help you buy from China with confidence. From finding suppliers to delivering goods, we handle every step.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">A simple, transparent process from inquiry to delivery.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                See Full Process Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Verified Suppliers</h3>
              <p className="text-sm text-muted-foreground">Every supplier undergoes thorough verification before recommendation.</p>
            </div>
            <div>
              <ClipboardCheck className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Multi-stage inspections ensure products meet your specifications.</p>
            </div>
            <div>
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Transparent Pricing</h3>
              <p className="text-sm text-muted-foreground">All costs outlined upfront with no hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Sourcing from China?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us what you need and we will provide a free, no-obligation quote within 24 hours.
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
