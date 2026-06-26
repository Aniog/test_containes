import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/data/content';
import { FileText, Search, ShieldCheck, Handshake, FlaskConical, ClipboardCheck, Ship } from 'lucide-react';

const iconMap = { FileText, Search, ShieldCheck, Handshake, FlaskConical, ClipboardCheck, Ship };

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our proven 7-step sourcing process ensures every project is handled with care, from initial consultation to final delivery.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || FileText;
              return (
                <div key={step.step} className="flex gap-6">
                  {/* Number */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-12 h-12 bg-ss-blue rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-ss-border mt-2" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-ss-surface rounded-xl border border-ss-border p-6 md:p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="sm:hidden w-8 h-8 bg-ss-blue rounded-lg flex items-center justify-center text-white font-bold text-xs mr-3">
                        {step.step}
                      </div>
                      <Icon className="w-6 h-6 text-ss-blue" />
                    </div>
                    <h2 className="text-xl font-bold text-ss-text mb-3">{step.title}</h2>
                    <p className="text-base text-ss-body leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ss-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ss-text tracking-tight mb-4">
            Start Your Sourcing Journey
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto mb-8">
            Ready to find reliable suppliers and streamline your China sourcing? Get in touch and we will guide you through every step.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-ss-orange text-white text-base font-semibold rounded-lg hover:bg-ss-orange-light transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}