import React from 'react';

const Features = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div className="order-2 md:order-1">
          <h2 id="feature-1-title" className="text-3xl md:text-4xl font-bold text-white mb-6">Scanning Electron Microscopy</h2>
          <p id="feature-1-desc" className="text-lg text-slate-300 mb-6 leading-relaxed">
            By scanning the surface of a sample with a focused beam of electrons, we can capture incredibly detailed, three-dimensional topological images. This allows us to see structures at nanometer resolution, far beyond the limits of optical microscopes.
          </p>
          <ul className="space-y-4 text-slate-400">
             <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span> Up to 1,000,000x magnification</li>
             <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span> High depth of field</li>
             <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span> Nanoscale topography</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Electron Microscopy"
              data-strk-img-id="feature-img-sem"
              data-strk-img="[feature-1-desc] [feature-1-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Fluorescence"
              data-strk-img-id="feature-img-fluorescence"
              data-strk-img="[feature-2-desc] [feature-2-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
        </div>
        <div>
          <h2 id="feature-2-title" className="text-3xl md:text-4xl font-bold text-white mb-6">Fluorescence Microscopy</h2>
          <p id="feature-2-desc" className="text-lg text-slate-300 mb-6 leading-relaxed">
            By attaching fluorescent tags to specific proteins or structures, scientists can illuminate the inner workings of living cells in striking colors. This technique reveals the dynamic processes of life as they happen in real time.
          </p>
          <ul className="space-y-4 text-slate-400">
             <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span> Live cell imaging</li>
             <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span> Protein tracking</li>
             <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span> Multi-color labeling</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;