import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Package,
  Ship,
  Headphones,
  AlertTriangle,
  BadgeDollarSign,
  MessageSquareWarning,
  PackageX,
  SearchX,
  Truck,
  MapPin,
  Users,
  FileCheck,
  Banknote,
  Scale,
} from "lucide-react"

const ICONS = {
  search: Search,
  "shield-check": ShieldCheck,
  "clipboard-check": ClipboardCheck,
  package: Package,
  ship: Ship,
  headphones: Headphones,
  "alert-triangle": AlertTriangle,
  "badge-dollar-sign": BadgeDollarSign,
  "message-square-warning": MessageSquareWarning,
  "package-x": PackageX,
  "search-x": SearchX,
  truck: Truck,
  "map-pin": MapPin,
  users: Users,
  "file-check": FileCheck,
  banknote: Banknote,
  scale: Scale,
}

const Icon = ({ name, className = "w-6 h-6", strokeWidth = 1.75 }) => {
  const Comp = ICONS[name] || Search
  return <Comp className={className} strokeWidth={strokeWidth} />
}

export default Icon
