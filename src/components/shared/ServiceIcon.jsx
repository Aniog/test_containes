import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  CalendarClock,
  Truck,
  Package,
} from 'lucide-react'

const map = {
  search: Search,
  shield: ShieldCheck,
  clipboard: ClipboardCheck,
  calendar: CalendarClock,
  truck: Truck,
  package: Package,
}

export default function ServiceIcon({ name, className = '' }) {
  const Icon = map[name] || Search
  return <Icon className={className} strokeWidth={1.75} />
}