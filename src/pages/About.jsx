import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Target, Award, Users } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-white min-h-screen" ref={containerRef}>
      {/* Hero */}
      <div className="relative bg-slate-900 text-white py-24 object-cover overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30 mix-blend-multiply"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 id="about-title" className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Artitect Machinery Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Merging industrial brute force with intuitive, elegant design to redefine what a sheet metal folding machine should be.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="about-mission" className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Mission: Elegant Engineering</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded on the belief that heavy machinery doesn't have to be clunky and hard to use, Artitect Machinery has spent the last two decades perfecting the double folding machine.
              </p>
              <p>
                We understand that your operators interact with these metal folders every single day. That's why we focus heavily on the user experience—crafting control systems and hardware interfaces that feel as sophisticated as modern consumer electronics, while maintaining the rugged durability required on the factory floor.
              </p>
              <p>
                Whether it's a standard sheet metal folding machine or our advanced double folder, every product leaving our facility represents the pinnacle of structural integrity and aesthetic functionality.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <img 
                  data-strk-img-id="about-image-1"
                  data-strk-img="[about-mission]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Engineering Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden relative">
                <img 
                  data-strk-img-id="about-image-2"
                  data-strk-img="[about-mission] [about-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Manufacturing Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
               <div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden relative">
                <img 
                  data-strk-img-id="about-image-3"
                  data-strk-img="[about-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory Floor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-blue-600 rounded-lg p-8 flex flex-col justify-center text-white">
                <p className="text-5xl font-bold mb-2">100%</p>
                <p className="font-medium tracking-wide">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">The Artitect Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Absolute Precision</h3>
              <p className="text-slate-600 leading-relaxed">We tolerate zero deviation. Our machines are calibrated to deliver flawless, repeatable bends year after year.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Elegant Utility</h3>
              <p className="text-slate-600 leading-relaxed">Complexity is hidden beneath intuitive interfaces. A machine is only valuable if operators love using it.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Partner Support</h3>
              <p className="text-slate-600 leading-relaxed">We view every sale as the beginning of a partnership. Our engineering support team is always just a call away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;