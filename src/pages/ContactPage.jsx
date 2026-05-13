import { Mail, MapPin, Clock, Telescope } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1600&q=80"
            alt="Radio telescope"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 to-[#0B0F19]" />
        </div>

        {/* Decorative signal wave */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
            {[40, 80, 120, 160, 200].map((r, i) => (
              <circle
                key={r}
                cx="380"
                cy="280"
                r={r}
                stroke="#F59E0B"
                strokeWidth="1"
                opacity={1 - i * 0.15}
              />
            ))}
            <line x1="340" y1="240" x2="380" y2="280" stroke="#F59E0B" strokeWidth="2" />
            <line x1="380" y1="280" x2="360" y2="200" stroke="#F59E0B" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Contact & Feedback
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-50 tracking-tight mb-6 max-w-3xl">
            Transmit Your
            <br />
            <span className="text-amber-400">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Curiosity is the engine of discovery. Send your questions, observations,
            and feedback — every signal received will be answered.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info Panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-light text-gray-50 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This form connects you directly with your physics teacher.
                  Whether you have a question about stellar evolution, want to
                  discuss a concept from the gallery, or simply want to share
                  your thoughts — we're listening.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'teacher@school.edu',
                    sub: 'Responses within 24 hours',
                  },
                  {
                    icon: MapPin,
                    label: 'Department',
                    value: 'Physics Department',
                    sub: 'Room 204, Science Building',
                  },
                  {
                    icon: Clock,
                    label: 'Office Hours',
                    value: 'Mon–Fri, 3:00–5:00 PM',
                    sub: 'Or by appointment',
                  },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#111827] border border-gray-800"
                  >
                    <div className="w-9 h-9 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="text-gray-100 text-sm font-medium">{value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="p-5 rounded-xl bg-[#111827] border border-indigo-400/20">
                <div className="flex items-start gap-3">
                  <Telescope className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "The important thing is not to stop questioning. Curiosity
                      has its own reason for existing."
                    </p>
                    <p className="text-indigo-400 text-xs mt-2 tracking-wide">
                      — Albert Einstein
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-[#111827] rounded-2xl border border-gray-800 p-8 md:p-10 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                  <svg viewBox="0 0 128 128" fill="none" className="w-full h-full">
                    {[20, 40, 60, 80, 100].map((r) => (
                      <circle key={r} cx="128" cy="0" r={r} stroke="#F59E0B" strokeWidth="0.8" />
                    ))}
                  </svg>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-light text-gray-50 mb-2">
                    Student Feedback Form
                  </h3>
                  <p className="text-gray-500 text-sm">
                    All fields marked are required. Your message will be transmitted
                    securely to your teacher.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
