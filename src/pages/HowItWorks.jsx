import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ClipboardCheck, Factory, Package, Truck, Headphones, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Search,
    title: 'Requirement Analysis',
    subtitle: 'We start by understanding your needs',
    description: 'You tell us about your product, target price range, quality requirements, and any certifications needed. We clarify the scope and timeline, then create a custom sourcing plan. No commitment required at this stage.',
  },
  {
    step: 2,
    icon: Factory,
    title: 'Supplier Search & Screening',
    subtitle: 'Finding the right match',
    description: 'We search our vetted supplier network and identify 3-5 qualified candidates. We review their capabilities, past export experience, certifications, and client references. You receive a shortlist with our recommendations.',
  },
  {
    step: 3,
    icon: ClipboardCheck,
    title: 'Factory Audit',
    subtitle: 'Verification on the ground',
    description: 'Our team visits the shortlisted factories in person. We verify business licenses, inspect production lines, assess quality control systems, and check working conditions. You get a detailed audit report with photos and video.',
  },
  {
    step: 4,
    icon: Package,
    title: 'Sampling & Negotiation',
    subtitle: 'Get the product right',
    description: 'We coordinate sample production from the selected supplier, track delivery, and help you evaluate quality. We negotiate pricing, payment terms, MOQ, and delivery schedule on your behalf.',
  },
  {
    step: 5,
    icon: Truck,
    title: 'Production & QC',
    subtitle: 'Manufacturing with oversight',
    description: 'Once you approve the sample, mass production begins. Our QC team conducts in-process inspections and a final pre-shipment inspection using AQL standards. We report any issues immediately.',
  },
  {
    step: 6,
    icon: Headphones,
    title: 'Shipping & After-Sales',
    subtitle: 'Delivery and ongoing support',
    description: 'We arrange shipping (air, sea, or express), handle all customs documentation, and track delivery. After delivery, we follow up to ensure satisfaction and maintain supplier relationships for future orders.',
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              A transparent, step-by-step process designed to minimize risk and maximize results 
              when sourcing from China.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold px-8 py-6 text-base">
                Start Your Sourcing Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-8">
                {/* Step Number */}
                <div className="md:w-24 flex md:flex-col items-center md:items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-primary/20">0{step.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{step.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-20 h-16 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Begin?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today and we will have a custom sourcing plan ready within 48 hours.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold px-8 py-6 text-base">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}