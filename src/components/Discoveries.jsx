import React from 'react';

const Discoveries = () => {
  const items = [
    {
      id: "tardigrade",
      title: "Tardigrades",
      desc: "Also known as water bears, these microscopic eight-legged animals are famous for their resilience, able to survive extreme conditions that would kill most other forms of life.",
      align: "left"
    },
    {
      id: "diatoms",
      title: "Diatoms",
      desc: "Beautiful single-celled algae with transparent, opal-like cell walls made of silica. They produce a large portion of the oxygen we breathe every day.",
      align: "right"
    },
    {
      id: "macrophages",
      title: "Macrophage Cells",
      desc: "The defenders of our immune system. Under an electron microscope, they look like fierce alien entities, hunting down and engulfing pathogens.",
      align: "left"
    }
  ];

  return (
    <section id="discoveries" className="py-24 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="discoveries-title" className="text-3xl md:text-5xl font-bold mb-4">Fascinating Discoveries</h2>
          <p id="discoveries-subtitle" className="text-muted-foreground max-w-2xl mx-auto text-lg">
            What looks like ordinary water or soil contains vast, thriving civilizations. Here are a few notable stars of the micro-world.
          </p>
        </div>

        <div className="space-y-24">
          {items.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-card">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`discovery-img-${item.id}`}
                    data-strk-img={`[discovery-desc-${item.id}] [discovery-title-${item.id}] [discoveries-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 id={`discovery-title-${item.id}`} className="text-3xl font-bold text-primary">
                  {item.title}
                </h3>
                <p id={`discovery-desc-${item.id}`} className="text-lg text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discoveries;