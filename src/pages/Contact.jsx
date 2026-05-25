import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="bg-[#050505] min-h-screen relative overflow-hidden">
      {/* Subtle polar grid background — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, transparent 20%, transparent 20%),
            repeating-conic-gradient(#ffffff 0deg, #ffffff 1deg, transparent 1deg, transparent 30deg)
          `,
          maskImage: 'radial-gradient(circle at bottom right, white 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom right, white 0%, transparent 70%)',
        }}
      />
      {/* Concentric circles */}
      <svg
        className="absolute bottom-0 right-0 w-[700px] h-[700px] opacity-[0.04] pointer-events-none"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[50, 100, 150, 200, 250, 300, 350].map(r => (
          <circle key={r} cx="700" cy="700" r={r} stroke="white" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x2 = 700 + Math.cos(angle) * 350;
          const y2 = 700 + Math.sin(angle) * 350;
          return <line key={i} x1="700" y1="700" x2={x2} y2={y2} stroke="white" strokeWidth="0.5" />;
        })}
      </svg>

      {/* Page header */}
      <div className="border-b border-[#262626] relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase mb-4">
                Grid Request & Inquiries
              </p>
              <h1 className="font-mono text-4xl md:text-5xl text-white uppercase font-light tracking-tight">
                Request Grid<br />Access
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-neutral-500 text-sm leading-relaxed">
                For global grid operators, research institutes, and governments seeking power allocation or collaborative infrastructure deployment at gigawatt scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form area */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
