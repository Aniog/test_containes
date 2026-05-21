import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Microscope, Mail, User, BookOpen, MessageSquare } from 'lucide-react';

const INQUIRY_TYPES = [
  'Specimen Request',
  'Methodology Query',
  'Educational Collaboration',
  'Image Licensing',
  'General Observation',
];

const COLLECTORS = [
  { name: 'Dr. E. Hartmann', specialty: 'Protists & Marine Specimens' },
  { name: 'Prof. A. Lindqvist', specialty: 'Plant Histology' },
  { name: 'Prof. S. Nakamura', specialty: 'Human Cytology' },
  { name: 'Dr. M. Okafor', specialty: 'Neuroscience & Cytology' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    institution: '',
    email: '',
    inquiryType: '',
    specimenRef: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lab note submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-parchment pt-16">
      {/* ── Page header ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono-data text-ash mb-4">Correspondence & Inquiry</p>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ink leading-tight mb-6">
              Laboratory<br />
              <span className="italic font-normal">Notes</span>
            </h1>
            <p className="text-charcoal text-lg leading-relaxed max-w-xl">
              Submit observations, request specimens, or initiate scholarly correspondence
              with the MicroCosmos curatorial team. All inquiries are reviewed within
              five working days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Form ── */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Lab report card header */}
                  <div className="relative mb-10">
                    {/* Watermark */}
                    <div className="absolute -top-4 -right-4 opacity-4 pointer-events-none select-none">
                      <Microscope className="w-48 h-48 text-ink" strokeWidth={0.5} />
                    </div>

                    <div className="border border-silver/40 rounded-2xl p-8 bg-white/10 backdrop-blur-sm relative">
                      {/* Report card header */}
                      <div className="flex items-center justify-between mb-8 pb-6 border-b border-silver/30">
                        <div>
                          <p className="font-mono-data text-ash text-xs mb-1">Form Ref: MC-LAB-2026</p>
                          <h2 className="font-playfair text-2xl font-semibold text-ink">
                            Laboratory Observation Report
                          </h2>
                        </div>
                        <div className="text-right">
                          <p className="font-mono-data text-ash text-xs">Date</p>
                          <p className="font-mono-data text-ink text-sm">
                            {new Date().toLocaleDateString('en-GB', {
                              year: 'numeric', month: 'long', day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Row 1: Name + Institution */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <LabField
                            icon={User}
                            label="Observer Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Dr. Jane Smith"
                            required
                            focused={focused}
                            setFocused={setFocused}
                          />
                          <LabField
                            icon={BookOpen}
                            label="Institution / Affiliation"
                            name="institution"
                            value={form.institution}
                            onChange={handleChange}
                            placeholder="University of Edinburgh"
                            focused={focused}
                            setFocused={setFocused}
                          />
                        </div>

                        {/* Row 2: Email + Inquiry type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <LabField
                            icon={Mail}
                            label="Electronic Address"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="j.smith@university.ac.uk"
                            required
                            focused={focused}
                            setFocused={setFocused}
                          />
                          <div>
                            <label className="font-mono-data text-ash text-xs block mb-2">
                              Nature of Inquiry
                            </label>
                            <select
                              name="inquiryType"
                              value={form.inquiryType}
                              onChange={handleChange}
                              className="input-lab appearance-none cursor-pointer"
                            >
                              <option value="">Select inquiry type…</option>
                              {INQUIRY_TYPES.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Specimen reference */}
                        <LabField
                          icon={Microscope}
                          label="Specimen Reference (optional)"
                          name="specimenRef"
                          value={form.specimenRef}
                          onChange={handleChange}
                          placeholder="e.g. PLT-001, HUM-003"
                          focused={focused}
                          setFocused={setFocused}
                        />

                        {/* Message */}
                        <div>
                          <label className="font-mono-data text-ash text-xs block mb-2 flex items-center gap-1.5">
                            <MessageSquare className="w-3 h-3" strokeWidth={1.5} />
                            Observation Notes & Remarks
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Describe your observation, query, or request in detail…"
                            className="input-lab resize-none"
                          />
                        </div>

                        {/* Divider */}
                        <div className="border-t border-silver/30 pt-6 flex items-center justify-between">
                          <p className="font-mono-data text-silver text-xs">
                            All fields marked * are required
                          </p>
                          <button
                            type="submit"
                            className="glass-btn px-8 py-3 text-ink font-medium flex items-center gap-2 group"
                          >
                            Submit Report
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-ink/8 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-ink" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-ink mb-3">
                    Report Received
                  </h2>
                  <p className="text-charcoal leading-relaxed mb-2">
                    Your laboratory note has been logged under reference{' '}
                    <span className="font-mono-data text-ink">
                      MC-{Date.now().toString().slice(-6)}
                    </span>.
                  </p>
                  <p className="text-ash text-sm">
                    A member of the curatorial team will respond within five working days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', institution: '', email: '', inquiryType: '', specimenRef: '', message: '' }); }}
                    className="mt-8 glass-btn px-6 py-2.5 text-ink text-sm font-medium"
                  >
                    Submit Another Note
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">
            {/* Curatorial team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
            >
              <p className="font-mono-data text-ash mb-4">Curatorial Team</p>
              <div className="space-y-4">
                {COLLECTORS.map(({ name, specialty }) => (
                  <div key={name} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-ink/8 flex items-center justify-center flex-shrink-0">
                      <User className="w-3.5 h-3.5 text-ash" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-ink text-sm font-medium">{name}</p>
                      <p className="text-ash text-xs">{specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Response times */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <p className="font-mono-data text-ash mb-4">Response Protocol</p>
              <div className="space-y-3">
                {[
                  { type: 'Specimen Request', time: '5–7 working days' },
                  { type: 'Methodology Query', time: '2–3 working days' },
                  { type: 'Collaboration', time: '7–10 working days' },
                  { type: 'General', time: '3–5 working days' },
                ].map(({ type, time }) => (
                  <div key={type} className="flex justify-between items-center py-2 border-b border-silver/20 last:border-0">
                    <span className="text-charcoal text-xs">{type}</span>
                    <span className="font-mono-data text-ash text-xs">{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Archive note */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-silver/30 rounded-2xl p-6"
            >
              <p className="font-mono-data text-ash mb-3">Archive Access</p>
              <p className="text-charcoal text-xs leading-relaxed">
                Physical slide loans are available to accredited academic institutions.
                A formal request letter on institutional letterhead is required.
                Digital high-resolution scans are available upon request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LabField({ icon: Icon, label, name, value, onChange, placeholder, type = 'text', required, focused, setFocused }) {
  const isFocused = focused === name;
  return (
    <div>
      <label
        htmlFor={name}
        className={`font-mono-data text-xs block mb-2 flex items-center gap-1.5 transition-colors ${
          isFocused ? 'text-ink' : 'text-ash'
        }`}
      >
        {Icon && <Icon className="w-3 h-3" strokeWidth={1.5} />}
        {label}{required && ' *'}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        placeholder={placeholder}
        required={required}
        className="input-lab"
      />
    </div>
  );
}
