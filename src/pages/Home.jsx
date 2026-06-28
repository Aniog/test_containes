import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Factory, BarChart3, Settings2, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
       id: 'feat-1',
       icon: <Settings2 className="w-8 h-8 text-orange-500" />,
       title: 'Double Folding Technology',
       desc: 'Advanced dual-action clamping and bending for precise, bi-directional folds without material flipping.'
    },
    {
       id: 'feat-2',
       icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
       title: 'User-Friendly NC Control',
       desc: 'Intuitive touch-screen interface simplifies complex profiles, allowing any operator to achieve expert results.'
    },
    {
       id: 'feat-3',
       icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />,
       title: 'Unmatched Precision',
       desc: 'Rigid steel construction and servo-driven motors ensure repeatable accuracy on every sheet metal fold.'
    },
    {
       id: 'feat-4',
       icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
       title: 'Built to Last',
       desc: 'Heavy-duty industrial components designed for continuous operation in demanding manufacturing environments.'
    }
  ];

  return (
    <div ref={containerRef} className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-blue-900 border-b-8 border-orange-500">
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-title] sheet metal folding machine manufacturing industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Precision Folding</span>
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl font-light leading-relaxed">
              Elegant engineering meets user-friendly operation. Our industry-leading double folding machines redefine sheet metal fabrication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg hover:shadow-orange-500/20">
                View Our Machines <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center px-8 py-4 rounded-md font-semibold text-lg transition-all">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machine Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                 <h2 id="highlight-title" className="text-3xl font-bold text-blue-900 mb-4 inline-block relative after:w-16 after:h-1 after:bg-orange-500 after:absolute after:-bottom-2 after:left-0">
                    The ARTITECT FoldMaster Pro
                 </h2>
                 <p className="text-xl text-gray-500 mt-6 mb-6 font-medium italic">Double the Action, Half the Effort.</p>
                 <p id="highlight-desc" className="text-gray-600 mb-8 leading-relaxed">
                    Experience the pinnacle of sheet metal folding. The FoldMaster Pro double folder eliminates the need to constantly flip heavy material. Bend upwards and downwards in a single, fluid motion controlled by our stunningly simple interface.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {['Up-and-down bending without material flipping', 'Accommodates complex geometries easily', 'Reduces operator fatigue and increases safety'].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                       </li>
                    ))}
                 </ul>
                 <Link to="/products" className="inline-flex items-center font-semibold text-blue-700 hover:text-orange-500 transition-colors">
                    Explore Technical Specs <ChevronRight size={16} className="ml-1" />
                 </Link>
              </div>
              <div className="md:w-1/2 relative">
                 <div className="absolute inset-0 bg-blue-50 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
                 <img
                   className="rounded-xl shadow-xl border border-gray-100 w-full object-cover aspect-[4/3]"
                   alt="Artitect Double Folding Machine"
                   data-strk-img-id="featured-machine-img"
                   data-strk-img="[highlight-title] [highlight-desc] double folding machine industrial clear background"
                   data-strk-img-ratio="4x3"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full border-[60px] border-blue-900/5 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="features-title" className="text-3xl font-bold text-blue-900 mb-4">Engineering Elegance</h2>
            <p id="features-subtitle" className="text-gray-600 text-lg">
              We focus on intuitive design so you can focus on production. Our metal folding machines are built with the operator in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                   {feature.icon}
                </div>
                <h3 id={`${feature.id}-title`} className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p id={`${feature.id}-desc`} className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-center px-4 relative">
         <div
             className="absolute inset-0 opacity-10"
             data-strk-bg-id="cta-bg"
             data-strk-bg="manufacturing facility abstract precision metal"
             data-strk-bg-ratio="2x3"
             data-strk-bg-width="1200"
         />
         <div className="relative z-10 max-w-3xl mx-auto">
            <Factory className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Fabrication Flow?</h2>
            <p className="text-blue-100 mb-10 text-lg">Contact our engineering team today to discuss how an ARTITECT double folder can optimize your specific production needs.</p>
            <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-lg">
               Consult with an Expert
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;