import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Microscope, Mail, User, MessageSquare, BookOpen, AlertCircle } from 'lucide-react';

const fieldConfig = [
  {
    id: 'name',
    label: 'Observer Name',
    type: 'text',
    placeholder: 'Full name',
    icon: User,
    required: true,
  },
  {
    id: 'email',
    label: 'Institutional Email',
    type: 'email',
    placeholder: 'name@institution.edu',
    icon: Mail,
    required: true,
  },
  {
    id: 'subject',
    label: 'Subject of Inquiry',
    type: 'select',
    icon: BookOpen,
    required: true,
    options: [
      'General Inquiry',
      'Specimen Identification',
      'Slide Preparation Protocol',
      'Microscopy Technique',
      'Course Feedback',
      'Research Collaboration',
      'Technical Support',
    ],
  },
  {
    id: 'specimenRef',
    label: 'Specimen Reference (Optional)',
    type: 'text',
    placeholder: 'e.g. MC-PH-003 or Navicula sp.',
    icon: Microscope,
    required: false,
  },
];

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    specimenRef: '',
    notes: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Observer name is required.';
    if (!values.email.trim()) e.email = 'Institutional email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Please enter a valid email address.';
    if (!values.subject) e.subject = 'Please select a subject.';
    if (!values.notes.trim()) e.notes = 'Observation notes are required.';
    return e;
  };

  const handleChange = (id, value) => {
    setValues((v) => ({ ...v, [id]: value }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
  };

  const handleReset = () => {
    setValues({ name: '', email: '', subject: '', specimenRef: '', notes: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="min-h-screen bg-parchment pt-24 relative overflow-hidden">

      {/* Watermark — micrometer scale */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <svg
          width="600" height="600" viewBox="0 0 600 600"
          className="opacity-[0.025] text-ink"
          fill="none" stroke="currentColor"
        >
          {/* Scale bar */}
          <line x1="100" y1="300" x2="500" y2="300" strokeWidth="3" />
          <line x1="100" y1="280" x2="100" y2="320" strokeWidth="3" />
          <line x1="500" y1="280" x2="500" y2="320" strokeWidth="3" />
          {/* Tick marks */}
          {[140, 180, 220, 260, 300, 340, 380, 420, 460].map((x) => (
            <line key={x} x1={x} y1="290" x2={x} y2="310" strokeWidth="1.5" />
          ))}
          <text x="300" y="350" textAnchor="middle" fontSize="28" fontFamily="serif" fill="currentColor" stroke="none">
            100 μm
          </text>
          {/* Concentric circles */}
          <circle cx="300" cy="300" r="200" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="300" cy="300" r="150" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="300" cy="300" r="100" strokeWidth="0.5" strokeDasharray="2 6" />
          {/* Crosshair */}
          <line x1="300" y1="80" x2="300" y2="520" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="80" y1="300" x2="520" y2="300" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* Page Header */}
      <section className="relative z-10 py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">Laboratory Report</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight">
              Field Notes &<br />
              <em className="font-light italic">Correspondence</em>
            </h1>
            <p className="font-inter text-charcoal max-w-sm leading-relaxed text-sm">
              Submit observations, questions, and feedback to the laboratory instructor.
              All correspondence is reviewed within 48 hours.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-px bg-gradient-to-r from-ink/20 via-ink/5 to-transparent" />
      </section>

      {/* Form Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="backdrop-blur-md bg-white/40 border border-white/30 rounded-3xl p-12 text-center"
              >
                <CheckCircle className="w-14 h-14 text-ink mx-auto mb-6" strokeWidth={1} />
                <h2 className="font-playfair text-3xl font-bold text-ink mb-3">
                  Observation Recorded
                </h2>
                <p className="font-inter text-charcoal text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                  Your laboratory notes have been submitted successfully. The instructor
                  will review your correspondence and respond within 48 hours.
                </p>
                <div className="backdrop-blur-sm bg-ink/5 border border-ink/10 rounded-xl p-4 mb-8 text-left">
                  <p className="font-mono text-xs text-graphite mb-1">Submission Reference</p>
                  <p className="font-mono text-sm text-ink font-medium">
                    MC-{Date.now().toString(36).toUpperCase().slice(-8)}
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-8 py-3 backdrop-blur-md bg-ink text-parchment
                    border border-ink rounded-full font-inter font-semibold text-sm tracking-widest uppercase
                    hover:bg-charcoal transition-colors"
                >
                  Submit Another Note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Report card header */}
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-t-3xl
                  px-8 py-5 border-b border-ash/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-xs text-graphite">FORM MC-LAB-001</p>
                      <p className="font-playfair text-lg font-semibold text-ink">Laboratory Observation Report</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-graphite">Date</p>
                      <p className="font-mono text-xs text-ink">
                        {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form body */}
                <div className="backdrop-blur-md bg-white/20 border-x border-white/20 px-8 py-8 space-y-8">

                  {/* Standard fields */}
                  {fieldConfig.map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-graphite mb-3"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {field.label}
                          {field.required && <span className="text-ink">*</span>}
                        </label>

                        {field.type === 'select' ? (
                          <select
                            id={field.id}
                            value={values[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            className="w-full bg-transparent border-0 border-b border-charcoal/30
                              focus:border-ink focus:outline-none font-inter text-sm text-ink
                              pb-2 transition-colors duration-200 cursor-pointer appearance-none"
                          >
                            <option value="" className="text-silver bg-parchment">Select a subject…</option>
                            {field.options.map((opt) => (
                              <option key={opt} value={opt} className="text-ink bg-parchment">{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={field.id}
                            type={field.type}
                            value={values[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full bg-transparent border-0 border-b border-charcoal/30
                              focus:border-ink focus:outline-none font-inter text-sm text-ink
                              placeholder:text-silver pb-2 transition-colors duration-200"
                          />
                        )}

                        {errors[field.id] && (
                          <p className="flex items-center gap-1.5 font-inter text-xs text-ink/70 mt-1.5">
                            <AlertCircle className="w-3 h-3" />
                            {errors[field.id]}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  {/* Observation notes textarea */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-graphite mb-3"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Observation Notes *
                    </label>
                    <textarea
                      id="notes"
                      rows={6}
                      value={values.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      placeholder="Describe your observation, question, or feedback in detail…"
                      className="w-full bg-transparent border-0 border-b border-charcoal/30
                        focus:border-ink focus:outline-none font-inter text-sm text-ink
                        placeholder:text-silver pb-2 transition-colors duration-200 resize-none"
                    />
                    {errors.notes && (
                      <p className="flex items-center gap-1.5 font-inter text-xs text-ink/70 mt-1.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Form footer */}
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-b-3xl
                  px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-inter text-xs text-graphite leading-relaxed max-w-xs">
                    All submissions are treated with academic confidentiality and reviewed
                    by the laboratory instructor.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5
                      backdrop-blur-md bg-ink border border-ink/80 rounded-full
                      font-inter font-semibold text-sm tracking-widest uppercase text-parchment
                      hover:bg-charcoal disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-300 flex-shrink-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-parchment/30 border-t-parchment rounded-full"
                        />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Report
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact info card */}
            <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-ink flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-parchment" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-playfair font-semibold text-ink">Laboratory Office</p>
                  <p className="font-inter text-xs text-graphite">Dept. of Cell Biology</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Office Hours', value: 'Mon–Fri, 09:00–17:00' },
                  { label: 'Response Time', value: 'Within 48 hours' },
                  { label: 'Lab Location', value: 'Building C, Room 214' },
                  { label: 'Telephone', value: '+1 (555) 012-3456' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4">
                    <span className="font-inter text-xs text-graphite tracking-wide">{item.label}</span>
                    <span className="font-mono text-xs text-ink text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines card */}
            <div className="backdrop-blur-md bg-white/20 border border-white/15 rounded-2xl p-6">
              <p className="section-label mb-4">Submission Guidelines</p>
              <ul className="space-y-3">
                {[
                  'Reference the Specimen ID when reporting slide-specific observations.',
                  'Include magnification level and staining protocol in technical queries.',
                  'Attach micrograph files via institutional email for image analysis.',
                  'Course feedback is reviewed at the end of each academic term.',
                ].map((g, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-inter text-xs text-charcoal leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-mono text-xs text-ink font-bold">{i + 1}</span>
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-ink py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-silver" strokeWidth={1.5} />
            <span className="font-playfair text-parchment text-sm font-semibold">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-silver">
            © 2026 MicroCosmos Educational Platform
          </p>
        </div>
      </footer>
    </div>
  );
}
