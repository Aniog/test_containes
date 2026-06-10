import React from 'react';
import { stats } from '@/data/siteData.jsx';

const Stats = () => {
  return (
    <section className="bg-ink-900 text-paper">
      <div className="container-artitect py-20 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-steel-700">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              id={`stat-${i}`}
              className="bg-ink-900 px-6 md:px-10 py-10 md:py-14"
            >
              <div className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-accent-500 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 label-eyebrow text-steel-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
