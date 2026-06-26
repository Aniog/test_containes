import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Handshake,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Globe,
  Package,
  Truck,
  Clock,
} from 'lucide-react'

const icons = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Handshake,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Globe,
  Package,
  Truck,
  Clock,
}

export function Icon({ name, className }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component className={className} aria-hidden="true" />
}
