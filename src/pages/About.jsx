import AboutContent from '../components/about/AboutContent';

const About = () => {
  return (
    <div className="min-h-screen bg-[#050a0e] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            Who We Are
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            About{' '}
            <span className="gradient-text">MicroCosmos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A team of scientists, educators, and storytellers dedicated to revealing the extraordinary world of microorganisms to everyone on Earth.
          </p>
        </div>

        <AboutContent />
      </div>
    </div>
  );
};

export default About;
