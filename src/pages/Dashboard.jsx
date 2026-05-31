import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { client, getRows, getSchemaData } from '@/api/db'
import { StatCard } from '@/components/ui/StatCard'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Crown, Sword, Coins, Handshake, TrendingUp, Users, Map, Star } from 'lucide-react'

const statusVariant = {
  rising: 'green',
  stable: 'blue',
  declining: 'amber',
  at_war: 'red',
  prosperous: 'gold',
}

const terrainEmoji = {
  plains: '🌾',
  mountains: '⛰️',
  forest: '🌲',
  desert: '🏜️',
  coastal: '🌊',
  tundra: '❄️',
  swamp: '🌿',
}

export default function Dashboard({ selectedKingdom, onSelectKingdom }) {
  const [kingdoms, setKingdoms] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchKingdoms = useCallback(async () => {
    setLoading(true)
    const { data: res, error } = await client
      .from('Kingdoms')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 49)
    if (!error) setKingdoms(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchKingdoms() }, [fetchKingdoms])

  const totalPrestige = kingdoms.reduce((s, k) => s + (getSchemaData(k).prestige || 0), 0)
  const totalPop = kingdoms.reduce((s, k) => s + (getSchemaData(k).population || 0), 0)
  const atWar = kingdoms.filter(k => getSchemaData(k).status === 'at_war').length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#f0ecff]">
            {selectedKingdom
              ? `Welcome back, ${getSchemaData(selectedKingdom).ruler_title || 'Ruler'}`
              : 'Realm Forge Dashboard'}
          </h1>
          <p className="text-[#9890b8] text-sm mt-1">
            {selectedKingdom
              ? `Managing the realm of ${getSchemaData(selectedKingdom).name || selectedKingdom.data?.name}`
              : 'Build and manage your fantasy kingdoms'}
          </p>
        </div>
        <Button onClick={() => navigate('/kingdoms')}>
          <Crown className="w-4 h-4" />
          {selectedKingdom ? 'Switch Kingdom' : 'Create Kingdom'}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="👑" label="Total Kingdoms" value={kingdoms.length} sub="across all realms" color="gold" />
        <StatCard icon="⚔️" label="At War" value={atWar} sub="active conflicts" color="red" />
        <StatCard icon="⭐" label="Total Prestige" value={totalPrestige.toLocaleString()} sub="combined glory" color="purple" />
        <StatCard icon="👥" label="Total Population" value={totalPop.toLocaleString()} sub="souls in all realms" color="green" />
      </div>

      {/* Selected Kingdom Quick Stats */}
      {selectedKingdom && (() => {
        const kd = getSchemaData(selectedKingdom)
        return (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{terrainEmoji[kd.terrain] || '🏰'}</span>
                <div>
                  <CardTitle>{kd.name}</CardTitle>
                  <p className="text-xs text-[#9890b8] mt-0.5">{kd.motto || 'No motto set'}</p>
                </div>
                <Badge variant={statusVariant[kd.status] || 'muted'} className="ml-auto capitalize">
                  {kd.status?.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-[#09080e] rounded-lg">
                  <p className="text-[#f0b830] font-bold text-lg">{(kd.population || 0).toLocaleString()}</p>
                  <p className="text-xs text-[#9890b8]">Population</p>
                </div>
                <div className="text-center p-3 bg-[#09080e] rounded-lg">
                  <p className="text-[#f0b830] font-bold text-lg">{kd.territory || 0}</p>
                  <p className="text-xs text-[#9890b8]">Territory (leagues)</p>
                </div>
                <div className="text-center p-3 bg-[#09080e] rounded-lg">
                  <p className="text-[#f0b830] font-bold text-lg">{kd.prestige || 0}</p>
                  <p className="text-xs text-[#9890b8]">Prestige</p>
                </div>
                <div className="text-center p-3 bg-[#09080e] rounded-lg">
                  <p className="text-[#f0b830] font-bold text-lg">{kd.age || 0}</p>
                  <p className="text-xs text-[#9890b8]">Years Old</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button size="sm" variant="secondary" onClick={() => navigate('/government')}>
                  <Crown className="w-3 h-3" /> Government
                </Button>
                <Button size="sm" variant="secondary" onClick={() => navigate('/economy')}>
                  <Coins className="w-3 h-3" /> Economy
                </Button>
                <Button size="sm" variant="secondary" onClick={() => navigate('/military')}>
                  <Sword className="w-3 h-3" /> Military
                </Button>
                <Button size="sm" variant="secondary" onClick={() => navigate('/diplomacy')}>
                  <Handshake className="w-3 h-3" /> Diplomacy
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })()}

      {/* All Kingdoms */}
      <div>
        <h2 className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold mb-4">
          All Kingdoms
        </h2>
        {loading ? (
          <div className="text-center py-12 text-[#9890b8]">Loading realms...</div>
        ) : kingdoms.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-4xl mb-3">🏰</p>
              <p className="text-[#f0ecff] font-semibold">No kingdoms yet</p>
              <p className="text-[#9890b8] text-sm mt-1 mb-4">Create your first kingdom to begin your reign</p>
              <Button onClick={() => navigate('/kingdoms')}>
                <Crown className="w-4 h-4" /> Create Kingdom
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kingdoms.map(k => {
              const kd = getSchemaData(k)
              const isSelected = selectedKingdom?.id === k.id
              return (
                <Card
                  key={k.id}
                  className={`cursor-pointer transition-all hover:border-[#f0b830]/50 ${isSelected ? 'border-[#f0b830]' : ''}`}
                  onClick={() => onSelectKingdom(k)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{terrainEmoji[kd.terrain] || '🏰'}</span>
                        <div>
                          <p className="text-[#f0ecff] font-semibold">{kd.name}</p>
                          <p className="text-xs text-[#9890b8] capitalize">{kd.terrain}</p>
                        </div>
                      </div>
                      <Badge variant={statusVariant[kd.status] || 'muted'} className="capitalize">
                        {kd.status?.replace('_', ' ')}
                      </Badge>
                    </div>
                    {kd.motto && (
                      <p className="text-xs text-[#5a5278] italic mb-3">"{kd.motto}"</p>
                    )}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-[#f0b830] font-bold text-sm">{(kd.population || 0).toLocaleString()}</p>
                        <p className="text-xs text-[#5a5278]">Pop.</p>
                      </div>
                      <div>
                        <p className="text-[#f0b830] font-bold text-sm">{kd.prestige || 0}</p>
                        <p className="text-xs text-[#5a5278]">Prestige</p>
                      </div>
                      <div>
                        <p className="text-[#f0b830] font-bold text-sm">{kd.territory || 0}</p>
                        <p className="text-xs text-[#5a5278]">Territory</p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-[#2e2650]">
                        <p className="text-xs text-[#f0b830] text-center font-medium">✓ Active Kingdom</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
