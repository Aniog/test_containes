import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, FlaskConical, BookOpen, Microscope, Mail, User, MessageSquare, ChevronDown } from 'lucide-react';

const INQUIRY_TYPES = [
  'Specimen Identification',
  'Slide Preparation Protocol',
  'Microscopy Technique',
  'Course Enquiry',
  'Research Collaboration',
  'General Observation',
];

const FIELD_CLASSES = 'w-full bg-transparent border-0 border-b border-mist/80 pb-3 pt-1 font-sans text-sm text-ink placeholder-graphite/60 focus:outline-none focus:border-ink transition-colors duration-300';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', institution: '', email: '', inquiryType: '', subject: '', observation: '', specimenId: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-parchment pt-16 relative overflow-hidden">

      {/* Watermark micrometer scale */}
      <div
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.025]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 600 200" className="w-[80vw] max-w-3xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100" x2="600" y2="100" stroke="#1A1A1A" strokeWidth="2"/>
          {Array.from({ length: 61 }, (_, i) => {
            const x = i * 10;
            const isMajor = i % 10 === 0;
            const isMid   = i % 5 === 0 && !isMajor;
            const h = isMajor ? 30 : isMid ? 18 : 10;
            return (
              <g key={i}>
                <line x1={x} y1={100 - h/2} x2={x} y2={100 + h/2} stroke="#1A1A1A" strokeWidth={isMajor ? 2 : 1}/>
                {isMajor && (
                  <text x={x} y={145} textAnchor="middle" fontSize="12" fill="#1A1A1A" fontFamily="monospace">
                    {i/10 * 100}μm
                  </text>
                )}
              </g>
            );
          })}
          <text x="300" y="30" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontFamily="serif" fontStyle="italic">
            Micrometer Scale — 1:1 Reference
          </text>
        </svg>
      </div>

      {/* Page header */}
      <section className="relative py-20 px-6 md:px-10 border-b border-mist/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-3">Field Communication</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Laboratory<br />
              <span className="italic font-normal text-graphite">Notes</span>
            </h1>
            <p className="font-sans text-charcoal max-w-xl leading-relaxed">
              Submit your observations, enquiries, and specimen identifications to the
              MicroCosmos research team. All submissions are reviewed within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">

          {/* Left sidebar — info */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="section-label mb-4">Contact Channels</p>
              <div className="space-y-4">
                {[
                  { icon: Mail,       label: 'Electronic Mail',  value: 'lab@microcosmos.edu' },
                  { icon: Microscope, label: 'Laboratory',       value: 'Room 4B, Science Wing' },
                  { icon: BookOpen,   label: 'Office Hours',     value: 'Mon–Fri, 09:00–17:00' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-ink/8 border border-ink/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-sans text-graphite tracking-wide mb-0.5">{label}</p>
                      <p className="font-sans text-sm text-ink font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-mist/60 pt-8">
              <p className="section-label mb-4">Submission Guidelines</p>
              <ul className="space-y-3">
                {[
                  'Include the Specimen ID when referencing a specific slide.',
                  'Describe observations with precise anatomical terminology.',
                  'Attach magnification and staining details where applicable.',
                  'All enquiries receive a written response within 48 hours.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-graphite mt-0.5 shrink-0">{String(i+1).padStart(2,'0')}.</span>
                    <span className="font-sans text-xs text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-mist/60 pt-8">
              <div className="bg-ink/4 border border-mist/60 rounded-xl p-5">
                <FlaskConical className="w-5 h-5 text-ink mb-3" strokeWidth={1.5} />
                <p className="font-serif text-sm font-semibold text-ink mb-2">Research Collaboration</p>
                <p className="font-sans text-xs text-charcoal leading-relaxed">
                  We welcome collaborative specimen submissions from accredited institutions.
                  Select "Research Collaboration" in the enquiry type field.
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 bg-white/30 border border-mist/60 rounded-3xl"
                >
                  <div className="w-16 h-16 rounded-full bg-ink/8 border border-ink/15 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-ink" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-ink mb-3">
                    Observation Recorded
                  </h2>
                  <p className="font-sans text-charcoal leading-relaxed max-w-sm mb-2">
                    Your laboratory note has been submitted to the MicroCosmos archive.
                    A confirmation has been dispatched to your registered address.
                  </p>
                  <p className="font-mono text-xs text-graphite">
                    Reference: LN-{Date.now().toString(36).toUpperCase()}
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'', institution:'', email:'', inquiryType:'', subject:'', observation:'', specimenId:'' }); }}
                    className="mt-8 glass-btn text-sm"
                  >
                    Submit Another Note
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  className="bg-white/30 border border-mist/60 rounded-3xl p-8 md:p-10 space-y-10"
                >
                  {/* Form header */}
                  <div className="flex items-center justify-between border-b border-mist/60 pb-6">
                    <div>
                      <p className="section-label mb-1">Laboratory Report</p>
                      <h2 className="font-serif text-2xl font-bold text-ink">Field Observation Form</h2>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-graphite">Form No.</p>
                      <p className="font-mono text-sm text-ink font-medium">MC-OBS-2026</p>
                    </div>
                  </div>

                  {/* Section A — Observer */}
                  <fieldset>
                    <legend className="section-label mb-6 flex items-center gap-2">
                      <User className="w-3.5 h-3.5" />
                      Section A — Observer Details
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={onChange}
                          required
                          placeholder="Dr. Jane Smith"
                          className={FIELD_CLASSES}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Institution</label>
                        <input
                          type="text"
                          name="institution"
                          value={form.institution}
                          onChange={onChange}
                          placeholder="University / Laboratory"
                          className={FIELD_CLASSES}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Electronic Mail *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                          required
                          placeholder="observer@institution.edu"
                          className={FIELD_CLASSES}
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Section B — Enquiry */}
                  <fieldset>
                    <legend className="section-label mb-6 flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Section B — Enquiry Classification
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Enquiry Type *</label>
                        <div className="relative">
                          <select
                            name="inquiryType"
                            value={form.inquiryType}
                            onChange={onChange}
                            required
                            className={`${FIELD_CLASSES} appearance-none pr-8 cursor-pointer`}
                          >
                            <option value="" disabled>Select category…</option>
                            {INQUIRY_TYPES.map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-0 bottom-3.5 w-4 h-4 text-graphite pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Specimen ID (if applicable)</label>
                        <input
                          type="text"
                          name="specimenId"
                          value={form.specimenId}
                          onChange={onChange}
                          placeholder="e.g. SLD-003"
                          className={FIELD_CLASSES}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={onChange}
                          required
                          placeholder="Brief title of your observation or enquiry"
                          className={FIELD_CLASSES}
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Section C — Observation */}
                  <fieldset>
                    <legend className="section-label mb-6 flex items-center gap-2">
                      <Microscope className="w-3.5 h-3.5" />
                      Section C — Observation Record
                    </legend>
                    <div>
                      <label className="block text-xs font-sans text-graphite mb-2 tracking-wide">Detailed Observation *</label>
                      <textarea
                        name="observation"
                        value={form.observation}
                        onChange={onChange}
                        required
                        rows={6}
                        placeholder="Describe your observation with precision. Include magnification used, structures identified, anomalies noted, and any relevant contextual information…"
                        className={`${FIELD_CLASSES} resize-none`}
                      />
                      <div className="flex justify-between mt-2">
                        <span className="font-mono text-xs text-graphite">Minimum 50 characters recommended</span>
                        <span className="font-mono text-xs text-graphite">{form.observation.length} chars</span>
                      </div>
                    </div>
                  </fieldset>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-4 border-t border-mist/60">
                    <p className="font-sans text-xs text-graphite">
                      * Required fields. All submissions are treated with academic confidentiality.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-ink/85 backdrop-blur-sm border border-white/10 rounded-full px-7 py-3.5 font-sans font-medium text-white text-sm hover:bg-ink transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Note
                          <Send className="w-4 h-4" />
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
