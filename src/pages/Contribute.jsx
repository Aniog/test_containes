import { useState } from 'react';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

const STEPS = ['Your Story', 'Details', 'Review'];

const Contribute = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    story: '',
    contributor: '',
    location: '',
    year: '',
    era: '',
    emotion: '',
    lifeEvent: '',
    region: '',
    tags: '',
    consent: false,
  });

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Memory submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-void pt-16 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 rounded-full bg-aurora/10 border border-aurora/40 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 16l8 8 12-12" stroke="#4f8ef7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="font-cinzel font-bold text-3xl text-starlight mb-4">
            Memory Received
          </h1>
          <p className="text-mist mb-4 leading-relaxed">
            Your memory has been submitted to the archive. It will be reviewed,
            verified, and preserved — carried forward with humanity into the stars.
          </p>
          <p className="text-fog text-sm font-mono mb-10">
            Archive ID: MEM-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { setSubmitted(false); setStep(0); setForm({ title: '', story: '', contributor: '', location: '', year: '', era: '', emotion: '', lifeEvent: '', region: '', tags: '', consent: false }); }}
              className="border border-aurora/50 text-aurora px-6 py-3 rounded-lg hover:bg-aurora/10 transition-colors"
            >
              Submit Another
            </button>
            <a href="/explore" className="bg-aurora text-void font-semibold px-6 py-3 rounded-lg hover:bg-aurora-glow transition-colors text-center">
              Explore the Archive
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-void pt-16">
      <div className="bg-cosmos border-b border-stardust/30 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-memory text-xs font-mono tracking-widest uppercase mb-4">✧ Contribute</div>
          <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-starlight mb-4">
            Add Your Memory
          </h1>
          <p className="text-mist max-w-xl mx-auto">
            Your story is part of humanity's story. Share a memory that matters to you —
            it will be preserved and carried to the stars.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center gap-4 mb-12">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    i < step ? 'bg-aurora text-void' :
                    i === step ? 'bg-aurora/20 border border-aurora text-aurora' :
                    'bg-stardust/30 border border-stardust/50 text-fog'
                  }`}
                >
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-mono hidden sm:block ${i === step ? 'text-starlight' : 'text-fog'}`}>
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-12 h-px ${i < step ? 'bg-aurora' : 'bg-stardust/50'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">
                  Memory Title *
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => update('title', e.target.value)}
                  placeholder="Give your memory a title..."
                  className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">
                  Your Memory *
                </label>
                <textarea
                  value={form.story}
                  onChange={e => update('story', e.target.value)}
                  placeholder="Tell your story. There are no rules — write as much or as little as you need. This is your memory, in your words."
                  rows={10}
                  className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors resize-none leading-relaxed"
                  required
                />
                <div className="text-right text-fog text-xs font-mono mt-1">
                  {form.story.length} characters
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={!form.title || !form.story}
                  className="bg-aurora text-void font-semibold px-8 py-3 rounded-lg hover:bg-aurora-glow transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    value={form.contributor}
                    onChange={e => update('contributor', e.target.value)}
                    placeholder="How should we credit you?"
                    className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Year</label>
                  <input
                    type="number"
                    value={form.year}
                    onChange={e => update('year', e.target.value)}
                    placeholder="When did this happen?"
                    min="1" max="2100"
                    className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Location</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={e => update('location', e.target.value)}
                  placeholder="City, Country or region..."
                  className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Era</label>
                  <select
                    value={form.era}
                    onChange={e => update('era', e.target.value)}
                    className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  >
                    <option value="" className="bg-nebula">Select era...</option>
                    {ERAS.map(e => <option key={e.id} value={e.id} className="bg-nebula">{e.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Emotion</label>
                  <select
                    value={form.emotion}
                    onChange={e => update('emotion', e.target.value)}
                    className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  >
                    <option value="" className="bg-nebula">Select emotion...</option>
                    {EMOTIONS.map(e => <option key={e.id} value={e.id} className="bg-nebula">{e.icon} {e.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Life Event</label>
                  <select
                    value={form.lifeEvent}
                    onChange={e => update('lifeEvent', e.target.value)}
                    className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  >
                    <option value="" className="bg-nebula">Select event type...</option>
                    {LIFE_EVENTS.map(e => <option key={e.id} value={e.id} className="bg-nebula">{e.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Region</label>
                  <select
                    value={form.region}
                    onChange={e => update('region', e.target.value)}
                    className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                  >
                    <option value="" className="bg-nebula">Select region...</option>
                    {REGIONS.map(r => <option key={r.id} value={r.id} className="bg-nebula">{r.label}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-mist text-sm font-mono mb-2 uppercase tracking-wider">Tags</label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={e => update('tags', e.target.value)}
                  placeholder="grandmother, harvest, song, farewell..."
                  className="w-full bg-nebula border border-stardust/50 rounded-xl px-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors"
                />
                <p className="text-fog text-xs font-mono mt-1">Separate tags with commas</p>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(0)} className="border border-stardust/50 text-mist px-6 py-3 rounded-lg hover:border-aurora/30 transition-colors">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(2)} className="bg-aurora text-void font-semibold px-8 py-3 rounded-lg hover:bg-aurora-glow transition-colors">
                  Review →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-nebula border border-stardust/50 rounded-2xl p-8">
                <h3 className="font-cinzel text-starlight font-semibold text-xl mb-6">Review Your Memory</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Title</div>
                    <div className="text-starlight font-cinzel">{form.title}</div>
                  </div>
                  <div>
                    <div className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Story</div>
                    <div className="text-mist text-sm leading-relaxed line-clamp-3">{form.story}</div>
                  </div>
                  {form.contributor && (
                    <div>
                      <div className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Contributor</div>
                      <div className="text-mist text-sm">{form.contributor}</div>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm">
                    {form.location && <div><span className="text-fog font-mono text-xs">Location: </span><span className="text-mist">{form.location}</span></div>}
                    {form.year && <div><span className="text-fog font-mono text-xs">Year: </span><span className="text-mist">{form.year} CE</span></div>}
                  </div>
                </div>
              </div>

              <div className="bg-nebula/50 border border-stardust/30 rounded-xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={e => update('consent', e.target.checked)}
                    className="mt-1 accent-aurora"
                  />
                  <span className="text-mist text-sm leading-relaxed">
                    I consent to this memory being preserved in the Memory Archive and
                    transmitted with humanity's migration fleet. I understand this memory
                    will be accessible to future generations across the stars.
                  </span>
                </label>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="border border-stardust/50 text-mist px-6 py-3 rounded-lg hover:border-aurora/30 transition-colors">
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={!form.consent}
                  className="bg-aurora text-void font-semibold px-8 py-3 rounded-lg hover:bg-aurora-glow transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Preserve Memory ✦
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contribute;
