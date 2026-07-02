import { Link } from 'react-router-dom';

export default function Placeholder({ title, subtitle }) {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <h1 className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)] mb-3">{title}</h1>
        <p className="text-muted font-sans text-sm max-w-md mx-auto mb-8">{subtitle}</p>
        <Link
          to="/"
          className="inline-block border border-cream/20 hover:border-gold text-cream hover:text-gold font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-3 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
