import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, User, ArrowRight } from 'lucide-react';
import { featuredArticle } from '@/data/articles';
import { format, parseISO } from 'date-fns';

const FeaturedArticle = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const a = featuredArticle;

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-leaf rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Featured Story</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
            <img
              alt={a.title}
              className="w-full h-full object-cover"
              data-strk-img-id={a.imgId}
              data-strk-img={`[${a.subtitleId}] [${a.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${a.categoryColor}`}>
              {a.category}
            </span>

            <h3
              id={a.titleId}
              className="text-2xl md:text-3xl font-bold text-ink leading-tight mb-4"
            >
              {a.title}
            </h3>

            <p
              id={a.subtitleId}
              className="text-stone leading-relaxed mb-6"
            >
              {a.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-stone mb-8">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {a.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {a.readTime}
              </span>
              <span>{format(parseISO(a.date), 'MMM d, yyyy')}</span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-leaf text-white font-semibold px-6 py-3 rounded-full hover:bg-forest transition-colors self-start"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
