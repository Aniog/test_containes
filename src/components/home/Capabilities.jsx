import React from 'react';
import { Crosshair, Monitor, ShieldCheck, Globe2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const iconMap = {
  Crosshair,
  Monitor,
  ShieldCheck,
  Globe2,
};

const Capabilities = () => {
  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="container-artitect">
        <SectionHeader
          id="capabilities"
          eyebrow="Why ARTITECT"
          title="Built for the people who fold metal for a living."
          description="Every machine we ship is the result of two decades of listening to fabricators. The result is a line of folders that are precise, durable, and a pleasure to operate."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-200 border border-steel-200">
          {[
            { icon: 'Crosshair', title: 'Precision Engineering', body: 'Stress-relieved frames, hand-scraped bearing surfaces, and pre-loaded linear rails for tolerances that hold shift after shift.' },
            { icon: 'Monitor', title: 'Operator-First Controls', body: 'A 9-inch HMI designed with the operators who run the line. Programs, simulations, and one-touch recall keep setup under 90 seconds.' },
            { icon: 'ShieldCheck', title: 'Heavy-Duty Build', body: 'Welded steel plate frames, hardened tool steel beams, and oversized hydraulic power packs measured in decades, not years.' },
            { icon: 'Globe2', title: 'Global Service Network', body: '24/7 remote diagnostics, 48-hour spare parts dispatch, and certified field engineers across 32 countries.' },
          ].map((cap, i) => {
            const Icon = iconMap[cap.icon];
            return (
              <div
                key={cap.title}
                id={`capability-${i}`}
                className="bg-paper p-8 md:p-10 flex flex-col h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-ink-900 text-paper">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-8 font-display font-bold text-xl md:text-2xl text-ink-900">
                  {cap.title}
                </h3>
                <p className="mt-4 text-ink-500 text-sm md:text-base leading-relaxed flex-1">
                  {cap.body}
                </p>
                <div className="mt-8 pt-6 border-t border-steel-200 font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                  0{i + 1} / 04
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
