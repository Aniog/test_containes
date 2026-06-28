export function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center font-bold ${className}`}>
      <span className="text-[#2E2E2F]">strikingly</span>
      <span className="ml-1 bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent">
        AI
      </span>
    </span>
  )
}
