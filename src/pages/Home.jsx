import HeroSection from '../components/home/HeroSection'
import FeaturedMemories from '../components/home/FeaturedMemories'
import StatsSection from '../components/home/StatsSection'

export default function Home() {
  return (
    <div className="bg-cosmos">
      <HeroSection />
      <FeaturedMemories />
      <StatsSection />

      {/* Call to action banner */}
      <section className="py-24 px-4 bg-cosmos">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-aurora/30 bg-aurora/5 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora-glow opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-cinzel text-3xl md:text-4xl text-starlight mb-4">
                Your Memory Belongs Here
              </h2>
              <p className="text-moonlight mb-8 max-w-lg mx-auto">
                The archive is only as complete as the lives it contains. Every memory — no matter how small — is a thread in the fabric of humanity.
              </p>
              <a
                href="/submit"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-aurora hover:bg-aurora-light text-white font-semibold transition-all duration-200 shadow-lg shadow-aurora/30 hover:shadow-aurora/50 hover:scale-105"
              >
                Add Your Memory
                <span>✦</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
