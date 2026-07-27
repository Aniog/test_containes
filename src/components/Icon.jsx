import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Lightbulb,
  AlertTriangle, XCircle, MessageSquareOff, Clock, Container, PackageOpen,
  Users, BadgeCheck, FileText, Scale, Languages, Route, CheckCircle2,
} from 'lucide-react'

const ICONS = {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Lightbulb,
  AlertTriangle, XCircle, MessageSquareOff, Clock, Container, PackageOpen,
  Users, BadgeCheck, FileText, Scale, Languages, Route, CheckCircle2,
}

export default function Icon({ name, className = 'w-6 h-6' }) {
  const Cmp = ICONS[name] || CheckCircle2
  return <Cmp className={className} />
}
