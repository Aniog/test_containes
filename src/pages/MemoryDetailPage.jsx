import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Globe, Layers } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS } from '../data/memories';

const emotionColors = {
  joy: { text: '#f5c842', bg: 'rgba(245,200,66,0.1)', border: 'rgba(245,200,66,0.3)' },
  love: { text: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
  grief: { text: '#4f8ef7', bg: 'rgba(79,142,247,0.1)', border: 'rgba(79,142,247,0.3)' },
  wonder: { text: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
  fear: { text: '#2dd4bf', bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.3)' },
  hope: { text: '#f5c842', bg: 'rgba(245,200,66,0.1)', border: 'rgba(245,200,66,0.3)' },
  nostalgia: { text: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
  pride: { text: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
};

export default function MemoryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = MEMORIES.find(m => m.id === id);

  if (!memory) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-slate-400 font-display text-2xl font-light mb-4">Memory not found</p>
          <Link to="/explore" className="text-nebula-blue text-sm hover:underline">
            Return to archive
          </Link>
        </div>
      </div>
    );
  }

  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find(e => e.id === memory.lifeEvent);
  const eColors = emotionColors[memory.emotion] || { text: '#94a3b8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.3)' };

  const related = MEMORIES.filter(m => m.id !== memory.id && (m.emotion === memory.emotion || m.era === memory.era)).slice(0, 3);

  // Simulate full memory text
  const fullText = [
    memory.excerpt,
    `The year was ${memory.year}. The world was different then — or perhaps it was the same, and only we have changed. This memory was recorded as part of the Global Archive Initiative, preserved so that those who travel beyond our solar system will carry with them the texture of what it meant to be alive on Earth.`,
    `${memory.author} contributed this memory in the final years of the collection period. It has been verified by ${Math.floor(memory.fragments / 100)} independent archivists and cross-referenced with ${memory.fragments.toLocaleString()} related memory fragments from the same era and region.`,
    `What strikes those who study this memory is not its uniqueness, but its universality. Across cultures, across centuries, across every language humanity has ever spoken, the same feelings recur: the weight of love, the ache of loss, the sudden shock of beauty in an ordinary moment.`,
    `This memory will travel with us. Long after the last human has left Earth's orbit, this record will persist — a small, luminous fragment of what we were.`,
  ];

  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to archive
        </button>
      </div>

      {/* Hero */}
      <div
        className="relative py-16 md:py-24 border-b border-slate-800"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${eColors.bg.replace('0.1', '0.08')} 0%, transparent 70%)` }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Era badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full border"
              style={{ color: era?.color, borderColor: era?.color + '40', backgroundColor: era?.color + '15' }}
            >
              {era?.label}
            </span>
            <span className="text-xs text-slate-600">{memory.year} CE</span>
            <span className="text-xs text-slate-600">·</span>
            <span className="text-xs text-slate-600">{memory.region}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl text-white font-light leading-tight mb-6">
            {memory.title}
          </h1>

          {/* Author */}
          <p className="text-slate-400 text-base mb-8">
            Recorded by <span className="text-white">{memory.author}</span>
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              {memory.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Layers className="w-4 h-4" />
              {memory.fragments.toLocaleString()} memory fragments
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Globe className="w-4 h-4" />
              {memory.region}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main text */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {fullText.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'font-display text-xl md:text-2xl text-slate-200 font-light italic'
                      : 'text-slate-400 text-base'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-slate-800">
              <p className="text-xs uppercase tracking-widest text-slate-600 mb-4">Tags</p>
              <div className="flex flex-wrap gap-2">
                {memory.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/explore?q=${tag}`}
                    className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 text-xs hover:border-slate-500 hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emotion */}
            <div
              className="p-5 rounded-xl border"
              style={{ borderColor: eColors.border, backgroundColor: eColors.bg }}
            >
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: eColors.text, opacity: 0.7 }}>
                Primary Emotion
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{emotion?.icon}</span>
                <span className="font-display text-2xl font-light" style={{ color: eColors.text }}>
                  {emotion?.label}
                </span>
              </div>
            </div>

            {/* Life Event */}
            <div className="p-5 rounded-xl border border-slate-800 bg-space-navy">
              <p className="text-xs uppercase tracking-widest text-slate-600 mb-2">Life Event</p>
              <p className="text-white text-sm">{lifeEvent?.label}</p>
            </div>

            {/* Archive info */}
            <div className="p-5 rounded-xl border border-slate-800 bg-space-navy space-y-3">
              <p className="text-xs uppercase tracking-widest text-slate-600 mb-3">Archive Record</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Memory ID</span>
                <span className="text-slate-300 font-mono text-xs">{memory.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Fragments</span>
                <span className="text-slate-300">{memory.fragments.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Era</span>
                <span className="text-slate-300">{era?.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Region</span>
                <span className="text-slate-300">{memory.region}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related memories */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800">
            <h2 className="font-display text-2xl text-white font-light mb-8">Related Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(m => {
                const relEra = ERAS.find(e => e.id === m.era);
                return (
                  <Link
                    key={m.id}
                    to={`/memory/${m.id}`}
                    className="group p-5 rounded-xl border border-slate-800 bg-space-navy hover:border-nebula-blue/40 transition-all duration-300"
                  >
                    <span
                      className="text-xs uppercase tracking-wider font-medium px-2 py-0.5 rounded-full border mb-3 inline-block"
                      style={{ color: relEra?.color, borderColor: relEra?.color + '40', backgroundColor: relEra?.color + '15' }}
                    >
                      {relEra?.label}
                    </span>
                    <h3 className="font-display text-base text-white font-light group-hover:text-nebula-blue transition-colors duration-300 leading-snug mb-2">
                      {m.title}
                    </h3>
                    <p className="text-slate-500 text-xs">{m.author} · {m.year}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
