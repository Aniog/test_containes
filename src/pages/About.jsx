import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Engineering Excellence Since 1995</h2>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            Artitect Machinery was born from the intersection of architectural precision and technological innovation. 
            We believe that industrial machinery shouldn't just be powerful; it should be intuitive, elegant, and 
            engineered to the highest standards.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-4 text-slate-600">
              To empower metal fabricators with the most advanced folding technology in the world. 
              We focus on reducing setup times and eliminating manual errors through smart automation 
              and precise mechanical engineering.
            </p>
            <div className="mt-8 space-y-4">
               {['Global reach with local support', 'Innovative R&D focused on sheet metal', 'Sustainability in manufacturing'].map((item, idx) => (
                 <div key={idx} className="flex items-start space-x-3">
                   <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                     <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                   </div>
                   <span className="text-slate-600">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-100">
             <img 
              data-strk-img-id="about-img-1"
              data-strk-img="architectural metal factory engineering"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Workshop"
              className="h-full w-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
