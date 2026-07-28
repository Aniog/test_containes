import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Handshake,
  Globe,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'

const icons = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Handshake,
  Globe,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  AlertTriangle,
}

export default function IconBox({ name, className = '', strokeWidth = 1.5 }) {
  const Icon = icons[name] || Search
  return <Icon className={className} strokeWidth={strokeWidth} />
}
