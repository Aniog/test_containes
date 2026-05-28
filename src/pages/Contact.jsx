import ContactForm from '../components/contact/ContactForm';

/* Tokamak schematic SVG — subtle background decoration */
function TokamakSchematic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute bottom-0 right-0 w-64 md:w-96 opacity-[0.04] pointer-events-none"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
    >
      {/* Outer vessel */}
      <ellipse cx="200" cy="200" rx="180" ry="140" />
      <ellipse cx="200" cy="200" rx="160" ry="120" />
      {/* Plasma boundary */}
      <ellipse cx="200" cy="200" rx="100" ry="80" />
      <ellipse cx="200" cy="200" rx="80" ry="60" />
      {/* Magnetic field lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 200 + 100 * Math.cos(rad);
        const y1 = 200 + 80 * Math.sin(rad);
        const x2 = 200 + 160 * Math.cos(rad);
        const y2 = 200 + 120 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {/* Polar coordinate grid */}
      {[40, 80, 120, 160].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} strokeDasharray="2 4" />
      ))}
      {/* Divertor */}
      <path d="M 200 340 Q 240 360 280 340" />
      <path d="M 200 340 Q 160 360 120 340" />
      {/* Center cross */}
      <line x1="200" y1="180" x2="200" y2="220" />
      <line x1="180" y1="200" x2="220" y2="200" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#050505] pt-24 md:pt-32 min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#262626] px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-4">
            — Grid Request & Inquiries
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">
                GRID<br />REQUEST
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-[#555555] text-sm leading-relaxed">
                For global grid operators, research institutes, and governments seeking power allocation or collaborative infrastructure deployment. All transmissions are encrypted and reviewed by senior fusion deployment engineers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4">
        {/* Left sidebar */}
        <div className="lg:col-span-1 border-r border-[#262626] px-8 py-12 hidden lg:block">
          <div className="sticky top-32 space-y-10">
            <div>
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">Contact Channels</div>
              <div className="space-y-4">
                {[
                  { label: 'Secure Email', value: 'fusion-ops@ignition.io' },
                  { label: 'Emergency Line', value: '+1 (800) IGN-FUSE' },
                  { label: 'ITER Liaison', value: 'iter.ignition.io' },
                  { label: 'HQ Location', value: 'Geneva, Switzerland' },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-[#1f1f1f] pb-4">
                    <div className="font-mono text-[8px] text-[#555555] tracking-widest uppercase">{label}</div>
                    <div className="font-mono text-xs text-white mt-1">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">Response SLA</div>
              <div className="border border-[#262626] p-4">
                <div className="font-mono text-[8px] text-[#555555] uppercase mb-1">Standard</div>
                <div className="font-mono text-sm text-white font-bold">48 Hours</div>
                <div className="font-mono text-[8px] text-[#555555] uppercase mt-3 mb-1">Priority (Gov.)</div>
                <div className="font-mono text-sm text-white font-bold">6 Hours</div>
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-4">Certifications</div>
              <div className="space-y-2">
                {['IAEA Safeguards', 'ISO 19443', 'ITER Partner', 'NRC Licensed', 'EURATOM'].map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#555555]" />
                    <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form area */}
        <div className="lg:col-span-3 relative overflow-hidden">
          <TokamakSchematic />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
