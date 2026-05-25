import { useState } from 'react';
import { Send, ShieldAlert, Radio, CheckCircle } from 'lucide-react';

const powerScales = [
  '< 100 MW — Municipal Grid',
  '100 MW – 500 MW — Regional Grid',
  '500 MW – 1 GW — National Backbone',
  '1 GW – 2.4 GW — Industrial Complex',
  '> 2.4 GW — Multi-Site Deployment',
];

const requestTypes = [
  'Power Allocation Request',
  'Research Collaboration',
  'Government Infrastructure',
  'Investor Relations',
  'Technology Licensing',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    requestType: '',
    powerScale: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-[#0a0a0a] border ${
      focused === field ? 'border-neutral-400' : 'border-[#262626]'
    } text-white font-mono text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-neutral-700`;

  const labelClass = 'font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase mb-2 block';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <div className="w-12 h-12 border border-white flex items-center justify-center mb-6">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase mb-4">
          Transmission Received
        </p>
        <h2 className="font-mono text-3xl text-white uppercase font-light mb-4">
          Request Logged
        </h2>
        <p className="text-neutral-500 text-sm max-w-md leading-relaxed mb-2">
          Your infrastructure request has been encrypted and routed to the Ignition Dynamics Grid Operations team.
        </p>
        <p className="font-mono text-[10px] text-neutral-700 tracking-widest">
          EXPECTED RESPONSE: 48–72 HOURS // SECURE CHANNEL
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
      {/* Form header */}
      <div className="border border-[#262626] mb-px">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#262626] bg-[#0a0a0a]">
          <Radio className="w-3.5 h-3.5 text-neutral-600" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
            Secure Grid Request Terminal — Protocol v4.2
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] text-neutral-600 uppercase">Encrypted</span>
          </div>
        </div>

        <div className="p-6 space-y-6 bg-[#050505]">
          {/* Row 1: Name + Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Representative Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder="Dr. Elena Vasquez"
                required
                className={inputClass('name')}
              />
            </div>
            <div>
              <label className={labelClass}>Organization / Government Branch</label>
              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={onChange}
                onFocus={() => setFocused('organization')}
                onBlur={() => setFocused(null)}
                placeholder="ITER Organization / DOE"
                required
                className={inputClass('organization')}
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div>
            <label className={labelClass}>Secure Protocol Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              placeholder="e.vasquez@iter.org"
              required
              className={inputClass('email')}
            />
          </div>

          {/* Row 3: Request Type + Power Scale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Request Classification</label>
              <select
                name="requestType"
                value={form.requestType}
                onChange={onChange}
                onFocus={() => setFocused('requestType')}
                onBlur={() => setFocused(null)}
                required
                className={`${inputClass('requestType')} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select type...</option>
                {requestTypes.map(t => (
                  <option key={t} value={t} className="bg-[#0a0a0a]">{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Power Allocation Scale (GW)</label>
              <select
                name="powerScale"
                value={form.powerScale}
                onChange={onChange}
                onFocus={() => setFocused('powerScale')}
                onBlur={() => setFocused(null)}
                required
                className={`${inputClass('powerScale')} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select scale...</option>
                {powerScales.map(s => (
                  <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Requirements */}
          <div>
            <label className={labelClass}>Infrastructure Requirements / Deployment Scope</label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={onChange}
              onFocus={() => setFocused('requirements')}
              onBlur={() => setFocused(null)}
              placeholder="Describe your grid integration requirements, geographic deployment zone, timeline, and any specific plasma physics or engineering constraints..."
              required
              rows={5}
              className={`${inputClass('requirements')} resize-none`}
            />
          </div>

          {/* Security notice */}
          <div className="flex items-start gap-3 border border-[#1f1f1f] px-4 py-3 bg-[#0a0a0a]">
            <ShieldAlert className="w-3.5 h-3.5 text-neutral-600 mt-0.5 shrink-0" />
            <p className="font-mono text-[9px] text-neutral-700 leading-relaxed">
              ALL TRANSMISSIONS ARE END-TO-END ENCRYPTED USING AES-256-GCM. THIS TERMINAL OPERATES UNDER IAEA SAFEGUARDS PROTOCOL AND ITER INTERNATIONAL AGREEMENT ARTICLE XIV. UNAUTHORIZED ACCESS IS PROHIBITED UNDER INTERNATIONAL NUCLEAR LAW.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 border border-white text-white font-mono text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            Transmit Grid Request
          </button>
        </div>
      </div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest text-center mt-3">
        IGNITION DYNAMICS CORP. // GRID OPERATIONS // SECTOR 7 COMMAND
      </p>
    </form>
  );
}
