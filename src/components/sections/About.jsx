import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-500 font-bold mb-4">
          The Hidden Realm
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Where scale defies imagination
        </h3>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
          Beneath the threshold of human vision lies a world of breathtaking complexity. From the intricate machinery of a single cell to the alien landscapes of specialized organisms, the MicroCosmos is a frontier that remains largely unexplored yet fundamental to all life on Earth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800">
            <h4 className="text-emerald-400 font-bold mb-2">Infinite Detail</h4>
            <p className="text-sm text-slate-400">Discover patterns and structures that repeat across all levels of existence.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800">
            <h4 className="text-emerald-400 font-bold mb-2">Biological Wonders</h4>
            <p className="text-sm text-slate-400">Observe the fundamental building blocks of life in their natural environment.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800">
            <h4 className="text-emerald-400 font-bold mb-2">Unseen Physics</h4>
            <p className="text-sm text-slate-400">Witness how laws of nature operate differently at the micrometer scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
