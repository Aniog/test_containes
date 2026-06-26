import {
  Search,
  ShieldCheck,
  Handshake,
  Package,
  ClipboardCheck,
  CalendarClock,
  Ship,
  Tag,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Languages,
  BadgeDollarSign,
  Truck,
} from "lucide-react";

const map = {
  Search,
  ShieldCheck,
  Handshake,
  Package,
  ClipboardCheck,
  CalendarClock,
  Ship,
  Tag,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Languages,
  BadgeDollarSign,
  Truck,
};

export default function Icon({ name, className }) {
  const Cmp = map[name] || Package;
  return <Cmp className={className} />;
}
