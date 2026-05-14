import ContactForm from '@/components/contact/ContactForm';
import { Mail, Clock, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lab@microcosmos.edu',
    sub: 'Response within 24–48 hours',
  },
  {
    icon: Clock,
    label: 'Lab Hours',
    value: 'Mon–Fri, 8:00–18:00',
    sub: 'Walk-in sessions available',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Biology Building, Room 204',
    sub: 'Microscopy Suite',
  },
];

export default function Contact() {
  return (
    <main className="pt-20 min-h-screen bg-obsidian">
      {/* Page header */}
      <div className="py-20 px-6 lg:px-8 bg-charcoal border-b border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-bio-green" />
            <span className="font-mono text-xs tracking-widest uppercase text-bio-green">
              Student Portal
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-5xl md:text-6xl text-slate-100 leading-tight mb-4">
            Lab Notes &<br />Feedback
          </h1>
          <p className="font-inter text-slate-400 text-lg max-w-xl leading-relaxed">
            Submit your microscopic observations, ask questions about specimens, or request specific slides for upcoming lab sessions.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: info + decorative */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact info cards */}
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal border border-subtle"
                  >
                    <div className="w-10 h-10 rounded-xl bg-bio-green/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-bio-green" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-grotesk font-semibold text-slate-100 text-sm">{item.value}</div>
                      <div className="font-inter text-xs text-slate-500 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                );
              })}

              {/* Decorative microscope SVG */}
              <div className="relative p-8 rounded-2xl bg-charcoal border border-subtle overflow-hidden">
                {/* Micrometer grid background */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="relative z-10">
                  {/* SVG microscope objective */}
                  <svg
                    viewBox="0 0 120 160"
                    className="w-24 h-32 mx-auto opacity-20 text-bio-green"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {/* Objective lens body */}
                    <rect x="45" y="10" width="30" height="60" rx="4" />
                    {/* Lens elements */}
                    <ellipse cx="60" cy="70" rx="15" ry="6" />
                    <ellipse cx="60" cy="80" rx="12" ry="5" />
                    <ellipse cx="60" cy="88" rx="9" ry="4" />
                    <ellipse cx="60" cy="95" rx="6" ry="3" />
                    {/* Tip */}
                    <line x1="60" y1="98" x2="60" y2="110" />
                    <ellipse cx="60" cy="112" rx="4" ry="2" />
                    {/* Mounting thread */}
                    <line x1="45" y1="20" x2="40" y2="20" />
                    <line x1="45" y1="25" x2="38" y2="25" />
                    <line x1="45" y1="30" x2="40" y2="30" />
                    <line x1="45" y1="35" x2="38" y2="35" />
                    <line x1="45" y1="40" x2="40" y2="40" />
                    {/* Scale bar */}
                    <line x1="20" y1="140" x2="100" y2="140" />
                    <line x1="20" y1="135" x2="20" y2="145" />
                    <line x1="60" y1="135" x2="60" y2="145" />
                    <line x1="100" y1="135" x2="100" y2="145" />
                  </svg>
                  <div className="text-center mt-2">
                    <span className="font-mono text-xs text-slate-600 tracking-widest uppercase">
                      Objective Lens — 100× Oil
                    </span>
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="p-5 rounded-2xl bg-charcoal border border-bio-green/20">
                <div className="font-mono text-xs text-bio-green tracking-widest uppercase mb-3">
                  Submission Guidelines
                </div>
                <ul className="space-y-2">
                  {[
                    'Include specimen name and magnification used',
                    'Describe what you observed, not what you expected',
                    'Note any staining technique applied',
                    'Attach sketches or photos if available',
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-bio-green mt-2 flex-shrink-0" />
                      <span className="font-inter text-xs text-slate-400 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-10 rounded-2xl bg-charcoal border border-subtle">
                <div className="mb-8">
                  <h2 className="font-grotesk font-bold text-2xl text-slate-100 mb-2">
                    Submit Your Report
                  </h2>
                  <p className="font-inter text-slate-400 text-sm">
                    All fields marked with <span className="text-bio-green">*</span> are required.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
