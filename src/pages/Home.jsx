import React from 'react';
import { ArrowRight, ChevronRight, Settings, ShieldCheck, Zap } from 'lucide-react';

const homeProducts = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    desc: 'Advanced bilateral folding for complex profiles with unmatched precision.',
    features: ['High Speed', 'Precision Control', 'Automated Flow']
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile and robust solution for standard sheet metal bending needs.',
    features: ['Easy Setup', 'Durable Construction', 'Multi-material']
  },
  {
    id: 'metal-folder-industrial',
    title: 'Industrial Metal Folder',
    desc: 'Heavy-duty performance for high-volume manufacturing environments.',
    features: ['Heavy Gauge', '24/7 Operation', 'Smart Integration']
  }
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full object-cover"
            data-strk-bg-id="hero-bg-982341"
            data-strk-bg="[hero-title] [hero-subtitle] industrial folding machine assembly line"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              PRECISION IN <br />
              <span className="text-blue-500">EVERY FOLD</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Elevating sheet metal fabrication with the most elegant and user-friendly 
              folding machines in the industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all transform hover:scale-105">
                EXPLORE PRODUCTS <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 id="products-title" className="text-4xl font-bold tracking-tight text-slate-900 mb-4">OUR PRODUCT RANGE</h2>
              <p id="products-subtitle" className="text-slate-500 max-w-xl">
                Discover our specialized machinery designed for accuracy, speed, and ease of use across various industrial applications.
              </p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-1 group">
              VIEW ALL SOLUTIONS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    alt={p.title}
                    data-strk-img-id={`product-img-${p.id}`}
                    data-strk-img={`[product-title-${p.id}] industrial sheet metal machine`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 id={`product-title-${p.id}`} className="text-2xl font-bold mb-3 text-slate-900">{p.title}</h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {p.features.map(f => (
                      <li key={f} className="text-xs font-semibold text-slate-400 flex items-center gap-2 uppercase tracking-wider">
                        <div className="w-1 h-1 bg-blue-500 rounded-full" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border border-slate-200 py-3 rounded-xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                    SPECIFICATIONS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-us-title" className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                ENGINEERING EXCELLENCE <br />
                MEETS ELEGANT DESIGN
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Maximized Productivity</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Our machines are optimized for high-speed output without compromising on precision, 
                      reducing lead times for your fabrication projects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Settings className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Intuitive Controls</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Sophisticated software doesn't have to be complicated. Our user interface is 
                      designed to be mastered in minutes, not months.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Industrial Safety</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Safety is built into the core. From redundant sensors to physical guards, 
                      we protect your operators and your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  alt="Quality Control"
                  data-strk-img-id="quality-check-8234"
                  data-strk-img="[why-us-title] professional engineering inspection"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-3xl shadow-xl text-white md:block hidden">
                <p className="text-4xl font-bold mb-1">20+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">READY TO ELEVATE YOUR PRODUCTION?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our engineering consultants to find the perfect folding solution 
            tailored to your specific manufacturing requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
              SCHEDULE A DEMO
            </button>
            <button className="bg-transparent text-white border border-slate-700 px-10 py-4 rounded-full font-bold hover:border-white transition-colors">
              CONTACT SALES
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div 
             className="w-full h-full"
             data-strk-bg-id="contact-bg-1234"
             data-strk-bg="abstract industrial gears steel texture"
             data-strk-bg-ratio="16x9"
             data-strk-bg-width="1920"
           />
        </div>
      </section>
    </div>
  );
};

export default Home;
