import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Globe, Layers, Shield, FileText, AlertTriangle, Bookmark } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import TimelineRisk from '@/components/shared/TimelineRisk'
import { artifacts } from '@/data/artifacts'

const ArtifactDetail = () => {
  const { id } = useParams()
  const artifact = artifacts.find((a) => a.id === id)

  if (!artifact) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-bold text-cyan/20 mb-4">404</p>
          <p className="text-white/60">Artifact not found in any known timeline</p>
          <Link to="/archive" className="mt-4 inline-block text-cyan text-sm hover:text-cyan/80">
            Return to Archive
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link to="/archive" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-cyan transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </Link>

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-cyan/60">{artifact.id}</span>
              <span className={`text-xs px-2 py-1 rounded border ${
                artifact.status === 'Quarantined' ? 'text-danger border-danger/30 bg-danger/10' :
                artifact.status === 'Missing' ? 'text-amber border-amber/30 bg-amber/10' :
                artifact.status === 'Under Investigation' ? 'text-cyan border-cyan/30 bg-cyan/10' :
                'text-white/50 border-white/10 bg-white/5'
              }`}>
                {artifact.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{artifact.name}</h1>
            <p className="text-white/60 leading-relaxed">{artifact.description}</p>

            <div className="mt-6">
              <TimelineRisk level={artifact.riskLevel} />
            </div>
          </div>

          {/* Artifact visual placeholder */}
          <div className="lg:w-80 shrink-0">
            <GlassPanel className="aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-cyan/20 flex items-center justify-center animate-pulse-glow">
                  <div className="w-20 h-20 rounded-full border border-cyan/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-cyan/20" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] font-mono text-cyan/40 text-center">HOLOGRAPHIC SCAN • CLASSIFIED</p>
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* Metadata grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetadataCard icon={Clock} label="Era" value={artifact.era} />
          <MetadataCard icon={Globe} label="Origin Dimension" value={artifact.dimension} />
          <MetadataCard icon={Layers} label="Stability" value={artifact.stability} />
          <MetadataCard icon={Shield} label="Containment Level" value={`Level ${artifact.containmentLevel}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Technical data */}
          <GlassPanel className="p-6 lg:col-span-2">
            <h3 className="text-sm font-semibold text-white/80 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan/60" />
              Technical Data
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <DataRow label="Date Recovered" value={artifact.dateRecovered} />
              <DataRow label="Clearance Required" value={artifact.clearanceRequired} />
              <DataRow label="Temporal Signature" value={artifact.temporalSignature} />
              <DataRow label="Dimensional Bleed" value={artifact.dimensionalBleed} />
              <DataRow label="Historical Significance" value={artifact.significance} />
              <DataRow label="Timeline Stability" value={artifact.stability} />
            </div>
          </GlassPanel>

          {/* Curator notes */}
          <GlassPanel className="p-6">
            <h3 className="text-sm font-semibold text-white/80 mb-4 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber/60" />
              Curator Notes
            </h3>
            <p className="text-sm text-white/50 leading-relaxed italic">"{artifact.curatorNote}"</p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-[10px] text-white/30 uppercase">Last Updated</p>
              <p className="text-xs text-white/50">{artifact.dateRecovered}</p>
            </div>
          </GlassPanel>
        </div>

        {/* Warning section for high-risk artifacts */}
        {(artifact.riskLevel === 'High' || artifact.riskLevel === 'Extreme') && (
          <GlassPanel className="p-6 mt-6 border-danger/20 bg-danger/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-danger mb-1">Temporal Hazard Warning</h4>
                <p className="text-sm text-white/50">
                  This artifact has been classified as {artifact.riskLevel} risk. Direct interaction without proper temporal shielding may result in timeline contamination, causal loops, or dimensional displacement. All personnel must maintain Level {artifact.containmentLevel} protocols.
                </p>
              </div>
            </div>
          </GlassPanel>
        )}
      </div>
    </div>
  )
}

const MetadataCard = ({ icon: Icon, label, value }) => (
  <GlassPanel className="p-4">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4 text-cyan/50" />
      <span className="text-[10px] text-white/30 uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-sm font-semibold text-white/80">{value}</p>
  </GlassPanel>
)

const DataRow = ({ label, value }) => (
  <div>
    <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1">{label}</p>
    <p className="text-sm text-white/70 font-mono">{value}</p>
  </div>
)

export default ArtifactDetail
