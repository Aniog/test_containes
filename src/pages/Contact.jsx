import { BookOpen, Clock, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const labInfo = [
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri, 09:00–17:00',
    sub: 'Response within 48 hours',
  },
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'lab@microcosmos.edu',
    sub: 'For urgent specimen queries',
  },
  {
    icon: MapPin,
    label: 'Laboratory',
    value: 'Life Sciences Building, Room 204',
    sub: 'Microscopy Suite — Level 2',
  },
];

export default function Contact() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 bg-charcoal border-b border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-bio-orange" strokeWidth={1.5} />
            <span className="font-mono-lab text-bio-orange text-xs tracking-widest uppercase">
              Lab Notes & Feedback
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-primary-text text-4xl md:text-5xl mb-4">
            Submit Your Observations
          </h1>
          <p className="font-inter text-secondary-text text-base max-w-2xl leading-relaxed">
            Document your microscopic findings, request specific slide preparations, or
            pose questions about specimen morphology and staining protocols. Scientific
            inquiry begins with careful observation.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 bg-obsidian relative overflow-hidden">
        {/* Background decorative — micrometer grid */}
        <div
          className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at bottom right, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at bottom right, black 0%, transparent 70%)',
          }}
        />

        {/* Decorative microscope objective outline */}
        <div className="absolute bottom-8 right-8 opacity-5 pointer-events-none hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="#10B981" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" stroke="#10B981" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" stroke="#10B981" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="30" stroke="#10B981" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="10" stroke="#10B981" strokeWidth="1" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#10B981" strokeWidth="0.3" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="#10B981" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Lab info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-grotesk font-semibold text-primary-text text-xl mb-2">
                  Laboratory Contact
                </h2>
                <p className="font-inter text-secondary-text text-sm leading-relaxed">
                  The MicroCosmos platform is maintained by the Department of Cell Biology
                  and Microscopy. All submissions are reviewed by qualified instructors.
                </p>
              </div>

              <div className="w-12 h-px bg-bio-orange" />

              {labInfo.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-bio-orange/10 border border-bio-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-bio-orange" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-1">
                      {label}
                    </div>
                    <div className="font-inter text-primary-text text-sm font-medium">{value}</div>
                    <div className="font-inter text-secondary-text text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}

              {/* Guidelines */}
              <div className="p-4 bg-card-dark border border-subtle rounded-sm mt-6">
                <h4 className="font-grotesk font-semibold text-primary-text text-sm mb-3">
                  Observation Guidelines
                </h4>
                <ul className="space-y-2">
                  {[
                    'Include specimen name and preparation method',
                    'State magnification and illumination type',
                    'Describe cellular structures using correct terminology',
                    'Note any deviations from expected morphology',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bio-green mt-1.5 flex-shrink-0" />
                      <span className="font-inter text-secondary-text text-xs leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-card-dark border border-subtle rounded-sm p-8">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-subtle">
                  <div className="w-2 h-2 rounded-full bg-bio-green animate-pulse" />
                  <span className="font-mono-lab text-xs text-bio-green tracking-widest uppercase">
                    Observation Submission Form
                  </span>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
