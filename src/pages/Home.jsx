import React from 'react';
import HomeHero from '../components/home/HomeHero';
import ProductGrid from '../components/ProductGrid';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-0">
      <HomeHero />
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-black tracking-[0.2em] text-slate-400 uppercase">Our Excellence</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Unmatched Performance for <span className="text-slate-500">Global Manufacturers.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
             {[
               {
                 icon: <Zap className="w-10 h-10 text-amber-500" />,
                 title: "Folding Speed",
                 desc: "Our double folders offer the fastest operation cycles in the industry, boosting your daily output."
               },
               {
                 icon: <ShieldCheck className="w-10 h-10 text-slate-900" />,
                 title: "Swiss Precision",
                 desc: "Engineered for tight tolerances, ensuring every fold is accurate to architectural specifications."
               },
               {
                 icon: <CheckCircle2 className="w-10 h-10 text-slate-400" />,
                 title: "Zero Waste",
                 desc: "Advanced CNC sensors minimize material errors, saving you money on every production run."
               }
             ].map((feature, i) => (
               <div key={i} className="space-y-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-slate-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black tracking-[0.2em] text-slate-400 uppercase">Catalog</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 lg:max-w-xl">
                Precision Folding <span className="text-slate-500">Solutions.</span>
              </h3>
            </div>
            <Link to="/products" className="group flex items-center gap-2 font-black text-slate-900">
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <ProductGrid limit={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div 
             className="w-full h-full bg-center bg-cover"
             data-strk-bg-id="cta-bg-123"
             data-strk-bg="industrial machinery factory background"
             data-strk-bg-ratio="16x9"
             data-strk-bg-width="1920"
           />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Ready to Upgrade Your <br />
              <span className="text-slate-400">Folding Capabilities?</span>
           </h2>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Join hundreds of leading manufacturers using ARTITECT MACHINERY to deliver superior architectural results.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                Request Quote
              </Link>
              <Link to="/about" className="bg-slate-800 text-white border border-slate-700 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-700 transition-all">
                Learn More
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
