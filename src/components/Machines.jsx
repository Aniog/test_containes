import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const machines = [
  {
    id: 'df-2000',
    name: 'DF-2000 Double Folder',
    category: 'Double Folding Machine',
    capacity: 'Up to 2.0 m',
    thickness: 'Up to 2.5 mm steel',
    description: 'Our flagship double folding machine. Exceptional repeatability and speed for high-volume production of panels, boxes, and architectural profiles.',
    features: ['Dual-axis folding', 'CNC backgauge', '0.1° angle accuracy', 'Touchscreen control'],
    keywords: 'double folding machine double folder'
  },
  {
    id: 'df-3200',
    name: 'DF-3200 Pro Folder',
    category: 'Double Folder',
    capacity: 'Up to 3.2 m',
    thickness: 'Up to 3.0 mm steel',
    description: 'Extended-length double folder designed for large-format architectural and industrial components. Built for shops that need serious capacity without sacrificing precision.',
    features: ['3.2 m folding length', 'Heavy-duty frame', 'Automatic crowning', 'Remote diagnostics'],
    keywords: 'double folder double folding machine'
  },
  {
    id: 'sm-1500',
    name: 'SM-1500 Sheet Metal Folder',
    category: 'Sheet Metal Folder',
    capacity: 'Up to 1.5 m',
    thickness: 'Up to 2.0 mm steel',
    description: 'Compact yet powerful sheet metal folder. Perfect for job shops, HVAC fabricators, and custom metalworkers who value floor space and versatility.',
    features: ['Quick-change tooling', 'Manual & powered options', 'Segmented fingers', 'Portable design'],
    keywords: 'sheet metal folder sheet metal folding machine'
  },
  {
    id: 'sm-2500',
    name: 'SM-2500 Precision Folder',
    category: 'Sheet Metal Folding Machine',
    capacity: 'Up to 2.5 m',
    thickness: 'Up to 2.0 mm steel',
    description: 'The workhorse of many workshops. This sheet metal folding machine delivers clean, consistent bends across a wide range of materials and thicknesses.',
    features: ['High-rigidity beam', 'Digital angle readout', 'Adjustable clamping', 'Low maintenance'],
    keywords: 'sheet metal folding machine sheet metal folder'
  },
  {
    id: 'mf-1250',
    name: 'MF-1250 Metal Folder',
    category: 'Metal Folder',
    capacity: 'Up to 1.25 m',
    thickness: 'Up to 1.5 mm steel',
    description: 'A beautifully engineered metal folder for smaller shops and specialist fabricators. Delivers ARTITECT precision in a space-efficient package.',
    features: ['All-steel construction', 'Ergonomic operation', 'Tool storage tray', 'Easy blade changes'],
    keywords: 'metal folder metal folder machine'
  },
  {
    id: 'mf-2000',
    name: 'MF-2000 Industrial Folder',
    category: 'Metal Folding Machine',
    capacity: 'Up to 2.0 m',
    thickness: 'Up to 2.5 mm steel',
    description: 'Heavy-duty metal folding machine built for continuous production. Trusted by manufacturers who need reliability shift after shift.',
    features: ['Reinforced frame', 'High-torque drive', 'Safety light curtains', 'Production counter'],
    keywords: 'metal folding machine metal folder'
  }
];

const Machines = () => {
  const containerRef = useRef(null);
  const [selectedMachine, setSelectedMachine] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const requestQuoteFor = (machine) => {
    setSelectedMachine(machine);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = contactSection.getBoundingClientRect().top;
      window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
    }
    // Dispatch custom event so Contact form can prefill
    window.dispatchEvent(new CustomEvent('prefill-machine', { detail: machine }));
  };

  return (
    <section id="machines" ref={containerRef} className="section bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-brand-gold font-semibold mb-3">OUR MACHINES</div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-[-1.5px] text-brand-dark mb-4">
            Machines that make the difference.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-slate">
            Every ARTITECT folder is engineered for accuracy, durability, and ease of use. 
            From compact job-shop models to high-capacity production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <div key={machine.id} className="product-card card flex flex-col overflow-hidden">
              <div className="product-image aspect-[16/10] bg-slate-100">
                <img
                  data-strk-img-id={`machine-${machine.id}`}
                  data-strk-img={`[machine-${machine.id}-desc] [machine-${machine.id}-name] ${machine.keywords} industrial workshop`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${machine.name} — ${machine.description}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs tracking-widest text-brand-gold mb-1">{machine.category.toUpperCase()}</div>
                <h3 id={`machine-${machine.id}-name`} className="font-serif text-2xl tracking-tight text-brand-dark mb-1">
                  {machine.name}
                </h3>
                <p id={`machine-${machine.id}-desc`} className="text-brand-slate text-sm mb-4 line-clamp-3">
                  {machine.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm mb-4 pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-brand-muted text-xs">FOLDING LENGTH</div>
                      <div className="font-medium text-brand-dark">{machine.capacity}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-muted text-xs">MAX THICKNESS</div>
                      <div className="font-medium text-brand-dark">{machine.thickness}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => requestQuoteFor(machine)}
                    className="btn btn-primary w-full group"
                  >
                    Request Quote for this Model
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-sm text-brand-slate">
          Need something custom? <button onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' })} className="text-brand-dark underline underline-offset-4 hover:text-brand-gold">Let's talk about your requirements.</button>
        </div>
      </div>
    </section>
  );
};

export default Machines;