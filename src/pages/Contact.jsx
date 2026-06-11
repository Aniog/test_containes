import { useState } from 'react';
import { Send, ShieldAlert, Globe, Cpu, Activity, CheckCircle } from 'lucide-react';

const powerScales = [
  '< 100 MW — Municipal Grid',
  '100 MW – 500 MW — Regional Grid',
  '500 MW – 1 GW — National Baseload',
  '1 GW – 5 GW — Sovereign Grid Tier I',
  '5 GW – 20 GW — Sovereign Grid Tier II',
  '> 20 GW — Continental Infrastructure',
];

const inquiryTypes = [
  'Power Grid Allocation Request',
  'Research Collaboration',
  'Government Partnership',
  'Tritium Supply Agreement',
  'Reactor Licensing Inquiry',
  'Investment & Equity',
  'Technical Consultation',
];

const contactInfo = [
  {
    icon: Globe,
    label: 'Global Operations HQ',
    value: 'Geneva, Switzerland',
    sub: '46.2044° N, 6.1432° E',
  },
  {
    icon: ShieldAlert,
    label: 'Security Classification',
    value: 'IAEA Certified',
    sub: 'Class IV Fusion Facility',
  },
  {
    icon: Cpu,
    label: 'Secure Protocol',
    value: 'TLS 1.3 / PGP-4096',
    sub: 'End-to-end encrypted',
  },
  {
    icon: Activity,
    label: 'Response SLA',
    value: '72 Hours',
    sub: 'Government / Tier I priority',
  },
];

