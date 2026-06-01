import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

export default function Submit() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    memory: '',
    contributor: '',
    location: '',
    year: '',
    era: '',
    emotion: '',
    lifeEvent: '',
    region: '',
  });

  const handleChange = (key, value) => setForm(f => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Memory submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6 animate-float">✦</div>
          <h2 className="font-space text-3xl font-bold text-star-white mb-4">
            Memory Received
          </h2>
          <p className="text-star-dim text-base leading-relaxed mb-8">
            Your memory has been submitted to the archive. Our team will review it and, once approved, it will join the 4.7 million stories traveling to the stars.
          </p>
          <div className="bg-space-navy border border-cosmic-blue/30 rounded-xl p-4 mb-8 text-left">
            <div className="text-xs font-mono text-star-dim mb-1">Submission reference</div>
            <div className="text-cosmic-blue font-mono text-sm">
              MA-PENDING-{Date.now().toString(36).toUpperCase()}
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => { setSubmitted(false); setForm({ title: '', memory: '', contributor: '', location: '', year: '', era: '', emotion: '', lifeEvent: '', region: '' }); }}
              className="border border-white/20 text-star-dim hover:text-star-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Submit Another
            </button>
            <button
              onClick={() => navigate('/explore')}
              className="bg-cosmic-blue text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-cosmic-blue/90 transition-colors"
            >
              Explore the Archive
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-black pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cosmic-violet text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-cosmic-violet/50" />
            Contribute to the Archive
          </div>
          <h1 className="font-space text-3xl md:text-4xl font-bold text-star-white mb-3">
            Share Your Memory
          </h1>
          <p className="text-star-dim text-base leading-relaxed">
            Every memory matters. Whether it happened yesterday or a thousand years ago, your story deserves to travel to the stars.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Memory title */}
          <Field label="Memory Title" required>
            <input
              type="text"
              value={form.title}
              onChange={e => handleChange('title', e.target.value)}
              placeholder="Give your memory a title..."
              required
              className="w-full bg-space-midnight border border-white/10 rounded-xl px-4 py-3 text-star-white placeholder-star-dim/40 focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body text-sm"
            />
          </Field>

          {/* Memory text */}
          <Field label="Your Memory" required hint="Write in first person. Be specific — the details are what make memories live.">
            <textarea
              value={form.memory}
              onChange={e => handleChange('memory', e.target.value)}
              placeholder="Describe your memory in as much detail as you can remember..."
              required
              rows={8}
              className="w-full bg-space-midnight border border-white/10 rounded-xl px-4 py-3 text-star-white placeholder-star-dim/40 focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body text-sm resize-none leading-relaxed"
            />
          </Field>

          {/* Contributor and location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Your Name">
              <input
                type="text"
                value={form.contributor}
                onChange={e => handleChange('contributor', e.target.value)}
                placeholder="Name or anonymous"
                className="w-full bg-space-midnight border border-white/10 rounded-xl px-4 py-3 text-star-white placeholder-star-dim/40 focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body text-sm"
              />
            </Field>
            <Field label="Location">
              <input
                type="text"
                value={form.location}
                onChange={e => handleChange('location', e.target.value)}
                placeholder="City, Country"
                className="w-full bg-space-midnight border border-white/10 rounded-xl px-4 py-3 text-star-white placeholder-star-dim/40 focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body text-sm"
              />
            </Field>
          </div>

          {/* Year and region */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Year">
              <input
                type="number"
                value={form.year}
                onChange={e => handleChange('year', e.target.value)}
                placeholder="e.g. 1987"
                className="w-full bg-space-midnight border border-white/10 rounded-xl px-4 py-3 text-star-white placeholder-star-dim/40 focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body text-sm"
              />
            </Field>
            <Field label="Region">
              <select
                value={form.region}
                onChange={e => handleChange('region', e.target.value)}
                className="w-full bg-space-midnight border border-white/10 rounded-xl px-4 py-3 text-star-white focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body text-sm"
              >
                <option value="" className="bg-space-midnight">Select region...</option>
                {REGIONS.map(r => (
                  <option key={r} value={r} className="bg-space-midnight">{r}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Era */}
          <Field label="Era">
            <div className="flex flex-wrap gap-2">
              {ERAS.map(era => (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => handleChange('era', form.era === era.id ? '' : era.id)}
                  className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                  style={{
                    color: form.era === era.id ? '#050810' : era.color,
                    borderColor: form.era === era.id ? era.color : `${era.color}44`,
                    backgroundColor: form.era === era.id ? era.color : `${era.color}15`,
                    fontWeight: form.era === era.id ? 600 : 400,
                  }}
                >
                  {era.label}
                </button>
              ))}
            </div>
          </Field>

          {/* Emotion */}
          <Field label="Primary Emotion">
            <div className="flex flex-wrap gap-2">
              {EMOTIONS.map(emotion => (
                <button
                  key={emotion.id}
                  type="button"
                  onClick={() => handleChange('emotion', form.emotion === emotion.id ? '' : emotion.id)}
                  className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                  style={{
                    color: form.emotion === emotion.id ? '#050810' : emotion.color,
                    borderColor: form.emotion === emotion.id ? emotion.color : `${emotion.color}44`,
                    backgroundColor: form.emotion === emotion.id ? emotion.color : `${emotion.color}15`,
                    fontWeight: form.emotion === emotion.id ? 600 : 400,
                  }}
                >
                  {emotion.icon} {emotion.label}
                </button>
              ))}
            </div>
          </Field>

          {/* Life event */}
          <Field label="Life Event">
            <div className="flex flex-wrap gap-2">
              {LIFE_EVENTS.map(event => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => handleChange('lifeEvent', form.lifeEvent === event.id ? '' : event.id)}
                  className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                  style={{
                    color: form.lifeEvent === event.id ? '#050810' : '#ffb347',
                    borderColor: form.lifeEvent === event.id ? '#ffb347' : '#ffb34744',
                    backgroundColor: form.lifeEvent === event.id ? '#ffb347' : '#ffb34715',
                    fontWeight: form.lifeEvent === event.id ? 600 : 400,
                  }}
                >
                  {event.icon} {event.label}
                </button>
              ))}
            </div>
          </Field>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-cosmic-blue hover:bg-cosmic-blue/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(74,158,255,0.3)] hover:shadow-[0_0_50px_rgba(74,158,255,0.5)] font-space text-base"
            >
              Submit Memory to the Archive
            </button>
            <p className="text-star-dim text-xs text-center mt-3 font-mono">
              All submissions are reviewed before archiving. Your memory will travel to the stars.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children, required, hint }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-star-white mb-2 font-space">
        {label}
        {required && <span className="text-cosmic-rose ml-1">*</span>}
      </label>
      {hint && <p className="text-star-dim text-xs mb-2 font-body">{hint}</p>}
      {children}
    </div>
  );
}
