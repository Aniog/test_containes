import {
  Search,
  ShieldCheck,
  Package,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

const iconMap = {
  Search,
  ShieldCheck,
  Package,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  CheckCircle2,
  AlertCircle,
}

export default function Icon({ name, className = "h-6 w-6" }) {
  const Component = iconMap[name] || ShieldCheck
  return <Component className={className} aria-hidden="true" />
}
