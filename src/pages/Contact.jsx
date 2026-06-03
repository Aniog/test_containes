import { useState } from 'react';
import { ArrowRight, ShieldAlert, Radio, Zap, Activity } from 'lucide-react';

const POWER_SCALES = [
  '< 100 MW (Municipal)',
  '100 MW – 500 MW (Regional)',
  '500 MW – 1 GW (National Grid Node)',
  '1 GW – 5 GW (Industrial Megaplex)',
  '5 GW – 20 GW (National Baseload)',
  '> 20 GW (Continental Grid)',
];

const REACTOR_TYPES = [
  'Daedalus Tokamak (MCF)',
  'Helios Laser Array (ICF)',
  'Prometheus MIF Engine',
  'Hybrid Multi-Architecture',
  'Research & Development License',
];

const CONTACT_INFO = [
  { icon: Radio, label: 'Secure Channel', value: 'grid@ignitiondynamics.corp' },
  { icon: ShieldAlert, label: 'Emergency Protocol', value: '+1 (800) IGN-FUSE' },
  { icon: Activity, label: 'Response SLA', value: '< 24 hours (Tier-1)' },
  { icon: Zap, label: 'Classification', value: 'IAEA Safeguards Compliant' },
];

/* Tokamak SVG schematic — decorative background */
function TokamakSchematic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full opacity-[0.04]"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
    >
      {/* Outer vessel */}
      <ellipse cx="200" cy="200" rx="180" ry="160" />
      <ellipse cx="200" cy="200" rx="160" ry="140" />
      {/* Plasma chamber */}
      <ellipse cx="200" cy="200" rx="100" ry="80" />
      <ellipse cx="200" cy="200" rx="80" ry="60" />
      <ellipse cx="200" cy="200" rx="50" ry="35" />
      {/* TF coils */}
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const x = 200 + Math.cos(angle) * 170;
        const y = 200 + Math.sin(angle) * 150;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="8"
            ry="14"
            transform={`rotate(${(angle * 180) / Math.PI}, ${x}, ${y})`}
          />
        );
      })}
      {/* Divertor */}
      <path d="M 120 310 Q 200 340 280 310" />
      <path d="M 130 320 Q 200 350 270 320" />
      {/* Polar grid */}
      {[40, 80, 120, 160].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} strokeDasharray="2 4" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + Math.cos(angle) * 180}
            y2={200 + Math.sin(angle) * 160}
            strokeDasharray="2 6"
          />
        );
      })}
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    branch: '',
    reactor: '',
    power: '',
    requirements: '',
    classification: false,
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Representative name is required.';
    if (!form.organization.trim()) return 'Organization is required.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid secure email is required.';
    if (!form.requirements.trim()) return 'Infrastructure requirements are required.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }
    setStatus('submitting');
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const inputClass =
    'w-full bg-[#050505] border border-[#262626] text-white text-xs font-mono px-4 py-3 focus:outline-none focus:border-[#5a5a5a] transition-colors placeholder:text-[#3a3a3a]';
  const labelClass = 'block text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-2';

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Page Header */}
      <div className="border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-4">
            IGN-DYN / GRID REQUEST / PROTOCOL-7
          </div>
          <h1 className="text-5xl md:text-6xl font-grotesk font-semibold text-white leading-tight mb-4">
            Grid Request &<br />
            <span className="text-[#5a5a5a]">Infrastructure Inquiry</span>
          </h1>
          <p className="text-sm text-[#A0A0A0] max-w-2xl leading-relaxed">
            Secure channel for global grid operators, sovereign governments, research institutes, and industrial partners to request fusion power allocation or collaborative infrastructure deployment.
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">

          {/* Left: Contact Info + Schematic */}
          <div className="lg:col-span-1">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-6">
              Contact Channels
            </div>

            <div className="space-y-px border border-[#262626] mb-12">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-5 bg-[#050505] border-b border-[#262626] last:border-0">
                  <div className="w-7 h-7 border border-[#262626] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#5a5a5a]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-1">{label}</div>
                    <div className="text-xs font-mono text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Protocol Notes */}
            <div className="border border-[#262626] p-6 mb-12">
              <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-4">
                Submission Protocol
              </div>
              <ul className="space-y-3">
                {[
                  'All submissions are encrypted via TLS 1.3 and logged under IAEA safeguards protocol.',
                  'Tier-1 government and utility requests receive response within 24 hours.',
                  'Research institute inquiries are reviewed by our Physics Advisory Board.',
                  'Power allocation requests require NDA execution prior to technical disclosure.',
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[9px] font-mono text-[#5a5a5a] mt-0.5 shrink-0">0{i + 1}</span>
                    <span className="text-[10px] font-mono text-[#5a5a5a] leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tokamak Schematic */}
            <div className="relative border border-[#262626] aspect-square overflow-hidden">
              <div className="absolute inset-0">
                <TokamakSchematic />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[9px] font-mono tracking-widest uppercase text-[#5a5a5a]">
                  Daedalus-IV — Poloidal Cross-Section
                </div>
                <div className="text-[9px] font-mono text-[#3a3a3a] mt-1">
                  Schematic: IGN/ENG/DWG-0042
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="border border-[#262626] p-12 text-center">
                <div className="w-12 h-12 border border-[#262626] flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a] mb-4">
                  Transmission Received
                </div>
                <h2 className="text-2xl font-grotesk font-semibold text-white mb-4">
                  Request Logged Successfully
                </h2>
                <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-md mx-auto mb-8">
                  Your grid request has been encrypted and transmitted to our Infrastructure Allocation team. Reference ID: <span className="font-mono text-white">IGN-{Date.now().toString(36).toUpperCase()}</span>
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 blink" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#5a5a5a]">
                    Expect response within 24 hours
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-0">
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#5a5a5a] mb-8 pb-4 border-b border-[#262626]">
                  Grid Access Request Form — Protocol 7
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>Representative Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Dr. Jane Oppenheimer"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>Organization / Government Branch *</label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={onChange}
                      placeholder="Ministry of Energy, Republic of..."
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626] border-t-0">
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>Secure Protocol Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="secure@ministry.gov"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>Department / Division</label>
                    <input
                      type="text"
                      name="branch"
                      value={form.branch}
                      onChange={onChange}
                      placeholder="Nuclear Energy Division"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626] border-t-0">
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>Reactor Architecture</label>
                    <select
                      name="reactor"
                      value={form.reactor}
                      onChange={onChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#050505]">Select architecture...</option>
                      {REACTOR_TYPES.map((r) => (
                        <option key={r} value={r} className="bg-[#050505]">{r}</option>
                      ))}
                    </select>
                  </div>
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>Power Allocation Scale (GW)</label>
                    <select
                      name="power"
                      value={form.power}
                      onChange={onChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#050505]">Select scale...</option>
                      {POWER_SCALES.map((p) => (
                        <option key={p} value={p} className="bg-[#050505]">{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Requirements */}
                <div className="border border-[#262626] border-t-0">
                  <div className="bg-[#050505] p-6">
                    <label className={labelClass}>
                      Infrastructure Requirements / Power Allocation Details *
                    </label>
                    <textarea
                      name="requirements"
                      value={form.requirements}
                      onChange={onChange}
                      rows={6}
                      placeholder="Describe your infrastructure requirements, deployment timeline, grid integration specifications, and any special technical constraints. Include geographic coordinates, existing grid topology, and regulatory framework if applicable..."
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>
                </div>

                {/* Classification checkbox */}
                <div className="border border-[#262626] border-t-0 bg-[#050505] p-6">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        name="classification"
                        checked={form.classification}
                        onChange={onChange}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        form.classification ? 'border-white bg-white' : 'border-[#262626] bg-[#050505]'
                      }`}>
                        {form.classification && (
                          <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#5a5a5a] leading-relaxed">
                      I confirm this request is submitted on behalf of a legitimate government body, research institution, or licensed utility operator, and I consent to IAEA safeguards verification procedures.
                    </span>
                  </label>
                </div>

                {/* Error */}
                {error && (
                  <div className="border border-[#262626] border-t-0 bg-[#050505] px-6 py-4">
                    <p className="text-xs font-mono text-red-400">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <div className="border border-[#262626] border-t-0 bg-[#050505] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#5a5a5a]" />
                    <span className="text-[10px] font-mono text-[#5a5a5a]">
                      Encrypted via TLS 1.3 — IAEA Protocol 7
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 text-[11px] font-mono tracking-widest uppercase hover:bg-[#F0F0F0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>Transmitting...</>
                    ) : (
                      <>
                        Transmit Request
                        <ArrowRight className="w-3.5 h-3.5" />
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
