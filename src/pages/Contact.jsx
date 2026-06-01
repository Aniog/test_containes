import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Microscope, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';

const inquiryTypes = [
  { value: 'observation', label: 'Specimen Observation' },
  { value: 'methodology', label: 'Methodology Query' },
  { value: 'identification', label: 'Specimen Identification' },
  { value: 'collaboration', label: 'Research Collaboration' },
  { value: 'feedback', label: 'Platform Feedback' },
  { value: 'other', label: 'Other' },
];

const contactInfo = [
  {
    icon: Microscope,
    label: 'Laboratory',
    value: 'Microscopy & Cell Biology Lab',
    sub: 'Room 4B, Science Building',
  },
  {
    icon: BookOpen,
    label: 'Office Hours',
    value: 'Mon–Fri, 09:00–17:00',
    sub: 'By appointment outside hours',
  },
  {
    icon: FlaskConical,
    label: 'Research Group',
    value: 'Biological Imaging Unit',
    sub: 'Department of Life Sciences',
  },
  {
    icon: GraduationCap,
    label: 'Academic Year',
    value: '2025–2026',
    sub: 'Semester II · Spring Term',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    institution: '',
    email: '',
    specimenRef: '',
    inquiryType: '',
    subject: '',
    notes: '',
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
    if (!form.notes.trim()) e.notes = 'Observations / notes are required';
    if (!form.consent) e.consent = 'You must acknowledge the terms';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
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

  return (
    <div className="min-h-screen bg-parchment pt-24">

      {/* ── Page Header ── */}
      <section className="py-20 px-6 border-b border-ink/8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-end"
          >
            <div>
              <p className="section-label mb-4">Laboratory Communication</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight">
                Lab Notes<br />
                <span className="italic">& Feedback</span>
              </h1>
            </div>
            <div>
              <p className="font-sans text-charcoal leading-relaxed">
                Submit your observations, methodological queries, and specimen identification
                requests through this structured laboratory report interface. All submissions
                are reviewed by the instructional team within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">

          {/* ── Sidebar Info ── */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="section-label mb-4">Contact Information</p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-ink/6 border border-ink/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-mid-grey" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-sm font-medium text-ink">{item.value}</p>
                      <p className="font-sans text-xs text-mid-grey">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative scale bar */}
            <div className="pt-6 border-t border-ink/8">
              <p className="section-label mb-4">Micrometer Scale Reference</p>
              <div className="relative">
                {/* Scale watermark */}
                <div className="opacity-20">
                  <div className="flex items-center gap-0">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-4 w-8 border-l border-b border-ink ${i % 2 === 0 ? 'bg-ink' : 'bg-transparent'}`}
                      />
                    ))}
                    <div className="h-4 border-l border-ink" />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-mono text-[9px] text-ink">0</span>
                    <span className="font-mono text-[9px] text-ink">50 μm</span>
                    <span className="font-mono text-[9px] text-ink">100 μm</span>
                  </div>
                </div>
                <p className="font-mono text-[9px] text-mid-grey mt-2 tracking-wide">
                  Scale bar at 100× magnification
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="glass-card rounded-2xl p-5">
              <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-2">
                Submission Note
              </p>
              <p className="font-sans text-xs text-charcoal leading-relaxed italic">
                "Precise observation is the foundation of all scientific inquiry.
                Please include specimen reference codes where applicable."
              </p>
            </div>
          </motion.aside>

          {/* ── Laboratory Report Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card rounded-3xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-ink/8 border border-ink/15 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-ink" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-ink mb-3">
                    Submission Received
                  </h2>
                  <p className="font-sans text-charcoal mb-2">
                    Your laboratory notes have been logged in the system.
                  </p>
                  <p className="font-mono text-xs text-mid-grey tracking-widest uppercase mb-8">
                    Reference: LN-{Date.now().toString().slice(-6)}
                  </p>
                  <p className="font-sans text-sm text-mid-grey max-w-sm mx-auto leading-relaxed">
                    The instructional team will review your submission and respond
                    within 48 working hours. Thank you for your contribution to
                    the MicroCosmos archive.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', institution: '', email: '', specimenRef: '', inquiryType: '', subject: '', notes: '', consent: false }); }}
                    className="btn-dark mt-8 inline-flex"
                  >
                    Submit Another Note
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-0"
                >
                  {/* Form header */}
                  <div className="border border-ink/12 rounded-t-3xl px-8 py-5 bg-ink/3 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey">
                        MicroCosmos · Laboratory Report Form
                      </p>
                      <p className="font-serif text-lg font-semibold text-ink mt-0.5">
                        Observation & Feedback Submission
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[9px] text-mid-grey">Form Ref.</p>
                      <p className="font-mono text-xs text-ink">LRF-2026-II</p>
                    </div>
                  </div>

                  {/* Form body */}
                  <div className="border-x border-ink/12 px-8 py-8 space-y-8 bg-white/20 backdrop-blur-sm">

                    {/* Section A: Researcher Details */}
                    <div>
                      <p className="section-label mb-5 flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-ink text-parchment flex items-center justify-center font-mono text-[10px]">A</span>
                        Researcher Details
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          label="Full Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Dr. Jane Smith"
                          error={errors.name}
                          required
                        />
                        <FormField
                          label="Institution / Affiliation"
                          name="institution"
                          value={form.institution}
                          onChange={handleChange}
                          placeholder="University of Sciences"
                        />
                        <FormField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="j.smith@university.edu"
                          error={errors.email}
                          required
                        />
                        <FormField
                          label="Specimen Reference (optional)"
                          name="specimenRef"
                          value={form.specimenRef}
                          onChange={handleChange}
                          placeholder="e.g. PH-0012, SL-004"
                        />
                      </div>
                    </div>

                    <div className="h-px bg-ink/8" />

                    {/* Section B: Inquiry Details */}
                    <div>
                      <p className="section-label mb-5 flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-ink text-parchment flex items-center justify-center font-mono text-[10px]">B</span>
                        Inquiry Details
                      </p>
                      <div className="space-y-6">
                        {/* Inquiry Type */}
                        <div>
                          <label className="block font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-2">
                            Inquiry Type <span className="text-ink">*</span>
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {inquiryTypes.map((type) => (
                              <label
                                key={type.value}
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer
                                             border transition-all duration-200
                                             ${form.inquiryType === type.value
                                               ? 'bg-ink border-ink text-parchment'
                                               : 'border-ink/12 bg-white/30 text-charcoal hover:border-ink/25 hover:bg-white/50'
                                             }`}
                              >
                                <input
                                  type="radio"
                                  name="inquiryType"
                                  value={type.value}
                                  checked={form.inquiryType === type.value}
                                  onChange={handleChange}
                                  className="sr-only"
                                />
                                <span className="font-sans text-xs">{type.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.inquiryType && (
                            <p className="font-sans text-xs text-ink/70 mt-1.5">{errors.inquiryType}</p>
                          )}
                        </div>

                        <FormField
                          label="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Brief description of your inquiry"
                          error={errors.subject}
                          required
                        />
                      </div>
                    </div>

                    <div className="h-px bg-ink/8" />

                    {/* Section C: Observations */}
                    <div>
                      <p className="section-label mb-5 flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-ink text-parchment flex items-center justify-center font-mono text-[10px]">C</span>
                        Observations & Notes
                      </p>
                      <div>
                        <label className="block font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-2">
                          Laboratory Notes <span className="text-ink">*</span>
                        </label>
                        <textarea
                          name="notes"
                          value={form.notes}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Describe your observations, questions, or feedback in detail. Include magnification levels, staining protocols, and any anomalies observed…"
                          className={`w-full bg-transparent border-b-2 border-ink/20 pt-2 pb-3 px-0
                                       font-sans text-sm text-ink placeholder-mid-grey/60
                                       focus:outline-none focus:border-ink/60 resize-none
                                       transition-colors duration-200 leading-relaxed
                                       ${errors.notes ? 'border-ink/50' : ''}`}
                        />
                        {errors.notes && (
                          <p className="font-sans text-xs text-ink/70 mt-1">{errors.notes}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Form footer */}
                  <div className="border border-ink/12 rounded-b-3xl px-8 py-6 bg-ink/3 space-y-5">
                    {/* Consent */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 border-2 flex items-center justify-center
                                       transition-all duration-200
                                       ${form.consent ? 'bg-ink border-ink' : 'border-ink/25 group-hover:border-ink/50'}`}>
                        {form.consent && (
                          <svg className="w-3 h-3 text-parchment" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-sans text-xs text-charcoal leading-relaxed">
                        I acknowledge that this submission may be used for educational purposes
                        within the MicroCosmos platform, and that my contact details will be
                        used solely for correspondence regarding this inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="font-sans text-xs text-ink/70">{errors.consent}</p>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <p className="font-mono text-[9px] text-mid-grey tracking-widest uppercase">
                        All fields marked * are required
                      </p>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-glass flex items-center gap-2.5 bg-white/40 border-white/30
                                   hover:bg-white/60 shadow-md shadow-black/8"
                      >
                        <span>Submit Report</span>
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink border-t border-white/5 py-8 px-6 mt-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-[10px] text-parchment/20 tracking-widest uppercase">
            MicroCosmos · Laboratory Communication · © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function FormField({ label, name, type = 'text', value, onChange, placeholder, error, required }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-2">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b-2 border-ink/20 py-2.5 px-0
                     font-sans text-sm text-ink placeholder-mid-grey/60
                     focus:outline-none focus:border-ink/60
                     transition-colors duration-200
                     ${error ? 'border-ink/50' : ''}`}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
      />
      {error && (
        <p id={`${name}-error`} className="font-sans text-xs text-ink/70 mt-1">{error}</p>
      )}
    </div>
  );
}
