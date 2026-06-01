import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { projects } from '@/data/projects';

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ma-white min-h-screen">
      {/* Page header */}
      <div className="pt-32 md:pt-40 pb-16 md:pb-20 max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-4">
          Selected Work
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-light text-ma-ink tracking-wide">
          Projects
        </h1>
        <div className="mt-8 w-12 h-px bg-ma-stone" />
      </div>

      {/* Lookbook grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-40">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block border-t border-ma-stone py-10 md:py-14"
          >
            <div
              className={`flex flex-col gap-8 md:gap-12
                ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Image */}
              <div className="md:w-1/2 overflow-hidden aspect-[4/3] bg-ma-paper">
                <img
                  data-strk-img-id={project.imgId}
                  data-strk-img={`[proj-list-desc-${project.id}] [proj-list-title-${project.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col justify-center md:px-6 lg:px-12">
                <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-4">
                  {project.category} — {project.year}
                </p>
                <h2
                  id={`proj-list-title-${project.id}`}
                  className="font-display text-3xl md:text-4xl font-light text-ma-ink tracking-wide mb-3 group-hover:text-ma-wood transition-colors duration-400"
                >
                  {project.title}
                </h2>
                <p className="text-xs tracking-widest uppercase text-ma-stone mb-6">
                  {project.location}
                </p>
                <p
                  id={`proj-list-desc-${project.id}`}
                  className="text-sm text-ma-concrete font-light leading-relaxed max-w-sm"
                >
                  {project.tagline}
                </p>
                <div className="mt-8 flex items-center gap-3 text-xs tracking-widest uppercase text-ma-ash group-hover:text-ma-ink transition-colors duration-400">
                  <span>View Project</span>
                  <span className="w-8 h-px bg-current inline-block transition-all duration-400 group-hover:w-12" />
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="border-t border-ma-stone" />
      </div>
    </div>
  );
}
