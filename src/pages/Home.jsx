import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Settings,
  Award,
  TrendingUp,
  Wrench,
  ChevronRight,
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    desc: 'Heavy-duty construction with industrial-grade steel frames designed for decades of reliable operation.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    desc: 'Advanced CNC-controlled folding mechanisms delivering consistent, accurate bends every time.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO 9001 certified manufacturing with rigorous quality control at every production stage.',
  },
  {
    icon: TrendingUp,
    title: 'High Productivity',
    desc: 'Optimized cycle times and automated sequences to maximize your workshop throughput.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Modular component design with accessible service points for minimal downtime.',
  },
];

const productHighlights = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    desc: 'Versatile dual-action folding for complex geometries and multi-stage bending operations.',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Robust manual and hydraulic folders for precise sheet metal forming with minimal setup.',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'High-capacity automated folding systems for industrial-scale production environments.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const cleanupHero = ImageHelper.loadImages(strkImgConfig, heroRef.current);
    const cleanupSections = ImageHelper.loadImages(strkImgConfig, sectionsRef.current);
    return () => {
      cleanupHero?.();
      cleanupSections?.();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-home"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-brand-dark/75 z-0" />

        <div className="container mx-auto relative z-10 px-4 py-32">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
              Industrial Excellence Since 1998
            </p>
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              Precision Sheet Metal Folding
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              Engineered for accuracy. Built for endurance. ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folders for modern manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-medium px-7 py-3.5 rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '1,200+', label: 'Machines Delivered' },
              { value: '45+', label: 'Countries Served' },
              { value: '99.2%', label: 'Uptime Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-slate-50" ref={sectionsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Engineering That Outperforms
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Every ARTITECT machine is designed with one goal: to deliver flawless folding results with maximum efficiency and minimal maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Our Machines
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Premium Folding Solutions
            </h2>
            <p className="text-slate-500 leading-relaxed">
              From compact workshops to large-scale industrial plants, we have the right folding machine for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productHighlights.map((product) => (
              <div
                key={product.id}
                className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={`product-thumb-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-lg font-bold text-brand-dark mb-2"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={`product-desc-${product.id}`}
                    className="text-slate-500 text-sm leading-relaxed mb-4"
                  >
                    {product.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-brand-gold font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            data-strk-bg-id="cta-bg-home"
            data-strk-bg="[cta-title] [cta-desc]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2
            id="cta-title"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Ready to Upgrade Your Workshop?
          </h2>
          <p
            id="cta-desc"
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Contact our team today for a personalized consultation and discover the perfect folding solution for your production needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
