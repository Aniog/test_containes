import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-medium" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,164,78,0.08)_0%,_transparent_60%)]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
                Industry Leader Since 2005
              </span>
            </div>

            {/* Heading */}
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-white leading-[1.1]">
              Precision{' '}
              <span className="text-brand-gold">Metal Folding</span>{' '}
              Machines
            </h1>

            {/* Subheading */}
            <p className="text-brand-white/60 text-lg sm:text-xl leading-relaxed max-w-xl">
              Engineered for maximum accuracy and efficiency. Our double folding machines deliver
              unmatched performance for sheet metal professionals worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-8 py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/25 group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-white/20 hover:border-brand-gold/50 text-brand-white px-8 py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300"
              >
                Request a Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-brand-gold" />
                <span className="text-brand-white/50 text-sm font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-brand-gold" />
                <span className="text-brand-white/50 text-sm font-medium">500+ Installations</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-gold" />
                <span className="text-brand-white/50 text-sm font-medium">20+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Machine Image Area */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glow effect behind the image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-3xl blur-3xl" />

              {/* Machine image container */}
              <div className="relative bg-brand-navy-light/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <img
                  data-strk-img-id="hero-machine-main-x7k9m2"
                  data-strk-img="[hero-title] industrial double folding sheet metal machine"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT Double Folding Machine"
                  className="w-full rounded-xl"
                />

                {/* Floating stat card */}
                <div className="absolute -bottom-4 -left-4 bg-brand-white rounded-xl shadow-2xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <span className="text-brand-gold font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-xl">500+</p>
                    <p className="text-brand-gray-dark text-xs">Machines Delivered</p>
                  </div>
                </div>

                {/* Floating precision card */}
                <div className="absolute -top-4 -right-4 bg-brand-white rounded-xl shadow-2xl p-4">
                  <p className="text-brand-gold font-bold text-lg">±0.1mm</p>
                  <p className="text-brand-gray-dark text-xs">Bending Precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-gray-light to-transparent" />
    </section>
  );
};

export default Hero;
