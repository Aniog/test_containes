import { useState } from 'react';
import { Send, CheckCircle, Microscope, FlaskConical, BookOpen, HelpCircle } from 'lucide-react';

const labGroups = [
  'Lab Group A — Monday 9:00',
  'Lab Group B — Monday 14:00',
  'Lab Group C — Wednesday 9:00',
  'Lab Group D — Wednesday 14:00',
  'Lab Group E — Friday 9:00',
  'Lab Group F — Friday 14:00',
  'Independent Study',
  'Other',
];

const reportTypes = [
  { value: 'observation', label: 'Observation Report', icon: Microscope },
  { value: 'question', label: 'Specimen Question', icon: HelpCircle },
  { value: 'request', label: 'Slide Request', icon: FlaskConical },
  { value: 'feedback', label: 'Course Feedback', icon: BookOpen },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    labGroup: '',
    email: '',
    reportType: 'observation',
    observations: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', labGroup: '', email: '', reportType: 'observation', observations: '' });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-bio-green/10 border border-bio-green/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-bio-green" />
        </div>
        <h3 className="font-grotesk font-bold text-2xl text-slate-100 mb-3">
          Observation Submitted
        </h3>
        <p className="font-inter text-slate-400 text-sm max-w-sm leading-relaxed mb-8">
          Your lab notes have been received. The instructor will review your submission and respond within 24–48 hours.
        </p>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-bio-green animate-pulse" />
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            Logged to Lab Records
          </span>
        </div>
        <button
          onClick={handleReset}
          className="px-6 py-2.5 border border-subtle text-slate-400 font-grotesk text-sm rounded-lg hover:border-bio-green/30 hover:text-slate-100 transition-colors duration-200"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Report type selector */}
      <div>
        <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">
          Report Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          {reportTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = form.reportType === type.value;
            return (
              <button
                key={type.value}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, reportType: type.value }))}
                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-bio-green/50 bg-bio-green/10 text-bio-green'
                    : 'border-subtle bg-surface text-slate-400 hover:border-bio-green/20 hover:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="font-grotesk text-sm font-medium">{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Name + Lab Group */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
            Student Name <span className="text-bio-green">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full px-4 py-3 bg-surface border border-subtle rounded-xl text-slate-100 placeholder-slate-400 font-inter text-sm focus:outline-none focus:border-bio-green/50 focus:ring-1 focus:ring-bio-green/20 transition-colors duration-200"
          />
        </div>
        <div>
          <label htmlFor="labGroup" className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
            Lab Group / Class <span className="text-bio-green">*</span>
          </label>
          <select
            id="labGroup"
            name="labGroup"
            required
            value={form.labGroup}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-subtle rounded-xl text-slate-100 font-inter text-sm focus:outline-none focus:border-bio-green/50 focus:ring-1 focus:ring-bio-green/20 transition-colors duration-200 appearance-none"
          >
            <option value="" disabled className="text-slate-400">Select your group</option>
            {labGroups.map((g) => (
              <option key={g} value={g} className="bg-charcoal">{g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
          Email Address <span className="text-bio-green">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="student@university.edu"
          className="w-full px-4 py-3 bg-surface border border-subtle rounded-xl text-slate-100 placeholder-slate-400 font-inter text-sm focus:outline-none focus:border-bio-green/50 focus:ring-1 focus:ring-bio-green/20 transition-colors duration-200"
        />
      </div>

      {/* Observations */}
      <div>
        <label htmlFor="observations" className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
          Observations / Questions <span className="text-bio-green">*</span>
        </label>
        <textarea
          id="observations"
          name="observations"
          required
          rows={6}
          value={form.observations}
          onChange={handleChange}
          placeholder="Describe your microscopic observations, ask a question about a specimen, or request a specific slide for the next lab session..."
          className="w-full px-4 py-3 bg-surface border border-subtle rounded-xl text-slate-100 placeholder-slate-400 font-inter text-sm focus:outline-none focus:border-bio-green/50 focus:ring-1 focus:ring-bio-green/20 transition-colors duration-200 resize-none leading-relaxed"
        />
        <div className="flex justify-end mt-1">
          <span className="font-mono text-xs text-slate-600">
            {form.observations.length} characters
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-bio-green/15 backdrop-blur-md border border-bio-green/35 text-bio-green font-grotesk font-semibold rounded-xl shadow-lg shadow-bio-green/10 hover:bg-bio-green/25 hover:border-bio-green/55 hover:shadow-bio-green/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group overflow-hidden"
      >
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-green/40 to-transparent" />
        {submitting ? (
          <>
            <div className="w-4 h-4 border-2 border-bio-green/30 border-t-bio-green rounded-full animate-spin" />
            Submitting to Lab Records...
          </>
        ) : (
          <>
            Submit Observation Report
            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </>
        )}
      </button>
    </form>
  );
}
