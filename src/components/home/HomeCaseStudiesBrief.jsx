import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomeCaseStudiesBrief = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Real Results for Global Clients</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-slate-100">
             <div className="md:w-1/2 aspect-video md:aspect-auto">
               <img 
                data-strk-img-id="home-case-1"
                data-strk-img="shipping warehouse logistics"
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Case Study 1"
                className="w-full h-full object-cover"
              />
             </div>
             <div className="md:w-1/2 p-8">
               <div className="text-blue-600 font-bold text-sm mb-2">Amazon Brand (USA)</div>
               <h4 className="text-xl font-bold mb-4">15% Reduction in COGS</h4>
               <p className="text-slate-600 mb-6 line-clamp-3 italic">"SSourcing China helped us transition to a more reliable factory while cutting our procurement costs significantly."</p>
               <Link to="/case-studies" className="text-slate-900 font-bold hover:underline">Read Case Study →</Link>
             </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-slate-100">
             <div className="md:w-1/2 aspect-video md:aspect-auto">
               <img 
                data-strk-img-id="home-case-2"
                data-strk-img="high precision industrial manufacturing"
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Case Study 2"
                className="w-full h-full object-cover"
              />
             </div>
             <div className="md:w-1/2 p-8">
               <div className="text-blue-600 font-bold text-sm mb-2">IoT Startup (EU)</div>
               <h4 className="text-xl font-bold mb-4">Complex Product Launch</h4>
               <p className="text-slate-600 mb-6 line-clamp-3 italic">"Their technical expertise in injection molding was crucial for our hardware product development."</p>
               <Link to="/case-studies" className="text-slate-900 font-bold hover:underline">Read Case Study →</Link>
             </div>
          </div>
        </div>

        <div className="text-center">
           <Button variant="outline" size="lg" asChild>
             <Link to="/case-studies">View All Success Stories</Link>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudiesBrief;
