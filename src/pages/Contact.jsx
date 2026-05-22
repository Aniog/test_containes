import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, BookOpen, Mail, User, MessageSquare, FlaskConical, AlertCircle } from 'lucide-react';

const subjectOptions = [
  { value: 'observation', label: 'Specimen Observation' },
  { value: 'question', label: 'Scientific Inquiry' },
  { value: 'correction', label: 'Taxonomic Correction' },
  { value: 'collaboration', label: 'Research Collaboration' },
  { value: 'feedback', label: 'Platform Feedback' },
  { value: 'other', label: 'Other' },
];

const initialForm = {
  name: '',
  email: '',
  institution: '',
  subject: '',
  specimenRef: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.subject) e.subject = 'Please select a subject';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Please provide at least 20 characters';
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm(initialForm);
  };

  return (
    <div className="bg-parchment min-h-screen">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 border-b border-ash">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-graphite tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Laboratory Correspondence
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Lab Notes
            </h1>
            <p className="text-charcoal max-w-2xl leading-relaxed text-lg">
              Submit your observations, inquiries, and feedback using the laboratory report form below.
              All correspondence is reviewed by the supervising instructor within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">

            {/* ── Sidebar Info ── */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-1 space-y-8"
            >
              <div>
                <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-4">
                  Contact Information
                </p>
                <div className="space-y-4">
                  <ContactInfo
                    icon={<Mail className="w-4 h-4" />}
                    label="Electronic Mail"
                    value="lab@microcosmos.edu"
                  />
                  <ContactInfo
                    icon={<FlaskConical className="w-4 h-4" />}
                    label="Laboratory"
                    value="Microscopy Suite, Room 204"
                  />
                  <ContactInfo
                    icon={<BookOpen className="w-4 h-4" />}
                    label="Office Hours"
                    value="Mon–Fri, 09:00–17:00"
                  />
                </div>
              </div>

              <div className="border-t border-ash pt-8">
                <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-4">
                  Response Protocol
                </p>
                <div className="space-y-3">
                  {[
                    { type: 'Specimen Observation', time: '24 hours' },
                    { type: 'Scientific Inquiry', time: '48 hours' },
                    { type: 'Taxonomic Correction', time: '72 hours' },
                    { type: 'Collaboration', time: '5 business days' },
                  ].map((item) => (
                    <div key={item.type} className="flex justify-between items-center py-2 border-b border-ash/50">
                      <span className="text-xs text-charcoal">{item.type}</span>
                      <span className="text-xs font-mono text-graphite">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative micrometer scale watermark */}
              <div className="relative overflow-hidden rounded-2xl bg-bone border border-ash p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                  <svg viewBox="0 0 200 60" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="30" x2="190" y2="30" stroke="#1A1A1A" strokeWidth="1.5"/>
                    {[10,30,50,70,90,110,130,150,170,190].map((x, i) => (
                      <line key={x} x1={x} y1={i % 2 === 0 ? 18 : 22} x2={x} y2="30" stroke="#1A1A1A" strokeWidth="1"/>
                    ))}
                    <text x="10" y="14" fontSize="8" fill="#1A1A1A" fontFamily="monospace">0</text>
                    <text x="85" y="14" fontSize="8" fill="#1A1A1A" fontFamily="monospace">100μm</text>
                    <text x="175" y="14" fontSize="8" fill="#1A1A1A" fontFamily="monospace">200μm</text>
                  </svg>
                </div>
                <p className="font-serif text-sm italic text-charcoal leading-relaxed relative z-10">
                  "The microscope is the instrument of the curious mind — it reveals not just what is,
                  but what might be understood."
                </p>
                <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mt-3 relative z-10">
                  — Laboratory Maxim
                </p>
              </div>
            </motion.aside>

            {/* ── Report Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-ink" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-ink mb-3">
                      Submission Received
                    </h2>
                    <p className="text-charcoal max-w-md leading-relaxed mb-8">
                      Your laboratory report has been logged and will be reviewed by the supervising
                      instructor. You will receive a response at the provided email address.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-xs font-mono text-graphite tracking-widest uppercase border-b border-graphite pb-0.5 hover:text-ink hover:border-ink transition-colors"
                    >
                      Submit another report
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    className="space-y-0"
                  >
                    {/* Form header */}
                    <div className="mb-10 pb-6 border-b border-ash">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-mono text-graphite tracking-widest uppercase">
                            Laboratory Report Form
                          </p>
                          <p className="font-serif text-2xl font-semibold text-ink mt-1">
                            Field Observation Record
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-mono text-silver tracking-widest uppercase">
                            Form Ref.
                          </p>
                          <p className="font-mono text-xs text-graphite mt-0.5">
                            MC-LAB-{new Date().getFullYear()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section A: Correspondent Details */}
                    <FormSection label="Section A — Correspondent Details">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          label="Full Name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={onChange}
                          placeholder="Dr. Jane Smith"
                          icon={<User className="w-3.5 h-3.5" />}
                          error={errors.name}
                          required
                        />
                        <FormField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={onChange}
                          placeholder="j.smith@university.edu"
                          icon={<Mail className="w-3.5 h-3.5" />}
                          error={errors.email}
                          required
                        />
                      </div>
                      <FormField
                        label="Institution / Affiliation"
                        name="institution"
                        type="text"
                        value={form.institution}
                        onChange={onChange}
                        placeholder="University of Natural Sciences (optional)"
                        icon={<BookOpen className="w-3.5 h-3.5" />}
                      />
                    </FormSection>

                    {/* Section B: Observation Details */}
                    <FormSection label="Section B — Observation Details">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-graphite tracking-widest uppercase flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5" />
                            Subject Matter <span className="text-ink">*</span>
                          </label>
                          <div className="relative">
                            <select
                              name="subject"
                              value={form.subject}
                              onChange={onChange}
                              className={`w-full bg-transparent border-b-2 py-3 text-sm text-ink focus:outline-none transition-colors appearance-none cursor-pointer ${
                                errors.subject ? 'border-ink' : 'border-ash focus:border-charcoal'
                              }`}
                            >
                              <option value="" disabled className="text-silver">Select subject...</option>
                              {subjectOptions.map((opt) => (
                                <option key={opt.value} value={opt.value} className="text-ink bg-parchment">
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          {errors.subject && <ErrorMsg msg={errors.subject} />}
                        </div>
                        <FormField
                          label="Specimen Reference (if applicable)"
                          name="specimenRef"
                          type="text"
                          value={form.specimenRef}
                          onChange={onChange}
                          placeholder="e.g. PLT-001, SLD-003"
                          icon={<FlaskConical className="w-3.5 h-3.5" />}
                        />
                      </div>
                    </FormSection>

                    {/* Section C: Observations */}
                    <FormSection label="Section C — Observations & Notes">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-graphite tracking-widest uppercase flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" />
                          Detailed Observations <span className="text-ink">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={onChange}
                          rows={6}
                          placeholder="Describe your observation, question, or feedback with scientific precision..."
                          className={`w-full bg-transparent border-b-2 py-3 text-sm text-ink focus:outline-none transition-colors resize-none placeholder:text-silver ${
                            errors.message ? 'border-ink' : 'border-ash focus:border-charcoal'
                          }`}
                        />
                        <div className="flex items-center justify-between">
                          {errors.message ? <ErrorMsg msg={errors.message} /> : <span />}
                          <span className="text-[10px] font-mono text-silver">
                            {form.message.length} characters
                          </span>
                        </div>
                      </div>
                    </FormSection>

                    {/* Submit */}
                    <div className="pt-8 flex items-center justify-between border-t border-ash">
                      <p className="text-[10px] font-mono text-silver tracking-wide">
                        * Required fields
                      </p>
                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group inline-flex items-center gap-2.5 glass-card bg-ink/90 hover:bg-ink text-parchment font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-parchment/30 border-t-parchment rounded-full"
                            />
                            Submitting Report...
                          </>
                        ) : (
                          <>
                            Submit Report
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-graphite mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[9px] font-mono text-silver tracking-widest uppercase">{label}</p>
        <p className="text-sm text-charcoal mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function FormSection({ label, children }) {
  return (
    <div className="py-8 border-b border-ash space-y-6">
      <p className="text-[10px] font-mono text-graphite tracking-widest uppercase">{label}</p>
      {children}
    </div>
  );
}

function FormField({ label, name, type, value, onChange, placeholder, icon, error, required }) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-[10px] font-mono text-graphite tracking-widest uppercase flex items-center gap-1.5">
        {icon}
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b-2 py-3 text-sm text-ink focus:outline-none transition-colors placeholder:text-silver ${
          error ? 'border-ink' : 'border-ash focus:border-charcoal'
        }`}
      />
      {error && <ErrorMsg msg={error} />}
    </div>
  );
}

function ErrorMsg({ msg }) {
  return (
    <p className="text-xs text-ink flex items-center gap-1 mt-1">
      <AlertCircle className="w-3 h-3" /> {msg}
    </p>
  );
}
