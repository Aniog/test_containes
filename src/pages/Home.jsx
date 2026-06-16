import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Settings, ShieldCheck, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-bg-artitect-1"
          data-strk-bg="[hero-title] industrial manufacturing heavy machinery"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span id="hero-subtitle" className="uppercase tracking-widest text-blue-400 font-semibold mb-4 block">Precision Meets Elegance</span>
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of Sheet Metal Folding
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience unparalleled accuracy and user-friendly operation with our advanced double folding machines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/products" className="inline-flex py-3 px-8 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors capitalize tracking-wider items-center justify-center">
              Explore Products <ChevronRight className="ml-2 h-5 w-5" />
            </NavLink>
            <NavLink to="/contact" className="inline-flex py-3 px-8 text-base font-medium text-white border border-slate-500 hover:border-white hover:bg-white/10 transition-colors capitalize tracking-wider items-center justify-center">
              Contact Sales
            </NavLink>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Artitect?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our machinery is designed to combine robust industrial capabilities with an elegant, intuitive user interface that reduces training time and increases productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="p-8 bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Efficiency</h3>
              <p className="text-slate-600">Automated folding sequences and rapid cycle times drastically improve your production output.</p>
            </div>
            <div className="p-8 bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">User-Friendly Control</h3>
              <p className="text-slate-600">An intuitive touch-screen interface guides operators through complex bends with elegant simplicity.</p>
            </div>
            <div className="p-8 bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center mb-6 mx-auto md:mx-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Durable & Elegant</h3>
              <p className="text-slate-600">Built to withstand the toughest environments while maintaining a sleek, modern aesthetic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="py-24 bg-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 id="featured-products-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Master Your Metal</h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                Discover our range of premium folders engineered for perfection.
              </p>
            </div>
            <NavLink to="/products" className="mt-6 md:mt-0 text-blue-400 hover:text-blue-300 uppercase tracking-widest font-bold flex items-center transition-colors">
              View Entire Catalog <ChevronRight className="ml-1 h-5 w-5" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden bg-slate-800 aspect-[4/3]">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Double Folding Machine"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                data-strk-img-id="featured-machine-1"
                data-strk-img="[machine-1-title] mechanical industrial factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-widest block mb-2">Flagship Series</span>
                <h3 id="machine-1-title" className="text-2xl font-bold text-white">Advanced Double Folder</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-800 aspect-[4/3]">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sheet Metal Folder"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                data-strk-img-id="featured-machine-2"
                data-strk-img="[machine-2-title] modern factory floor machinery"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-widest block mb-2">Pro Series</span>
                <h3 id="machine-2-title" className="text-2xl font-bold text-white">Precision Metal Folder</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
