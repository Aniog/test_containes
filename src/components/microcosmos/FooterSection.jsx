import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FooterSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <footer ref={containerRef} className="relative bg-cosmos-bg border-t border-cosmos-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cosmos-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-grotesk font-bold text-2xl text-cosmos-text mb-3">
              Micro<span className="text-cosmos-accent">Cosmos</span>
            </h3>
            <p className="text-cosmos-muted text-sm leading-relaxed mb-4">
              Exploring the hidden universe of microscopic life — where science meets wonder.
            </p>
            <div className="flex gap-3">
              {['Science', 'Biology', 'Microscopy'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-cosmos-dim border border-cosmos-border px-2 py-1 rounded-full font-grotesk"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-grotesk font-semibold text-cosmos-text text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Organisms', href: '#organisms' },
                { label: 'Techniques', href: '#techniques' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cosmos-muted text-sm hover:text-cosmos-accent transition-colors duration-200 font-grotesk"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="bg-cosmos-card border border-cosmos-border rounded-2xl p-5">
            <p className="text-cosmos-muted text-sm leading-relaxed italic mb-3">
              "The world is full of magical things patiently waiting for our wits to grow sharper."
            </p>
            <p className="text-cosmos-accent text-xs font-grotesk font-semibold">— Bertrand Russell</p>
          </div>
        </div>

        <div className="border-t border-cosmos-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cosmos-dim text-xs font-grotesk">
            © 2026 MicroCosmos. A journey into the invisible world.
          </p>
          <p className="text-cosmos-dim text-xs font-grotesk">
            All microscopy images are for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
