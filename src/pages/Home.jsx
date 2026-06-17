import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    "Precise double folding capabilities",
    "Intuitive CNC control systems",
    "Heavy-duty industrial build quality",
    "Automated sheet handling",
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-title] [hero-subtitle] sheet metal folding machine industrial factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Precision Engineering for Modern Metalwork
            </h1>
            <p id="hero-subtitle" className="mt-6 text-xl leading-8 text-slate-300">
              ARTITECT MACHINERY provides high-end double folding machines and sheet metal folders 
              designed for speed, accuracy, and ease of use.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/products"
                className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors"
              >
                View Machines
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                Request Quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="feature-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose Artitect Folders?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our machines are built to handle the most demanding architectural and industrial folding tasks. 
                With a focus on "Architectural Tech" (Artitect), we ensure every fold is perfect.
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-amber-600">
                  Learn about our engineering <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  data-strk-img-id="feature-img-1"
                  data-strk-img="[feature-title] precision sheet metal folding machine detail"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Precision Folding"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-title" className="text-3xl font-bold text-slate-100 dark:text-slate-900">Our Machine Catalog</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From compact manual folders to fully automated double folding centers, we have the right machine for your workshop.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
             {['Double Folders', 'Sheet Metal Folders', 'CNC Control Systems'].map((cat, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900">{cat}</h3>
                 <p className="mt-2 text-sm text-slate-500">Engineered for durability and precision.</p>
                 <Link to="/products" className="mt-4 inline-block text-amber-600 font-medium hover:underline">Explore →</Link>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
