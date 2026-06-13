import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Search, Factory } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Verified Factories' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-max relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Trusted Sourcing Partner
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              China Sourcing Agent for{' '}
              <span className="text-accent-400">Global Buyers</span>
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-6 max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect product quality, manage production, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-600 text-white text-base font-semibold rounded-lg transition-colors shadow-lg shadow-accent-500/30"
              >
                Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 text-white text-base font-semibold rounded-lg transition-colors border border-white/20"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, text: 'Verified Suppliers' },
                { icon: Factory, text: 'Factory Audits' },
                { icon: Search, text: 'QC Inspections' },
                { icon: Truck, text: 'Global Shipping' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                  <Icon className="w-4 h-4 text-accent-400" />
                  <span className="text-xs font-medium text-white/70">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero visual */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-sourcing-factory-2a8f3c"
                data-strk-img="[hero-subtitle-text] China sourcing factory warehouse global trade"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China - Professional sourcing and factory inspection"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-500">Quality Assured</p>
                  <p className="text-xs text-gray-500">100% pre-shipment inspection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p id="hero-subtitle-text" className="sr-only">Professional sourcing agent warehouse factory</p>

        {/* Stats bar */}
        <div className="mt-10 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-6 px-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-3xl lg:text-4xl font-extrabold text-accent-400 mb-1">{stat.value}</p>
              <p className="text-sm text-white/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
