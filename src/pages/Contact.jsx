import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Microscope, BookOpen, FlaskConical, Mail, MapPin, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const subjectOptions = [
  { value: '', label: 'Select subject...' },
  { value: 'specimen-inquiry', label: 'Specimen Inquiry' },
  { value: 'slide-request', label: 'Slide Request' },
  { value: 'lab-feedback', label: 'Laboratory Feedback' },
  { value: 'course-question', label: 'Course Question' },
  { value: 'technical-issue', label: 'Technical Issue' },
  { value: 'other', label: 'Other Observation' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', studentId: '', subject: '', message: '', consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-fog/40">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="section-label mb-4">Laboratory Communication</p>
            <h1 className="display-heading text-5xl md:text-6xl font-bold mb-5">
              Lab Notes &amp; <span className="italic font-light">Feedback</span>
            </h1>
            <p className="font-sans text-charcoal max-w-xl leading-relaxed">
              Submit your observations, questions, and specimen requests directly to the
              laboratory instructor. All correspondence is reviewed within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ── Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full border border-ink/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-ink" strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ink mb-3">
                  Observation Recorded
                </h2>
                <p className="font-sans text-charcoal leading-relaxed mb-6 max-w-sm mx-auto">
                  Your laboratory notes have been submitted successfully. The instructor
                  will review your correspondence and respond within 48 hours.
                </p>
                <p className="font-mono text-xs text-silver">
                  Reference: LAB-{Date.now().toString(36).toUpperCase()}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', studentId: '', subject: '', message: '', consent: false }); }}
                  className="mt-6 glass-btn px-6 py-2.5 text-sm"
                >
                  Submit Another Note
                </button>
              </motion.div>
            ) : (
              <div className="relative">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl">
                  <div className="opacity-[0.025] transform rotate-[-15deg]">
                    <Microscope className="w-96 h-96 text-ink" strokeWidth={0.5} />
                  </div>
                </div>

                {/* Lab Report Card */}
                <div className="relative glass-card p-8 md:p-10">
                  {/* Report Header */}
                  <div className="border-b border-fog/50 pb-6 mb-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="section-label mb-1">Laboratory Report Form</p>
                        <h2 className="font-serif text-xl font-bold text-ink">
                          Field Observation Record
                        </h2>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-silver">Form No.</p>
                        <p className="font-mono text-sm text-ash">MC-LAB-001</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-8">
                    {/* Observer Information */}
                    <div>
                      <p className="section-label mb-5">I. Observer Information</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-xs text-ash block mb-2">
                            Full Name <span className="text-ink">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            required
                            placeholder="Dr. / Mr. / Ms. ..."
                            className="lab-input font-sans text-sm"
                          />
                        </div>
                        <div>
                          <label className="font-mono text-xs text-ash block mb-2">
                            Student / Staff ID
                          </label>
                          <input
                            type="text"
                            name="studentId"
                            value={form.studentId}
                            onChange={onChange}
                            placeholder="e.g. BIO-2024-0042"
                            className="lab-input font-sans text-sm font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                      <p className="section-label mb-5">II. Contact Details</p>
                      <div>
                        <label className="font-mono text-xs text-ash block mb-2">
                          Institutional Email <span className="text-ink">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                          required
                          placeholder="observer@institution.edu"
                          className="lab-input font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Observation Subject */}
                    <div>
                      <p className="section-label mb-5">III. Subject of Inquiry</p>
                      <div>
                        <label className="font-mono text-xs text-ash block mb-2">
                          Category <span className="text-ink">*</span>
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={onChange}
                          required
                          className="lab-input font-sans text-sm appearance-none cursor-pointer"
                        >
                          {subjectOptions.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Observation Notes */}
                    <div>
                      <p className="section-label mb-5">IV. Observation Notes</p>
                      <div>
                        <label className="font-mono text-xs text-ash block mb-2">
                          Detailed Notes <span className="text-ink">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={onChange}
                          required
                          rows={6}
                          placeholder="Record your observations, questions, or specimen requests with as much detail as possible..."
                          className="lab-input font-sans text-sm resize-none"
                        />
                        <p className="font-mono text-xs text-silver mt-2 text-right">
                          {form.message.length} characters
                        </p>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="border-t border-fog/40 pt-6">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-0.5">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={form.consent}
                            onChange={onChange}
                            required
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border transition-all ${
                            form.consent ? 'bg-ink border-ink' : 'border-ink/30 group-hover:border-ink/60'
                          }`}>
                            {form.consent && (
                              <svg className="w-4 h-4 text-parchment" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="font-sans text-xs text-ash leading-relaxed">
                          I confirm that the information provided is accurate and I consent to
                          the instructor retaining this correspondence for educational records.
                        </span>
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between pt-2">
                      <p className="font-mono text-xs text-silver">
                        * Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={loading || !form.consent}
                        className="glass-btn px-7 py-3 text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full"
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" strokeWidth={1.5} />
                            Submit Report
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            {/* Contact Info */}
            <div className="glass-card p-6">
              <p className="section-label mb-5">Laboratory Contact</p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'instructor@microcosmos.edu' },
                  { icon: MapPin, label: 'Location', value: 'Microscopy Suite, Room 204\nBiology Building, Level 2' },
                  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 09:00–17:00\nSat: 10:00–13:00' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl border border-fog/60 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-ash" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-silver mb-0.5">{label}</p>
                      <p className="font-sans text-sm text-ink whitespace-pre-line">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6">
              <p className="section-label mb-5">Quick Reference</p>
              <div className="space-y-3">
                {[
                  { icon: Microscope, title: 'Specimen Protocols', desc: 'Standard preparation and staining procedures' },
                  { icon: BookOpen, title: 'Course Syllabus', desc: 'Weekly schedule and assessment criteria' },
                  { icon: FlaskConical, title: 'Lab Safety Manual', desc: 'Biosafety Level 1 & 2 guidelines' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/20 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg border border-fog/60 flex items-center justify-center flex-shrink-0 group-hover:border-ink/30 transition-colors">
                      <Icon className="w-4 h-4 text-ash" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-ink">{title}</p>
                      <p className="font-sans text-xs text-silver">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card p-6 border-l-2 border-ink/20">
              <p className="font-mono text-xs text-silver mb-2">Response Policy</p>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                All laboratory correspondence is reviewed within{' '}
                <span className="font-medium text-ink">48 working hours</span>.
                Urgent specimen requests should be marked accordingly in the subject field.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
