import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Factory, ClipboardCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-brand-900">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-b8c1a2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-200 mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Trusted by 500+ Global Buyers
          </div>
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl leading-relaxed">
            We find reliable suppliers, verify factories, inspect product quality, and coordinate shipping—so you
            get the right products at the right price, delivered on time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              How It Works
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Factory, label: 'Factory Verification' },
              { icon: ClipboardCheck, label: 'Quality Control' },
              { icon: Shield, label: 'Secure Shipping' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-steel-200">
                <item.icon className="h-5 w-5 text-brand-400 shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
