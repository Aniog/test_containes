import React, { useEffect, useRef } from 'react';
import { ChevronRight, Settings, ShieldCheck, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'prod-01',
    name: 'ProFold DX-8',
    type: 'Double Folding Machine',
    desc: 'Flagship dual-action folder. Maximizes throughput with dual bending beams for complex profiles without flipping the material.',
    specs: 'Max Thickness: 2.5mm | Bending Length: 3200mm'
  },
  {
    id: 'prod-02',
    name: 'Artitect BasicM',
    type: 'Sheet Metal Folder',
    desc: 'Reliable, powerful manual folder for precision work on a budget. Built with robust steel framing for decades of use.',
    specs: 'Max Thickness: 1.5mm | Bending Length: 2500mm'
  },
  {
    id: 'prod-03',
    name: 'AutoFold CNC',
    type: 'Automated Metal Folding Machine',
    desc: 'Fully programmable CNC folding station. Touchscreen interface allows operators to program complex multi-bend sequences in seconds.',
    specs: 'Max Thickness: 3.0mm | Bending Length: 4000mm'
  }
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-992a1"
          data-strk-bg="industrial sheet metal folding machine factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-start justify-center min-h-[80vh]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Industrial Grade Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Precision Bending.<br />
              <span className="text-amber-500">Absolute Reliability.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We design and manufacture premium double folding machines and sheet metal folders. Combining elegant usability with brute industrial force.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded shadow-lg transition-all transform hover:-translate-y-0.5">
                Explore Machinery
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded border border-white/20 backdrop-blur-sm transition-all">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Engineering Excellence</h2>
            <p className="text-lg text-slate-600">
              Why professionals choose ARTITECT for their sheet metal operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Double Folder Dynamics</h3>
              <p className="text-slate-600 leading-relaxed">
                Our twin-beam systems allow complex bending upward and downward without turning the material, saving immense time.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-amber-100 text-amber-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Heavy-Duty Frame</h3>
              <p className="text-slate-600 leading-relaxed">
                Constructed from stress-relieved steel blocks. Zero deflection even when working at maximum rated capacity.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-100 text-emerald-600 mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart CNC Control</h3>
              <p className="text-slate-600 leading-relaxed">
                Elegant, user-friendly touchscreens make programming complex bends intuitive. Reduce training time from weeks to hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-slate-50" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Machinery Lineup</h2>
              <p className="text-lg text-slate-600">
                Discover our range of double folding machines and sheet metal folders designed for ultimate efficiency.
              </p>
            </div>
            <a href="#contact" className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-1">
              View Full Catalog <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 group hover:shadow-xl transition-all">
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    data-strk-img-id={`img-${product.id}`}
                    data-strk-img={`[prod-title-${product.id}] [prod-type-${product.id}] industrial construction`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span id={`prod-type-${product.id}`} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded">
                      {product.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 id={`prod-title-${product.id}`} className="text-2xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                      {product.specs}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-8 line-clamp-3">
                    {product.desc}
                  </p>
                  <a href="#contact" className="block w-full py-3 px-4 bg-slate-900 hover:bg-amber-600 text-white text-center font-bold rounded transition-colors duration-300">
                    Get Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden" id="contact">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Upgrade Your Floor Production</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Ready to integrate a new metal folding machine into your workflow? Our technicians are ready to discuss your custom requirements.
          </p>
          
          <form className="bg-white p-8 rounded-2xl shadow-2xl text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Evaluation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900" placeholder="Acme Metals" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Interested In (Optional)</label>
                <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 bg-white">
                  <option>Double Folding Machine</option>
                  <option>Sheet Metal Folder</option>
                  <option>Custom Automated Solution</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>
            <button type="button" className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-md shadow-md transition-colors text-lg">
              Send Request
            </button>
            <p className="text-xs text-slate-500 text-center mt-4">We respect your privacy. All information is kept confidential.</p>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;