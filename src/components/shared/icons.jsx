import {
  Search,
  BadgeCheck,
  Package,
  ClipboardCheck,
  GanttChartSquare,
  Ship,
  MapPin,
  ShieldCheck,
  FileText,
  CircleDollarSign,
  Languages,
  Clock,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react"

const map = {
  search: Search,
  badgeCheck: BadgeCheck,
  package: Package,
  clipboardCheck: ClipboardCheck,
  gantt: GanttChartSquare,
  ship: Ship,
  mapPin: MapPin,
  shieldCheck: ShieldCheck,
  fileText: FileText,
  circleDollar: CircleDollarSign,
  languages: Languages,
  clock: Clock,
  arrowRight: ArrowRight,
  check: CheckCircle2,
  quote: Quote,
}

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.75 }) {
  const Comp = map[name] || Search
  return <Comp className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}