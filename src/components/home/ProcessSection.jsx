import { processSteps } from '@/data/content';
import { FileText, Search, ShieldCheck, Handshake, FlaskConical, ClipboardCheck, Ship, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  FileText, Search, ShieldCheck, Handshake, FlaskConical, ClipboardCheck, Ship,
};

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto">
            A proven 7-step sourcing process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || FileText;
            return (
              <div key={step.step} className="relative">
                {/* Connector line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%_-_1rem)] w-[calc(2rem_+_2rem)] h-0.5 border-t-2 border-dashed border-ss-border z-0" />
                )}

                <div className="bg-ss-surface rounded-xl border border-ss-border p-6 relative z-10 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-ss-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="ml-3">
                      <Icon className="w-5 h-5 text-ss-blue" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-ss-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ss-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 bg-ss-blue text-white text-sm font-semibold rounded-lg hover:bg-ss-blue-dark transition-colors"
          >
            View Full Process <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}