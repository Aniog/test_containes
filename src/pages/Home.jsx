import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Maximize, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
// Temporary mock for strkImgConfig since it's not defined
const strkImgConfig = {};

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
         // ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden isolate">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
           <img
            src="https://images.unsplash.com/photo-1565439364962-d97f26792370?q=80&w=2670&auto=format&fit=crop"
            alt="Industrial Machinery"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
            <span id="hero-badge" className="inline-block py-1 px-3 rounded-full bg-slate-800 text-secondary text-sm font-semibold tracking-wider mb-6 border border-slate-700">
                INDUSTRIAL ELEGANCE
            </span>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl leading-tight">
                Precision Double Folding Machines for Modern Workshops
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Elevate your metalworking capabilities with Artitect Machinery. We build elegant, robust sheet metal folders designed for unparalleled accuracy and user-friendly operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center">
                    Explore Machines <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center">
                    Request a Consultation
                </Link>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">Engineering Perfection</h2>
                <p id="features-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">Why industry leaders choose Artitect folding machines for their most critical operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                        <Settings className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Intuitive Control</h3>
                    <p className="text-gray-600 leading-relaxed">Advanced CNC interfaces designed for operators. Complex double folding sequences made simple and repeatable.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                        <Maximize className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Maximum Versatility</h3>
                    <p className="text-gray-600 leading-relaxed">From thin architectural profiles to heavy-duty industrial components, our metal folders handle diverse gauges with ease.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                        <ShieldCheck className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Robust Construction</h3>
                    <p className="text-gray-600 leading-relaxed">Built with high-grade steel and premium components to ensure decades of reliable sheet metal forming.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Highlight Product Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                     <img
                        alt="Double Folding Machine"
                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
                    />
                </div>
                <div>
                    <h2 id="highlight-title" className="text-3xl md:text-4xl font-bold text-primary mb-6">The Art of the Fold</h2>
                    <p id="highlight-desc1" className="text-lg text-gray-600 mb-6 leading-relaxed">
                        The true cost of a sheet metal folding machine isn't just the purchase price—it's the speed of setup, the precision of the first part, and the reliability to perform continuously.
                    </p>
                    <p id="highlight-desc2" className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Our flagship double folders eliminate flipping and turning large panels, drastically reducing operator fatigue and increasing throughput.
                    </p>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            Up to 40% faster production times
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            Reduced material handling
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            Elegant, space-saving designs
                        </li>
                    </ul>
                    <Link to="/about" className="inline-flex items-center text-secondary font-semibold hover:text-orange-600 transition-colors">
                        Learn about our engineering philosophy <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border-[20px] border-white/5"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-[20px] border-white/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your production floor?</h2>
            <p className="text-xl text-gray-300 mb-10">Let's discuss how an Artitect Double Folding Machine can transform your workflow.</p>
            <Link to="/contact" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                Contact Our Engineers
            </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;