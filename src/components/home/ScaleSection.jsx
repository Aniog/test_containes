import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Dna } from 'lucide-react';

export default function ScaleSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 text-sm font-medium border border-cyan-900/50">
            <Dna className="w-4 h-4" />
            <span>Beyond the Visible</span>
          </div>
          
          <h2 id="scale-title" className="text-4xl font-bold text-white leading-tight">
            Understanding the true scale of microbiology
          </h2>
          
          <p id="scale-desc" className="text-lg text-slate-300">
            A single drop of pond water contains an entire ecosystem, bustling with predators, prey, and producers. To these organisms, a grain of sand is a mountain. By peering through the lens of a microscope, we uncover structures that seem almost alien—from the precise geometry of viruses to the mechanical behavior of cellular proteins.
          </p>
          
          <div className="pt-4 grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">1,000x</div>
              <p className="text-sm text-slate-400">Typical magnification needed to see bacteria clearly.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">100 Trillion</div>
              <p className="text-sm text-slate-400">Estimated microorganisms living in and on the human body.</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-slate-800">
          <img
            data-strk-img-id="scale-img-main"
            data-strk-img="[scale-desc] [scale-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Microbiology scale"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
