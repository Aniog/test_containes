import { useState } from 'react';
import { Send, CheckCircle, BookOpen, Microscope } from 'lucide-react';

const labGroups = [
  'BIO 201 — Cell Biology',
  'BIO 301 — Histology & Microscopy',
  'BIO 401 — Advanced Microbiology',
  'PHY 350 — Biophysics',
  'MED 201 — Human Anatomy',
  'Independent Study',
  'Other',
];

const observationTypes = [
  'Specimen Observation Report',
  'Question about Staining Protocol',
  'Request for Specific Slide',
  'Anomaly / Unexpected Finding',
  'General Inquiry',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    labGroup: '',
    email: '',
    observationType: '',
    observations: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-card-dark border rounded-sm px-4 py-3 font-inter text-sm text-primary-text placeholder-muted-text outline-none transition-all duration-300 ${
      focused === field
        ? 'border-bio-green shadow-glow-green'
        : 'border-subtle hover:border-secondary-text/40'
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-bio-green/10 border border-bio-green/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-bio-green" strokeWidth={1.5} />
        </div>
        <h2 className="font-grotesk font-bold text-primary-text text-2xl mb-3">
          Observation Submitted
        </h2>
        <p className="font-inter text-secondary-text text-sm max-w-sm leading-relaxed mb-6">
          Your lab notes have been received and logged. The instructor will review your
          observations and respond within 48 hours.
        </p>
        <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase">
          Reference ID: LAB-{Date.now().toString(36).toUpperCase()}
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', labGroup: '', email: '', observationType: '', observations: '' }); }}
          className="mt-8 px-5 py-2.5 border border-subtle text-secondary-text text-sm font-inter rounded-sm hover:border-bio-green hover:text-bio-green transition-all duration-300"
        >
          Submit Another Observation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name + Lab Group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-2">
            Student Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            placeholder="e.g. Dr. Jane Goodall"
            required
            className={inputClass('name')}
          />
        </div>
        <div>
          <label className="block font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-2">
            Lab Group / Class *
          </label>
          <select
            name="labGroup"
            value={form.labGroup}
            onChange={handleChange}
            onFocus={() => setFocused('labGroup')}
            onBlur={() => setFocused(null)}
            required
            className={`${inputClass('labGroup')} cursor-pointer`}
          >
            <option value="" disabled>Select your class...</option>
            {labGroups.map((g) => (
              <option key={g} value={g} className="bg-charcoal text-primary-text">
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 2: Email + Observation Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            placeholder="student@university.edu"
            required
            className={inputClass('email')}
          />
        </div>
        <div>
          <label className="block font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-2">
            Observation Type
          </label>
          <select
            name="observationType"
            value={form.observationType}
            onChange={handleChange}
            onFocus={() => setFocused('observationType')}
            onBlur={() => setFocused(null)}
            className={`${inputClass('observationType')} cursor-pointer`}
          >
            <option value="" disabled>Select type...</option>
            {observationTypes.map((t) => (
              <option key={t} value={t} className="bg-charcoal text-primary-text">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Observations textarea */}
      <div>
        <label className="block font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-2">
          Observations & Questions *
        </label>
        <textarea
          name="observations"
          value={form.observations}
          onChange={handleChange}
          onFocus={() => setFocused('observations')}
          onBlur={() => setFocused(null)}
          placeholder="Describe your microscopic observations in detail. Include specimen name, magnification used, staining method, and any structural features or anomalies you identified..."
          required
          rows={7}
          className={`${inputClass('observations')} resize-none`}
        />
        <div className="flex justify-between mt-1.5">
          <span className="font-mono-lab text-xs text-muted-text">
            Be as specific as possible — include magnification, stain, and structural details.
          </span>
          <span className="font-mono-lab text-xs text-muted-text">
            {form.observations.length} chars
          </span>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between pt-2">
        <p className="font-inter text-xs text-muted-text">
          * Required fields. Submissions are reviewed within 48 hours.
        </p>
        <button
          type="submit"
          className="group flex items-center gap-3 px-6 py-3 bg-bio-green text-obsidian font-grotesk font-semibold text-sm tracking-wide rounded-sm hover:bg-bio-green/90 transition-all duration-300 shadow-glow-green"
        >
          Submit Observation
          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
