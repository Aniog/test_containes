export default function MissionBanner() {
  return (
    <section className="py-24 md:py-32 bg-space-black relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(167,139,250,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-widest text-cosmic-violet mb-6">The Archive's Purpose</p>

        <blockquote className="font-display text-3xl md:text-5xl text-white font-light leading-relaxed mb-10 italic">
          "We do not leave Earth behind.
          <br />
          We carry it within us —
          <br />
          <span className="text-cosmic-violet not-italic">every memory, every voice, every name."</span>
        </blockquote>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          The Memory Archive is humanity's most ambitious preservation project.
          As the first interstellar migration approaches, we are collecting, digitizing,
          and safeguarding the lived experiences of every human who ever walked this Earth.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {[
            'Oral histories',
            'Written accounts',
            'Sensory recordings',
            'Dream archives',
            'Cultural ceremonies',
            'Personal letters',
          ].map(item => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-cosmic-violet">◈</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
