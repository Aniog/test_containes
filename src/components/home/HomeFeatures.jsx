import { Ruler, ShieldCheck, Cog, Wrench } from 'lucide-react'
import Eyebrow from '@/components/Eyebrow'

const features = [
  {
    icon: Ruler,
    title: 'Sub-Millimetre Accuracy',
    description:
      'Hardened tooling and precision-ground beams hold tolerances within 0.1mm across the full working length.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last Generations',
    description:
      'Cast iron frames, bronze bearings, hand-fitted assemblies. The kind of machine an apprentice inherits.',
  },
  {
    icon: Cog,
    title: 'Quiet, Servo-Driven Control',
    description:
      'Whisper-quiet servomotors and tactile controls — engineered for long shifts in refined workshops.',
  },
  {
    icon: Wrench,
    title: 'Lifetime Service Network',
    description:
      'Field engineers in 38 countries, 48-hour spare parts dispatch, and a service archive going back to 1978.',
  },
]

const HomeFeatures = () => {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <Eyebrow className="mb-6">What Sets Us Apart</Eyebrow>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
            Engineering with a
            <br />
            <span className="italic text-brass">cabinetmaker&rsquo;s patience.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-mist border border-mist">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-ivory p-8 md:p-10 flex flex-col gap-5 hover:bg-bone transition-colors"
              >
                <div className="w-12 h-12 border border-brass flex items-center justify-center text-brass">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-xl text-ink leading-snug">
                  {f.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
