import { useState } from 'react';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '@/data/memories';

const EMOTION_COLORS = {
  joy: '#f5c842', grief: '#8b5cf6', wonder: '#4f8ef7', love: '#e879a0',
  fear: '#ef4444', hope: '#2dd4bf', nostalgia: '#fb923c', peace: '#86efac',
};

const FORMATS = ['Neural Imprint', 'Direct Upload', 'Reconstructed Memory', 'Written Testimony', 'Audio Recording'];

export default function Contribute() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '', excerpt: '', era: '', emotion: '', lifeEvent: '', region: '',
    year: '', location: '', contributor: '', format: '', tags: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Memory submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'radial-gradient(circle, #4f8ef7 0%, #8b5cf6 100%)' }}>
            <span className="text-white text-3xl">✦</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Your Memory Has Been Received
          </h2>
          <p className="font-sans text-slate-400 mb-6 leading-relaxed">
            Thank you for contributing to the Archive. Your memory will be reviewed
            and added to the constellation. It will outlast the stars.
          </p>
          <div className="bg-space-navy border border-slate-800 rounded-xl p-4 mb-8">
            <p className="font-sans text-sm text-slate-500">Memory title</p>
            <p className="font-serif text-lg text-white mt-1">"{form.title}"</p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setForm({ title: '', excerpt: '', era: '', emotion: '', lifeEvent: '', region: '', year: '', location: '', contributor: '', format: '', tags: '' }); }}
            className="font-sans text-sm bg-nebula-blue hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-colors"
          >
            Contribute Another Memory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-black pt-20">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-memory-rose" />
            <span className="font-sans text-xs text-memory-rose uppercase tracking-widest">Contribute</span>
            <span className="w-8 h-px bg-memory-rose" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Add Your Memory
          </h1>
          <p className="font-sans text-slate-400 text-base">
            Every human experience deserves to be preserved. Share yours with the Archive.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-sm font-semibold transition-all duration-300 ${
                  s === step
                    ? 'bg-nebula-blue text-white'
                    : s < step
                    ? 'bg-nebula-blue/30 text-nebula-blue border border-nebula-blue/50'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {s < step ? '✓' : s}
              </div>
              {s < 3 && <div className={`w-12 h-px ${s < step ? 'bg-nebula-blue/50' : 'bg-slate-700'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: The Memory */}
          {step === 1 && (
            <div className="bg-space-navy border border-slate-800 rounded-2xl p-6 space-y-5">
              <h2 className="font-serif text-xl font-semibold text-white mb-2">The Memory</h2>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-2">Memory Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => update('title', e.target.value)}
                  placeholder="Give your memory a title..."
                  className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-2">Memory Excerpt *</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => update('excerpt', e.target.value)}
                  placeholder="Describe your memory in your own words. What did you see, feel, smell? What made it unforgettable?"
                  rows={5}
                  className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-2">Memory Format</label>
                <select
                  value={form.format}
                  onChange={(e) => update('format', e.target.value)}
                  className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors"
                >
                  <option value="">Select format...</option>
                  {FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!form.title || !form.excerpt}
                className="w-full font-sans text-sm bg-nebula-blue hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white py-3 rounded-xl transition-colors"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2: Classification */}
          {step === 2 && (
            <div className="bg-space-navy border border-slate-800 rounded-2xl p-6 space-y-5">
              <h2 className="font-serif text-xl font-semibold text-white mb-2">Classify Your Memory</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-sm text-slate-400 mb-2">Era</label>
                  <select
                    value={form.era}
                    onChange={(e) => update('era', e.target.value)}
                    className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors"
                  >
                    <option value="">Select era...</option>
                    {ERAS.map((e) => <option key={e.id} value={e.id}>{e.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-sm text-slate-400 mb-2">Region</label>
                  <select
                    value={form.region}
                    onChange={(e) => update('region', e.target.value)}
                    className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors"
                  >
                    <option value="">Select region...</option>
                    {REGIONS.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-3">Primary Emotion</label>
                <div className="grid grid-cols-4 gap-2">
                  {EMOTIONS.map((emotion) => {
                    const color = EMOTION_COLORS[emotion.id] || '#4f8ef7';
                    const isSelected = form.emotion === emotion.id;
                    return (
                      <button
                        key={emotion.id}
                        type="button"
                        onClick={() => update('emotion', emotion.id)}
                        className="flex flex-col items-center gap-1 p-3 rounded-xl border transition-all duration-200"
                        style={isSelected
                          ? { borderColor: `${color}60`, backgroundColor: `${color}15`, color }
                          : { borderColor: 'rgba(100,116,139,0.3)', color: '#94a3b8' }
                        }
                      >
                        <span className="text-lg">{emotion.icon}</span>
                        <span className="font-sans text-xs">{emotion.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-2">Life Event</label>
                <div className="flex flex-wrap gap-2">
                  {LIFE_EVENTS.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => update('lifeEvent', event.id)}
                      className={`font-sans text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                        form.lifeEvent === event.id
                          ? 'bg-nebula-blue/20 border-nebula-blue/50 text-nebula-blue'
                          : 'border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      {event.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 font-sans text-sm border border-slate-700 hover:border-slate-500 text-slate-400 py-3 rounded-xl transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 font-sans text-sm bg-nebula-blue hover:bg-blue-500 text-white py-3 rounded-xl transition-colors"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div className="bg-space-navy border border-slate-800 rounded-2xl p-6 space-y-5">
              <h2 className="font-serif text-xl font-semibold text-white mb-2">Final Details</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-sm text-slate-400 mb-2">Year / Period</label>
                  <input
                    type="text"
                    value={form.year}
                    onChange={(e) => update('year', e.target.value)}
                    placeholder="e.g. 1968 CE"
                    className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-slate-400 mb-2">Location</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => update('location', e.target.value)}
                    placeholder="City, Country"
                    className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-2">Your Name (or Anonymous)</label>
                <input
                  type="text"
                  value={form.contributor}
                  onChange={(e) => update('contributor', e.target.value)}
                  placeholder="How should we credit you?"
                  className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-sm text-slate-400 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => update('tags', e.target.value)}
                  placeholder="family, childhood, ocean, music..."
                  className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 outline-none transition-colors"
                />
              </div>

              <div className="bg-space-midnight border border-slate-800 rounded-xl p-4">
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  By submitting, you grant the Mnemo Archive a perpetual, irrevocable license
                  to preserve and display this memory as part of humanity's collective record.
                  Your memory will travel with us to the stars.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 font-sans text-sm border border-slate-700 hover:border-slate-500 text-slate-400 py-3 rounded-xl transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 font-sans text-sm font-semibold py-3 rounded-xl transition-all duration-300 text-white"
                  style={{ background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)', boxShadow: '0 0 20px rgba(79,142,247,0.3)' }}
                >
                  Preserve Memory ✦
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
