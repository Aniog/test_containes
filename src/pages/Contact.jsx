import { Link } from 'react-router-dom';
import { FlaskConical, ChevronRight, Clock, BookOpen, Microscope } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <main className="pt-16 min-h-screen bg-obsidian">
      {/* Page header */}
      <div className="bg-charcoal border-b border-border-dim">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex items-center gap-2 text-text-muted text-xs font-mono mb-6">
            <Link to="/" className="hover:text-bio-green transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text-secondary">Lab Notes</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FlaskConical className="w-6 h-6 text-bio-green" />
            <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
              Student Portal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Lab Notes & Feedback
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light">
            Submit your observation reports, request specific slide preparations, or pose questions about specimen identification and microscopy technique.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Sidebar info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Microscope vector decoration */}
            <div className="relative p-6 rounded-2xl border border-border-dim bg-charcoal overflow-hidden">
              {/* Background grid decoration */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Micrometer circle decoration */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-bio-green/8 opacity-60" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-bio-green/12 opacity-60" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-bio-green/10 flex items-center justify-center mb-4 border border-bio-green/20">
                  <Microscope className="w-5 h-5 text-bio-green" />
                </div>
                <h3 className="text-text-primary font-semibold text-base mb-2">Observation Reports</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Detailed observation reports are a core component of your laboratory assessment. Include specific structural observations, anomalies noted, and any questions arising from your practical session.
                </p>
              </div>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal border border-border-dim">
                <div className="w-8 h-8 rounded-lg bg-bio-cyan/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-bio-cyan" />
                </div>
                <div>
                  <div className="text-text-primary text-sm font-medium mb-1">Response Time</div>
                  <div className="text-text-secondary text-xs leading-relaxed">
                    Instructor feedback is provided within 48 hours during term time. Urgent queries may be directed to the department office.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal border border-border-dim">
                <div className="w-8 h-8 rounded-lg bg-bio-orange/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-bio-orange" />
                </div>
                <div>
                  <div className="text-text-primary text-sm font-medium mb-1">Slide Requests</div>
                  <div className="text-text-secondary text-xs leading-relaxed">
                    Request specific specimen preparations for your next practical session. Allow 5 working days for custom slide preparation.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="p-5 rounded-xl bg-charcoal border border-border-dim">
              <div className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-3">Quick Navigation</div>
              <div className="space-y-2">
                {[
                  { label: 'Plant Histology Specimens', to: '/specimens#plant', color: '#10B981' },
                  { label: 'Protists & Micro-Invertebrates', to: '/specimens#protists', color: '#06B6D4' },
                  { label: 'Human Cytology', to: '/specimens#cytology', color: '#F97316' },
                  { label: 'Slide Gallery', to: '/gallery', color: '#8B5CF6' },
                ].map(({ label, to, color }) => (
                  <Link
                    key={label}
                    to={to}
                    className="flex items-center gap-2.5 text-text-secondary text-xs hover:text-text-primary transition-colors py-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    {label}
                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-charcoal rounded-2xl border border-border-dim p-6 md:p-8">
              <div className="mb-6 pb-6 border-b border-border-dim">
                <h2 className="text-text-primary font-semibold text-lg mb-1">Submit Observation Report</h2>
                <p className="text-text-secondary text-sm">
                  All fields are required. Your report will be logged and reviewed by your assigned instructor.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
