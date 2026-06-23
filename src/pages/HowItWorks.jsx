import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, FileText, CheckCircle2, Factory, Package, Ship } from 'lucide-react';

const steps = [
  {
    title: 'Consultation & Sourcing',
    description: 'We start by understanding your requirements. We then search our database and local markets to find the 3-5 best-matched suppliers.',
    icon: Search
  },
  {
    title: 'Quotation & Sampling',
    description: 'We collect prices and product samples for your review. We negotiate with suppliers to ensure you get the best possible terms.',
    icon: FileText
  },
  {
    title: 'Factory Audit & Verification',
    description: 'Once a supplier is chosen, we perform a thorough background check and on-site audit to ensure they are legitimate and capable.',
    icon: Factory
  },
  {
    title: 'Production Management',
    description: 'We place the order and monitor production daily. We provide photo and video updates so you can see your products being made.',
    icon: Package
  },
  {
    title: 'Quality Inspection',
    description: 'Our QC team performs a rigorous pre-shipment inspection. We only authorize final payment once everything meets your standards.',
    icon: CheckCircle2
  },
  {
    title: 'Shipping & Logistics',
    description: 'We coordinate the transport of your goods, handle export documents, and provide customs clearance support in your country.',
    icon: Ship
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Transparent, efficient, and risk-free. Here's how we help you source the best products from China.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 mb-16 last:mb-0 relative">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-slate-100 hidden md:block" />
                )}
                
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center z-10 shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                
                <div className="pt-2">
                  <div className="text-amber-500 font-bold mb-1">Step {i + 1}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The SSourcing China Advantage</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Why work with an agent instead of sourcing yourself on platforms like Alibaba?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Traditional Sourcing</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-red-500 font-medium">
                  <span className="text-xl">✕</span> High risk of scams and low quality
                </li>
                <li className="flex items-center gap-3 text-red-500 font-medium">
                  <span className="text-xl">✕</span> Communication barriers and delays
                </li>
                <li className="flex items-center gap-3 text-red-500 font-medium">
                  <span className="text-xl">✕</span> No physical presence to check quality
                </li>
                <li className="flex items-center gap-3 text-red-500 font-medium">
                  <span className="text-xl">✕</span> Difficulty resolving production issues
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-amber-500">With SSourcing China</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-green-400 font-medium">
                  <span className="text-xl">✓</span> Verified suppliers and legal contracts
                </li>
                <li className="flex items-center gap-3 text-green-400 font-medium">
                  <span className="text-xl">✓</span> Native bilingual support and local expertise
                </li>
                <li className="flex items-center gap-3 text-green-400 font-medium">
                  <span className="text-xl">✓</span> On-site inspections before shipping
                </li>
                <li className="flex items-center gap-3 text-green-400 font-medium">
                  <span className="text-xl">✓</span> Project management and risk mitigation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Sourcing Journey Today</h2>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto mb-10 font-bold">
            No upfront fees for consultation. Tell us what you need, and we'll show you how we can help.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 text-lg" asChild>
            <Link to="/contact">Get Your Free Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
