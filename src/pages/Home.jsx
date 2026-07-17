import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Settings, Award, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Shield,
    title: 'Industrial Grade',
    desc: 'Built with premium steel alloys and precision-machined components for decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    desc: 'Advanced hydraulic and mechanical systems deliver fast cycle times without compromising accuracy.',
  },
  {
    icon: Settings,
    title: 'Easy Operation',
    desc: 'Intuitive controls and ergonomic design make setup and operation straightforward for any operator.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'All machines meet international safety and quality standards, backed by comprehensive warranties.',
  },
];

const productHighlights = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    desc: 'Achieve two precise folds in a single pass — ideal for high-volume production lines.',
    titleId: 'home-prod-double-folding-title',
    descId: 'home-prod-double-folding-desc',
    imgId: 'home-prod-img-double-folding-a1b2c3',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile folding for a wide range of sheet thicknesses and material types.',
    titleId: 'home-prod-sheet-metal-title',
    descId: 'home-prod-sheet-metal-desc',
    imgId: 'home-prod-img-sheet-metal-d4e5f6',
  },
  {
    id: 'metal-folding',
    title: 'Metal Folding Machine',
    desc: 'Heavy-duty performance for demanding industrial applications and complex profiles.',
    titleId: 'home-prod-metal-folding-title',
    descId: 'home-prod-metal-folding-desc',
    imgId: 'home-prod-img-metal-folding-g7h8i9',
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Machines Delivered' },
  { value: '40+', label: 'Countries Served' },
  { value: '99%', label: 'Customer Satisfaction' },
];

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-navy via-steel-navy/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-copper-gold/20 border border-copper-gold/40 text-copper-gold text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-copper-gold rounded-full" />
              Precision Sheet Metal Solutions
            </div>
            <h1
              id="hero-title"
              className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Engineered for
              <span className="block text-copper-gold">Perfect Folds</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-mid-gray text-lg leading-relaxed mb-10 max-w-lg"
            >
              ARTITECT MACHINERY delivers world-class sheet metal folding machines — from double folding machines to heavy-duty metal folders — built for precision, durability, and ease of use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-copper-gold hover:bg-light-gold text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 tracking-wide"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-copper-gold text-white hover:text-copper-gold font-semibold px-8 py-4 rounded-full transition-all duration-200 tracking-wide"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                alt="ARTITECT sheet metal folding machine"
                data-strk-img-id="hero-machine-img-p9q8r7"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-navy/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
              <div className="text-3xl font-serif font-bold text-steel-navy">25+</div>
              <div className="text-slate-gray text-sm font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-copper-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-cloud-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-steel-navy mt-3 mb-5">
              Built to Perform
            </h2>
            <p className="text-slate-gray text-lg max-w-2xl mx-auto leading-relaxed">
              Every ARTITECT machine is engineered with uncompromising attention to detail, delivering consistent results across every production run.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-copper-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-copper-gold/20 transition-colors">
                  <f.icon className="w-7 h-7 text-copper-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-steel-navy mb-3">{f.title}</h3>
                <p className="text-slate-gray text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section ref={containerRef} className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Our Range</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-steel-navy mt-3">
                Featured Machines
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-copper-gold font-semibold hover:gap-3 transition-all"
            >
              View All Products <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productHighlights.map((prod) => (
              <div
                key={prod.id}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    alt={prod.title}
                    data-strk-img-id={prod.imgId}
                    data-strk-img={`[${prod.descId}] [${prod.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-7">
                  <h3 id={prod.titleId} className="font-serif text-xl font-bold text-steel-navy mb-3">
                    {prod.title}
                  </h3>
                  <p id={prod.descId} className="text-slate-gray text-sm leading-relaxed mb-5">
                    {prod.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-copper-gold text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hero-gradient py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          data-strk-bg-id="cta-bg-s1t2u3"
          data-strk-bg="[cta-title] sheet metal folding machinery industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Ready to Start?</span>
          <h2 id="cta-title" className="font-serif text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Find the Right Machine for Your Operation
          </h2>
          <p className="text-mid-gray text-lg leading-relaxed mb-10">
            Our engineering team is ready to help you select the perfect folding machine for your specific requirements and production goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-copper-gold hover:bg-light-gold text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 tracking-wide"
            >
              Contact Our Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-copper-gold text-white hover:text-copper-gold font-semibold px-10 py-4 rounded-full transition-all duration-200"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
