import {
  Search, ShieldCheck, ClipboardCheck, Activity, Ship, FileText,
  AlertTriangle, PackageX, Clock, Languages, Truck, FileQuestion,
  MapPin, Users, Building2, Camera, BadgeCheck, Lock,
  ArrowRight, CheckCircle2, Phone, Mail, MessageCircle, MapPinned,
  Menu, X, ChevronDown, Factory, Container, Boxes, Globe2,
  TrendingDown, Timer, Wallet, ShieldAlert, PackageCheck, ShipWheel,
} from 'lucide-react'

const icons = {
  Search, ShieldCheck, ClipboardCheck, Activity, Ship, FileText,
  AlertTriangle, PackageX, Clock, Languages, Truck, FileQuestion,
  MapPin, Users, Building2, Camera, BadgeCheck, Lock,
  ArrowRight, CheckCircle2, Phone, Mail, MessageCircle, MapPinned,
  Menu, X, ChevronDown, Factory, Container, Boxes, Globe2,
  TrendingDown, Timer, Wallet, ShieldAlert, PackageCheck, ShipWheel,
}

export default function Icon({ name, className }) {
  const Cmp = icons[name] || Search
  return <Cmp className={className} />
}
