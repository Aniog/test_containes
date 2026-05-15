import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Microscope } from 'lucide-react';

const SUBJECTS = [
  'General Enquiry',
  'Specimen Identification',
  'Slide Preparation Query',
  'Curriculum Feedback',
  'Technical Issue',
  'Collaboration Proposal',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    institution: '',
    email: '',
    subject: '',
    observations: '',
    consent: false,
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
  };

  return (
    <div className="bg-[#F2F0E9] min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Micrometer scale watermark */}
      <div className="scale-watermark" aria-hidden="true">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#1A1A1A" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" stroke="#1A1A1A" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="120" stroke="#1A1A1A" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="40" stroke="#1A1A1A" strokeWidth="0.5" />
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const r1 = i % 9 === 0 ? 260 : i % 3 === 0 ? 270 : 275;
            return (
              <line
                key={i}
                x1={300 + 280 * Math.cos(angle)}
                y1={300 + 280 * Math.sin(angle)}
                x2={300 + r1 * Math.cos(angle)}
                y2={300 + r1 * Math.sin(angle)}
                stroke="#1A1A1A"
                strokeWidth="0.8"
              />
            );
          })}
          <text x="300" y="80" textAnchor="middle" fontSize="10" fill="#1A1A1A" fontFamily="Inter">
            µm SCALE
          </text>
          <line x1="220" y1="570" x2="380" y2="570" stroke="#1A1A1A" strokeWidth="1" />
          {[0, 40, 80, 120, 160].map((x, i) => (
            <g key={i}>
              <line x1={220 + x} y1="565" x2={220 + x} y2="575" stroke="#1A1A1A" strokeWidth="0.8" />
              <text x={220 + x} y="585" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="Inter">
                {i * 25}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p
            className="text-[#9E9E9E] text-xs tracking-[0.35em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Laboratory Communication
          </p>
          <h1
            className="text-[#1A1A1A] text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lab Notes
          </h1>
          <div className="h-px bg-[#E0DED7] mb-5" />
          <p
            className="text-[#6B6B6B] text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Submit your observations, queries, and field notes to the instructional team.
            All correspondence is reviewed within two working days.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(242,240,233,0.6)',
            border: '1px solid rgba(26,26,26,0.1)',
            boxShadow: '0 4px 40px rgba(26,26,26,0.07)',
          }}
        >
          {/* Report card header bar */}
          <div
            className="px-8 py-4 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(26,26,26,0.08)', background: 'rgba(26,26,26,0.03)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                <Microscope className="w-3.5 h-3.5 text-[#F2F0E9]" />
              </div>
              <div>
                <p
                  className="text-[#1A1A1A] text-xs font-semibold tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  LABORATORY REPORT FORM
                </p>
                <p
                  className="text-[#9E9E9E] text-[10px] tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  MicroCosmos Educational Platform · Form MC-LN/01
                </p>
              </div>
            </div>
            <p
              className="text-[#9E9E9E] text-[10px] tracking-wide hidden sm:block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Form body */}
          {status === 'success' ? (
            <div className="px-8 py-16 flex flex-col items-center text-center gap-4">
              <CheckCircle className="w-12 h-12 text-[#3D3D3D]" />
              <h3
                className="text-[#1A1A1A] text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Submission Received
              </h3>
              <p
                className="text-[#6B6B6B] text-sm max-w-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Your laboratory notes have been logged and will be reviewed by the instructional
                team within two working days. A confirmation has been dispatched to your registered
                email address.
              </p>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', institution: '', email: '', subject: '', observations: '', consent: false }); }}
                className="mt-4 glass-btn rounded-full px-6 py-2 text-[#1A1A1A] text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="px-8 py-8 flex flex-col gap-8">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-8">
                <LabField
                  label="Observer Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Full name"
                  required
                />
                <LabField
                  label="Institution / Department"
                  name="institution"
                  value={form.institution}
                  onChange={onChange}
                  placeholder="University or laboratory"
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-8">
                <LabField
                  label="Electronic Mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="correspondence@institution.edu"
                  required
                />
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#9E9E9E] text-[10px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Subject Classification
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    required
                    className="input-lab"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select subject…</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Observations */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[#9E9E9E] text-[10px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Observations & Notes
                </label>
                <textarea
                  name="observations"
                  value={form.observations}
                  onChange={onChange}
                  required
                  rows={5}
                  placeholder="Record your observations, queries, or feedback with scientific precision…"
                  className="input-lab resize-none"
                  style={{ borderBottom: '1.5px solid #3D3D3D', paddingBottom: '8px' }}
                />
              </div>

              {/* Consent */}
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
                  <div
                    className="w-4 h-4 rounded-sm border transition-colors"
                    style={{
                      borderColor: form.consent ? '#1A1A1A' : '#9E9E9E',
                      background: form.consent ? '#1A1A1A' : 'transparent',
                    }}
                  >
                    {form.consent && (
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <path d="M3 8l3.5 3.5L13 5" stroke="#F2F0E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <p
                  className="text-[#6B6B6B] text-xs leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  I consent to the storage and processing of this submission for educational
                  correspondence purposes, in accordance with institutional data governance policies.
                </p>
              </label>

              {/* Submit */}
              <div className="flex justify-end pt-2">
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-btn rounded-full px-8 py-3 flex items-center gap-2.5 text-[#1A1A1A] text-sm font-medium tracking-widest uppercase disabled:opacity-60"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#1A1A1A] border-t-transparent rounded-full"
                      />
                      Transmitting…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Report
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Response Time', value: '2 Working Days' },
            { label: 'Office Hours', value: 'Mon–Fri, 09:00–17:00' },
            { label: 'Correspondence', value: 'lab@microcosmos.edu' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="glass rounded-xl px-5 py-4 text-center"
              style={{ boxShadow: '0 2px 12px rgba(26,26,26,0.05)' }}
            >
              <p
                className="text-[#9E9E9E] text-[10px] tracking-[0.25em] uppercase mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </p>
              <p
                className="text-[#1A1A1A] text-sm font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function LabField({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[#9E9E9E] text-[10px] tracking-[0.25em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}{required && <span className="text-[#6B6B6B] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="input-lab"
      />
    </div>
  );
}
