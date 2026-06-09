import { CheckCircle, ArrowRight, MessageSquare, Search, Factory, ShieldCheck, ClipboardCheck, Truck, ThumbsUp } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';
import CTABannerSection from '@/components/home/CTABannerSection';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill in our online inquiry form with your product details, target price, quantity, quality requirements, and delivery timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: ['No commitment required at this stage', 'We respond within 24 hours', 'Free initial consultation included'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database, trade platforms, and industry contacts to identify 3–5 manufacturers that match your requirements. We screen for capacity, certifications, and track record.',
    details: ['3–5 qualified suppliers shortlisted', 'Supplier profiles with key details', 'Initial price estimates provided'],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Sample Arrangement',
    desc: 'We visit shortlisted factories in person to verify their legitimacy, production capacity, and quality systems. We then arrange product samples for your review and approval before any order is placed.',
    details: ['On-site factory visit and audit report', 'Sample coordination and shipping', 'Factory comparison summary'],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve a supplier and samples, we place the order, negotiate final terms, and monitor production with regular factory visits and status updates. We flag any issues early so they can be resolved quickly.',
    details: ['Contract and payment term negotiation', 'Weekly production updates', 'Issue escalation and resolution'],
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, our QC inspectors visit the factory to check products against your specifications. You receive a detailed inspection report with photos, measurements, and a clear pass/fail result.',
    details: ['Pre-shipment inspection at factory', 'Detailed report with photos', 'Rework coordination if needed'],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, export documentation, and cargo insurance. We track your shipment and keep you updated until goods arrive at your destination port or warehouse.',
    details: ['FCL, LCL, or air freight options', 'Export documentation handled', 'Shipment tracking and updates'],
  },
  {
    number: '07',
    icon: ThumbsUp,
    title: 'Post-Delivery Support',
    desc: 'After delivery, we remain available to address any issues, coordinate warranty claims, or begin planning your next order. Many clients work with us on an ongoing basis for repeat sourcing.',
    details: ['Issue resolution support', 'Reorder planning assistance', 'Long-term supplier relationship management'],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 bg-white/10 px-3 py-1 rounded-full">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process designed to minimize risk and give you full visibility at every stage of your sourcing project.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 bg-slate-200 flex-1 mt-2 min-h-8" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-brand-blue" />
                      <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span key={d} className="inline-flex items-center gap-1.5 text-xs text-brand-blue bg-blue-50 px-3 py-1.5 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </CTAButton>
          </div>
        </div>
      </section>

      <CTABannerSection />
    </div>
  );
}
