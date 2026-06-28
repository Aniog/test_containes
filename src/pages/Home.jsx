import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Settings, ShieldCheck, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 lg:py-40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-machinery-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl mb-6">
            Precision in Every Fold
          </h1>
          <p id="hero-subtitle" className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 mb-10">
            Artitect Machinery engineers world-class double folding and sheet metal folding machines for manufacturing excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-200">
              <Link to="/products">
                Explore Our Machines <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-slate-700 hover:bg-slate-800 hover:text-white">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Artitect Machinery?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our metal folders are built with uncompromising quality to ensure durability, accuracy, and ease of use in demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-800 mb-6">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Precision Engineering</h3>
              <p className="text-slate-600">
                Advanced CNC technology ensures every bend is exact, reducing material waste and improving final product quality.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-800 mb-6">
                 <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Throughput</h3>
              <p className="text-slate-600">
                Double folding capabilities allow for complex profiles to be created rapidly, significantly speeding up production times.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-800 mb-6">
                 <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Built to Last</h3>
              <p className="text-slate-600">
                Heavy-duty welded steel construction provides the rigidity required for decades of reliable service in industrial settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6">
            <div>
              <h2 id="categories-title" className="text-3xl font-bold tracking-tight text-slate-900">Our Machine Types</h2>
              <p className="mt-2 text-slate-600">Industry-leading solutions for every metal bending application.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Link to="/products" className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 mb-6">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="type-double-folder"
                  data-strk-img="[categories-title] double folder machine"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  alt="Double Folding Machine"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold flex items-center">
                    Double Folding Machines <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                </div>
              </div>
            </Link>

            <Link to="/products" className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 mb-6">
                 <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="type-sheet-metal"
                  data-strk-img="[categories-title] sheet metal folding machine industrial"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  alt="Sheet Metal Folder"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold flex items-center">
                    Sheet Metal Folders <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                </div>
              </div>
            </Link>
          </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Ready to upgrade your production line?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Contact our engineering team today to discuss how Artitect Machinery can improve your workflow and profitability.
          </p>
          <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-200 px-8 h-14 text-base">
            <Link to="/contact">Request Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
