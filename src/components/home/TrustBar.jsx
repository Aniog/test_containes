import { trustHighlights } from '../../lib/store-data.js'

function TrustBar() {
  return (
    <div className="border-y border-velmora-line bg-velmora-mist">
      <div className="page-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center justify-center gap-3 text-xs uppercase tracking-overline text-velmora-espresso sm:gap-5">
          {trustHighlights.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span>{item}</span>
              {index < trustHighlights.length - 1 && <span className="text-velmora-taupe">·</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
