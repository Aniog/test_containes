import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stories = [
  {
    id: 'story-amazon',
    slug: 'amazon',
    chapter: '01',
    region: 'Amazon Basin, Brazil',
    title: 'Children of the River',
    subtitle: 'The Kayapó people and the forest that raised them',
    quote: 'The river is our blood. When it dries, so do we.',
    attribution: '— Kayapó elder, Pará state',
    body: `For the Kayapó of the Brazilian Amazon, the forest is not a resource — it is a relative. Their language has no word for "wilderness" because they have never considered themselves separate from it. Photographer Ana Souza spent eight months living alongside the community, documenting the rituals, the daily rhythms, and the quiet intimacy between people and place.`,
    body2: `The images reveal a world of extraordinary visual poetry: children swimming in rivers the color of dark tea, elders whose face paint mirrors the patterns of butterfly wings, and ceremonies where the boundary between human and animal dissolves entirely.`,
    imgId: 'story-amazon-hero-a1b2c3',
    titleId: 'story-amazon-title',
    descId: 'story-amazon-desc',
    portraitImgId: 'story-amazon-portrait-d4e5f6',
    portraitTitleId: 'story-amazon-portrait-title',
    portraitDescId: 'story-amazon-portrait-desc',
    detailImgId: 'story-amazon-detail-g7h8i9',
    detailTitleId: 'story-amazon-detail-title',
    detailDescId: 'story-amazon-detail-desc',
    color: 'moss',
    bgColor: 'bg-moss/10',
  },
  {
    id: 'story-mongolia',
    slug: 'mongolia',
    chapter: '02',
    region: 'Mongolian Steppe',
    title: 'Sky Nomads',
    subtitle: 'Eagle hunters of the Altai Mountains',
    quote: 'The eagle sees what we cannot. We trust its eyes.',
    attribution: '— Kazakh eagle hunter, Bayan-Ölgii',
    body: `On the wind-scoured plateaus of western Mongolia, the Kazakh eagle hunters maintain a bond with golden eagles that stretches back 4,000 years. The relationship is not one of ownership — it is a partnership forged through years of mutual trust, training, and shared survival in one of Earth's most extreme landscapes.`,
    body2: `These photographs capture the breathtaking scale of the steppe, the intimacy of a hunter's relationship with his bird, and the way the human silhouette against the vast sky becomes indistinguishable from the eagles themselves — both creatures of wind and altitude.`,
    imgId: 'story-mongolia-hero-j1k2l3',
    titleId: 'story-mongolia-title',
    descId: 'story-mongolia-desc',
    portraitImgId: 'story-mongolia-portrait-m4n5o6',
    portraitTitleId: 'story-mongolia-portrait-title',
    portraitDescId: 'story-mongolia-portrait-desc',
    detailImgId: 'story-mongolia-detail-p7q8r9',
    detailTitleId: 'story-mongolia-detail-title',
    detailDescId: 'story-mongolia-detail-desc',
    color: 'sky',
    bgColor: 'bg-sky/10',
  },
  {
    id: 'story-papua',
    slug: 'papua',
    chapter: '03',
    region: 'Papua New Guinea Highlands',
    title: 'Feathers and Flesh',
    subtitle: 'The Huli Wigmen and the birds of paradise',
    quote: 'We wear the birds so they know we remember them.',
    attribution: '— Huli elder, Southern Highlands',
    body: `In the cloud forests of Papua New Guinea's Southern Highlands, the Huli Wigmen have developed one of the world's most extraordinary visual cultures — elaborate headdresses made from the feathers of birds of paradise, worn during ceremonies that celebrate the connection between human beauty and the natural world.`,
    body2: `The photographs in this chapter explore the profound visual rhyme between the Huli's ceremonial dress and the plumage of the birds themselves — a living art form that insists on the continuity between human creativity and evolutionary display.`,
    imgId: 'story-papua-hero-s1t2u3',
    titleId: 'story-papua-title',
    descId: 'story-papua-desc',
    portraitImgId: 'story-papua-portrait-v4w5x6',
    portraitTitleId: 'story-papua-portrait-title',
    portraitDescId: 'story-papua-portrait-desc',
    detailImgId: 'story-papua-detail-y7z8a9',
    detailTitleId: 'story-papua-detail-title',
    detailDescId: 'story-papua-detail-desc',
    color: 'fern',
    bgColor: 'bg-fern/10',
  },
  {
    id: 'story-greenland',
    slug: 'greenland',
    chapter: '04',
    region: 'Greenland Ice Sheet',
    title: 'Memory in Ice',
    subtitle: 'Inuit hunters and the disappearing Arctic',
    quote: 'The ice remembers everything. We are learning to forget.',
    attribution: '— Inuit hunter, Ilulissat',
    body: `The Inuit of Greenland have navigated sea ice for millennia, reading its surface the way others read text — every crack, color, and sound a sentence in a language of survival. But the ice is changing faster than the language can adapt, and with it, an entire way of knowing the world is dissolving.`,
    body2: `These images document both the extraordinary beauty of the Arctic landscape and the quiet grief of a people watching their world transform. The photographs are deliberately slow, asking the viewer to sit with the vastness and the silence.`,
    imgId: 'story-greenland-hero-b1c2d3',
    titleId: 'story-greenland-title',
    descId: 'story-greenland-desc',
    portraitImgId: 'story-greenland-portrait-e4f5g6',
    portraitTitleId: 'story-greenland-portrait-title',
    portraitDescId: 'story-greenland-portrait-desc',
    detailImgId: 'story-greenland-detail-h7i8j9',
    detailTitleId: 'story-greenland-detail-title',
    detailDescId: 'story-greenland-detail-desc',
    color: 'sky',
    bgColor: 'bg-mist/30',
  },
];

