import { Link } from 'react-router-dom';
import { Microscope, FlaskConical, BookOpen, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Specimens', path: '/specimens' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Lab Notes', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-fog/60 bg-parchment/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full border border-ink/20 flex items-center justify-center">
                <Microscope className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-ink text-base font-semibold">
                Micro<span className="font-light italic">Cosmos</span>
              </span>
            </div>
            <p className="font-sans text-sm text-ash leading-relaxed max-w-xs">
              An educational platform dedicated to the observation and study of the microscopic world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-sans text-sm text-ash hover:text-ink transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <p className="section-label mb-4">Disciplines</p>
            <ul className="space-y-2">
              {[
                { icon: FlaskConical, label: 'Plant Histology' },
                { icon: BookOpen, label: 'Protistology' },
                { icon: Microscope, label: 'Human Cytology' },
                { icon: Mail, label: 'Contact Instructor' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-silver" strokeWidth={1.5} />
                  <span className="font-sans text-sm text-ash">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-fog/40 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-silver">
            © {new Date().getFullYear()} MicroCosmos Educational Platform
          </p>
          <p className="font-mono text-xs text-silver">
            Specimen Collection · Est. MMXXVI
          </p>
        </div>
      </div>
    </footer>
  );
}