/* Polar coordinate grid SVG — decorative background */
function PolarGridSVG() {
  const rings = [40, 80, 120, 160, 200, 240];
  const spokes = 12;
  const cx = 280;
  const cy = 280;

  return (
    <svg
      viewBox="0 0 560 560"
      className="w-full h-full"
      style={{ opacity: 0.06 }}
    >
      {rings.map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="white" strokeWidth="0.5" />
      ))}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        const x2 = cx + 240 * Math.cos(rad);
        const y2 = cy + 240 * Math.sin(rad);
        return (
          <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke="white" strokeWidth="0.5" />
        );
      })}
      {/* Tokamak cross-section outline */}
      <ellipse cx={cx} cy={cy} rx={200} ry={140} fill="none" stroke="white" strokeWidth="0.8" />
      <ellipse cx={cx} cy={cy} rx={80} ry={56} fill="none" stroke="white" strokeWidth="0.8" />
      {/* D-shape approximation */}
      <path
        d={`M ${cx} ${cy - 140} Q ${cx + 240} ${cy} ${cx} ${cy + 140}`}
        fill="none"
        stroke="white"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: '',
    powerScale: '',
    requirements: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Representative name required';
    if (!form.organization.trim()) e.organization = 'Organization required';
    if (!form.email.trim()) e.email = 'Secure email required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email format';
    if (!form.inquiryType) e.inquiryType = 'Select inquiry type';
    if (!form.powerScale) e.powerScale = 'Select power allocation scale';
    if (!form.requirements.trim()) e.requirements = 'Infrastructure requirements required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
  };

  const inputClass = (field) =>
    `w-full bg-[#050505] border ${
      errors[field] ? 'border-red-800' : 'border-[#262626] focus:border-[#3a3a3a]'
    } text-white font-mono text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#3a3a3a] tracking-wide`;

  const labelClass = 'font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-2 block';

  return (
    <div className="bg-[#050505] min-h-screen pt-16">

      {/* Page Header */}
      <div className="border-b border-[#262626] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
            <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">
              Grid Requests & Inquiries — Secure Channel
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-white leading-none tracking-tighter mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Request Grid<br />Access
          </h1>
          <p className="text-[#A0A0A0] text-base leading-relaxed max-w-2xl">
            For sovereign grid operators, research institutes, and government agencies seeking power allocation, collaborative infrastructure deployment, or technical consultation with Ignition Dynamics.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

          {/* Left — Contact Info */}
          <div className="lg:border-r border-[#262626] lg:pr-12 mb-12 lg:mb-0">
            <div className="font-mono text-[10px] text-[#606060] tracking-widest uppercase mb-8">
              Operations Contact
            </div>

            <div className="space-y-0 border border-[#262626] mb-10">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="p-5 border-b border-[#262626] last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 border border-[#262626] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3 h-3 text-[#606060]" />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase mb-1">
                        {label}
                      </div>
                      <div className="font-mono text-sm text-white tracking-wide">{value}</div>
                      <div className="font-mono text-[10px] text-[#3a3a3a] tracking-wider mt-0.5">{sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Classification Notice */}
            <div className="border border-[#262626] p-5 bg-[#121212]">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-signal-amber flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[9px] text-signal-amber tracking-widest uppercase mb-2">
                    Security Notice
                  </div>
                  <p className="font-mono text-[10px] text-[#606060] leading-relaxed tracking-wide">
                    All communications are encrypted via TLS 1.3. Grid allocation requests are subject to IAEA non-proliferation review. Government inquiries receive priority processing within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-2 lg:pl-12 relative">

            {/* Decorative polar grid — bottom right */}
            <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none overflow-hidden">
              <PolarGridSVG />
            </div>

            {status === 'success' ? (
              <div className="relative z-10 border border-[#262626] bg-[#121212] p-12 flex flex-col items-center text-center">
                <div className="w-12 h-12 border border-[#00FF88] flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase mb-4">
                  Transmission Received
                </div>
                <h2 className="font-grotesk font-bold text-white text-3xl tracking-tight mb-4">
                  Request Logged
                </h2>
                <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-md mb-8">
                  Your grid access request has been received and encrypted. Our operations team will review your infrastructure requirements and respond within 72 hours via secure channel.
                </p>
                <div className="border border-[#262626] px-6 py-3 bg-[#050505] w-full max-w-sm">
                  <div className="font-mono text-[9px] text-[#606060] tracking-widest uppercase mb-1">
                    Reference ID
                  </div>
                  <div className="font-mono text-sm text-white tracking-widest">
                    IGN-{Date.now().toString(36).toUpperCase()}
                  </div>
                </div>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', organization: '', email: '', inquiryType: '', powerScale: '', requirements: '' }); }}
                  className="mt-8 border border-[#262626] text-white px-8 py-3 font-mono text-xs tracking-widest uppercase hover:border-white transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6" noValidate>

                {/* Form Header */}
                <div className="border border-[#262626] bg-[#121212] px-6 py-4 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] telemetry-live" />
                  <span className="font-mono text-[10px] text-[#606060] tracking-widest uppercase">
                    Secure Transmission Form — Protocol IGN-7
                  </span>
                </div>

                {/* Row 1: Name + Organization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Representative Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Doe"
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="font-mono text-[9px] text-red-600 tracking-wider mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Organization / Government Branch *</label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Ministry of Energy, Republic of..."
                      className={inputClass('organization')}
                    />
                    {errors.organization && (
                      <p className="font-mono text-[9px] text-red-600 tracking-wider mt-1">{errors.organization}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email */}
                <div>
                  <label className={labelClass}>Secure Protocol Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="secure@ministry.gov"
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="font-mono text-[9px] text-red-600 tracking-wider mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Row 3: Inquiry Type + Power Scale */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Inquiry Type *</label>
                    <select
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      className={`${inputClass('inquiryType')} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#121212]">{t}</option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <p className="font-mono text-[9px] text-red-600 tracking-wider mt-1">{errors.inquiryType}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Power Allocation Scale (GW) *</label>
                    <select
                      name="powerScale"
                      value={form.powerScale}
                      onChange={handleChange}
                      className={`${inputClass('powerScale')} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select power scale</option>
                      {powerScales.map((s) => (
                        <option key={s} value={s} className="bg-[#121212]">{s}</option>
                      ))}
                    </select>
                    {errors.powerScale && (
                      <p className="font-mono text-[9px] text-red-600 tracking-wider mt-1">{errors.powerScale}</p>
                    )}
                  </div>
                </div>

                {/* Row 4: Requirements */}
                <div>
                  <label className={labelClass}>Infrastructure Requirements / Technical Specifications *</label>
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your grid infrastructure requirements, deployment timeline, geographic region, and any specific technical constraints or regulatory considerations..."
                    className={`${inputClass('requirements')} resize-none leading-relaxed`}
                  />
                  {errors.requirements && (
                    <p className="font-mono text-[9px] text-red-600 tracking-wider mt-1">{errors.requirements}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-mono text-[9px] text-[#3a3a3a] tracking-wider leading-relaxed max-w-xs">
                    By submitting, you consent to IAEA non-proliferation review and secure data processing under IGN-7 protocol.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex items-center gap-3 bg-white text-black px-8 py-3.5 font-mono text-xs tracking-widest uppercase hover:bg-[#A0A0A0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span>Transmitting</span>
                        <div className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Transmit Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
