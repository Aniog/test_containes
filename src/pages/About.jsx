import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-32 text-center text-balance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Artitect is where engineering<br />meets <span className="text-accent">artistry</span>.</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize the sheet metal folding industry, ARTITECT MACHINERY combines decades of industrial experience with cutting-edge technological innovation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                data-strk-img-id="factory-img"
                data-strk-img="modern high-tech industrial machinery factory clean workspace"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Factory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-primary mb-8">Decades of Dedication</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Our journey began in a small workshop with a single goal: to build a folder that was both faster and more accurate than anything on the market. That obsession led us to develop the ARTITECT double folder series, a machine that changed the way fabricators approach complex bends.
              </p>
              <p>
                Today, ARTITECT MACHINERY is a global leader, supplying top-tier metal folder machines to industries ranging from aerospace to architectural construction. We continue to push the boundaries of what is possible in sheet metal folding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-balance">
            {[
              { icon: <Target className="w-12 h-12 text-accent" />, title: 'Mission', desc: 'To empower fabricators worldwide with the most precise and efficient folding technology available.' },
              { icon: <Lightbulb className="w-12 h-12 text-accent" />, title: 'Innovation', desc: 'Constantly evolving our CNC systems and mechanical designs to meet the challenges of 21st-century manufacturing.' },
              { icon: <Users className="w-12 h-12 text-accent" />, title: 'Community', desc: 'Building long-lasting partnerships with our clients through exceptional support and mutual growth.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
