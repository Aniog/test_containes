import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div ref={containerRef} className="bg-ma-white min-h-screen">
      {/* Hero image */}
      <div className="relative h-[70vh] md:h-screen overflow-hidden bg-ma-paper">
        <img
          data-strk-img-id={`${project.imgId}-hero`}
          data-strk-img={`[pd-desc-${project.id}] [pd-title-${project.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ma-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ma-ink/80 via-ma-ink/10 to-transparent" />

        {/* Back link */}
        <div className="absolute top-20 md:top-24 left-6 md:left-12">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-400"
          >
            <ArrowLeft size={12} />
            Projects
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-20">
          <p className="text-xs tracking-ultra uppercase text-white/50 font-light mb-3">
            {project.category} — {project.year}
          </p>
          <h1
            id={`pd-title-${project.id}`}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide"
          >
            {project.title}
          </h1>
          <p className="text-xs tracking-widest uppercase text-white/50 mt-2">
            {project.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Description */}
          <div className="md:col-span-2">
            <p className="font-display text-xl md:text-2xl font-light italic text-ma-concrete leading-relaxed tracking-wide mb-8">
              {project.tagline}
            </p>
            <p
              id={`pd-desc-${project.id}`}
              className="text-sm text-ma-concrete font-light leading-loose"
            >
              {project.description}
            </p>
          </div>

          {/* Details */}
          <div className="border-t border-ma-stone pt-8 md:border-t-0 md:border-l md:border-ma-stone md:pt-0 md:pl-10">
            <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-6">
              Project Details
            </p>
            <dl className="space-y-5">
              {project.details.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs tracking-widest uppercase text-ma-ash mb-1">{label}</dt>
                  <dd className="text-sm text-ma-ink font-light">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-10">
          Photography
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {project.galleryImgs.map((img, i) => (
            <div
              key={img.id}
              className={`overflow-hidden bg-ma-paper
                ${i === 0 ? 'md:col-span-2 aspect-[16/7]' : 'aspect-[4/3]'}
              `}
            >
              <img
                data-strk-img-id={img.id}
                data-strk-img={`[${img.titleId}] [pd-title-${project.id}]`}
                data-strk-img-ratio={i === 0 ? '16x9' : '4x3'}
                data-strk-img-width={i === 0 ? '1200' : '700'}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt=""
                id={img.titleId}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-ma-stone">
        <Link
          to={`/projects/${next.id}`}
          className="group block max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20"
        >
          <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-4">
            Next Project
          </p>
          <div className="flex items-end justify-between">
            <h3 className="font-display text-3xl md:text-5xl font-light text-ma-ink tracking-wide group-hover:text-ma-wood transition-colors duration-400">
              {next.title}
            </h3>
            <span className="flex items-center gap-3 text-xs tracking-widest uppercase text-ma-ash group-hover:text-ma-ink transition-colors duration-400 pb-1">
              View
              <span className="w-8 h-px bg-current inline-block transition-all duration-400 group-hover:w-14" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
