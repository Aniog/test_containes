import { useState } from 'react';
import { Send, ShieldAlert, Radio, CheckCircle } from 'lucide-react';

const POWER_SCALES = [
  '< 100 MW — Research / Pilot',
  '100 MW – 500 MW — Regional Grid',
  '500 MW – 1 GW — National Grid Node',
  '1 GW – 5 GW — Industrial Megaplex',
  '5 GW – 20 GW — National Baseload',
  '> 20 GW — Planetary Infrastructure',
];

const INQUIRY_TYPES = [
  'Grid Power Allocation',
  'Reactor Deployment Partnership',
  'Research Collaboration',
  'Government Energy Policy',
  'Investment & Licensing',
  'Tritium Supply Agreement',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: '',
    powerScale: '',
    requirements: '',
    clearance: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <div className="w-16 h-16 border border-[#262626] flex items-center justify-center mb-8">
          <CheckCircle className="w-7 h-7 text-white" />
        </div>
        <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-4">
          Transmission Received
        </div>
        <h2 className="text-3xl font-black tracking-tighter text-white mb-4">
          Request Logged
        </h2>
        <p className="text-[#A0A0A0] text-sm max-w-md leading-relaxed mb-8">
          Your grid infrastructure request has been received and encrypted. A senior fusion deployment engineer will contact you within 48 hours via secure channel.
        </p>
        <div className="border border-[#262626] px-6 py-4 font-mono text-xs text-[#555555] tracking-widest uppercase">
          REF: IGN-{Math.random().toString(36).slice(2, 10).toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Form header */}
      <div className="border-b border-[#262626] px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-4 h-4 text-[#555555]" />
          <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
            Secure Grid Request Protocol
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Radio className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">ENCRYPTED CHANNEL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white telemetry-pulse" />
        </div>
      </div>

      {/* Fields */}
      <div className="divide-y divide-[#262626]">
        {/* Row 1: Name + Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
          <div className="px-8 py-6">
            <label className="block font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">
              Representative Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Dr. Elena Vasquez"
              className="w-full bg-transparent border-b border-[#262626] pb-2 text-white text-sm font-mono placeholder-[#333333] focus:outline-none focus:border-white transition-colors duration-200"
            />
          </div>
          <div className="px-8 py-6">
            <label className="block font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">
              Organization / Government Branch *
            </label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              required
              placeholder="Ministry of Energy — Federal Republic"
              className="w-full bg-transparent border-b border-[#262626] pb-2 text-white text-sm font-mono placeholder-[#333333] focus:outline-none focus:border-white transition-colors duration-200"
            />
          </div>
        </div>

        {/* Row 2: Email + Inquiry Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
          <div className="px-8 py-6">
            <label className="block font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">
              Secure Protocol Email *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="e.vasquez@energy.gov"
              className="w-full bg-transparent border-b border-[#262626] pb-2 text-white text-sm font-mono placeholder-[#333333] focus:outline-none focus:border-white transition-colors duration-200"
            />
          </div>
          <div className="px-8 py-6">
            <label className="block font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">
              Inquiry Classification *
            </label>
            <select
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border-b border-[#262626] pb-2 text-white text-sm font-mono focus:outline-none focus:border-white transition-colors duration-200 cursor-pointer"
            >
              <option value="" className="text-[#555555]">Select Classification</option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t} className="bg-[#0a0a0a] text-white">{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Power Scale */}
        <div className="px-8 py-6">
          <label className="block font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">
            Infrastructure Requirements / Power Allocation Scale (GW) *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {POWER_SCALES.map((scale) => (
              <label
                key={scale}
                className={`flex items-center gap-3 border px-4 py-3 cursor-pointer transition-all duration-200 ${
                  form.powerScale === scale
                    ? 'border-white bg-white/5'
                    : 'border-[#262626] hover:border-[#404040]'
                }`}
              >
                <input
                  type="radio"
                  name="powerScale"
                  value={scale}
                  checked={form.powerScale === scale}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-3 h-3 border flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                    form.powerScale === scale ? 'border-white' : 'border-[#555555]'
                  }`}
                >
                  {form.powerScale === scale && (
                    <div className="w-1.5 h-1.5 bg-white" />
                  )}
                </div>
                <span className="font-mono text-[10px] text-[#A0A0A0] tracking-wide leading-tight">{scale}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Row 4: Requirements textarea */}
        <div className="px-8 py-6">
          <label className="block font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-3">
            Deployment Requirements & Technical Specifications
          </label>
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            rows={6}
            placeholder="Describe your grid deployment requirements, geographic constraints, timeline, regulatory framework, and any specific technical parameters. Include existing infrastructure capacity and integration requirements..."
            className="w-full bg-transparent border border-[#262626] p-4 text-white text-sm font-mono placeholder-[#333333] focus:outline-none focus:border-white transition-colors duration-200 resize-none leading-relaxed"
          />
        </div>

        {/* Row 5: Clearance checkbox */}
        <div className="px-8 py-6">
          <label className="flex items-start gap-4 cursor-pointer group">
            <div
              className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors duration-200 ${
                form.clearance ? 'border-white bg-white' : 'border-[#262626] group-hover:border-[#404040]'
              }`}
            >
              {form.clearance && <div className="w-2.5 h-2.5 bg-black" />}
            </div>
            <input
              type="checkbox"
              name="clearance"
              checked={form.clearance}
              onChange={handleChange}
              className="sr-only"
            />
            <span className="font-mono text-[10px] text-[#555555] tracking-wide leading-relaxed">
              I confirm that this inquiry is submitted on behalf of a verified governmental, institutional, or accredited industrial entity, and I acknowledge that all communications are subject to IAEA non-proliferation protocols and Ignition Dynamics security clearance procedures.
            </span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="border-t border-[#262626] px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase leading-relaxed">
          All transmissions are encrypted via AES-256.<br />
          Response within 48 hours via secure channel.
        </div>
        <button
          type="submit"
          disabled={submitting || !form.clearance}
          className="flex items-center gap-3 bg-white text-black px-8 py-3 font-mono text-xs tracking-widest uppercase hover:bg-[#E0E0E0] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          {submitting ? (
            <>
              <span className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
              Transmitting...
            </>
          ) : (
            <>
              Transmit Request
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
