import React from 'react';

const About = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-brand-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 uppercase">Engineering the Future of Metal Fabrication</h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            ARTITECT MACHINERY stands at the pinnacle of industrial innovation, providing high-precision folding solutions that redefine what's possible in sheet metal work.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div
              className="aspect-square bg-slate-100 relative rounded-sm overflow-hidden"
              data-strk-bg-id="about-factory-bg"
              data-strk-bg="modern machinery factory assembly line metal folding"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1000"
            >
              <div className="absolute inset-0 bg-brand-primary/10" />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-brand-primary">Our Legacy of Precision</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Founded on the principles of reliability and advanced engineering, Artitect Machinery has grown from a specialized workshop into a global provider of industrial metal folders. 
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                We believe that every fold matters. Our machines are designed with a single goal: to provide fabricators with the most accurate, efficient, and user-friendly experience in the industry.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-accent">25+</h4>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Years Excellence</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-accent">5000+</h4>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Machines Installed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-16 uppercase">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-white border border-slate-200">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Innovation</h3>
              <p className="text-slate-500">Continuously pushing the boundaries of CNC and mechanical folding technology.</p>
            </div>
            <div className="p-10 bg-white border border-slate-200">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Integrity</h3>
              <p className="text-slate-500">Building lasting relationships with our clients through honesty and transparent support.</p>
            </div>
            <div className="p-10 bg-white border border-slate-200">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Quality</h3>
              <p className="text-slate-500">Uncompromising standards from the smallest component to the largest assembly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
