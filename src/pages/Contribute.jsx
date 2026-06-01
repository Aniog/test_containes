import { useState } from 'react';
import { EMOTIONS, ERAS, LIFE_EVENTS, LOCATIONS } from '../data/memories';

export default function Contribute() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '',
    memory: '',
    contributor: '',
    location: '',
    era: '',
    emotion: '',
    lifeEvent: '',
    tags: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="bg-void min-h-screen pt-20 pb-16 px-6 flex items-center justify-center">
        <div className="text-center max-w-lg">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
            style={{ background: 'rgba(124,131,253,0.2)', boxShadow: '0 0 40px rgba(124,131,253,0.3)' }}
          >
            ✦
          </div>
          <h1 className="font-display text-3xl font-bold text-starlight mb-4">
            Memory Received
          </h1>
          <p className="text-mist-light text-base leading-relaxed mb-6">
            Thank you, <span className="text-aurora-glow">{form.contributor || 'contributor'}</span>.
            Your memory has been added to the constellation. It will be reviewed and
            woven into the archive within 48 hours.
          </p>
          <p className="text-mist text-sm mb-8">
            Memory ID: <span className="font-mono text-aurora">MNM-{Math.random().toString(36).slice(2, 10).toUpperCase()}</span>
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/explore"
              className="px-6 py-3 rounded-full bg-aurora text-white font-semibold text-sm hover:bg-aurora-glow transition-all"
            >
              Explore the Archive
            </a>
            <button
              onClick={() => { setSubmitted(false); setForm({ title: '', memory: '', contributor: '', location: '', era: '', emotion: '', lifeEvent: '', tags: '', consent: false }); setStep(1); }}
              className="px-6 py-3 rounded-full border border-white/10 text-mist-light text-sm hover:border-white/20 transition-all"
            >
              Submit Another
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-void min-h-screen pt-20 pb-16 px-6">
      <div className="nebula-blob" style={{ width: 500, height: 500, background: '#7c83fd', top: '10%', right: '-10%' }} />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-aurora font-mono text-sm tracking-widest uppercase mb-3">
            Contribute
          </p>
          <h1 className="font-display text-4xl font-bold text-starlight mb-3">
            Share Your Memory
          </h1>
          <p className="text-mist-light text-base max-w-md mx-auto">
            Every memory submitted becomes a permanent fragment in the constellation of human experience.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                style={{
                  background: step >= s ? '#7c83fd' : 'rgba(255,255,255,0.05)',
                  color: step >= s ? '#fff' : '#8892b0',
                  boxShadow: step === s ? '0 0 20px rgba(124,131,253,0.5)' : 'none',
                }}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className="w-12 h-0.5 transition-all"
                  style={{ background: step > s ? '#7c83fd' : 'rgba(255,255,255,0.1)' }}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className="rounded-3xl border border-white/8 p-8"
            style={{ background: 'rgba(13,21,48,0.7)' }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-starlight mb-2">
                  The Memory
                </h2>
                <div>
                  <label className="block text-mist-light text-sm mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Give your memory a title..."
                    value={form.title}
                    onChange={(e) => update('title', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/3 text-starlight placeholder-mist-dark text-sm focus:outline-none focus:border-aurora/50 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-mist-light text-sm mb-2">
                    Your Memory <span className="text-mist-dark">(in your own words)</span>
                  </label>
                  <textarea
                    placeholder="Write your memory here. There is no right or wrong way. Write as much or as little as you like..."
                    value={form.memory}
                    onChange={(e) => update('memory', e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/3 text-starlight placeholder-mist-dark text-sm focus:outline-none focus:border-aurora/50 transition-all resize-none"
                    required
                  />
                  <p className="text-mist-dark text-xs mt-1 text-right">{form.memory.length} characters</p>
                </div>
                <div>
                  <label className="block text-mist-light text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="How would you like to be credited?"
                    value={form.contributor}
                    onChange={(e) => update('contributor', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/3 text-starlight placeholder-mist-dark text-sm focus:outline-none focus:border-aurora/50 transition-all"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!form.title || !form.memory}
                  className="w-full py-4 rounded-xl bg-aurora text-white font-semibold transition-all hover:bg-aurora-glow disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-starlight mb-2">
                  Classify Your Memory
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-mist-light text-sm mb-2">Era</label>
                    <select
                      value={form.era}
                      onChange={(e) => update('era', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-cosmos text-starlight text-sm focus:outline-none focus:border-aurora/50"
                    >
                      <option value="">Select era...</option>
                      {ERAS.map((e) => <option key={e.id} value={e.id}>{e.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-mist-light text-sm mb-2">Location</label>
                    <select
                      value={form.location}
                      onChange={(e) => update('location', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-cosmos text-starlight text-sm focus:outline-none focus:border-aurora/50"
                    >
                      <option value="">Select region...</option>
                      {LOCATIONS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-mist-light text-sm mb-3">Primary Emotion</label>
                  <div className="grid grid-cols-4 gap-2">
                    {EMOTIONS.map((e) => (
                      <button
                        key={e.id}
                        type="button"
                        onClick={() => update('emotion', e.id)}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-xs"
                        style={{
                          borderColor: form.emotion === e.id ? e.color : 'rgba(255,255,255,0.08)',
                          background: form.emotion === e.id ? `${e.color}20` : 'rgba(255,255,255,0.02)',
                          color: form.emotion === e.id ? e.color : '#8892b0',
                        }}
                      >
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: e.color }}
                        />
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-mist-light text-sm mb-3">Life Event</label>
                  <div className="grid grid-cols-2 gap-2">
                    {LIFE_EVENTS.map((l) => (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => update('lifeEvent', l.id)}
                        className="flex items-center gap-2 p-3 rounded-xl border transition-all text-sm text-left"
                        style={{
                          borderColor: form.lifeEvent === l.id ? '#7c83fd' : 'rgba(255,255,255,0.08)',
                          background: form.lifeEvent === l.id ? 'rgba(124,131,253,0.15)' : 'rgba(255,255,255,0.02)',
                          color: form.lifeEvent === l.id ? '#a5aaff' : '#8892b0',
                        }}
                      >
                        <span>{l.icon}</span>
                        <span className="text-xs">{l.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-mist-light text-sm mb-2">Tags <span className="text-mist-dark">(comma separated)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. childhood, rain, grandmother, village"
                    value={form.tags}
                    onChange={(e) => update('tags', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/3 text-starlight placeholder-mist-dark text-sm focus:outline-none focus:border-aurora/50 transition-all"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-xl border border-white/10 text-mist-light font-semibold hover:border-white/20 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 rounded-xl bg-aurora text-white font-semibold hover:bg-aurora-glow transition-all"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-starlight mb-2">
                  Review & Submit
                </h2>

                <div className="rounded-2xl border border-white/8 p-5 space-y-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div>
                    <span className="text-mist text-xs">Title</span>
                    <p className="text-starlight text-sm font-medium">{form.title}</p>
                  </div>
                  <div>
                    <span className="text-mist text-xs">Memory</span>
                    <p className="text-mist-light text-sm line-clamp-3 italic">"{form.memory}"</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {form.contributor && <span className="text-xs text-mist">By: <span className="text-starlight">{form.contributor}</span></span>}
                    {form.era && <span className="text-xs text-mist">Era: <span className="text-aurora-glow">{ERAS.find(e => e.id === form.era)?.label}</span></span>}
                    {form.emotion && <span className="text-xs text-mist">Emotion: <span className="text-aurora-glow capitalize">{form.emotion}</span></span>}
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-aurora"
                  />
                  <span className="text-mist text-sm leading-relaxed">
                    I consent to this memory being preserved in the Mnemosyne Archive and
                    shared with future generations. I understand I may withdraw my memory
                    at any time before the archive is sealed in 2099.
                  </span>
                </label>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 rounded-xl border border-white/10 text-mist-light font-semibold hover:border-white/20 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={!form.consent}
                    className="flex-1 py-4 rounded-xl bg-aurora text-white font-semibold hover:bg-aurora-glow disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Submit Memory ✦
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
