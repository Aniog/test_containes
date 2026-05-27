import AboutContent from '@/components/about/AboutContent';

const About = () => {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-16">
        <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">About Us</span>
        <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
          The Story of MicroCosmos
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          We are scientists, educators, and storytellers dedicated to revealing the extraordinary world that exists beyond the limits of human vision.
        </p>
      </div>

      <AboutContent />
    </div>
  );
};

export default About;
