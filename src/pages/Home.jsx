import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Shield, Gauge, Wrench, Award, ChevronRight, Zap, Settings, Users } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal profiles with automated control systems.',
    imgId: 'prod-double-fold-a1b2c3',
    titleId: 'prod-double-fold-title',
    descId: 'prod-double-fold-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Industrial-grade sheet metal folder designed for consistent, repeatable bends on various gauges.',
    imgId: 'prod-sheet-folder-d4e5f6',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Versatile metal folding machine with programmable angles and automatic back-gauge positioning.',
    imgId: 'prod-metal-fold-g7h8i9',
    titleId: 'prod-metal-fold-title',
    descId: 'prod-metal-fold-desc',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with precision-machined components for decades of reliable service.',
  },
  {
    icon: Gauge,
    title: 'Precision Control',
    description: 'Digital angle readouts and programmable controllers ensure accuracy within ±0.1° on every fold.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible service points reduces downtime and simplifies routine maintenance.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    description: 'Rapid cycle times and energy-efficient motors maximize your production output while reducing costs.',
  },
];

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '5,000+', label: 'Machines Delivered' },
  { value: '40+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-4 h-4 text-brand-amber" />
              <span className="text-brand-amber text-sm font-medium">Industry-Leading Precision</span>
            </div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Precision Sheet Metal Folding Machines
            </h1>
            <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
              Engineered for excellence. ARTITECT double folding machines deliver unmatched accuracy, durability, and ease of operation for your metal fabrication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-navy-900 font-semibold rounded-lg px-6 py-3.5 transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 text-white hover:border-white rounded-lg px-6 py-3.5 font-semibold transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-navy-900">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="featured-section-title" className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Our Machines
            </h2>
            <p id="featured-section-subtitle" className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover our range of precision-engineered double folding machines and sheet metal folders built for professional fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [featured-section-subtitle] [featured-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-xl font-bold text-navy-900 mb-2">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-brand-amber font-medium text-sm hover:text-brand-amber-dark transition-colors"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-200"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Why Choose ARTITECT
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Every machine we build reflects our commitment to quality, innovation, and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-amber" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Upgrade Your Production?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Get in touch with our team to discuss your requirements and find the perfect folding machine for your workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-navy-900 font-semibold rounded-lg px-6 py-3.5 transition-colors duration-200"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 text-white hover:border-white rounded-lg px-6 py-3.5 font-semibold transition-colors duration-200"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
