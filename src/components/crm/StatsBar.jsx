import { Users, TrendingUp, CheckCircle, XCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const STAT_CONFIGS = [
  {
    key: "total",
    label: "Total Leads",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    compute: (leads) => leads.length,
  },
  {
    key: "active",
    label: "Active Leads",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50",
    compute: (leads) => leads.filter((l) => !["Won", "Lost"].includes(l.status)).length,
  },
  {
    key: "won",
    label: "Won",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
    compute: (leads) => leads.filter((l) => l.status === "Won").length,
  },
  {
    key: "lost",
    label: "Lost",
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
    compute: (leads) => leads.filter((l) => l.status === "Lost").length,
  },
]

export default function StatsBar({ leads }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {STAT_CONFIGS.map(({ key, label, icon: Icon, color, bg, compute }) => (
        <Card key={key}>
          <CardContent className="p-5 flex items-center gap-4">
            <div className={`rounded-lg p-2.5 ${bg}`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{compute(leads)}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
