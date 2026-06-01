import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, Eye, Users, GitBranch } from 'lucide-react'
import { featuredDiscoveries, investigations, paradoxReports, artifacts } from '@/data/artifacts'

function SectionHeader({ title, subtitle, icon: Icon }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 rounded-lg bg-archive-glow/10 border border-archive-glow/20">
        <Icon className="w-5 h-5 text-archive-glow" />
      </div>
      <div>
        <h2 className="font-cinzel text-2xl lg:text-3xl font-bold text-archive-text">{title}</h2>
        <p className="text-sm text-archive-muted mt-0.5">{subtitle}</p>
      </div>
    </div>
  )
}

function DiscoveryCard({ discovery }) {
  const priorityColors = {
    Critical: 'text-archive-rose border-archive-rose/30 bg-archive-rose/10',
    High: 'text-archive-amber border-archive-amber/30 bg-archive-amber/10',
    Maximum: 'text-archive-purple border-archive-purple/30 bg-archive-purple/10',
  }

  return (
    <div className="glass-panel-hover p-6">
      <div className="flex items-start justify-between mb-3">
        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase border ${priorityColors[discovery.priority] || 'text-archive-muted'}`}>
          {discovery.priority}
        </span>
        <span className="font-mono text-[10px] text-archive-muted">{discovery.date}</span>
      </div>
      <h3 className="font-cinzel text-lg font-semibold text-archive-text mb-2">{discovery.title}</h3>
      <p className="text-sm text-archive-muted leading-relaxed mb-4">{discovery.description}</p>
      <div className="flex items-center gap-2 text-xs text-archive-glow/70">
        <Users className="w-3 h-3" />
        <span className="font-mono">{discovery.assignedTeam}</span>
      </div>
    </div>
  )
}

function InvestigationCard({ investigation }) {
  return (
    <div className="glass-panel-hover p-5 flex items-center gap-4">
      <div className={`w-2 h-2 rounded-full ${investigation.status === 'Active' ? 'bg-archive-emerald animate-pulse' : 'bg-archive-amber'}`} />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-archive-text text-sm truncate">{investigation.title}</h4>
        <p className="text-xs text-archive-muted mt-0.5 truncate">{investigation.description}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <div className="text-center">
          <div className="font-mono text-sm text-archive-glow">{investigation.agents}</div>
          <div className="text-[9px] text-archive-muted uppercase">Agents</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-sm text-archive-purple">{investigation.timelinesBranches}</div>
          <div className="text-[9px] text-archive-muted uppercase">Branches</div>
        </div>
      </div>
    </div>
  )
}

function ParadoxCard({ report }) {
  const severityColors = {
    Critical: 'border-l-archive-rose',
    High: 'border-l-archive-amber',
    Medium: 'border-l-archive-purple',
  }

  return (
    <div className={`glass-panel p-4 border-l-2 ${severityColors[report.severity] || 'border-l-archive-muted'}`}>
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className={`w-3.5 h-3.5 ${report.severity === 'Critical' ? 'text-archive-rose' : 'text-archive-amber'}`} />
        <span className="font-mono text-[10px] text-archive-muted uppercase">{report.severity}</span>
      </div>
      <h4 className="text-sm font-medium text-archive-text mb-1">{report.title}</h4>
      <p className="text-xs text-archive-muted leading-relaxed">{report.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-[10px] text-archive-glow/60">{report.timeline}</span>
        <span className={`text-[10px] font-mono ${report.resolution === 'Unresolvable' ? 'text-archive-rose' : 'text-archive-muted'}`}>
          {report.resolution}
        </span>
      </div>
    </div>
  )
}

function RecentArtifacts() {
  const recent = artifacts.slice(0, 6)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recent.map((artifact) => (
        <Link
          key={artifact.id}
          to={`/archive/${artifact.id}`}
          className="glass-panel-hover p-5 no-underline group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] text-archive-glow/60">{artifact.id}</span>
            <span className={`w-2 h-2 rounded-full ${
              artifact.stability === 'Stable' ? 'bg-archive-emerald' :
              artifact.stability === 'Critical' ? 'bg-archive-rose animate-pulse' :
              'bg-archive-amber'
            }`} />
          </div>
          <h4 className="font-cinzel text-sm font-semibold text-archive-text group-hover:text-archive-glow transition-colors mb-2">
            {artifact.name}
          </h4>
          <div className="flex items-center gap-2 text-[10px] text-archive-muted font-mono">
            <span>{artifact.era}</span>
            <span>•</span>
            <span>{artifact.dimension}</span>
          </div>
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${
                  i < artifact.riskLevel
                    ? artifact.riskLevel > 7 ? 'bg-archive-rose' : artifact.riskLevel > 4 ? 'bg-archive-amber' : 'bg-archive-emerald'
                    : 'bg-archive-border'
                }`}
              />
            ))}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function HomeSections() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Featured Discoveries */}
      <section className="py-16 lg:py-24">
        <SectionHeader
          title="Featured Discoveries"
          subtitle="Priority findings requiring immediate attention"
          icon={Eye}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDiscoveries.map((d) => (
            <DiscoveryCard key={d.id} discovery={d} />
          ))}
        </div>
      </section>

      {/* Active Investigations */}
      <section className="py-16 lg:py-24 border-t border-archive-border/20">
        <SectionHeader
          title="Active Investigations"
          subtitle="Ongoing operations across multiple timelines"
          icon={GitBranch}
        />
        <div className="space-y-3">
          {investigations.map((inv) => (
            <InvestigationCard key={inv.id} investigation={inv} />
          ))}
        </div>
      </section>

      {/* Paradox Reports */}
      <section className="py-16 lg:py-24 border-t border-archive-border/20">
        <SectionHeader
          title="Paradox Reports"
          subtitle="Detected temporal anomalies and causal violations"
          icon={AlertTriangle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paradoxReports.map((pr) => (
            <ParadoxCard key={pr.id} report={pr} />
          ))}
        </div>
      </section>

      {/* Recently Recovered Artifacts */}
      <section className="py-16 lg:py-24 border-t border-archive-border/20">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Recently Recovered"
            subtitle="Latest artifacts added to the collection"
            icon={Eye}
          />
          <Link
            to="/archive"
            className="hidden sm:flex items-center gap-1 text-sm text-archive-glow hover:text-archive-glow/80 transition-colors no-underline"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <RecentArtifacts />
      </section>
    </div>
  )
}
