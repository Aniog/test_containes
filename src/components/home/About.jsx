import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Artitect Machinery Team"
              className="w-full h-full object-cover"
              data-strk-img-id="about-team-image-8f"
              data-strk-img="[about-story] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Elegant overlay element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-xl -z-10 blur-2xl opacity-50"></div>
          </div>

          <div>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering with Elegance
            </h2>
            <div id="about-story" className="space-y-6 text-lg text-slate-300">
              <p>
                At Artitect Machinery, we believe that industrial equipment shouldn't have to be brutalist and complicated. We build sophisticated double folding machines and metal folders that prioritize user experience.
              </p>
              <p>
                Founded on the principles of precision and smart design, our machines are specifically engineered to provide maximum power while retaining simple, intuitive workflows. Our modern sheet metal folding machines empower your workforce to achieve complex architectural outcomes faster, safer, and better.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-800 pt-10">
              <div>
                <p className="text-4xl font-bold text-orange-500 mb-2">25+</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500 mb-2">10k</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Machines Deployed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;