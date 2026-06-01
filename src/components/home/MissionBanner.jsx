import { Link } from 'react-router-dom';

const MissionBanner = () => (
  <section className="py-24 px-6 bg-cosmos relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-aurora/5 via-memory/5 to-warmth/5 pointer-events-none" />

    <div className="max-w-4xl mx-auto text-center relative">
      <div className="text-warmth text-xs font-mono tracking-widest uppercase mb-6">
        ★ Our Mission
      </div>

      <blockquote className="font-cinzel text-2xl md:text-3xl text-starlight leading-relaxed mb-8">
        "We do not leave Earth behind.
        <br />
        <span className="gradient-text">We carry it with us.</span>
        <br />
        Every memory is a star we take into the dark."
      </blockquote>

      <p className="text-mist text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        The Memory Archive is humanity's greatest act of preservation. As we prepare
        for interstellar migration, we ensure that no story is lost, no voice silenced,
        no moment forgotten. This is our gift to the future — and our farewell to the past.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/about"
          className="bg-aurora text-void font-semibold px-8 py-4 rounded-lg hover:bg-aurora-glow transition-all duration-300 text-center"
        >
          Learn About the Initiative
        </Link>
        <Link
          to="/contribute"
          className="border border-memory/50 text-memory px-8 py-4 rounded-lg hover:bg-memory/10 transition-all duration-300 text-center"
        >
          Add Your Memory
        </Link>
      </div>
    </div>
  </section>
);

export default MissionBanner;
