import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'art-review',
    titleId: 'art-review-title',
    descId: 'art-review-desc',
    imgId: 'art-review-img-s1t2u3',
    category: 'Review',
    date: 'May 28, 2026',
    title: 'APPLE mini Review: The Desktop Reinvented',
    desc: 'After six weeks of daily use, we put the new APPLE mini through its paces — from 4K video editing to running local AI models. The verdict? It changes everything.',
    readTime: '8 min read',
  },
  {
    id: 'art-vs',
    titleId: 'art-vs-title',
    descId: 'art-vs-desc',
    imgId: 'art-vs-img-v4w5x6',
    category: 'Comparison',
    date: 'May 15, 2026',
    title: 'APPLE mini vs. The Competition: Who Wins?',
    desc: 'We stack the APPLE mini against the Intel NUC 14 and the ASUS ROG NUC to see which mini PC delivers the best performance per dollar in 2026.',
    readTime: '6 min read',
  },
  {
    id: 'art-setup',
    titleId: 'art-setup-title',
    descId: 'art-setup-desc',
    imgId: 'art-setup-img-y7z8a9',
    category: 'Guide',
    date: 'June 1, 2026',
    title: '10 Tips to Get the Most Out of Your APPLE mini',
    desc: 'From hidden keyboard shortcuts to optimizing memory usage and setting up a triple-monitor workspace — here are the power-user tips you need to know.',
    readTime: '5 min read',
  },
  {
    id: 'art-m4',
    titleId: 'art-m4-title',
    descId: 'art-m4-desc',
    imgId: 'art-m4-img-b1c2d3',
    category: 'Deep Dive',
    date: 'April 30, 2026',
    title: 'Inside the M4 Chip: What Makes It So Fast?',
    desc: 'A technical breakdown of Apple\'s M4 architecture — the new CPU cores, the Neural Engine improvements, and why unified memory is a game-changer for creative pros.',
    readTime: '10 min read',
  },
  {
    id: 'art-dev',
    titleId: 'art-dev-title',
    descId: 'art-dev-desc',
    imgId: 'art-dev-img-e4f5g6',
    category: 'Developer',
    date: 'June 3, 2026',
    title: 'Why Developers Are Switching to APPLE mini',
    desc: 'Docker, Xcode, VS Code, and local LLMs — we talk to five developers about why the APPLE mini has become their go-to machine for serious software development.',
    readTime: '7 min read',
  },
  {
    id: 'art-ai',
    titleId: 'art-ai-title',
    descId: 'art-ai-desc',
    imgId: 'art-ai-img-h7i8j9',
    category: 'AI',
    date: 'May 20, 2026',
    title: 'Running Local AI on APPLE mini: A Practical Guide',
    desc: 'With 64GB of unified memory, the APPLE mini can run large language models locally. We test Llama 3, Mistral, and Stable Diffusion — here\'s what you can expect.',
    readTime: '9 min read',
  },
];

const categoryColors = {
  Review: 'bg-blue-100 text-blue-700',
  Comparison: 'bg-purple-100 text-purple-700',
  Guide: 'bg-green-100 text-green-700',
  'Deep Dive': 'bg-orange-100 text-orange-700',
  Developer: 'bg-gray-100 text-gray-700',
  AI: 'bg-pink-100 text-pink-700',
};

const Articles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="articles" ref={containerRef} className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Articles</span>
          <h2 id="articles-title" className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            From the APPLE mini blog
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Reviews, guides, comparisons, and deep dives — everything you need to know.
          </p>
        </div>

        {/* Featured article */}
        <div className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-gray-50 mb-8 cursor-pointer">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden bg-gray-100">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}] [articles-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-gray-400 text-sm">Featured</span>
              </div>
              <h3 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                {featured.title}
              </h3>
              <p id={featured.descId} className="text-gray-500 leading-relaxed mb-6">
                {featured.desc}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <div
              key={article.id}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50 cursor-pointer flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}] [articles-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                </div>
                <h3 id={article.titleId} className="text-lg font-bold text-gray-900 leading-snug mb-2">
                  {article.title}
                </h3>
                <p id={article.descId} className="text-gray-500 text-sm leading-relaxed flex-1">
                  {article.desc}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3 rounded-full transition-colors">
            View all articles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
