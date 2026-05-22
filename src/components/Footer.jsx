import { Link } from 'react-router-dom';
import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-parchment/10 border border-parchment/20 flex items-center justify-center">
                <Microscope className="w-3.5 h-3.5 text-parchment" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-base font-bold text-parchment">MicroCosmos</span>
            </div>
            <p className="font-sans text-xs text-silver/70 leading-relaxed max-w-xs">
              An academic platform for the rigorous study of biological microstructures.
              Department of Biological Sciences, Microscopy Unit.
            </p>
          </div>

          <div>
            <p className="label-caps text-silver/50 mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Specimen Hub', path: '/specimens' },
                { label: 'Slide Gallery', path: '/gallery' },
                { label: 'Lab Notes', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="font-sans text-xs text-silver/70 hover:text-parchment transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps text-silver/50 mb-4">Collection</p>
            <ul className="space-y-2">
              {['Plant Histology', 'Protists', 'Human Cytology', 'Archive Specimens'].map((item) => (
                <li key={item}>
                  <Link to="/specimens" className="font-sans text-xs text-silver/70 hover:text-parchment transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-parchment/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-silver/40">
            © 2026 MicroCosmos · Department of Biological Sciences
          </p>
          <p className="font-mono text-xs text-silver/40">
            CC BY 4.0 · Academic Use Permitted
          </p>
        </div>
      </div>
    </footer>
  );
}
