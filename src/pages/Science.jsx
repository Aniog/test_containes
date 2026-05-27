import { useEffect, useRef } from 'react';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'microbiome',
    tag: 'Human Biology',
    title: 'The Human Microbiome: Your Inner Ecosystem',
    excerpt: 'Trillions of microorganisms live in and on your body, forming a complex ecosystem that influences your immune system, mental health, and even your personality.',
    readTime: '8 min read',
    date: 'May 2026',
  },
  {
    id: 'antibiotic-resistance',
    tag: 'Public Health',
    title: 'The Antibiotic Resistance Crisis',
    excerpt: 'Bacteria are evolving faster than we can develop new drugs. How did we get here, and what can science do to prevent a post-antibiotic world?',
    readTime: '10 min read',
    date: 'April 2026',
  },
  {
    id: 'extremophiles',
    tag: 'Astrobiology',
    title: 'Extremophiles: Life at the Edge of Possibility',
    excerpt: 'From boiling hydrothermal vents to frozen Antarctic ice, extremophile microbes thrive where nothing should survive — and hint at life beyond Earth.',
    readTime: '7 min read',
    date: 'March 2026',
  },
  {
    id: 'phage-therapy',
    tag: 'Medicine',
    title: 'Phage Therapy: Viruses as Medicine',
    excerpt: 'Before antibiotics, doctors used bacteriophages to fight infections. Now, as antibiotic resistance grows, phage therapy is making a dramatic comeback.',
    readTime: '9 min read',
    date: 'February 2026',
  },
  {
    id: 'ocean-microbes',
    tag: 'Ecology',
    title: 'Ocean Microbes and the Climate',
    excerpt: 'Marine microorganisms produce half of Earth\'s oxygen and absorb vast amounts of CO₂. Understanding them is key to understanding climate change.',
    readTime: '6 min read',
    date: 'January 2026',
  },
  {
    id: 'crispr',
    tag: 'Biotechnology',
    title: 'CRISPR: A Microbial Defense Becomes a Revolution',
    excerpt: 'CRISPR-Cas9, the gene-editing tool transforming medicine, was discovered in bacteria as a primitive immune system. Nature\'s ingenuity at its finest.',
    readTime: '11 min read',
    date: 'December 2025',
  },
];

const facts = [
  { number: '01', title: 'Oxygen Producers', body: 'Cyanobacteria were the first organisms to produce oxygen via photosynthesis, transforming Earth\'s atmosphere 2.4 billion years ago.' },
  { number: '02', title: 'Nitrogen Fixers', body: 'Certain bacteria convert atmospheric nitrogen into ammonia, making it available to plants. Without them, most life on Earth would starve.' },
  { number: '03', title: 'Gut-Brain Axis', body: 'The gut microbiome communicates directly with the brain via the vagus nerve, influencing mood, anxiety, and cognitive function.' },
  { number: '04', title: 'Viral Ancestry', body: 'About 8% of the human genome consists of ancient viral DNA — remnants of infections that occurred millions of years ago.' },
];

export default function Science() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 pt-16">
      {/* Header */}
      <div className="relative py-20 px-4 md:px-8 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">
            Research &amp; Discovery
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
            The Science
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Deep dives into the biology, ecology, and medicine of the microbial world. Written for the curious mind.
          </p>
        </div>
      </div>

      {/* Key Facts */}
      <section className="py-16 px-4 md:px-8 bg-slate-900/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">
            Did You Know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact) => (
              <div key={fact.number} className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-teal-500/40 transition-colors">
                <div className="text-4xl font-bold text-teal-500/20 font-mono mb-3">{fact.number}</div>
                <h3 className="text-slate-100 font-semibold mb-2">{fact.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{fact.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-100">Featured Articles</h2>
            <span className="text-slate-500 text-sm">{articles.length} articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bg-slate-900 border border-slate-700 hover:border-teal-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/20 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`science-${article.id}-m4n5o6`}
                    data-strk-img={`[science-excerpt-${article.id}] [science-title-${article.id}] science laboratory`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest bg-teal-500/10 text-teal-400 border border-teal-500/30 px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                    <span className="text-xs text-slate-500">{article.date}</span>
                  </div>
                  <h3 id={`science-title-${article.id}`} className="text-lg font-semibold text-slate-100 mb-3 leading-snug group-hover:text-teal-400 transition-colors">
                    {article.title}
                  </h3>
                  <p id={`science-excerpt-${article.id}`} className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-teal-400 text-sm font-medium group-hover:gap-2 transition-all">
                      <BookOpen className="w-4 h-4" />
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
