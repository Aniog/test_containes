import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-black py-20 md:py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Full-width panoramic image */}
        <div className="w-full aspect-[21/9] overflow-hidden rounded-xl border border-neutral-800 mb-16">
          <img
            id="about-img-title"
            alt="Microscopic panorama"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            data-strk-img-id="about-mc040"
            data-strk-img="[about-img-title] microscopic world panorama colorful"
            data-strk-img-ratio="16x9"
            data-strk-img-width={1400}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Our Mission
            </p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight mb-6">
              Making the Invisible<br />Impossible to Ignore
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-4">
              MicroCosmos was born from a simple conviction: the most extraordinary things in the universe are the ones we cannot see. We believe that understanding the microscopic world is not just a scientific endeavor — it is a philosophical one.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Through cutting-edge imaging technology and a passion for the infinitely small, we document, archive, and share the hidden beauty that surrounds us at every moment. Every image is a reminder that complexity, elegance, and wonder exist at every scale of existence.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Photography', body: 'Electron and confocal microscopy capturing subjects at up to 4000× magnification.' },
              { title: 'Research', body: 'Collaborating with universities and research institutes worldwide.' },
              { title: 'Education', body: 'Making microscopic science accessible to curious minds of all ages.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-neutral-800 pt-5">
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
