import { useState } from 'react';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

const STEPS = ['Your Story', 'Details', 'Review'];

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-all duration-300 ${
                i < current
                  ? 'bg-aurora text-white'
                  : i === current
                  ? 'bg-aurora/20 border-2 border-aurora text-aurora-light'
                  : 'bg-stardust/30 border border-stardust text-ghost'
              }`}
            >
              {i < current ? '✓' : i + 1}
            </div>
            <p className={`text-xs mt-2 font-mono tracking-wide ${i === current ? 'text-aurora-light' : 'text-ghost'}`}>
              {step}
            </p>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`w-16 h-px mx-3 mb-5 transition-all duration-300 ${
                i < current ? 'bg-aurora' : 'bg-stardust/40'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Contribute() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    narrator: '',
    memory: '',
    year: '',
    era: '',
    emotion: '',
    event: '',
    region: '',
    consent: false,
  });

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-void pt-24 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-aurora/20 border border-aurora/40 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <span className="text-aurora-light text-3xl">✦</span>
          </div>
          <h1 className="font-cinzel text-3xl font-light text-starlight tracking-wide mb-4">
            Memory Preserved
          </h1>
          <p className="text-mist leading-relaxed mb-4">
            Your memory has been received and will be encoded into the archive.
            It will travel with humanity to the stars.
          </p>
          <p className="text-xs font-mono text-ghost mb-8">
            Archive ID: {`MEM-${Date.now().toString(36).toUpperCase()}`}
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm({ narrator: '', memory: '', year: '', era: '', emotion: '', event: '', region: '', consent: false }); }}
            className="px-8 py-3 rounded-full border border-aurora/40 text-aurora-light hover:bg-aurora/10 transition-all duration-200 text-sm"
          >
            Submit Another Memory
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-void pt-24 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono tracking-widest text-aurora-light uppercase mb-4">◈ Contribute</p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-light text-starlight tracking-wide mb-4">
            Add Your Memory
          </h1>
          <p className="text-mist leading-relaxed">
            Your story is part of humanity's story. Share a memory that will travel to the stars.
          </p>
        </div>

        <StepIndicator current={step} />

        <form onSubmit={handleSubmit}>
          {/* Step 0: Your Story */}
          {step === 0 && (
            <div className="bg-nebula border border-stardust/40 rounded-2xl p-8">
              <h2 className="font-cinzel text-xl font-light text-starlight mb-6 tracking-wide">Your Story</h2>

              <div className="mb-6">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.narrator}
                  onChange={(e) => update('narrator', e.target.value)}
                  placeholder="How you wish to be remembered"
                  className="w-full bg-cosmos border border-stardust text-starlight placeholder:text-ghost rounded-xl px-4 py-3 focus:border-aurora/60 focus:outline-none focus:ring-1 focus:ring-aurora/30 text-sm"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-2">
                  Your Memory
                </label>
                <textarea
                  value={form.memory}
                  onChange={(e) => update('memory', e.target.value)}
                  placeholder="Describe a memory you want preserved for eternity. It can be a moment, a feeling, a place, a person — anything that made you human."
                  rows={6}
                  className="w-full bg-cosmos border border-stardust text-starlight placeholder:text-ghost rounded-xl px-4 py-3 focus:border-aurora/60 focus:outline-none focus:ring-1 focus:ring-aurora/30 text-sm resize-none leading-relaxed"
                  required
                />
                <p className="text-xs text-ghost mt-2 font-mono">{form.memory.length} characters</p>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-2">
                  Approximate Year
                </label>
                <input
                  type="text"
                  value={form.year}
                  onChange={(e) => update('year', e.target.value)}
                  placeholder="e.g. 2045, 1987, 500 BCE"
                  className="w-full bg-cosmos border border-stardust text-starlight placeholder:text-ghost rounded-xl px-4 py-3 focus:border-aurora/60 focus:outline-none focus:ring-1 focus:ring-aurora/30 text-sm"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={!form.narrator || !form.memory}
                className="w-full py-3.5 rounded-full bg-aurora hover:bg-aurora/80 text-white font-medium tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 1: Details */}
          {step === 1 && (
            <div className="bg-nebula border border-stardust/40 rounded-2xl p-8">
              <h2 className="font-cinzel text-xl font-light text-starlight mb-6 tracking-wide">Classify Your Memory</h2>

              {/* Era */}
              <div className="mb-6">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-3">Era</label>
                <div className="flex flex-wrap gap-2">
                  {ERAS.map((era) => (
                    <button
                      key={era.id}
                      type="button"
                      onClick={() => update('era', era.id)}
                      className="px-3 py-1.5 rounded-full text-xs border transition-all duration-200"
                      style={
                        form.era === era.id
                          ? { backgroundColor: `${era.color}25`, color: era.color, borderColor: `${era.color}70` }
                          : { backgroundColor: 'rgba(26,45,82,0.2)', color: '#94a3b8', borderColor: 'rgba(26,45,82,0.5)' }
                      }
                    >
                      {era.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emotion */}
              <div className="mb-6">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-3">Primary Emotion</label>
                <div className="flex flex-wrap gap-2">
                  {EMOTIONS.map((em) => (
                    <button
                      key={em.id}
                      type="button"
                      onClick={() => update('emotion', em.id)}
                      className="px-3 py-1.5 rounded-full text-xs border transition-all duration-200 flex items-center gap-1.5"
                      style={
                        form.emotion === em.id
                          ? { backgroundColor: `${em.color}25`, color: em.color, borderColor: `${em.color}70` }
                          : { backgroundColor: 'rgba(26,45,82,0.2)', color: '#94a3b8', borderColor: 'rgba(26,45,82,0.5)' }
                      }
                    >
                      <span>{em.icon}</span>
                      {em.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Life event */}
              <div className="mb-6">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-3">Life Event</label>
                <div className="flex flex-wrap gap-2">
                  {LIFE_EVENTS.map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => update('event', ev.id)}
                      className="px-3 py-1.5 rounded-full text-xs border transition-all duration-200 flex items-center gap-1.5"
                      style={
                        form.event === ev.id
                          ? { backgroundColor: 'rgba(124,58,237,0.2)', color: '#a78bfa', borderColor: 'rgba(124,58,237,0.5)' }
                          : { backgroundColor: 'rgba(26,45,82,0.2)', color: '#94a3b8', borderColor: 'rgba(26,45,82,0.5)' }
                      }
                    >
                      <span>{ev.icon}</span>
                      {ev.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region */}
              <div className="mb-8">
                <label className="block text-xs font-mono tracking-widest text-ghost uppercase mb-3">Region</label>
                <div className="flex flex-wrap gap-2">
                  {REGIONS.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => update('region', r.id)}
                      className="px-3 py-1.5 rounded-full text-xs border transition-all duration-200"
                      style={
                        form.region === r.id
                          ? { backgroundColor: 'rgba(6,182,212,0.2)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.5)' }
                          : { backgroundColor: 'rgba(26,45,82,0.2)', color: '#94a3b8', borderColor: 'rgba(26,45,82,0.5)' }
                      }
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="flex-1 py-3.5 rounded-full border border-stardust text-mist hover:border-aurora/40 hover:text-aurora-light transition-all duration-200 text-sm"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3.5 rounded-full bg-aurora hover:bg-aurora/80 text-white font-medium tracking-wide transition-all duration-200"
                >
                  Review →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Review */}
          {step === 2 && (
            <div className="bg-nebula border border-stardust/40 rounded-2xl p-8">
              <h2 className="font-cinzel text-xl font-light text-starlight mb-6 tracking-wide">Review & Submit</h2>

              <div className="bg-cosmos rounded-xl p-6 mb-6 border border-stardust/30">
                <p className="text-xs font-mono tracking-widest text-ghost uppercase mb-3">Your Memory</p>
                <p className="text-starlight text-sm leading-relaxed italic mb-4">"{form.memory}"</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-ghost">
                  <span>— {form.narrator}</span>
                  {form.year && <span>· {form.year}</span>}
                  {form.region && <span>· {REGIONS.find(r => r.id === form.region)?.label}</span>}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {form.era && (
                  <span className="text-xs px-3 py-1 rounded-full bg-aurora/15 text-aurora-light border border-aurora/30">
                    {ERAS.find(e => e.id === form.era)?.label}
                  </span>
                )}
                {form.emotion && (
                  <span className="text-xs px-3 py-1 rounded-full bg-nova/15 text-nova-light border border-nova/30">
                    {EMOTIONS.find(e => e.id === form.emotion)?.icon} {EMOTIONS.find(e => e.id === form.emotion)?.label}
                  </span>
                )}
                {form.event && (
                  <span className="text-xs px-3 py-1 rounded-full bg-stardust/30 text-mist border border-stardust/40">
                    {LIFE_EVENTS.find(e => e.id === form.event)?.label}
                  </span>
                )}
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 mb-8 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-0.5 accent-aurora"
                />
                <span className="text-sm text-mist leading-relaxed">
                  I consent to this memory being preserved in the archive and transmitted with humanity
                  during the Great Migration. I understand it will be accessible to all future generations.
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3.5 rounded-full border border-stardust text-mist hover:border-aurora/40 hover:text-aurora-light transition-all duration-200 text-sm"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={!form.consent}
                  className="flex-1 py-3.5 rounded-full bg-aurora hover:bg-aurora/80 text-white font-medium tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
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
}
