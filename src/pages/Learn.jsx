import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Beginner', 'Technique', 'Gear', 'Post-Processing'];

const articles = [
  {
    imgId: 'learn-img-a1b1', labelId: 'learn-lbl-1',
    category: 'Beginner', readTime: '5 min',
    title: 'Understanding Exposure: The Exposure Triangle',
    excerpt: 'Aperture, shutter speed, and ISO are the three pillars of every photograph. Master their relationship and you master light itself.',
    label: 'Camera exposure triangle aperture shutter speed ISO photography basics',
  },
  {
    imgId: 'learn-img-a2b2', labelId: 'learn-lbl-2',
    category: 'Technique', readTime: '8 min',
    title: 'Composing with Light: Golden Hour and Beyond',
    excerpt: 'The best photographers don\'t just find good subjects — they find good light. Learn how to read and chase the light that transforms ordinary scenes.',
    label: 'Golden hour photography landscape warm light sunset composition',
  },
  {
    imgId: 'learn-img-a3b3', labelId: 'learn-lbl-3',
    category: 'Gear', readTime: '6 min',
    title: 'Choosing Your First Lens: A Practical Guide',
    excerpt: 'The kit lens is just the beginning. We break down focal lengths, apertures, and use cases so you can invest wisely in glass.',
    label: 'Camera lens selection focal length prime zoom photography gear',
  },
  {
    imgId: 'learn-img-a4b4', labelId: 'learn-lbl-4',
    category: 'Post-Processing', readTime: '10 min',
    title: 'RAW vs JPEG: Why Shooting RAW Changes Everything',
    excerpt: 'RAW files give you full control over every pixel in post. Here\'s what that means in practice and how to get started with RAW editing.',
    label: 'RAW file editing post processing photography workflow Lightroom',
  },
  {
    imgId: 'learn-img-a5b5', labelId: 'learn-lbl-5',
    category: 'Technique', readTime: '7 min',
    title: 'Mastering Autofocus: Modes, Zones, and Tracking',
    excerpt: 'Modern autofocus systems are incredibly powerful — but only if you know how to configure them. We cover every AF mode on the Lumora X1.',
    label: 'Autofocus modes tracking photography subject detection camera settings',
  },
  {
    imgId: 'learn-img-a6b6', labelId: 'learn-lbl-6',
    category: 'Beginner', readTime: '4 min',
    title: 'The Rule of Thirds (and When to Break It)',
    excerpt: 'Composition rules exist to be understood, then broken intentionally. Start here to build a visual instinct that goes beyond the grid.',
    label: 'Rule of thirds composition photography framing visual balance',
  },
  {
    imgId: 'learn-img-a7b7', labelId: 'learn-lbl-7',
    category: 'Post-Processing', readTime: '9 min',
    title: 'Color Grading for Photographers: A Cinematic Look',
    excerpt: 'Achieve the rich, filmic tones you see in editorial photography. We walk through a complete color grade from import to export.',
    label: 'Color grading cinematic photography post processing tones film look',
  },
  {
    imgId: 'learn-img-a8b8', labelId: 'learn-lbl-8',
    category: 'Gear', readTime: '5 min',
    title: 'Tripods, Filters, and the Accessories Worth Buying',
    excerpt: 'Not all accessories are created equal. We separate the essentials from the gimmicks so your kit bag stays lean and effective.',
    label: 'Photography accessories tripod ND filter essential gear camera bag',
  },
  {
    imgId: 'learn-img-a9b9', labelId: 'learn-lbl-9',
    category: 'Technique', readTime: '6 min',
    title: 'Night Photography: Capturing Stars and City Lights',
    excerpt: 'Long exposures, high ISO, and manual focus — night photography demands a different mindset. Here\'s how to nail it every time.',
    label: 'Night photography stars milky way long exposure city lights low light',
  },
];

const featured = articles[0];

export default function Learn() {
  const containerRef = useRef(null);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [active]);

  return (
    <div ref={containerRef}>
      {/* ── Page Hero ── */}
      <section className="bg-zinc-950 pt-16 pb-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Knowledge Base</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Learn Photography</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Guides, tutorials, and techniques from working photographers — written to help you get more from every shot.
        </p>
      </section>

      {/* ── Featured Article ── */}
      <section className="bg-zinc-900 py-16 px-6 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-6">Featured Guide</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-2xl bg-zinc-800">
              <span id={featured.labelId} className="hidden">{featured.label}</span>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.labelId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-400/10 text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-400/20">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-zinc-500 text-xs">
                  <Clock className="w-3 h-3" /> {featured.readTime} read
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{featured.title}</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">{featured.excerpt}</p>
              <button className="flex items-center gap-2 text-amber-400 font-medium hover:gap-3 transition-all">
                Read the Guide <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hidden labels ── */}
      <div className="hidden">
        {articles.slice(1).map((a) => (
          <span key={a.imgId} id={a.labelId}>{a.label}</span>
        ))}
      </div>

      {/* ── Filter + Grid ── */}
      <section className="bg-zinc-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === cat
                    ? 'bg-amber-400 text-zinc-950 border-amber-400'
                    : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <article
                key={article.imgId}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-colors group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.labelId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-400/10 text-amber-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500 text-xs">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 text-amber-400 text-sm font-medium">
                    <BookOpen className="w-4 h-4" /> Read More
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-zinc-900 py-20 px-6 border-t border-zinc-800">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Stay Sharp</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">New Guides Every Week</h2>
          <p className="text-zinc-400 mb-8">Join 40,000 photographers who get our latest tutorials delivered to their inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-6 py-3 text-sm hover:bg-amber-300 transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
