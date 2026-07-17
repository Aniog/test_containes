import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight,
  Shield,
  Zap,
  Settings,
  Award,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '500+', label: 'Machines Delivered' },
  { value: '40+', label: 'Countries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

const features = [
  {
    icon: Shield,
    title: 'Industrial Grade Durability',
    desc: 'Built with premium steel alloys and precision-machined components to withstand the most demanding production environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    desc: 'Advanced drive systems deliver rapid cycle times without compromising on fold accuracy or material integrity.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    desc: 'CNC-controlled folding angles with ±0.1° accuracy ensure consistent, repeatable results across every production run.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO-certified manufacturing processes and rigorous quality control at every stage of production.',
  },
];

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    desc: 'Simultaneous dual-fold capability for complex sheet metal profiles with exceptional precision.',
    imgId: 'home-prod-double-folding-a1b2c3',
    titleId: 'home-prod-double-folding-title',
    descId: 'home-prod-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile folding solutions for a wide range of sheet metal thicknesses and materials.',
    imgId: 'home-prod-sheet-metal-b2c3d4',
    titleId: 'home-prod-sheet-metal-title',
    descId: 'home-prod-sheet-metal-desc',
  },
  {
    id: 'metal-folding',
    title: 'Metal Folding Machine',
    desc: 'Heavy-duty metal folding with programmable sequences for high-volume production lines.',
    imgId: 'home-prod-metal-folding-c3d4e5',
    titleId: 'home-prod-metal-folding-title',
    descId: 'home-prod-metal-folding-desc',
  },
];

const testimonials = [
  {
    quote: 'ARTITECT machines have transformed our production line. The precision and reliability are unmatched in the industry.',
    author: 'James Thornton',
    role: 'Production Director, SteelCraft Industries',
  },
  {
    quote: 'We have been using ARTITECT folding machines for over a decade. The build quality and after-sales support are exceptional.',
    author: 'Maria Schneider',
    role: 'Operations Manager, MetalWorks GmbH',
  },
  {
    quote: 'The double folding machine reduced our cycle time by 40%. Outstanding engineering and excellent value.',
    author: 'David Chen',
    role: 'Manufacturing Engineer, Pacific Fabrications',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-15"
          data-strk-bg-id="hero-bg-main-9f8e7d"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />

        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-xs font-medium tracking-widest uppercase">
                Precision Sheet Metal Solutions
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Engineered for
              <span className="text-brand-gold block">Perfection</span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-brand-silver text-lg leading-relaxed mb-10 max-w-lg"
            >
              ARTITECT MACHINERY delivers world-class double folding machines, sheet metal folders, and metal folding solutions trusted by manufacturers across 40+ countries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-silver/40 text-white px-8 py-4 rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-silver/10">
              <img
                alt="ARTITECT Machinery — Sheet Metal Folding Machine"
                data-strk-img-id="hero-machine-img-7a8b9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-navy rounded-2xl p-5 shadow-xl">
              <p className="font-playfair text-3xl font-bold">25+</p>
              <p className="text-xs font-semibold tracking-wide">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-silver/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-silver/50 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-steel py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-4xl font-bold text-brand-gold mb-1">{stat.value}</p>
                <p className="text-brand-silver text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Machines
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Featured Products
            </h2>
            <p className="text-brand-silver text-lg max-w-2xl mx-auto">
              From double folding machines to heavy-duty metal folders — precision-built for every production need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-brand-white rounded-2xl shadow-lg border border-brand-silver/20 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                </div>
                <div className="p-7">
                  <h3
                    id={product.titleId}
                    className="font-playfair text-xl font-bold text-brand-navy mb-3"
                  >
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-brand-silver text-sm leading-relaxed mb-5">
                    {product.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all duration-200"
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
              className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-steel transition-all duration-300 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
                Why ARTITECT
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the World's Best Manufacturers
              </h2>
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                For over 25 years, ARTITECT MACHINERY has been the trusted partner for precision sheet metal fabrication. Our machines combine cutting-edge engineering with uncompromising quality.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Industry-leading fold accuracy of ±0.1°',
                  'Full CNC programmable control systems',
                  'Comprehensive after-sales support',
                  'Custom configurations available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-silver">
                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 font-semibold group"
              >
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-brand-steel/50 border border-brand-silver/10 rounded-2xl p-6 hover:border-brand-gold/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h4 className="font-playfair text-white font-semibold text-base mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-brand-silver text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-brand-white rounded-2xl p-8 shadow-lg border border-brand-silver/20 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-brand-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-brand-navy text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-brand-silver/20 pt-5">
                  <p className="font-semibold text-brand-navy text-sm">{t.author}</p>
                  <p className="text-brand-silver text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Ready to Elevate Your Production?
          </h2>
          <p className="text-brand-navy/70 text-lg mb-10">
            Contact our engineering team today for a customized solution and competitive quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-semibold px-10 py-4 rounded-full hover:bg-brand-steel transition-all duration-300 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-semibold px-10 py-4 rounded-full hover:bg-brand-navy hover:text-white transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
