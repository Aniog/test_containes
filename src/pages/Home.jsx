import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ShieldCheck, Zap, Factory } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 uppercase tracking-tighter">
              Precision Engineering for <span className="text-blue-600">Modern Metals</span>
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-600 mb-8 max-w-2xl">
              Artitect Machinery delivers world-class double folding machines and sheet metal folders designed for high-precision, low-maintenance industrial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                View Machines <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:border-slate-300 transition-all">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div
                data-strk-bg-id="hero-bg-9922x"
                data-strk-bg="[hero-subtitle] [hero-title] factory heavy machinery"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
                className="absolute inset-0 bg-slate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase">Why Artitect Machinery?</h2>
            <p id="features-subtitle" className="text-slate-600 max-w-2xl mx-auto font-medium">Over 25 years of engineering excellence in metal forming technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industrial Reliability</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our machines are built with reinforced structural steel and premium components to ensure 24/7 operational reliability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High-Speed Precision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipped with advanced CNC controls, our folders deliver micron-level accuracy with industry-leading cycle times.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Versatile Application</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From thin sheet metal to heavy gauge industrial components, our range adapts to your specific production needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h2 id="cat-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase">Specialized Solutions</h2>
              <p id="cat-subtitle" className="text-slate-600 max-w-xl font-medium">Explore our premium range of folding machinery tailored for professional results.</p>
            </div>
            <Link to="/products" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'cat1', title: 'Double Folding Machines', desc: 'Precision dual-directional folding for complex profiles.' },
              { id: 'cat2', title: 'Sheet Metal Folders', desc: 'Reliable and easy-to-use solutions for standard sheet metal work.' },
              { id: 'cat3', title: 'Industrial Metal Folders', desc: 'Heavy-duty machines for high-gauge industrial applications.' },
            ].map((cat) => (
              <div key={cat.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 cursor-pointer shadow-lg shadow-slate-200/50">
                <div
                  data-strk-bg-id={`cat-bg-${cat.id}`}
                  data-strk-bg={`[cat-title-${cat.id}] industrial machinery`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 id={`cat-title-${cat.id}`} className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-slate-300 text-sm mb-6">{cat.desc}</p>
                  <Link to="/products" className="inline-flex items-center gap-2 text-white font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/20 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative">
          <div
            data-strk-bg-id="cta-bg-1122"
            data-strk-bg="heavy machine factory workshop professional"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="absolute inset-0 bg-slate-900"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
          <div className="relative py-24 px-8 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Ready to Upgrade Your Production?</h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              Contact our engineering experts today for a personalized consultation and customized quote based on your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                Contact Our Team
              </Link>
              <Link to="/specs" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Download Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
