import React from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tight">Our <span className="text-blue-600">Heritage</span> in Engineering</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Since 2001, Artitect Machinery has been at the forefront of metal forming technology. We specialize in the design, manufacture, and distribution of high-performance folding machinery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <div
                data-strk-bg-id="about-bg-1"
                data-strk-bg="modern factory office architectural building"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="1000"
                className="absolute inset-0 bg-slate-100"
              />
            </div>
            <div className="grid gap-10">
              <div className="flex gap-6">
                <div className="bg-slate-900 p-4 rounded-2xl h-fit shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">To empower global manufacturing with machinery that combines uncompromising precision with effortless user-friendliness.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-slate-900 p-4 rounded-2xl h-fit shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">Innovation</h3>
                  <p className="text-slate-600 leading-relaxed">We invest heavily in R&D to ensure our CNC controls and folding mechanisms set the industry standard for the next decade.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-slate-900 p-4 rounded-2xl h-fit shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">Quality First</h3>
                  <p className="text-slate-600 leading-relaxed">Every Artitect machine undergoes a rigorous 48-hour continuous stress test before leaving our facility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
