import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Target, History, Users2, Award } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <div 
             className="w-full h-full bg-center bg-cover"
             data-strk-bg-id="about-hero-bg"
             data-strk-bg="industrial machinery engineering facility factory"
             data-strk-bg-ratio="16x9"
             data-strk-bg-width="1920"
           />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 id="about-title" className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            Engineering the Future of <br />
            <span className="text-slate-400">Metal Fabrication.</span>
          </h1>
          <p id="about-subtitle" className="max-w-2xl mx-auto text-xl text-slate-300 font-medium">
            ARTITECT MACHINERY is a global leader in precision folding technology, dedicated to empowering manufacturers with Swiss-grade engineering and intuitive automation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-black tracking-[0.2em] text-slate-400 uppercase">Our Story</h2>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900">A Legacy of <br />Solid Engineering.</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded over 15 years ago, ARTITECT MACHINERY started with a simple vision: to bridge the gap between complex industrial hardware and user-centric design. We noticed that while precision was common, usability was often ignored.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, our folding machines are installed in over 500 facilities worldwide, from small architectural workshops to multi-national manufacturing plants.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <div className="text-4xl font-black text-slate-900 underline decoration-amber-500 decoration-4 underline-offset-8">2009</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-2 text-wrap">Year Founded</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black text-slate-900 underline decoration-slate-400 decoration-4 underline-offset-8">50+</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-2 text-wrap">Patents Held</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
              <img 
                data-strk-img-id="about-story-img"
                data-strk-img="engineering team working on industrial machine"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Engineering Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-black tracking-[0.2em] text-slate-400 uppercase">Core Values</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">What Drives Us Every Day.</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                icon: <Target className="w-10 h-10 text-amber-500" />,
                title: "Precision",
                desc: "Every micron counts. We never compromise on accuracy."
              },
              {
                icon: <Users2 className="w-10 h-10 text-slate-900" />,
                title: "User-First",
                desc: "Software and hardware built to be intuitive and safe."
              },
              {
                icon: <Award className="w-10 h-10 text-slate-400" />,
                title: "Quality",
                desc: "Machines built to last decades, not just years."
              },
              {
                icon: <History className="w-10 h-10 text-slate-500" />,
                title: "Support",
                desc: "Lifecycle care with 24/7 expert technical assistance."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow space-y-6">
                <div className="p-3 bg-slate-50 rounded-2xl inline-block">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
