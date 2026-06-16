import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, CheckCircle2, Wrench, Shield, Clock } from 'lucide-react';
import strkImgConfig from '../strk-img-config.json';

const features = [
  {
    icon: Wrench,
    title: 'Precision Engineering',
    description: 'Our machines deliver fold accuracy within 0.1mm, ensuring every sheet meets your exact specifications.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with industrial-grade components designed for decades of reliable operation.',
  },
  {
    icon: Clock,
    title: 'Rapid Production',
    description: 'High-speed folding cycles keep your production line moving efficiently without compromising quality.',
  },
];

const products = [
  {
    name: 'Double Folding Machine',
    description: 'Versatile dual-action folding for complex sheet metal profiles with maximum precision.',
    imgId: 'product-double-folding-1a2b3c',
    titleId: 'home-product-df-title',
    descId: 'home-product-df-desc',
  },
  {
    name: 'Sheet Metal Folder',
    description: 'Robust manual and hydraulic options for workshops of all sizes.',
    imgId: 'product-sheet-folder-4d5e6f',
    titleId: 'home-product-sf-title',
    descId: 'home-product-sf-desc',
  },
  {
    name: 'Metal Folding Machine',
    description: 'Computer-controlled folding with programmable angle and depth settings.',
    imgId: 'product-metal-folding-7g8h9i',
    titleId: 'home-product-mf-title',
    descId: 'home-product-mf-desc',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const cleanups = [];
    if (heroRef.current) {
      cleanups.push(ImageHelper.loadImages(strkImgConfig, heroRef.current));
    }
    if (productsRef.current) {
      cleanups.push(ImageHelper.loadImages(strkImgConfig, productsRef.current));
    }
    return () => {
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-01"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Precision Sheet Metal Solutions
              </p>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Engineering the Future of{' '}
                <span className="text-gold">Metal Folding</span>
              </h1>
            </div>
            <p id="hero-subtitle" className="text-lg text-white/70 max-w-lg leading-relaxed">
              ARTITECT MACHINERY designs and manufactures world-class sheet metal folding machines trusted by industries across the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Explore Products <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-navy">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              data-strk-img-id="hero-machine-img-abc123"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Sheet metal folding machine"
              className="w-full rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-accent" />
            <h2 className="section-heading">Why Choose ARTITECT</h2>
            <p className="section-subheading mt-4">
              Three decades of engineering excellence distilled into every machine we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-border-light p-8 rounded-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-sm mb-6">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section ref={productsRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-accent" />
            <h2 className="section-heading">Our Machines</h2>
            <p className="section-subheading mt-4">
              From compact workshop folders to industrial-scale folding systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group border border-border-light rounded-sm overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <div className="aspect-[4/3] bg-cream overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-lg font-bold text-navy mb-2">
                    {product.name}
                  </h3>
                  <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-dark">
              View All Products <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Production?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Contact our team today for a personalized consultation and discover the perfect folding solution for your workshop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link to="/products" className="btn-secondary text-white border-white hover:bg-white hover:text-navy">
              Browse Machines
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '35+', label: 'Years of Experience' },
              { value: '12K+', label: 'Machines Delivered' },
              { value: '48', label: 'Countries Served' },
              { value: '99.7%', label: 'Uptime Reliability' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
