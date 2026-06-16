import React from 'react';
import { Layers, ShieldCheck, Zap, Cog, Wrench, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Double Folding Efficiency',
    description: 'Fold parts up and down without needing to turn the heavy metal sheets. Drastically reduces material handling time and operator fatigue.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'High-Speed Operations',
    description: 'Equipped with rapid servo motors and intelligent hydraulics, our machines execute complex folding sequences in fractions of the time compared to traditional presses.'
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Intuitive CNC Control',
    description: 'Our proprietary touch-screen software allows operators to draw the profile, while the CNC automatically calculates the flat length and collision-free folding sequence.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Uncompromising Safety',
    description: 'Integrated light curtains, emergency stops, and fail-safe locking mechanisms ensure operator safety without hindering production speed.'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Robust Construction',
    description: 'Heavy-duty steel welded frames stress-relieved prior to machining guarantee absolute structural rigidity and folding accuracy over decades of use.'
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Remote Diagnostics',
    description: 'Industry 4.0 ready. Our engineers can securely connect to your machine remotely to diagnose issues, update software, and minimize potential downtime.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <h2 id="features-section-title" className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">Why Artitect</h2>
            <h3 id="features-section-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              The Engineering Edge Behind Every Fold
            </h3>
            <p id="features-section-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just build machinery; we engineer elegant solutions for the sheet metal industry. ARTITECT Double Folders are designed from the ground up to offer the perfect balance of raw industrial power and refined, user-friendly operation.
            </p>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="font-bold text-blue-900 text-xl">CE</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Certified Quality</p>
                <p className="text-sm text-slate-500">All machinery meets strict CE and ISO manufacturing standards.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="features-hero-img"
              data-strk-img="[features-section-desc] [features-section-heading] modern factory production"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artitect Machinery Engineering"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-20">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-amber-500 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;