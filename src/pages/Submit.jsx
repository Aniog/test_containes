import { useState } from 'react';
import { ERAS, EMOTIONS, LIFE_EVENTS, LOCATIONS } from '@/data/memories';
import { CheckCircle, Upload } from 'lucide-react';

const INITIAL = {
  title: '',
  excerpt: '',
  era: '',
  emotion: '',
  lifeEvent: '',
  location: '',
  year: '',
  contributor: '',
  tags: '',
};

export default function Submit() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.excerpt.trim()) e.excerpt = 'Memory text is required';
    if (!form.era) e.era = 'Please select an era';
    if (!form.emotion) e.emotion = 'Please select an emotion';
    if (!form.contributor.trim()) e.contributor = 'Your name is required';
    return e;
  };

  const handleChange = (key, value) => {
    setForm(f => ({ ...f, [key]: value }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log('Memory submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cosmos-950 pt-24 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-memory-teal/20 border border-memory-teal/30 mb-8">
            <CheckCircle className="w-10 h-10 text-memory-teal" />
          </div>
          <h1 className="font-cinzel text-3xl md:text-4xl text-text-primary font-bold mb-4">
            Memory Received
          </h1>
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            Thank you, <span className="text-text-primary font-semibold">{form.contributor}</span>.
            Your memory has been added to the Archive and will travel with us to the stars.
          </p>
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-8">
            Archive ID: {`MEM-${Date.now().toString(36).toUpperCase()}`}
          </p>
          <button
            onClick={() => { setForm(INITIAL); setSubmitted(false); }}
            className="border border-nebula-500/40 text-nebula-300 rounded-full px-6 py-3 font-medium hover:border-nebula-400 transition-colors"
          >
            Submit Another Memory
          </button>
        </div>
      </div>
    );
  }

  const fieldClass = (key) =>
    `w-full bg-cosmos-800/60 border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted text-sm focus:outline-none transition-all ${
      errors[key]
        ? 'border-memory-pink/60 focus:border-memory-pink'
        : 'border-nebula-500/20 focus:border-nebula-400/50 focus:bg-cosmos-700/60'
    }`;

  const labelClass = 'block font-mono text-xs text-text-muted uppercase tracking-widest mb-2';

  return (
    <div className="min-h-screen bg-cosmos-950 pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Upload className="w-5 h-5 text-nebula-400" />
            <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest">Submit a Memory</p>
          </div>
          <h1 className="font-cinzel text-4xl text-text-primary font-bold mb-3">
            Share Your Story
          </h1>
          <p className="text-text-secondary">
            Your memory will be preserved in the Archive Crystal and carried aboard the colony ships.
            It will be one of the first things our descendants read about Earth.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className={labelClass}>Memory Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => handleChange('title', e.target.value)}
              placeholder="Give your memory a name..."
              className={fieldClass('title')}
            />
            {errors.title && <p className="text-memory-pink text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Excerpt */}
          <div>
            <label className={labelClass}>Your Memory *</label>
            <textarea
              value={form.excerpt}
              onChange={e => handleChange('excerpt', e.target.value)}
              placeholder="Describe your memory in your own words. There is no right or wrong way to remember..."
              rows={6}
              className={`${fieldClass('excerpt')} resize-none`}
            />
            {errors.excerpt && <p className="text-memory-pink text-xs mt-1">{errors.excerpt}</p>}
          </div>

          {/* Era + Emotion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Era *</label>
              <select
                value={form.era}
                onChange={e => handleChange('era', e.target.value)}
                className={`${fieldClass('era')} cursor-pointer`}
              >
                <option value="">Select era...</option>
                {ERAS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
              {errors.era && <p className="text-memory-pink text-xs mt-1">{errors.era}</p>}
            </div>
            <div>
              <label className={labelClass}>Primary Emotion *</label>
              <select
                value={form.emotion}
                onChange={e => handleChange('emotion', e.target.value)}
                className={`${fieldClass('emotion')} cursor-pointer`}
              >
                <option value="">Select emotion...</option>
                {EMOTIONS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
              {errors.emotion && <p className="text-memory-pink text-xs mt-1">{errors.emotion}</p>}
            </div>
          </div>

          {/* Life Event + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Life Event</label>
              <select
                value={form.lifeEvent}
                onChange={e => handleChange('lifeEvent', e.target.value)}
                className={`${fieldClass('lifeEvent')} cursor-pointer`}
              >
                <option value="">Select event...</option>
                {LIFE_EVENTS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Location</label>
              <select
                value={form.location}
                onChange={e => handleChange('location', e.target.value)}
                className={`${fieldClass('location')} cursor-pointer`}
              >
                <option value="">Select region...</option>
                {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          {/* Year + Contributor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Year (approximate)</label>
              <input
                type="number"
                value={form.year}
                onChange={e => handleChange('year', e.target.value)}
                placeholder="e.g. 2019"
                min="1" max="2047"
                className={fieldClass('year')}
              />
            </div>
            <div>
              <label className={labelClass}>Your Name *</label>
              <input
                type="text"
                value={form.contributor}
                onChange={e => handleChange('contributor', e.target.value)}
                placeholder="How you'd like to be remembered..."
                className={fieldClass('contributor')}
              />
              {errors.contributor && <p className="text-memory-pink text-xs mt-1">{errors.contributor}</p>}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className={labelClass}>Tags (comma-separated)</label>
            <input
              type="text"
              value={form.tags}
              onChange={e => handleChange('tags', e.target.value)}
              placeholder="family, ocean, childhood, music..."
              className={fieldClass('tags')}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-nebula-500 hover:bg-nebula-400 text-white rounded-xl py-4 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-nebula-500/30"
          >
            Preserve This Memory
          </button>

          <p className="text-center font-mono text-xs text-text-muted">
            By submitting, you consent to your memory being preserved in the Archive Crystal
            and carried aboard the colony ships.
          </p>
        </form>
      </div>
    </div>
  );
}
