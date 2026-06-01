import { useState } from 'react';
import { Link } from 'react-router-dom';

const EMOTION_OPTIONS = ['joy', 'love', 'wonder', 'grief', 'courage', 'nostalgia', 'hope', 'fear'];
const ERA_OPTIONS = ['ancient', 'medieval', 'renaissance', 'industrial', 'modern', 'digital'];
const EVENT_OPTIONS = ['birth', 'love', 'family', 'loss', 'achievement', 'journey', 'discovery', 'celebration'];

export default function Submit() {
  const [form, setForm] = useState({
    title: '',
    story: '',
    author: '',
    location: '',
    year: '',
    emotion: '',
    era: '',
    lifeEvent: '',
    tags: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-space-black pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="text-6xl mb-6 animate-float">✦</div>
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">
            Your Memory Has Been Preserved
          </h2>
          <p className="text-slate-400 mb-2 leading-relaxed">
            Thank you, <span className="text-white">{form.author || 'contributor'}</span>.
            Your story has joined 142 million others in the Archive.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            When humanity reaches the stars, your memory travels with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setSubmitted(false); setForm({ title: '', story: '', author: '', location: '', year: '', emotion: '', era: '', lifeEvent: '', tags: '' }); setStep(1); }}
              className="bg-nebula-blue hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Add Another Memory
            </button>
            <Link
              to="/explore"
              className="bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-center"
            >
              Explore the Archive
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Header */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-2xl mx-auto relative text-center">
          <p className="text-cosmic-violet text-xs font-medium tracking-widest uppercase mb-3">Contribute</p>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Preserve Your Memory
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Every human experience deserves to be remembered. Share a moment that shaped you —
            a memory that should travel among the stars.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <button
                  onClick={() => setStep(s)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                    step === s
                      ? 'bg-nebula-blue text-white'
                      : step > s
                      ? 'bg-aurora-teal/20 text-aurora-teal border border-aurora-teal/40'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}
                >
                  {step > s ? '✓' : s}
                </button>
                <span className={`text-sm ${step === s ? 'text-white' : 'text-slate-500'}`}>
                  {s === 1 ? 'Your Story' : s === 2 ? 'Context' : 'Details'}
                </span>
                {s < 3 && <div className={`flex-1 h-px w-8 ${step > s ? 'bg-aurora-teal/40' : 'bg-slate-700'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Memory Title *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => update('title', e.target.value)}
                    placeholder="Give your memory a name..."
                    className="w-full bg-space-navy/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Story *</label>
                  <textarea
                    value={form.story}
                    onChange={(e) => update('story', e.target.value)}
                    placeholder="Tell your story in your own words. There is no right or wrong way to remember..."
                    rows={8}
                    className="w-full bg-space-navy/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors text-sm resize-none leading-relaxed"
                    required
                  />
                  <p className="text-xs text-slate-600 mt-1.5">{form.story.length} characters</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!form.title || !form.story}
                  className="w-full bg-nebula-blue hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  Continue →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={form.author}
                      onChange={(e) => update('author', e.target.value)}
                      placeholder="Your name or anonymous"
                      className="w-full bg-space-navy/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Year</label>
                    <input
                      type="number"
                      value={form.year}
                      onChange={(e) => update('year', e.target.value)}
                      placeholder="e.g. 1987"
                      min="-3000"
                      max="2050"
                      className="w-full bg-space-navy/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => update('location', e.target.value)}
                    placeholder="City, Country or region..."
                    className="w-full bg-space-navy/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Primary Emotion</label>
                  <div className="grid grid-cols-4 gap-2">
                    {EMOTION_OPTIONS.map((e) => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => update('emotion', e)}
                        className={`py-2 px-3 rounded-lg text-xs font-medium capitalize transition-all duration-200 ${
                          form.emotion === e
                            ? 'bg-nebula-blue/20 text-nebula-blue border border-nebula-blue/40'
                            : 'bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:text-white'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-transparent border border-slate-700 text-slate-400 hover:text-white font-semibold py-3 rounded-xl transition-all duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-nebula-blue hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-200"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Historical Era</label>
                  <div className="grid grid-cols-3 gap-2">
                    {ERA_OPTIONS.map((e) => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => update('era', e)}
                        className={`py-2 px-3 rounded-lg text-xs font-medium capitalize transition-all duration-200 ${
                          form.era === e
                            ? 'bg-cosmic-violet/20 text-cosmic-violet border border-cosmic-violet/40'
                            : 'bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:text-white'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Life Event</label>
                  <div className="grid grid-cols-4 gap-2">
                    {EVENT_OPTIONS.map((e) => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => update('lifeEvent', e)}
                        className={`py-2 px-3 rounded-lg text-xs font-medium capitalize transition-all duration-200 ${
                          form.lifeEvent === e
                            ? 'bg-aurora-teal/20 text-aurora-teal border border-aurora-teal/40'
                            : 'bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:text-white'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tags</label>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => update('tags', e.target.value)}
                    placeholder="harvest, grandmother, tradition (comma separated)"
                    className="w-full bg-space-navy/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors text-sm"
                  />
                </div>
                <div className="bg-space-indigo/40 border border-slate-700/40 rounded-xl p-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    By submitting, you grant the Memory Archive Initiative the right to preserve and display
                    your memory as part of humanity's collective story. Your contribution will travel with us
                    to the stars.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 bg-transparent border border-slate-700 text-slate-400 hover:text-white font-semibold py-3 rounded-xl transition-all duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-nebula-blue to-cosmic-violet hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-nebula-blue/20"
                  >
                    Preserve Memory ✦
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
