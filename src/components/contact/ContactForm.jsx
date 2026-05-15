import { useState } from 'react';
import { Send, CheckCircle, FlaskConical, User, Users, Mail, MessageSquare } from 'lucide-react';

const labGroups = [
  'Lab Group A — Mondays 09:00',
  'Lab Group B — Mondays 14:00',
  'Lab Group C — Tuesdays 09:00',
  'Lab Group D — Tuesdays 14:00',
  'Lab Group E — Wednesdays 09:00',
  'Lab Group F — Wednesdays 14:00',
  'Independent Study',
  'Other',
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', group: '', email: '', observations: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Student name is required.';
    if (!form.group) e.group = 'Please select your lab group.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.observations.trim()) e.observations = 'Please enter your observations or questions.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-bio-green/10 flex items-center justify-center mb-6 border border-bio-green/30">
          <CheckCircle className="w-8 h-8 text-bio-green" />
        </div>
        <h3 className="text-text-primary font-bold text-2xl mb-3">Report Submitted</h3>
        <p className="text-text-secondary text-sm max-w-sm leading-relaxed mb-2">
          Your lab observation report has been received. Your instructor will review your submission and respond within 48 hours.
        </p>
        <p className="font-mono text-[11px] text-bio-green tracking-widest uppercase mt-4">
          Observation ID: {Math.random().toString(36).slice(2, 10).toUpperCase()}
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', group: '', email: '', observations: '' }); }}
          className="mt-8 px-6 py-2.5 rounded-full border border-border-dim text-text-secondary text-sm hover:border-bio-green/30 hover:text-text-primary transition-all duration-200"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Group row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="flex items-center gap-2 font-mono text-[11px] text-text-muted tracking-widest uppercase mb-2">
            <User className="w-3 h-3" />
            Student Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Dr. Jane Goodall"
            className={`w-full bg-charcoal-light border rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 transition-all duration-200 ${
              errors.name
                ? 'border-red-500/50 focus:ring-red-500/30'
                : 'border-border-dim focus:border-bio-green/40 focus:ring-bio-green/20'
            }`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className="flex items-center gap-2 font-mono text-[11px] text-text-muted tracking-widest uppercase mb-2">
            <Users className="w-3 h-3" />
            Lab Group / Class
          </label>
          <select
            name="group"
            value={form.group}
            onChange={handleChange}
            className={`w-full bg-charcoal-light border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all duration-200 appearance-none ${
              form.group ? 'text-text-primary' : 'text-text-muted'
            } ${
              errors.group
                ? 'border-red-500/50 focus:ring-red-500/30'
                : 'border-border-dim focus:border-bio-green/40 focus:ring-bio-green/20'
            }`}
          >
            <option value="" disabled>Select your lab group</option>
            {labGroups.map((g) => (
              <option key={g} value={g} className="bg-charcoal text-text-primary">{g}</option>
            ))}
          </select>
          {errors.group && <p className="text-red-400 text-xs mt-1.5">{errors.group}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="flex items-center gap-2 font-mono text-[11px] text-text-muted tracking-widest uppercase mb-2">
          <Mail className="w-3 h-3" />
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="student@university.edu"
          className={`w-full bg-charcoal-light border rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 transition-all duration-200 ${
            errors.email
              ? 'border-red-500/50 focus:ring-red-500/30'
              : 'border-border-dim focus:border-bio-green/40 focus:ring-bio-green/20'
          }`}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
      </div>

      {/* Observations */}
      <div>
        <label className="flex items-center gap-2 font-mono text-[11px] text-text-muted tracking-widest uppercase mb-2">
          <MessageSquare className="w-3 h-3" />
          Observations / Questions
        </label>
        <textarea
          name="observations"
          value={form.observations}
          onChange={handleChange}
          rows={6}
          placeholder="Describe your microscopic observations, note any anomalies, or pose specific questions about specimen morphology, staining artifacts, or identification challenges..."
          className={`w-full bg-charcoal-light border rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 transition-all duration-200 resize-none leading-relaxed ${
            errors.observations
              ? 'border-red-500/50 focus:ring-red-500/30'
              : 'border-border-dim focus:border-bio-green/40 focus:ring-bio-green/20'
          }`}
        />
        <div className="flex items-start justify-between mt-1.5">
          {errors.observations
            ? <p className="text-red-400 text-xs">{errors.observations}</p>
            : <span className="text-text-muted text-xs">Minimum 20 characters recommended for detailed feedback.</span>
          }
          <span className="font-mono text-[10px] text-text-muted ml-4 shrink-0">{form.observations.length} chars</span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 py-3.5 bg-bio-green text-obsidian font-semibold rounded-xl hover:bg-bio-green-dim transition-all duration-200 shadow-glow-green group"
      >
        <FlaskConical className="w-4 h-4" />
        Submit Observation Report
        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <p className="text-text-muted text-xs text-center leading-relaxed">
        Reports are reviewed by your instructor within 48 hours. For urgent matters, contact the department directly.
      </p>
    </form>
  );
};

export default ContactForm;
