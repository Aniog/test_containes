import { useEffect, useRef } from "react"
import { XCircle, CheckCircle } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import strkImgConfig from "@/strk-img-config.json"

const problems = [
  "Language barriers and slow responses",
  "Hard-to-verify factory credentials",
  "Inconsistent product quality",
  "Missed production deadlines",
  "Confusing shipping and customs paperwork",
]

const solutions = [
  "Bilingual team based in Shenzhen",
  "On-site audits and background checks",
  "Inspections at every critical stage",
  "Weekly production reports and milestone tracking",
  "Freight booking and export documentation handled",
]

export default function Problems() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-navy-900 text-white">
        <div className="container-site">
          <SectionHeader
            label="Why Buyers Choose Us"
            title="We solve real sourcing problems"
            description="Sourcing from China should not feel risky. We remove the common friction points that slow down overseas buyers."
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <img
                data-strk-img-id="problems-quality-inspection"
                data-strk-img="[section-title] [section-description]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection in a Chinese factory"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-navy-800 p-6">
                <h3 id="section-title" className="mb-4 flex items-center gap-2 text-lg font-bold text-red-400">
                  <XCircle className="h-5 w-5" /> Common problems
                </h3>
                <ul className="space-y-3 text-slate-300">
                  {problems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-blue-900/30 p-6">
                <h3 id="section-description" className="mb-4 flex items-center gap-2 text-lg font-bold text-green-400">
                  <CheckCircle className="h-5 w-5" /> How we fix them
                </h3>
                <ul className="space-y-3 text-slate-300">
                  {solutions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
