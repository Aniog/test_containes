import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1978', text: 'The farm was founded by Thomas and Mary Green on 20 acres of hillside land.' },
  { year: '1995', text: 'We expanded our orchards and introduced new varieties of apples and pears.' },
  { year: '2010', text: 'The second generation took over, bringing sustainable farming practices.' },
  { year: '2024', text: 'Today we grow over 15 varieties of fruit and welcome visitors every season.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-farm-orange text-sm font-medium uppercase tracking-widest mb-2">Our Story</p>
          <h1 id="about-title" className="text-4xl font-bold text-gray-900">About Green Valley Farm</h1>
          <p id="about-subtitle" className="text-gray-500 mt-3 max-w-xl mx-auto">
            Three generations of farming, one shared passion for growing the finest fruit.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rooted in Tradition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Green Valley Farm has been in our family for nearly 50 years. What started as a small plot of apple trees has grown into a thriving orchard spanning over 60 acres.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that great fruit comes from healthy soil, clean water, and patient hands. We don't rush nature — we work with it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every season, we welcome families, schools, and food lovers to come and experience the farm firsthand. There's nothing quite like picking a ripe peach straight from the tree.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              alt="Farm orchard"
              data-strk-img-id="about-farm-img-d4e5f6"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-gray-500 mt-2">Key moments in our farm's history.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map(({ year, text }) => (
              <div key={year} className="bg-farm-bg rounded-2xl p-6 border border-gray-100">
                <span className="text-farm-orange font-bold text-xl block mb-2">{year}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Values</h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">Everything we do comes back to these three principles.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Honesty', desc: 'We grow what we say we grow, and we sell what we pick. No shortcuts.' },
            { title: 'Sustainability', desc: 'We protect the land for the next generation, using natural methods wherever possible.' },
            { title: 'Community', desc: 'Our farm is open to everyone. We love sharing our passion with visitors and neighbors.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-farm-green text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
