import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const problems = [
  {
    problem: 'Unreliable suppliers',
    solution: 'We verify factories on-site and check business licenses, certifications, and production history.',
  },
  {
    problem: 'Language & cultural barriers',
    solution: 'Bilingual team bridges communication gaps, negotiates clearly, and avoids costly misunderstandings.',
  },
  {
    problem: 'Quality not meeting standards',
    solution: 'Multiple inspection checkpoints — before, during, and after production — to ensure specifications are met.',
  },
  {
    problem: 'Hidden costs & price inflation',
    solution: 'Direct factory pricing with transparent cost breakdowns. No hidden commissions on top of supplier quotes.',
  },
  {
    problem: 'Late or missed deliveries',
    solution: 'Production timeline monitoring with weekly progress reports and proactive issue resolution.',
  },
  {
    problem: 'Complex shipping & customs',
    solution: 'Full logistics support from factory floor to your warehouse, including customs clearance and documentation.',
  },
]

export default function HomeProblems() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="problems-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="mt-4 text-gray-600 text-lg">
              Sourcing from China comes with real challenges. Here&apos;s how we eliminate them.
            </p>

            <div className="mt-8 space-y-5">
              {problems.map((item) => (
                <div key={item.problem} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 line-through">{item.problem}</p>
                    <p className="text-sm text-gray-700 mt-0.5">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="aspect-[4/3] rounded-xl overflow-hidden shadow-md"
            data-strk-bg-id="problems-image-5d1e9f"
            data-strk-bg="[problems-subtitle] [problems-heading]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="800"
          />
        </div>
      </div>
    </section>
  )
}