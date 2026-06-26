import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Maximize, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: "Precision Control",
      description: "Advanced numerical control systems for exact millimeter precision on every fold."
    },
    {
      icon: <Maximize className="w-6 h-6 text-blue-600" />,
      title: "Versatile Formats",
      description: "Capable of handling a wide range of sheet metal sizes and thicknesses with ease."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Industrial Durability",
      description: "Built with premium grade steel to withstand years of continuous industrial operation."
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[600px] flex items-center">
        {/* Background Image using generic placeholder and strk-bg system */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-artitect-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Transforming Metal with <span className="text-blue-400">Elegant Precision</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Discover our industry-leading double folding machines and sheet metal folders. Engineered for uncompromised accuracy and user-friendly operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-medium transition-all flex items-center gap-2"
              >
                View Our Machines
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-sm font-medium transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="featured-products-title" className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Flagship Folding Machines</h2>
            <p id="featured-products-subtitle" className="text-slate-600">The perfect balance of raw power and elegant control. Designed to increase your production efficiency while maintaining flawless quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 group">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img 
                  data-strk-img-id="prod-home-double-folder"
                  data-strk-img="[prod-title-1] [featured-products-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Double Folding Machine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 id="prod-title-1" className="text-2xl font-bold text-slate-900 mb-3">Premium Double Folder</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">Our most versatile double folding machine, perfect for complex profiles and rapid operation. User-friendly touchscreen interfaces ensure quick training and deployment.</p>
                <Link to="/products" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 group">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img 
                  data-strk-img-id="prod-home-metal-folder"
                  data-strk-img="[prod-title-2] [featured-products-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Standard Metal Folder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 id="prod-title-2" className="text-2xl font-bold text-slate-900 mb-3">Precision Metal Folder</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">The industry standard for reliable sheet metal folding. Engineered for a clean finish on a variety of materials with minimal maintenance required over its lifetime.</p>
                <Link to="/products" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="features-title" className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Elegant Design meets Brutal Efficiency</h2>
              <p id="features-desc" className="text-slate-600 mb-10 text-lg leading-relaxed">
                At Artitect Machinery, we believe heavy industrial equipment shouldn't be complicated. Our sheet metal folding machines integrate cutting-edge technology with intuitive controls.
              </p>
              
              <div className="space-y-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-sm h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden shadow-xl" >
                <img 
                  data-strk-img-id="home-factory-floor"
                  data-strk-img="[features-title] [features-desc]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Artitect Machinery Assembly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-sm shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-2">25+</p>
                <p className="font-medium tracking-wide uppercase text-sm text-blue-100">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Upgrade Your Production Line?</h2>
          <p className="text-xl text-slate-300 mb-10">Contact our engineering team to discuss the perfect folding machine setup for your facility.</p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-medium transition-all text-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;