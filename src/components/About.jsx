import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-br-3xl -z-10"></div>
              
              <img 
                data-strk-img-id="about-factory-xyz"
                data-strk-img="[about-title] [about-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Artitect Manufacturing Facility" 
                className="rounded-lg shadow-xl relative z-0 object-cover w-full h-[400px]"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 z-10">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  25
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Years of</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-8">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Redefining Sheet Metal Forming Since 1999
            </h2>
            
            <p id="about-desc" className="text-lg text-gray-600 mb-6">
              At Artitect Machinery, we believe that industrial equipment shouldn't just be functional—it should be a masterpiece of engineering. For over two decades, we have been at the forefront of double folding machine technology.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to elegant design, user-friendly interfaces, and uncompromising durability has made us the trusted partner for fabrication shops worldwide. When you choose a metal folder from Artitect, you're investing in accuracy, reliability, and the future of your business.
            </p>
            
            <div className="flex gap-4">
              <div className="border-l-4 border-blue-600 pl-4 py-1">
                <p className="font-bold text-2xl text-gray-900">10k+</p>
                <p className="text-sm text-gray-500">Machines Active</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-1 ml-4 shadow-none">
                <p className="font-bold text-2xl text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;