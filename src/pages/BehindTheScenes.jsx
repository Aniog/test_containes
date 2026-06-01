import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredStory = {
  id: 'bts-featured',
  title: 'Chasing the Perfect Frame',
  subtitle: 'On Location in the Mongolian Steppe',
  pullQuote: '"Light is not something you find — it is something you wait for."',
  body: `Forty-seven days. That was how long the crew of The Last Meridian spent on the Mongolian steppe, waiting for the precise quality of light that would define the film's visual language. Director of Photography Marcus Chen describes the experience as "a masterclass in patience and surrender."

The production used a combination of ARRI ALEXA 65 and vintage Cooke S4 lenses to achieve the film's signature look — a warmth that feels ancient, as if the images themselves have been weathered by centuries of wind.`,
  titleId: 'bts-featured-title',
  subtitleId: 'bts-featured-subtitle',
  imgId: 'bts-featured-img-4a2b8c',
};

const editorialCards = [
  {
    id: 'bts-card-1',
    category: 'Technique',
    title: 'The Anamorphic Lens Diaries',
    excerpt: 'How vintage glass and modern sensors create the cinematic language of Nocturne City.',
    titleId: 'bts-card-1-title',
    excerptId: 'bts-card-1-excerpt',
    imgId: 'bts-card-1-img-7f3d1a',
  },
  {
    id: 'bts-card-2',
    category: 'Process',
    title: 'Natural Light as Narrative',
    excerpt: 'Rejecting artificial lighting entirely — a conversation about the risks and rewards of shooting in pure natural light.',
    titleId: 'bts-card-2-title',
    excerptId: 'bts-card-2-excerpt',
    imgId: 'bts-card-2-img-2c9e5b',
  },
  {
    id: 'bts-card-3',
    category: 'Collaboration',
    title: 'The Director\'s Eye',
    excerpt: 'On the invisible language between a director and their cinematographer — trust, tension, and creative surrender.',
    titleId: 'bts-card-3-title',
    excerptId: 'bts-card-3-excerpt',
    imgId: 'bts-card-3-img-6b4f8d',
  },
];

const behindMoments = [
  {
    id: 'bts-moment-1',
    caption: 'Setting up the crane shot — dawn, Mongolian steppe',
    titleId: 'bts-moment-1-caption',
    imgId: 'bts-moment-1-img-1e7a3c',
  },
  {
    id: 'bts-moment-2',
    caption: 'Underwater housing prep — Pacific Ocean, 40m depth',
    titleId: 'bts-moment-2-caption',
    imgId: 'bts-moment-2-img-9d2b6f',
  },
  {
    id: 'bts-moment-3',
    caption: 'Night exterior — Tokyo, 3:00 AM',
    titleId: 'bts-moment-3-caption',
    imgId: 'bts-moment-3-img-5c8e1a',
  },
  {
    id: 'bts-moment-4',
    caption: 'Lens calibration — Cooke S4 vintage set',
    titleId: 'bts-moment-4-caption',
    imgId: 'bts-moment-4-img-3a6d9b',
  },
];

