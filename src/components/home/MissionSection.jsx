import { useNavigate } from 'react-router-dom';

export default function MissionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-space-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cosmic-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-cosmic-violet text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-cosmic-violet/50" />
              Our Mission
            </div>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-star-white mb-6 leading-tight">
              When We Leave,
              <br />
              <span className="text-cosmic-violet">We Take Everything</span>
            </h2>
            <p className="text-star-dim text-base leading-relaxed mb-6">
              In 2051, the Interstellar Migration Initiative began the largest archival project in human history. As the first colony ships prepare to carry humanity to new worlds, we are ensuring that no memory — no matter how small — is left behind.
            </p>
            <p className="text-star-dim text-base leading-relaxed mb-8">
              A grandmother's recipe. A child's first snow. The sound of bells after a war. These are not small things. These are the substance of what it means to be human. We are carrying them to the stars.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="border border-cosmic-violet/40 text-cosmic-violet hover:bg-cosmic-violet/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 font-space text-sm"
            >
              Learn About the Initiative →
            </button>
          </div>

          {/* Stats panel */}
          <div className="space-y-4">
            {[
              {
                number: '2051',
                label: 'Year the archive was founded',
                color: 'cosmic-blue',
                hex: '#4a9eff',
              },
              {
                number: '847',
                label: 'Languages represented in the archive',
                color: 'cosmic-violet',
                hex: '#9b6dff',
              },
              {
                number: '12,000+',
                label: 'Years of human history documented',
                color: 'cosmic-amber',
                hex: '#ffb347',
              },
              {
                number: '3',
                label: 'Colony ships carrying the archive',
                color: 'cosmic-teal',
                hex: '#2dd4bf',
              },
            ].map(item => (
              <div
                key={item.label}
                className="flex items-center gap-5 bg-space-navy border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-200"
              >
                <div
                  className="text-3xl font-bold font-space shrink-0 w-28 text-right"
                  style={{ color: item.hex }}
                >
                  {item.number}
                </div>
                <div className="text-star-dim text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
