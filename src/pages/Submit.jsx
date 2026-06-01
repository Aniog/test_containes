import { useState } from 'react';
import { EMOTIONS, ERAS, LIFE_EVENTS, REGIONS } from '../data/memories';

const FormField = ({ label, children, hint }) => (
  <div>
    <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">{label}</label>
    {children}
    {hint && <p className="text-xs text-slate-600 mt-1.5">{hint}</p>}
  </div>
);

const Submit = () => {
  const [form, setForm] = useState({
    title: '',
    memory: '',
    emotion: '',
    era: '',
    lifeEvent: '',
    region: '',
    contributor: '',
    year: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setForm(f => ({ ...f, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050810] pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="text-5xl mb-6 animate-pulse-glow" style={{ color: '#06b6d4' }}>✦</div>
          <h2 className="font-cinzel text-3xl font-bold text-slate-100 mb-4">
            Memory Received
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Your memory has been added to the constellation. It will be encoded, verified,
            and woven into the Archive within 24 hours. Thank you for contributing to
            humanity's most important project.
          </p>
          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400 font-mono mb-8">
            Memory ID: MEM-{Date.now().toString(36).toUpperCase()}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
          >
            Submit Another Memory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050810] pt-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-16">
        <p className="text-xs text-cyan-400 uppercase tracking-widest mb-3">Contribute</p>
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          Submit a Memory
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-10">
          Every memory matters. Share a moment — extraordinary or ordinary — and it will
          be preserved for eternity in the Archive.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField label="Memory Title" hint="A short, evocative title for your memory">
            <input
              type="text"
              value={form.title}
              onChange={e => handleChange('title', e.target.value)}
              placeholder="e.g. The Last Summer Before Everything Changed"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </FormField>

          <FormField label="Your Memory" hint="Write your memory in as much or as little detail as you wish">
            <textarea
              value={form.memory}
              onChange={e => handleChange('memory', e.target.value)}
              placeholder="Describe your memory..."
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
            />
          </FormField>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField label="Primary Emotion">
              <select
                value={form.emotion}
                onChange={e => handleChange('emotion', e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              >
                <option value="">Select emotion</option>
                {EMOTIONS.map(e => (
                  <option key={e.id} value={e.id}>{e.icon} {e.label}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Historical Era">
              <select
                value={form.era}
                onChange={e => handleChange('era', e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              >
                <option value="">Select era</option>
                {ERAS.map(e => (
                  <option key={e.id} value={e.id}>{e.label}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Life Event">
              <select
                value={form.lifeEvent}
                onChange={e => handleChange('lifeEvent', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              >
                <option value="">Select event type</option>
                {LIFE_EVENTS.map(e => (
                  <option key={e.id} value={e.id}>{e.label}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Region">
              <select
                value={form.region}
                onChange={e => handleChange('region', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              >
                <option value="">Select region</option>
                {REGIONS.map(r => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </FormField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField label="Your Name (or Alias)" hint="How you'd like to be credited">
              <input
                type="text"
                value={form.contributor}
                onChange={e => handleChange('contributor', e.target.value)}
                placeholder="e.g. Amara K. or Anonymous"
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </FormField>

            <FormField label="Approximate Year" hint="When did this memory occur?">
              <input
                type="text"
                value={form.year}
                onChange={e => handleChange('year', e.target.value)}
                placeholder="e.g. 1987 or ~500 BCE"
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </FormField>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 text-black font-semibold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Preserve This Memory
            </button>
            <p className="text-xs text-slate-600 text-center mt-3">
              By submitting, you agree to have your memory preserved in the Archive indefinitely.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
