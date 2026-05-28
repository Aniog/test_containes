import { useState } from 'react';
import { Clock, Tag, ChevronRight, BookOpen, Zap, Globe, Heart } from 'lucide-react';

const topics = ['All', 'Ecology', 'Medicine', 'Evolution', 'Biotechnology', 'Climate'];

const articles = [
  {
    id: 1,
    title: 'The Gut Microbiome: Your Second Brain',
    topic: 'Medicine',
    readTime: '6 min',
    date: 'May 2026',
    excerpt: 'Scientists are uncovering how the trillions of microbes in your gut communicate with your brain, influencing mood, cognition, and mental health in ways we are only beginning to understand.',
    icon: Heart,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    featured: true,
  },
  {
    id: 2,
    title: 'Phytoplankton: The Lungs of the Ocean',
    topic: 'Ecology',
    readTime: '5 min',
    date: 'April 2026',
    excerpt: 'Microscopic marine algae produce over half of Earth\'s oxygen and form the base of the ocean food web. Climate change threatens to disrupt this invisible engine of life.',
    icon: Globe,
    color: 'text-cosmos-cyan',
    bg: 'bg-cosmos-cyan/10',
    featured: true,
  },
  {
    id: 3,
    title: 'CRISPR and the Microbial Origins of Gene Editing',
    topic: 'Biotechnology',
    readTime: '8 min',
    date: 'March 2026',
    excerpt: 'The revolutionary CRISPR-Cas9 gene editing tool was discovered in bacteria — a natural immune system that scientists repurposed to rewrite the code of life.',
    icon: Zap,
    color: 'text-cosmos-violet',
    bg: 'bg-cosmos-violet/10',
    featured: false,
  },
  {
    id: 4,
    title: 'Extremophiles: Life at the Edge of Possibility',
    topic: 'Evolution',
    readTime: '7 min',
    date: 'February 2026',
    excerpt: 'From boiling hydrothermal vents to frozen Antarctic ice, extremophile microbes have expanded our understanding of where life can exist — and where we might find it beyond Earth.',
    icon: BookOpen,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    featured: false,
  },
  {
    id: 5,
    title: 'Soil Microbiomes and the Future of Agriculture',
    topic: 'Ecology',
    readTime: '6 min',
    date: 'January 2026',
    excerpt: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. Understanding these communities could revolutionize sustainable farming.',
    icon: Globe,
    color: 'text-cosmos-teal',
    bg: 'bg-cosmos-teal/10',
    featured: false,
  },
  {
    id: 6,
    title: 'Antibiotic Resistance: The Microbial Arms Race',
    topic: 'Medicine',
    readTime: '9 min',
    date: 'December 2025',
    excerpt: 'Bacteria evolve resistance to antibiotics faster than we can develop new drugs. Understanding microbial evolution is our best weapon in this escalating arms race.',
    icon: Heart,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    featured: false,
  },
  {
    id: 7,
    title: 'Microbes and Climate: The Hidden Carbon Cycle',
    topic: 'Climate',
    readTime: '7 min',
    date: 'November 2025',
    excerpt: 'Microorganisms drive the global carbon cycle, sequestering and releasing carbon dioxide in ways that profoundly affect Earth\'s climate. Warming oceans are changing this balance.',
    icon: Globe,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    featured: false,
  },
  {
    id: 8,
    title: 'The Ancient Origins of Eukaryotic Life',
    topic: 'Evolution',
    readTime: '10 min',
    date: 'October 2025',
    excerpt: 'Two billion years ago, a bacterium was engulfed by an archaeon and survived — giving rise to the mitochondria and all complex life on Earth. This endosymbiotic event changed everything.',
    icon: BookOpen,
    color: 'text-cosmos-violet',
    bg: 'bg-cosmos-violet/10',
    featured: false,
  },
];

const quickFacts = [
  'Bacteria were the first life forms on Earth, appearing ~3.5 billion years ago.',
  'The human body has roughly as many bacterial cells as human cells.',
  'Viruses are not considered "alive" — they need a host cell to replicate.',
  'Tardigrades (water bears) can survive in the vacuum of space.',
  'Mycorrhizal fungi connect trees in forests, forming a "wood wide web".',
  'Some bacteria can survive in nuclear reactor cooling pools.',
];

const Science = () => {
  const [activeTopic, setActiveTopic] = useState('All');

  const filtered = articles.filter(
    (a) => activeTopic === 'All' || a.topic === activeTopic
  );
  const featured = filtered.filter((a) => a.featured);
  const regular = filtered.filter((a) => !a.featured);

  return (
    <div className="bg-cosmos-bg text-[#f0f9ff] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Research & Discovery</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4 text-[#f0f9ff]">
            The Science of the Small
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Explore the latest discoveries in microbiology, from gut health to climate science.
          </p>
        </div>

        {/* Topic Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTopic === topic
                  ? 'bg-cosmos-teal text-cosmos-bg'
                  : 'bg-cosmos-card border border-cosmos-border text-[#94a3b8] hover:text-[#f0f9ff] hover:border-cosmos-teal/30'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Articles */}
            {featured.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                {featured.map((article) => {
                  const Icon = article.icon;
                  return (
                    <div
                      key={article.id}
                      className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 hover:border-cosmos-teal/30 hover:shadow-[0_0_30px_rgba(0,212,170,0.1)] transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 ${article.bg} rounded-xl flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${article.color}`} />
                        </div>
                        <span className="text-xs font-semibold bg-cosmos-teal/10 text-cosmos-teal px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-[#f0f9ff] mb-2 leading-snug group-hover:text-cosmos-teal transition">
                        {article.title}
                      </h3>
                      <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#475569]">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                        <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {article.topic}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Regular Articles */}
            {regular.map((article) => {
              const Icon = article.icon;
              return (
                <div
                  key={article.id}
                  className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 hover:border-cosmos-teal/30 hover:shadow-[0_0_20px_rgba(0,212,170,0.08)] transition-all duration-300 cursor-pointer group flex gap-5"
                >
                  <div className={`w-12 h-12 ${article.bg} rounded-xl flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Icon className={`w-6 h-6 ${article.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-cosmos-elevated ${article.color}`}>
                        {article.topic}
                      </span>
                      <span className="text-xs text-[#475569]">{article.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-[#f0f9ff] mb-2 group-hover:text-cosmos-teal transition leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-cosmos-teal font-medium">
                      <Clock className="w-3 h-3" /> {article.readTime} read
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-[#f0f9ff] mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cosmos-teal" /> Quick Facts
              </h3>
              <ul className="space-y-3">
                {quickFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#94a3b8] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-cosmos-teal/10 text-cosmos-teal text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      {i + 1}
                    </span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scale Reference */}
            <div className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-[#f0f9ff] mb-4">Scale of the Microcosmos</h3>
              <div className="space-y-3">
                {[
                  { label: 'Human hair', size: '70,000 nm', width: 'w-full' },
                  { label: 'Red blood cell', size: '8,000 nm', width: 'w-10/12' },
                  { label: 'Bacterium', size: '1,000 nm', width: 'w-6/12' },
                  { label: 'Virus', size: '100 nm', width: 'w-3/12' },
                  { label: 'DNA strand', size: '2 nm', width: 'w-1/12' },
                ].map(({ label, size, width }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-[#94a3b8] mb-1">
                      <span>{label}</span>
                      <span className="text-[#475569]">{size}</span>
                    </div>
                    <div className="h-1.5 bg-cosmos-elevated rounded-full overflow-hidden">
                      <div className={`h-full ${width} bg-gradient-to-r from-cosmos-teal to-cosmos-cyan rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
