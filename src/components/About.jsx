import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="uppercase tracking-[3px] text-sm text-amber-700 font-medium mb-4">OUR LEGACY</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none mb-8">
              Crafted for<br />those who<br />demand more.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                For nearly four decades, ARTITECT MACHINERY has been the trusted name behind the world's most precise sheet metal folding operations.
              </p>
              <p>
                From small fabrication shops to multinational aerospace manufacturers, our machines deliver the accuracy, repeatability, and durability that professionals rely on every day.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="text-6xl font-semibold tracking-tighter text-slate-900 mb-2">38</div>
              <div className="text-slate-600 font-medium">Years of Excellence</div>
              <div className="mt-4 text-sm text-slate-500">Since 1987, building machines that last generations.</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="text-6xl font-semibold tracking-tighter text-slate-900 mb-2">12,000+</div>
              <div className="text-slate-600 font-medium">Machines Installed</div>
              <div className="mt-4 text-sm text-slate-500">Across workshops, factories, and production lines worldwide.</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="text-6xl font-semibold tracking-tighter text-slate-900 mb-2">40</div>
              <div className="text-slate-600 font-medium">Countries Served</div>
              <div className="mt-4 text-sm text-slate-500">From Europe to Asia, the Americas to the Middle East.</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="text-6xl font-semibold tracking-tighter text-slate-900 mb-2">99.7%</div>
              <div className="text-slate-600 font-medium">Customer Retention</div>
              <div className="mt-4 text-sm text-slate-500">Our clients return because our machines never let them down.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
