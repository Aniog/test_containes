import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Microscope, Mail, User, MessageSquare, Tag, AlertCircle } from 'lucide-react';

const INQUIRY_TYPES = [
  'Specimen Identification',
  'Staining Protocol',
  'Microscopy Technique',
  'Slide Preparation',
  'Academic Inquiry',
  'General Observation',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    inquiryType: '',
    subject: '',
    observation: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.inquiryType) e.inquiryType = 'Please select an inquiry type.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.observation.trim()) e.observation = 'Observation notes are required.';
    else if (form.observation.trim().length < 20) e.observation = 'Please provide at least 20 characters.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
    console.log('Lab note submitted:', form);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', institution: '', inquiryType: '', subject: '', observation: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="min-h-screen bg-parchment relative overflow-hidden">
      {/* Micrometer scale watermark */}
      <div
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.025]"
        aria-hidden="true"
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="280" stroke="#1A1A1A" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="#1A1A1A" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="160" stroke="#1A1A1A" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="100" stroke="#1A1A1A" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="40" stroke="#1A1A1A" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1={300 + 40 * Math.cos(rad)}
                y1={300 + 40 * Math.sin(rad)}
                x2={300 + 280 * Math.cos(rad)}
                y2={300 + 280 * Math.sin(rad)}
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Scale bar */}
          <line x1="160" y1="540" x2="440" y2="540" stroke="#1A1A1A" strokeWidth="2" />
          <line x1="160" y1="530" x2="160" y2="550" stroke="#1A1A1A" strokeWidth="2" />
          <line x1="440" y1="530" x2="440" y2="550" stroke="#1A1A1A" strokeWidth="2" />
          <text x="300" y="570" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontFamily="Courier New">
            100 μm
          </text>
          <text x="300" y="300" textAnchor="middle" fontSize="10" fill="#1A1A1A" fontFamily="Courier New">
            ×
          </text>
        </svg>
      </div>

      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-12 px-6 md:px-12 border-b border-ash">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Laboratory Communication</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight">
                Lab Notes
                <br />
                <em className="font-light">& Feedback</em>
              </h1>
              <p className="font-inter text-base text-charcoal max-w-sm leading-relaxed">
                Submit your observations, inquiries, and feedback to the laboratory
                instructor using the standardised report form below.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">

          {/* Left: Info Panel */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="md:col-span-1 space-y-8"
          >
            {/* Lab info card */}
            <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-glass">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-ink/8 border border-ink/10 flex items-center justify-center">
                  <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-inter text-xs text-graphite tracking-widest uppercase">Laboratory</p>
                  <p className="font-playfair text-sm font-semibold text-ink">MicroCosmos Institute</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: 'Contact', value: 'lab@microcosmos.edu' },
                  { icon: User, label: 'Instructor', value: 'Prof. A. van Leeuwenhoek' },
                  { icon: Tag, label: 'Response Time', value: '24–48 hours' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-graphite mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-inter text-xs text-silver tracking-wide uppercase">{label}</p>
                      <p className="font-inter text-sm text-charcoal">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines */}
            <div>
              <p className="section-label mb-4">Submission Guidelines</p>
              <ul className="space-y-3">
                {[
                  'Provide the specimen ID when referencing a specific slide.',
                  'Include magnification and staining details for identification queries.',
                  'Describe observations with precise anatomical terminology.',
                  'Attach relevant sketches or measurements where applicable.',
                ].map((guideline, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-graphite mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <p className="font-inter text-sm text-charcoal leading-relaxed">{guideline}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative rule */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-ash" />
              <div className="w-1.5 h-1.5 rounded-full bg-ash" />
              <div className="h-px flex-1 bg-ash" />
            </div>

            <p className="font-playfair text-sm italic text-graphite leading-relaxed">
              "The first requirement for an experimenter is to be curious about the world."
            </p>
            <p className="font-inter text-xs text-silver">— Antonie van Leeuwenhoek</p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="md:col-span-2"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-20 bg-white/30 backdrop-blur-sm border border-white/50 rounded-3xl shadow-glass"
                >
                  <div className="w-16 h-16 rounded-full bg-ink/8 border border-ink/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7 text-ink" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-ink mb-3">
                    Observation Recorded
                  </h2>
                  <p className="font-inter text-base text-charcoal max-w-sm leading-relaxed mb-8">
                    Your laboratory note has been submitted successfully. The instructor
                    will review your observation and respond within 24–48 hours.
                  </p>
                  <p className="font-mono text-xs text-graphite mb-8">
                    REF: LAB-{Date.now().toString(36).toUpperCase()}
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink text-parchment font-inter text-sm font-medium hover:bg-charcoal transition-colors"
                  >
                    Submit Another Note
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-3xl p-8 md:p-10 shadow-glass"
                >
                  {/* Form header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-ash">
                    <div>
                      <p className="font-mono text-xs text-graphite tracking-wider uppercase mb-1">
                        Form MC-{new Date().getFullYear()}-LN
                      </p>
                      <h2 className="font-playfair text-2xl font-semibold text-ink">
                        Laboratory Report Card
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className="font-inter text-xs text-silver">Date</p>
                      <p className="font-mono text-xs text-graphite">
                        {new Date().toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Section A: Identification */}
                  <fieldset className="mb-8">
                    <legend className="section-label mb-6">Section A — Observer Identification</legend>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="Dr. / Mr. / Ms. Surname"
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                      />
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="name@institution.edu"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                      />
                      <FormField
                        label="Institution / Affiliation"
                        name="institution"
                        type="text"
                        placeholder="University or Laboratory"
                        value={form.institution}
                        onChange={handleChange}
                        error={errors.institution}
                        className="sm:col-span-2"
                      />
                    </div>
                  </fieldset>

                  <div className="divider mb-8" />

                  {/* Section B: Inquiry */}
                  <fieldset className="mb-8">
                    <legend className="section-label mb-6">Section B — Inquiry Classification</legend>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Inquiry Type Select */}
                      <div className={`flex flex-col gap-1 ${errors.inquiryType ? '' : ''}`}>
                        <label className="font-inter text-xs text-graphite tracking-widest uppercase">
                          Inquiry Type <span className="text-ink">*</span>
                        </label>
                        <select
                          name="inquiryType"
                          value={form.inquiryType}
                          onChange={handleChange}
                          className="input-underline appearance-none cursor-pointer"
                          aria-required="true"
                        >
                          <option value="">Select category…</option>
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        {errors.inquiryType && <FieldError message={errors.inquiryType} />}
                      </div>

                      <FormField
                        label="Subject"
                        name="subject"
                        type="text"
                        placeholder="Brief subject line"
                        value={form.subject}
                        onChange={handleChange}
                        error={errors.subject}
                        required
                      />
                    </div>
                  </fieldset>

                  <div className="divider mb-8" />

                  {/* Section C: Observation */}
                  <fieldset className="mb-10">
                    <legend className="section-label mb-6">Section C — Observation Notes</legend>
                    <div className="flex flex-col gap-1">
                      <label className="font-inter text-xs text-graphite tracking-widest uppercase">
                        Detailed Observation <span className="text-ink">*</span>
                      </label>
                      <textarea
                        name="observation"
                        value={form.observation}
                        onChange={handleChange}
                        placeholder="Describe your observation, question, or feedback in precise scientific language. Include specimen IDs, magnification levels, and any anomalies noted…"
                        rows={6}
                        className="input-underline resize-none"
                        aria-required="true"
                      />
                      <div className="flex items-center justify-between mt-1">
                        {errors.observation ? (
                          <FieldError message={errors.observation} />
                        ) : (
                          <span />
                        )}
                        <span className="font-inter text-xs text-silver">
                          {form.observation.length} chars
                        </span>
                      </div>
                    </div>
                  </fieldset>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-6 border-t border-ash">
                    <p className="font-inter text-xs text-silver max-w-xs leading-relaxed">
                      By submitting, you confirm this observation is accurate to the best
                      of your knowledge.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-ink text-parchment font-inter font-semibold text-sm tracking-wide hover:bg-charcoal disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-glass"
                    >
                      {status === 'submitting' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-parchment/30 border-t-parchment rounded-full"
                          />
                          Submitting…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Lab Note
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, name, type, placeholder, value, onChange, error, required, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name} className="font-inter text-xs text-graphite tracking-widest uppercase">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-underline"
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && <FieldError id={`${name}-error`} message={error} />}
    </div>
  );
}

function FieldError({ message, id }) {
  return (
    <p id={id} role="alert" className="flex items-center gap-1.5 font-inter text-xs text-charcoal mt-0.5">
      <AlertCircle className="w-3 h-3 flex-shrink-0" />
      {message}
    </p>
  );
}
