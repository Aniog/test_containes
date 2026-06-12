import { Link } from 'react-router-dom';

export default function PageHero({ badge, title, subtitle, cta, ctaPath = '/contact', image, overlay = true }) {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden bg-navy">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image.src}
            alt={image.alt || ''}
            className="w-full h-full object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-navy/75" />}
        </div>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark opacity-90" />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {cta && (
            <Link
              to={ctaPath}
              className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              {cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
