import React from 'react';
import { Hammer, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Legacy of Precision</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize sheet metal fabrication, Artitect Machinery has been at the forefront of folding technology for over two decades.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                data-strk-img-id="about-factory-img"
                data-strk-img="[about-story-title] [about-story-text]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                alt="Our Manufacturing Facility" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 id="about-story-title" className="text-3xl font-bold text-slate-900">Engineering Excellence, Global Reach</h2>
              <p id="about-story-text" className="text-lg text-slate-600 leading-relaxed">
                What started as a small engineering workshop in 1995 has grown into a global leader in metal folding solutions. 
                Our team of dedicated engineers and technicians work tirelessly to ensure that every machine leaving our facility meets the highest standards of quality and performance.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, Artitect Machinery is synonymous with reliability. Our machines are used by tier-one automotive manufacturers, aerospace engineers, and custom architecture firms across the globe.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Presence</h4>
                    <p className="text-sm text-slate-500">40+ Countries Served</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Certified</h4>
                    <p className="text-sm text-slate-500">ISO 9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
                <Hammer className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold">Innovation</h3>
              <p className="text-slate-400">Constantly pushing the boundaries of what's possible in metal fabrication technology.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
                <Users className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold">Integrity</h3>
              <p className="text-slate-400">Building lasting relationships through transparency and unwavering commitment to our clients.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold">Quality</h3>
              <p className="text-slate-400">Zero compromise on materials, craftsmanship, and performance outcomes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
