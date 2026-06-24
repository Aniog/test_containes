import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Microscope, AlertCircle } from 'lucide-react';

const SUBJECTS = [
  'General Inquiry',
  'Slide Identification',
  'Staining Protocol',
  'Microscopy Technique',
  'Course Feedback',
  'Technical Issue',
];

const FIELD_LABELS = {
  name: 'Observer Name',
  institution: 'Institution / Department',
  email: 'Electronic Mail Address',
  subject: 'Subject of Inquiry',
  specimenId: 'Specimen / Slide Reference (optional)',
  message: 'Observation Notes & Remarks',
};

const INITIAL = {
  name: '',
  institution: '',
  email: '',
  subject: '',
  specimenId: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject) e.subject = 'Required';
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Minimum 20 characters';
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
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
    setForm(INITIAL);
  };

  return (
    <div className="min-h-screen bg-parchment pt-16 relative overflow-hidden">

      {/* Micrometer scale watermark */}
      <div
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center"
        style={{ opacity: 0.025, zIndex: 0 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 600 200" className="w-[80vw] max-w-3xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100" x2="600" y2="100" stroke="#1A1A1A" strokeWidth="2" />
          {Array.from({ length: 61 }, (_, i) => {
            const x = i * 10;
            const isMajor = i % 10 === 0;
            const isMid = i % 5 === 0;
            const h = isMajor ? 40 : isMid ? 24 : 14;
            return (
              <g key={i}>
                <line x1={x} y1={100 - h / 2} x2={x} y2={100 + h / 2} stroke="#1A1A1A" strokeWidth={isMajor ? 2 : 1} />
                {isMajor && (
                  <text x={x} y={100 + h / 2 + 16} textAnchor="middle" fontSize="12" fill="#1A1A1A" fontFamily="Courier Prime, monospace">
                    {i * 10} µm
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="relative z-10 border-b border-silver/40 py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="specimen-label mb-4">Laboratory Communication Form</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Lab Notes &<br />
              <span className="italic font-normal">Feedback</span>
            </h1>
            <p className="font-inter text-sm text-charcoal leading-relaxed max-w-lg">
              Submit your observations, inquiries, and feedback using the standardised
              laboratory report form below. All correspondence is reviewed by the
              supervising instructor within two working days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-16">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              className="glass-card p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle className="w-12 h-12 text-ink mx-auto mb-6" strokeWidth={1} />
              <h2 className="font-playfair text-3xl font-bold text-ink mb-3">
                Submission Received
              </h2>
              <p className="font-inter text-sm text-charcoal leading-relaxed mb-8 max-w-sm mx-auto">
                Your laboratory notes have been logged and forwarded to the supervising
                instructor. A response will be issued within two working days.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="glass-btn font-inter text-sm font-medium px-8 py-3 rounded-full text-ink"
                style={{ border: '1px solid rgba(26,26,26,0.20)' }}
              >
                Submit Another Report
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Report card header */}
              <div className="border border-silver/50 rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm">
                {/* Header strip */}
                <div className="bg-ink px-8 py-5 flex items-center justify-between">
                  <div>
                    <p className="specimen-label text-ash text-[0.6rem]">MicroCosmos — Dept. of Biological Sciences</p>
                    <p className="font-playfair text-lg font-bold text-parchment mt-0.5">Laboratory Report Form</p>
                  </div>
                  <Microscope className="w-6 h-6 text-ash" strokeWidth={1} />
                </div>

                {/* Form body */}
                <div className="px-8 py-10 flex flex-col gap-8">

                  {/* Row 1: Name + Institution */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {['name', 'institution'].map((field) => (
                      <LabField
                        key={field}
                        name={field}
                        label={FIELD_LABELS[field]}
                        value={form[field]}
                        onChange={onChange}
                        error={errors[field]}
                        required={field !== 'institution'}
                      />
                    ))}
                  </div>

                  {/* Row 2: Email + Subject */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <LabField
                      name="email"
                      label={FIELD_LABELS.email}
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      error={errors.email}
                      required
                    />
                    <div className="flex flex-col gap-1">
                      <label className="specimen-label text-[0.6rem]">
                        {FIELD_LABELS.subject} <span className="text-ink">*</span>
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={onChange}
                        className="lab-input font-inter text-sm"
                        style={{ paddingBottom: '0.5rem' }}
                      >
                        <option value="" disabled>Select subject…</option>
                        {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.subject && <FieldError msg={errors.subject} />}
                    </div>
                  </div>

                  {/* Specimen reference */}
                  <LabField
                    name="specimenId"
                    label={FIELD_LABELS.specimenId}
                    value={form.specimenId}
                    onChange={onChange}
                    placeholder="e.g. SLD-003, MC-001"
                  />

                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <label className="specimen-label text-[0.6rem]">
                      {FIELD_LABELS.message} <span className="text-ink">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={6}
                      placeholder="Record your observations, questions, or feedback here…"
                      className="lab-input resize-none font-inter text-sm"
                      style={{ borderBottom: '1.5px solid #3D3D3D', paddingTop: '0.5rem' }}
                    />
                    {errors.message && <FieldError msg={errors.message} />}
                    <p className="font-inter text-xs text-ash mt-1 text-right">
                      {form.message.length} characters
                    </p>
                  </div>

                  {/* Divider */}
                  <hr className="ink-divider" />

                  {/* Submit */}
                  <div className="flex items-center justify-between">
                    <p className="font-inter text-xs text-graphite">
                      Fields marked <span className="text-ink font-semibold">*</span> are required.
                    </p>
                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="glass-btn font-inter font-semibold text-sm px-8 py-3 rounded-full flex items-center gap-2 text-ink disabled:opacity-60"
                      style={{ border: '1px solid rgba(26,26,26,0.20)' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {status === 'submitting' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                          />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Report
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Contact info */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Office Hours', value: 'Mon–Fri, 09:00–17:00' },
            { label: 'Response Time', value: 'Within 2 working days' },
            { label: 'Department', value: 'Biological Sciences' },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card px-5 py-4 text-center">
              <p className="specimen-label text-[0.6rem] mb-1">{label}</p>
              <p className="font-inter text-sm text-ink font-medium">{value}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-silver/40 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-graphite" strokeWidth={1.5} />
            <span className="font-playfair text-sm font-semibold text-ink">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-graphite">
            © 2026 Department of Biological Sciences.
          </p>
        </div>
      </footer>
    </div>
  );
}

function LabField({ name, label, type = 'text', value, onChange, error, required = false, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="specimen-label text-[0.6rem]">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="lab-input font-inter text-sm"
        autoComplete="off"
      />
      {error && <FieldError msg={error} />}
    </div>
  );
}

function FieldError({ msg }) {
  return (
    <span className="flex items-center gap-1 font-inter text-xs" style={{ color: '#5a5a5a' }}>
      <AlertCircle className="w-3 h-3" />
      {msg}
    </span>
  );
}
