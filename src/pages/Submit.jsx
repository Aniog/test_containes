import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Upload, Star } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

const EMPTY_FORM = {
  title: '',
  excerpt: '',
  author: '',
  year: '',
  era: '',
  region: '',
  emotion: '',
  lifeEvent: '',
  location: '',
  tags: '',
};

export default function Submit() {
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required';
    if (!form.excerpt.trim()) errs.excerpt = 'Memory text is required';
    if (form.excerpt.trim().length < 50) errs.excerpt = 'Please write at least 50 characters';
    if (!form.author.trim()) errs.author = 'Your name is required';
    if (!form.year) errs.year = 'Year is required';
    if (!form.era) errs.era = 'Please select an era';
    if (!form.region) errs.region = 'Please select a region';
    if (!form.emotion) errs.emotion = 'Please select an emotion';
    if (!form.location.trim()) errs.location = 'Location is required';
    return errs;
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
      <div className="min-h-screen bg-space-black pt-16 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-aurora-teal/15 border border-aurora-teal/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-aurora-teal" />
          </div>
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">
            Memory Received
          </h2>
          <p className="font-inter text-slate-300 leading-relaxed mb-2">
            Thank you, <strong className="text-white">{form.author}</strong>. Your memory has been submitted to the archive.
          </p>
          <p className="font-inter text-slate-500 text-sm mb-8">
            Our archivists will review and preserve your submission. It will travel with the colony ships and be accessible to future generations among the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
              className="px-6 py-3 border border-slate-700 text-slate-300 rounded-full hover:border-nebula-blue hover:text-nebula-blue transition-colors font-inter text-sm"
            >
              Submit Another Memory
            </button>
            <button
              onClick={() => navigate('/explore')}
              className="px-6 py-3 bg-nebula-blue text-white rounded-full hover:bg-blue-500 transition-colors font-inter text-sm font-semibold"
            >
              Explore the Archive
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Header */}
      <section className="py-16 px-4 md:px-8 bg-space-navy border-b border-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-memory-rose/15 border border-memory-rose/30 flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-memory-rose" />
          </div>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Submit Your Memory
          </h1>
          <p className="font-inter text-slate-400 leading-relaxed">
            Your story matters. Whether it happened yesterday or a century ago, every memory adds to the tapestry of human experience that will travel to the stars.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4 md:px-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          {/* Title */}
          <Field label="Memory Title" error={errors.title} required>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="Give your memory a title..."
              className={inputClass(errors.title)}
            />
          </Field>

          {/* Memory text */}
          <Field label="Your Memory" error={errors.excerpt} required hint="Write in first person. Minimum 50 characters.">
            <textarea
              value={form.excerpt}
              onChange={(e) => set('excerpt', e.target.value)}
              placeholder="Describe your memory in your own words..."
              rows={6}
              className={inputClass(errors.excerpt)}
            />
          </Field>

          {/* Author + Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Your Name" error={errors.author} required>
              <input
                type="text"
                value={form.author}
                onChange={(e) => set('author', e.target.value)}
                placeholder="Full name or pseudonym"
                className={inputClass(errors.author)}
              />
            </Field>
            <Field label="Year" error={errors.year} required hint="Use negative for BCE">
              <input
                type="number"
                value={form.year}
                onChange={(e) => set('year', e.target.value)}
                placeholder="e.g. 1989 or -48"
                className={inputClass(errors.year)}
              />
            </Field>
          </div>

          {/* Location */}
          <Field label="Location" error={errors.location} required>
            <input
              type="text"
              value={form.location}
              onChange={(e) => set('location', e.target.value)}
              placeholder="City, Country or Region"
              className={inputClass(errors.location)}
            />
          </Field>

          {/* Era + Region */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Historical Era" error={errors.era} required>
              <select
                value={form.era}
                onChange={(e) => set('era', e.target.value)}
                className={selectClass(errors.era)}
              >
                <option value="">Select era...</option>
                {ERAS.map((e) => (
                  <option key={e.id} value={e.id}>{e.label}</option>
                ))}
              </select>
            </Field>
            <Field label="Region" error={errors.region} required>
              <select
                value={form.region}
                onChange={(e) => set('region', e.target.value)}
                className={selectClass(errors.region)}
              >
                <option value="">Select region...</option>
                {REGIONS.map((r) => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Emotion + Life Event */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Primary Emotion" error={errors.emotion} required>
              <select
                value={form.emotion}
                onChange={(e) => set('emotion', e.target.value)}
                className={selectClass(errors.emotion)}
              >
                <option value="">Select emotion...</option>
                {EMOTIONS.map((em) => (
                  <option key={em.id} value={em.id}>{em.icon} {em.label}</option>
                ))}
              </select>
            </Field>
            <Field label="Life Event">
              <select
                value={form.lifeEvent}
                onChange={(e) => set('lifeEvent', e.target.value)}
                className={selectClass()}
              >
                <option value="">Select event (optional)...</option>
                {LIFE_EVENTS.map((ev) => (
                  <option key={ev.id} value={ev.id}>{ev.label}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Tags */}
          <Field label="Tags" hint="Comma-separated keywords (optional)">
            <input
              type="text"
              value={form.tags}
              onChange={(e) => set('tags', e.target.value)}
              placeholder="family, harvest, farewell, earth..."
              className={inputClass()}
            />
          </Field>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 bg-nebula-blue text-white font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(79,142,247,0.3)] hover:shadow-[0_0_50px_rgba(79,142,247,0.5)] font-inter text-base"
            >
              Preserve This Memory
            </button>
            <p className="font-inter text-xs text-slate-600 text-center mt-3">
              By submitting, you grant the Memory Archive the right to preserve and display your memory in perpetuity.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

function Field({ label, children, error, hint, required }) {
  return (
    <div>
      <label className="block font-inter text-sm font-medium text-slate-300 mb-1.5">
        {label}
        {required && <span className="text-memory-rose ml-1">*</span>}
      </label>
      {hint && <p className="font-inter text-xs text-slate-600 mb-1.5">{hint}</p>}
      {children}
      {error && <p className="font-inter text-xs text-memory-rose mt-1.5">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full px-4 py-3 bg-space-navy border rounded-xl text-white placeholder-slate-600 font-inter text-sm focus:outline-none transition-all ${
    error
      ? 'border-memory-rose/60 focus:border-memory-rose'
      : 'border-slate-700 focus:border-nebula-blue/60 focus:shadow-[0_0_0_3px_rgba(79,142,247,0.1)]'
  }`;
}

function selectClass(error) {
  return `w-full px-4 py-3 bg-space-navy border rounded-xl text-white font-inter text-sm focus:outline-none transition-all appearance-none ${
    error
      ? 'border-memory-rose/60 focus:border-memory-rose'
      : 'border-slate-700 focus:border-nebula-blue/60'
  }`;
}
