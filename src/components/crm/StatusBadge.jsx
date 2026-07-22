import { Badge } from "@/components/ui/badge"

const STATUS_CONFIG = {
  New: { variant: "info", label: "New" },
  Contacted: { variant: "warning", label: "Contacted" },
  Qualified: { variant: "default", label: "Qualified" },
  Proposal: { variant: "secondary", label: "Proposal" },
  Won: { variant: "success", label: "Won" },
  Lost: { variant: "destructive", label: "Lost" },
}

const BADGE_CLASSES = {
  info: "bg-blue-100 text-blue-700",
  warning: "bg-amber-100 text-amber-700",
  default: "bg-indigo-100 text-indigo-700",
  secondary: "bg-purple-100 text-purple-700",
  success: "bg-green-100 text-green-700",
  destructive: "bg-red-100 text-red-700",
}

export default function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || { label: status }
  const cls = BADGE_CLASSES[config.variant] || "bg-slate-100 text-slate-700"
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}`}>
      {config.label}
    </span>
  )
}

export { STATUS_CONFIG }
