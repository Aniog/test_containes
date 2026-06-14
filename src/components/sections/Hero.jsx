import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(15,23,42,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,23,42,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Precision Engineering Since 1998
            </div>

            <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Precision Sheet Metal
              <span className="text-slate-900"> Folding Solutions</span>
            </h1>

            <p id="hero-subtitle" className="mt-6 text-lg leading-relaxed text-slate-600">
              ARTITECT MACHINERY delivers industry-leading double folding machines,
              sheet metal folders, and metal folding solutions engineered for
              precision, durability, and unmatched performance.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="btn-primary group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary">
                Request Quote
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">25+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500">Clients Worldwide</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-2xl">
              <img
                data-strk-img-id="hero-machine-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title] precision sheet metal folding machine industrial"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY precision folding machine"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">ISO 9001 Certified</div>
                  <div className="text-xs text-slate-500">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
