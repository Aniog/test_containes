import { Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Facts', href: '#facts' },
];

export default function Footer() {
  return (
    <footer className="bg-cosmos-dark border-t border-cosmos-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cosmos-teal/20 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cosmos-teal" />
              </div>
              <span className="text-cosmos-light font-bold text-lg">MicroCosmos</span>
            </div>
            <p className="text-cosmos-muted text-sm leading-relaxed">
              Exploring the invisible universe that surrounds us — one microscopic wonder at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cosmos-light font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="text-cosmos-light font-semibold mb-4 text-sm uppercase tracking-widest">Perspective</h4>
            <blockquote className="border-l-2 border-cosmos-teal pl-4">
              <p className="text-cosmos-muted text-sm leading-relaxed italic">
                "The world is full of magical things patiently waiting for our wits to grow sharper."
              </p>
              <cite className="text-cosmos-teal text-xs mt-2 block not-italic">— Bertrand Russell</cite>
            </blockquote>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cosmos-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cosmos-muted text-xs">
            © {new Date().getFullYear()} MicroCosmos. A journey into the invisible world.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
            <span className="text-cosmos-muted text-xs">Exploring the micro universe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
