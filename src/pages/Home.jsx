import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Precision Engineering',
      description: 'Industry-leading accuracy in every fold with advanced double folding technology.',
    },
    {
      icon: Wrench,
      title: 'Built to Last',
      description: 'Heavy-duty construction for continuous industrial operation and maximum durability.',
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO certified manufacturing with rigorous quality control standards.',
    },
  ];

  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      description: 'High-precision double folder for complex sheet metal folding operations.',
      imageId: 'double-folding-machine-img',
      titleId: 'double-folding-machine-title',
      descId: 'double-folding-machine-desc',
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding machine for various industrial applications.',
      imageId: 'sheet-metal-folder-img',
      titleId: 'sheet-metal-folder-title',
      descId: 'sheet-metal-folder-desc',
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'Advanced metal folder machine with automated folding capabilities.',
      imageId: 'metal-folding-machine-img',
      titleId: 'metal-folding-machine-title',
      descId: 'metal-folding-machine-desc',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Precision Sheet Metal Folding Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              ARTITECT MACHINERY delivers excellence in double folding machines, 
              sheet metal folders, and metal folding equipment for modern industrial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Why Choose ARTITECT MACHINERY</h2>
            <p className="section-subheading">
              Combining decades of engineering expertise with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 mb-6 group-hover:bg-slate-900 transition-colors">
                  <feature.icon className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Product Range</h2>
            <p className="section-subheading">
              Comprehensive solutions for all your sheet metal folding requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={product.titleId}
                    className="text-xl font-semibold text-slate-900 mb-2"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={product.descId}
                    className="text-slate-600 mb-4"
                  >
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Folding Operations?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our team for personalized solutions and competitive pricing 
            on all our double folding machines and metal folder equipment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
