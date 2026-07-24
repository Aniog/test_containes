import React from 'react';
import { Palette, Layers, MousePointer, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "We create cohesive brand systems from logos to visual guidelines that define your unique space in the market.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "Human-centered interfaces that are not only beautiful but intuitive and high-performing on every device.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: MousePointer,
    title: "Web Development",
    desc: "Scaling your vision with cutting-edge tech. We build fast, secure, and SEO-optimized web applications.",
    color: "bg-sky-50 text-sky-600"
  },
  {
    icon: ShieldCheck,
    title: "Digital Strategy",
    desc: "Data-driven roadmaps that align your business goals with user needs to ensure long-term growth.",
    color: "bg-slate-50 text-slate-800"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Specialized solutions for your digital growth
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We combine strategy, design, and technology to help your business reach its full potential in an ever-changing world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
              <div className={`w-14 h-14 ${s.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
