import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="bg-cosmos-950 py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nebula-500/20 border border-nebula-500/30 mb-8">
          <Rocket className="w-7 h-7 text-nebula-300" />
        </div>
        <h2 className="font-cinzel text-3xl md:text-5xl text-text-primary font-bold mb-6 leading-tight">
          Your Memory Belongs<br />
          <span className="bg-gradient-to-r from-nebula-300 to-aurora-300 bg-clip-text text-transparent">
            Among the Stars
          </span>
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          The migration begins in 2047. Every memory submitted before departure will be
          encoded into the Archive Crystal and carried aboard all twelve colony ships.
          Your story will travel farther than any human has ever gone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/submit"
            className="bg-nebula-500 hover:bg-nebula-400 text-white rounded-full px-8 py-4 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-nebula-500/30"
          >
            Submit Your Memory
          </Link>
          <Link
            to="/explore"
            className="border border-nebula-500/40 hover:border-nebula-400 text-nebula-300 hover:text-nebula-200 rounded-full px-8 py-4 font-semibold text-base transition-all duration-300"
          >
            Explore the Archive
          </Link>
        </div>
        <p className="font-mono text-xs text-text-muted mt-8 uppercase tracking-widest">
          Departure: 2047 · Destination: Kepler-452b · Distance: 1,400 light-years
        </p>
      </div>
    </section>
  );
}