export default function BehindTheScenes() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-cinema-black">
      {/* Hero header */}
      <section className="relative pt-32 lg:pt-40 pb-0 overflow-hidden">
        {/* Film grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none" />

        <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto relative z-10">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-6">
            Editorial
          </p>
          {/* Large bold headline */}
          <h1 className="font-display font-light text-cinema-white leading-none tracking-tight">
            <span className="block text-6xl lg:text-[8rem] xl:text-[11rem]">Behind</span>
            <span className="block text-6xl lg:text-[8rem] xl:text-[11rem] text-gold/80 italic ml-0 lg:ml-24 xl:ml-40">
              the Scenes
            </span>
          </h1>
        </div>

        {/* Full-width 21:9 hero image */}
        <div className="relative aspect-[21/9] mt-12 overflow-hidden film-grain">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Behind the scenes on set"
            data-strk-img-id="bts-hero-img-0f1a2b"
            data-strk-img={`[${featuredStory.subtitleId}] [${featuredStory.titleId}]`}
            data-strk-img-ratio="21/9"
            data-strk-img-width="1920"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/20 to-transparent" />
        </div>
      </section>

      {/* Featured story */}
      <section className="relative px-6 lg:px-12 max-w-screen-2xl mx-auto py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: large title */}
          <div className="lg:col-span-5">
            <span className="font-body text-cinema-muted text-[10px] tracking-[0.4em] uppercase block mb-4">
              Featured Story
            </span>
            <h2
              id={featuredStory.titleId}
              className="font-display text-4xl lg:text-6xl font-light text-cinema-white leading-tight mb-4"
            >
              {featuredStory.title}
            </h2>
            <p
              id={featuredStory.subtitleId}
              className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-8"
            >
              {featuredStory.subtitle}
            </p>
            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-2">
              <p className="font-display text-xl lg:text-2xl text-cinema-grey italic leading-relaxed">
                {featuredStory.pullQuote}
              </p>
            </blockquote>
          </div>

          {/* Right: body text + image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] overflow-hidden mb-8 film-grain">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featuredStory.title}
                data-strk-img-id={featuredStory.imgId}
                data-strk-img={`[${featuredStory.subtitleId}] [${featuredStory.titleId}]`}
                data-strk-img-ratio="16/9"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-cinema-black/20" />
            </div>
            {featuredStory.body.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-cinema-grey text-sm lg:text-base leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Editorial cards — 3 column */}
      <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto py-20 lg:py-28">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-cinema-white">
            Notes on Craft
          </h2>
          <span className="font-body text-cinema-muted text-xs tracking-[0.3em] uppercase hidden lg:block">
            Process & Technique
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {editorialCards.map((card) => (
            <article key={card.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-5 film-grain">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={card.title}
                  data-strk-img-id={card.imgId}
                  data-strk-img={`[${card.excerptId}] [${card.titleId}]`}
                  data-strk-img-ratio="3/4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-body text-gold text-[10px] tracking-[0.35em] uppercase bg-cinema-black/60 px-2 py-1">
                  {card.category}
                </span>
              </div>
              <h3
                id={card.titleId}
                className="font-display text-2xl lg:text-3xl font-light text-cinema-white group-hover:text-gold transition-colors duration-400 leading-tight mb-3"
              >
                {card.title}
              </h3>
              <p
                id={card.excerptId}
                className="font-body text-cinema-grey text-sm leading-relaxed"
              >
                {card.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px w-6 bg-gold/60 group-hover:w-12 transition-all duration-400" />
                <span className="font-body text-gold text-[10px] tracking-[0.3em] uppercase">Read More</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gold divider */}
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
      </div>

      {/* Photo moments grid */}
      <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto py-20 lg:py-28">
        <div className="mb-12">
          <span className="font-body text-cinema-muted text-[10px] tracking-[0.4em] uppercase block mb-3">
            On Set
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-cinema-white">
            Moments Between Takes
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Large first image */}
          <div className="col-span-2 row-span-1 relative aspect-[16/9] overflow-hidden group film-grain">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={behindMoments[0].caption}
              data-strk-img-id={behindMoments[0].imgId}
              data-strk-img={`[${behindMoments[0].titleId}]`}
              data-strk-img-ratio="16/9"
              data-strk-img-width="900"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cinema-black/30 group-hover:bg-cinema-black/10 transition-all duration-500" />
            <p id={behindMoments[0].titleId} className="absolute bottom-3 left-4 font-body text-cinema-white/70 text-[10px] tracking-[0.2em] uppercase">
              {behindMoments[0].caption}
            </p>
          </div>

          {/* Remaining 3 images */}
          {behindMoments.slice(1).map((moment) => (
            <div key={moment.id} className="relative aspect-[4/3] overflow-hidden group film-grain">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={moment.caption}
                data-strk-img-id={moment.imgId}
                data-strk-img={`[${moment.titleId}]`}
                data-strk-img-ratio="4/3"
                data-strk-img-width="600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cinema-black/30 group-hover:bg-cinema-black/10 transition-all duration-500" />
              <p id={moment.titleId} className="absolute bottom-3 left-3 font-body text-cinema-white/70 text-[10px] tracking-[0.15em] uppercase leading-tight">
                {moment.caption}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
