import { useEffect, useRef } from 'react'
import { Shield, Wrench, ThumbsUp, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-gauge steel construction ensures decades of reliable operation in demanding environments.',
  },
  {
    icon: Wrench,
    title: 'Precision Engineering',
    desc: 'Every machine is calibrated to deliver accurate, repeatable folds with tight tolerances.',
  },
  {
    icon: ThumbsUp,
    title: 'User-Friendly Design',
    desc: 'Intuitive controls and clear setup procedures make operation straightforward for any skill level.',
  },
  {
    icon: Clock,
    title: 'Fast Setup & Changeover',
    desc: 'Quick-change tooling and adjustable back gauges minimize downtime between jobs.',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              About Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Crafting Machinery
              <br />
              That Lasts
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              At ARTITECT MACHINERY, we believe that precision and durability go
              hand in hand. Our double folding machines, sheet metal folders, and
              metal folding equipment are designed and manufactured to the highest
              standards — combining industrial strength with elegant, user-friendly
              operation.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Whether you&apos;re running a high-volume production line or a custom
              fabrication shop, our machines deliver the accuracy, reliability,
              and ease of use you need to stay ahead.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <f.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-navy">{f.title}</h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-200 shadow-sm">
              <img
                alt="ARTITECT MACHINERY workshop"
                data-strk-img-id="about-workshop-img-001"
                data-strk-img="industrial metalworking workshop precision machinery"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-navy text-warm-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-gold">25+</div>
              <div className="text-sm text-text-on-dark/70 mt-1">Years of<br />Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}