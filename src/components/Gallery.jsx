import React from 'react';

const galleryItems = [
  {
    id: 'workshop-1',
    title: 'Precision Workshop',
    desc: 'A modern fabrication shop running multiple ARTITECT folders in daily production.',
    query: 'modern metal fabrication workshop with folding machines',
  },
  {
    id: 'workshop-2',
    title: 'Heavy Industry',
    desc: 'Large-scale industrial installation handling structural steel components.',
    query: 'heavy industrial metalworking factory folding machine',
  },
  {
    id: 'workshop-3',
    title: 'Aerospace Manufacturing',
    desc: 'High-precision folding for aerospace-grade aluminum components.',
    query: 'aerospace manufacturing clean room metal folding',
  },
  {
    id: 'workshop-4',
    title: 'Custom Fabrication',
    desc: 'Skilled craftsman producing architectural metalwork on an ARTITECT machine.',
    query: 'craftsman architectural metal fabrication workshop',
  },
  {
    id: 'workshop-5',
    title: 'Production Line',
    desc: 'High-volume production environment with automated material handling.',
    query: 'industrial production line sheet metal manufacturing',
  },
  {
    id: 'workshop-6',
    title: 'Training Center',
    desc: 'Our European training facility where operators master their craft.',
    query: 'industrial training center machinery education',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[3px] text-sm text-amber-500 font-medium mb-4">IN THE FIELD</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-4">
            Built for the real world.
          </h2>
          <p className="max-w-xl mx-auto text-xl text-white/70">
            See how leading fabricators around the world rely on ARTITECT machinery every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-900">
              <img
                data-strk-img-id={`gallery-${item.id}`}
                data-strk-img={`[gallery-${item.id}-desc] [gallery-${item.id}-title] ${item.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 id={`gallery-${item.id}-title`} className="text-2xl font-semibold tracking-tight mb-2">{item.title}</h3>
                <p id={`gallery-${item.id}-desc`} className="text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