function StoryCard({ story, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`text-left w-full p-6 border transition-all duration-300 ${
        isActive
          ? 'border-moss bg-moss/5'
          : 'border-linen bg-parchment hover:border-fern/50'
      }`}
    >
      <span className="font-inter text-xs tracking-widest uppercase text-bark/50 block mb-2">
        Chapter {story.chapter}
      </span>
      <span className="font-inter text-xs tracking-widest uppercase text-bark/60 block mb-3">
        {story.region}
      </span>
      <h3 className={`font-playfair text-xl mb-1 ${isActive ? 'text-moss' : 'text-soil'}`}>
        {story.title}
      </h3>
      <p className="font-inter text-sm text-bark/70 leading-snug">{story.subtitle}</p>
    </motion.button>
  );
}

function StoryDetail({ story }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [story.id]);

  return (
    <motion.div
      key={story.id}
      ref={containerRef}
      initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="flex-1"
    >
      {/* Hidden text anchors */}
      <div className="hidden">
        <span id={story.titleId}>{story.title}</span>
        <span id={story.descId}>{story.subtitle} {story.region} indigenous tribe environment</span>
        <span id={story.portraitTitleId}>{story.title} portrait</span>
        <span id={story.portraitDescId}>{story.region} indigenous person close-up portrait</span>
        <span id={story.detailTitleId}>{story.title} environment detail</span>
        <span id={story.detailDescId}>{story.region} natural environment landscape detail</span>
      </div>

      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-8">
        <img
          data-strk-img-id={story.imgId}
          data-strk-img={`[${story.descId}] [${story.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <span className="font-inter text-xs tracking-widest uppercase text-mist/70 block mb-2">
            Chapter {story.chapter} — {story.region}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-parchment">{story.title}</h2>
        </div>
      </div>

      {/* Quote */}
      <div className="px-2 mb-8">
        <blockquote className="border-l-2 border-sky pl-6">
          <p className="font-caveat text-2xl text-sky italic mb-2">{story.quote}</p>
          <cite className="font-inter text-xs tracking-wide uppercase text-bark/60 not-italic">
            {story.attribution}
          </cite>
        </blockquote>
      </div>

      {/* Body text */}
      <div className="px-2 mb-8 space-y-4">
        <p className="font-inter text-base text-bark leading-relaxed">{story.body}</p>
        <p className="font-inter text-base text-bark leading-relaxed">{story.body2}</p>
      </div>

      {/* Two-up images */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            data-strk-img-id={story.portraitImgId}
            data-strk-img={`[${story.portraitDescId}] [${story.portraitTitleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${story.title} portrait`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            data-strk-img-id={story.detailImgId}
            data-strk-img={`[${story.detailDescId}] [${story.detailTitleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${story.title} detail`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

function StoriesHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[60vh] overflow-hidden">
      <span id="stories-hero-title" className="hidden">Global Stories indigenous tribes environments</span>
      <span id="stories-hero-desc" className="hidden">Indigenous people around the world in their natural environment documentary photography</span>
      <img
        data-strk-img-id="stories-hero-bg-x1y2z3"
        data-strk-img="[stories-hero-desc] [stories-hero-title]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt="Global Stories"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dusk/40 via-dusk/20 to-parchment" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-inter text-xs tracking-[0.3em] uppercase text-mist/80 mb-4"
        >
          Editorial Series
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl text-parchment mb-4"
        >
          Global <span className="italic text-sky">Stories</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-caveat text-xl text-mist/90 italic max-w-lg"
        >
          Four chapters. Four continents. One unbroken thread.
        </motion.p>
      </div>
    </div>
  );
}

export default function GlobalStories() {
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (newIndex) => {
    setDirection(newIndex > activeStory ? 1 : -1);
    setActiveStory(newIndex);
  };

  return (
    <div className="bg-parchment">
      <StoriesHero />

      {/* Chapter intro */}
      <section className="py-16 px-8 md:px-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-base md:text-lg text-bark leading-relaxed mb-4">
            Across six continents, indigenous communities have maintained relationships
            with their environments for thousands of years. These are not stories of
            isolation — they are stories of profound integration.
          </p>
          <p className="font-caveat text-xl text-sky italic">
            Each chapter is a window into a different way of being human.
          </p>
        </motion.div>
      </section>

      {/* Main editorial layout */}
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar — chapter list */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-3">
              <h3 className="font-inter text-xs tracking-widest uppercase text-bark/50 mb-5">
                Chapters
              </h3>
              {stories.map((story, i) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  isActive={i === activeStory}
                  onClick={() => navigate(i)}
                />
              ))}
            </div>
          </div>

          {/* Story detail */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait" custom={direction}>
              <StoryDetail key={stories[activeStory].id} story={stories[activeStory]} />
            </AnimatePresence>

            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-linen">
              <button
                onClick={() => navigate(Math.max(0, activeStory - 1))}
                disabled={activeStory === 0}
                className="flex items-center gap-2 font-inter text-sm text-bark hover:text-moss transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} />
                Previous Chapter
              </button>
              <span className="font-inter text-xs tracking-widest uppercase text-bark/40">
                {activeStory + 1} / {stories.length}
              </span>
              <button
                onClick={() => navigate(Math.min(stories.length - 1, activeStory + 1))}
                disabled={activeStory === stories.length - 1}
                className="flex items-center gap-2 font-inter text-sm text-bark hover:text-moss transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next Chapter
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote section */}
      <section className="py-24 px-8 bg-dusk text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-caveat text-3xl md:text-5xl text-sky italic max-w-3xl mx-auto mb-6">
            "Every culture that has lived close to nature has understood what science
            is only now beginning to prove."
          </p>
          <p className="font-inter text-sm tracking-widest uppercase text-mist/50">
            — Project Statement, Intertwined
          </p>
        </motion.div>
      </section>
    </div>
  );
}
