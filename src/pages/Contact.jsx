import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Microscope, FlaskConical, BookOpen, Mail } from 'lucide-react';

const INQUIRY_TYPES = [
  'Specimen Request',
  'Slide Identification',
  'Staining Protocol Query',
  'Laboratory Booking',
  'Academic Collaboration',
  'General Enquiry',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    institution: '',
    email: '',
    inquiryType: '',
    subject: '',
    observations: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.inquiryType) e.inquiryType = 'Please select an inquiry type';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.observations.trim()) e.observations = 'Please enter your observations or message';
    if (!form.consent) e.consent = 'You must agree to proceed';
    return e;
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log('Lab Notes submission:', form);
    setSubmitted(true);
  };

  return (
    <div className="bg-parchment min-h-screen relative overflow-hidden">
      {/* Micrometer scale watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025] select-none">
        <svg viewBox="0 0 800 200" className="w-full max-w-4xl" fill="none" stroke="#1A1A1A" strokeWidth="1">
          <line x1="0" y1="100" x2="800" y2="100" />
          {Array.from({ length: 81 }).map((_, i) => {
            const x = i * 10;
            const isMajor = i % 10 === 0;
            const isMid = i % 5 === 0;
            return (
              <line
                key={i}
                x1={x} y1={100}
                x2={x}
                y2={isMajor ? 60 : isMid ? 75 : 85}
                strokeWidth={isMajor ? 1.5 : 0.8}
              />
            );
          })}
          {Array.from({ length: 9 }).map((_, i) => (
            <text
              key={i}
              x={(i + 1) * 100}
              y={50}
              textAnchor="middle"
              fontSize="12"
              fontFamily="monospace"
              fill="#1A1A1A"
            >
              {(i + 1) * 100} µm
            </text>
          ))}
        </svg>
      </div>

      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 md:px-10 border-b border-silver/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-caps mb-4">Laboratory Correspondence</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink leading-tight mb-4">
              Lab Notes<br />
              <span className="italic">& Feedback</span>
            </h1>
            <p className="body-text max-w-xl text-charcoal/80">
              Submit your observations, specimen requests, or academic enquiries using
              the standardised laboratory report form below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-1 space-y-8"
          >
            <div>
              <p className="label-caps mb-4">Laboratory Contact</p>
              <div className="space-y-4">
                {[
                  { icon: Microscope, label: 'Department', value: 'Biological Sciences\nMicroscopy Unit' },
                  { icon: Mail, label: 'Email', value: 'microscopy@microcosmos.edu' },
                  { icon: FlaskConical, label: 'Lab Hours', value: 'Mon–Fri\n09:00–17:00 GMT' },
                  { icon: BookOpen, label: 'Response Time', value: '2–3 working days\nfor standard enquiries' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-ink/8 border border-ink/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="label-caps text-[10px] mb-0.5">{label}</p>
                      <p className="font-sans text-sm text-charcoal whitespace-pre-line">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-silver/30">
              <p className="label-caps mb-3">Submission Guidelines</p>
              <ul className="space-y-2">
                {[
                  'Include specimen ID when referencing existing slides',
                  'Specify magnification and staining protocol for identification requests',
                  'Attach micrograph files via follow-up email',
                  'Academic affiliations expedite processing',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="font-mono text-xs text-silver mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                    <span className="font-sans text-xs text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form — styled as lab report card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-ink/8 border border-ink/15 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-ink" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink mb-3">
                    Submission Received
                  </h2>
                  <p className="body-text text-charcoal/80 max-w-sm">
                    Your laboratory notes have been logged under reference{' '}
                    <span className="font-mono text-ink">
                      LN-{Date.now().toString().slice(-6)}
                    </span>
                    . A confirmation will be sent to{' '}
                    <span className="font-mono text-ink">{form.email}</span>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', institution: '', email: '', inquiryType: '', subject: '', observations: '', consent: false }); }}
                    className="mt-8 glass-btn-dark text-sm"
                  >
                    Submit Another Note
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-0"
                  noValidate
                >
                  {/* Form header */}
                  <div className="flex items-center justify-between pb-6 border-b border-silver/40 mb-8">
                    <div>
                      <p className="label-caps text-[10px] text-graphite">Form MC-LN-2026</p>
                      <p className="font-serif text-lg font-semibold text-ink mt-0.5">Laboratory Report Card</p>
                    </div>
                    <div className="text-right">
                      <p className="meta-text">MicroCosmos</p>
                      <p className="meta-text">Dept. Biological Sciences</p>
                    </div>
                  </div>

                  {/* Row 1: Name + Institution */}
                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <FormField
                      label="Observer Name"
                      required
                      error={errors.name}
                    >
                      <input
                        type="text"
                        placeholder="Dr. Jane Smith"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="input-underline"
                      />
                    </FormField>
                    <FormField label="Institution / Affiliation">
                      <input
                        type="text"
                        placeholder="University of Edinburgh"
                        value={form.institution}
                        onChange={(e) => handleChange('institution', e.target.value)}
                        className="input-underline"
                      />
                    </FormField>
                  </div>

                  {/* Row 2: Email + Inquiry Type */}
                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <FormField label="Email Address" required error={errors.email}>
                      <input
                        type="email"
                        placeholder="j.smith@university.edu"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="input-underline"
                      />
                    </FormField>
                    <FormField label="Inquiry Type" required error={errors.inquiryType}>
                      <select
                        value={form.inquiryType}
                        onChange={(e) => handleChange('inquiryType', e.target.value)}
                        className="input-underline appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select category…</option>
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Subject */}
                  <div className="mb-8">
                    <FormField label="Subject / Specimen Reference" required error={errors.subject}>
                      <input
                        type="text"
                        placeholder="e.g. Identification of PLT-ZM-001 vascular bundle"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className="input-underline"
                      />
                    </FormField>
                  </div>

                  {/* Observations */}
                  <div className="mb-8">
                    <FormField label="Observations & Notes" required error={errors.observations}>
                      <textarea
                        rows={6}
                        placeholder="Describe your observations, questions, or request in detail. Include relevant specimen IDs, magnification levels, and any anomalies noted during examination…"
                        value={form.observations}
                        onChange={(e) => handleChange('observations', e.target.value)}
                        className="input-underline resize-none"
                      />
                    </FormField>
                  </div>

                  {/* Consent */}
                  <div className="mb-10">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div
                        onClick={() => handleChange('consent', !form.consent)}
                        className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                          form.consent ? 'bg-ink border-ink' : 'border-silver/60 bg-transparent'
                        }`}
                      >
                        {form.consent && (
                          <svg className="w-2.5 h-2.5 text-parchment" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="font-sans text-xs text-charcoal leading-relaxed">
                        I consent to the storage and processing of this submission for the purpose
                        of academic correspondence and specimen management by the MicroCosmos
                        Laboratory.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="font-sans text-xs text-ink/70 mt-1 ml-7">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-6 border-t border-silver/30">
                    <p className="meta-text text-graphite">
                      All fields marked * are required
                    </p>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 bg-white/30 backdrop-blur-md border border-ink/20 rounded-full px-8 py-3 text-ink font-sans font-medium text-sm tracking-wide hover:bg-white/50 transition-all duration-300"
                    >
                      Submit Report
                      <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, required, error, children }) {
  return (
    <div className="relative">
      <label className="block label-caps text-[10px] mb-2 text-graphite">
        {label}{required && <span className="text-ink ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="font-sans text-xs text-ink/60 mt-1">{error}</p>
      )}
    </div>
  );
}
