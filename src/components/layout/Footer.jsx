import { Link } from 'react-router-dom';
import { Microscope, FlaskConical, BookOpen, Mail } from 'lucide-react';

const FOOTER_LINKS = [
  { path: '/', label: 'Observatory', icon: Microscope },
  { path: '/specimens', label: 'Specimen Hub', icon: FlaskConical },
  { path: '/gallery', label: 'Slide Gallery', icon: BookOpen },
  { path: '/contact', label: 'Lab Notes', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-silver/30 bg-parchment/80 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-ink" strokeWidth={1.5} />
              </div>
              <span className="font-playfair text-ink font-semibold text-lg">MicroCosmos</span>
            </div>
            <p className="text-ash text-sm leading-relaxed max-w-xs">
              An educational platform dedicated to the rigorous study of the microscopic world.
              Bridging classical histology with modern digital microscopy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono-data text-ash mb-4">Navigation</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 text-charcoal hover:text-ink text-sm transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 text-silver group-hover:text-ash transition-colors" strokeWidth={1.5} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic note */}
          <div>
            <h4 className="font-mono-data text-ash mb-4">Field Notes</h4>
            <p className="text-ash text-sm leading-relaxed">
              All specimens documented under controlled laboratory conditions.
              Magnification ranges from 40× to 1000× oil immersion.
            </p>
            <div className="mt-4 pt-4 border-t border-silver/30">
              <span className="font-mono-data text-silver">
                Catalogue Year: MMXXVI
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-silver/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-data text-silver text-xs">
            © 2026 MicroCosmos Educational Platform
          </p>
          <p className="font-mono-data text-silver text-xs">
            For Academic Use Only — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
