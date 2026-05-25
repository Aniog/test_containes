import ReactorDaedalus from '../components/reactors/ReactorDaedalus';
import ReactorHelios from '../components/reactors/ReactorHelios';
import ReactorMIF from '../components/reactors/ReactorMIF';

export default function Reactors() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#050505] border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
          <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase mb-4">
            Reactor Hub & Infrastructure
          </p>
          <h1 className="font-mono text-4xl md:text-5xl text-white uppercase font-light tracking-tight mb-6">
            Fusion Systems<br />Engineering
          </h1>
          <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
            Three distinct plasma confinement architectures, each optimized for a specific operational envelope. From steady-state tokamak burn to pulsed inertial ignition and cost-optimized magneto-inertial compression — the complete fusion technology portfolio.
          </p>
        </div>
      </div>

      <ReactorDaedalus />
      <ReactorHelios />
      <ReactorMIF />
    </>
  );
}
