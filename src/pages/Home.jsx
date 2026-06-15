import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Settings, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      title: 'Precision Engineering',
      description: 'Our machines offer unmatched accuracy for complex folding tasks, ensuring perfect results every time.',
      icon: Settings,
    },
    {
      title: 'Speed & Efficiency',
      description: 'Increase your production throughput with our fast and easy-to-operate folding solutions.',
      icon: Zap,
    },
    {
      title: 'Built to Last',
      description: 'Constructed with high-grade materials, our machinery is designed for heavy-duty industrial use.',
      icon: ShieldCheck,
    },
  ];

  const products = [
    {
      id: 'double-folder',
      name: 'Double Folding Machine',
      category: 'Advanced Series',
      description: 'Versatile double folding capabilities for complex profiles.',
      image: 'precision-double-folder-8a23'
    },
    {
      id: 'sheet-metal-folder',
      name: 'Sheet Metal Folder',
      category: 'Pro Series',
      description: 'High-performance folder for industrial sheet metal work.',
      image: 'sheet-metal-folder-industrial-b12'
    },
    {
      id: 'metal-folding-machine',
      name: 'Metal Folding Machine',
      category: 'Compact Series',
      description: 'Efficient folding for smaller workshops and specific tasks.',
      image: 'metal-folding-machine-compact-c34'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-gray-900"
          data-strk-bg-id="hero-bg-9988"
          data-strk-bg="[hero-title] [hero-subtitle] industrial factory machinery"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-3xl">
            Precision Metal <br />
            <span className="text-blue-500">Folding Solutions</span>
          </h1>
          <p id="hero-subtitle" className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
            ARTITECT MACHINERY provides state-of-the-art double folding and sheet metal folder machines for demanding industrial applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:text-lg transition-all"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-all"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="features-title" className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Our Expertise</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Engineered for Professional Results
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={idx} className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all group">
                <div className="absolute -top-6 left-8 bg-black text-white p-4 rounded-xl shadow-lg group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Highlight Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 id="products-section-title" className="text-3xl font-bold text-gray-900 tracking-tight">Featured Machinery</h2>
              <p className="mt-4 text-lg text-gray-600">Discover our range of precision folding machines.</p>
            </div>
            <Link to="/products" className="mt-6 md:mt-0 flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View all products <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img
                    data-strk-img-id={`prod-home-${product.id}`}
                    data-strk-img={`[prod-title-${product.id}] [products-section-title] metal machinery`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-gray-900">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 id={`prod-title-${product.id}`} className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="cta-bg-1234"
          data-strk-bg="industrial metalwork workshop close up"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to Upgrade Your Production?</h2>
          <p className="mt-6 text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Contact our engineering experts today for a personalized consultation and competitive quote for your next metal folder machine.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-md text-black bg-white hover:bg-gray-100 transition-all"
            >
              Contact Sales
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-gray-700 text-lg font-bold rounded-md text-white hover:bg-white/5 transition-all"
            >
              Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
